import type { Article } from "@/data/articles";

type WPPost = {
  id: number;
  date: string;
  slug: string;
  link: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  content: { rendered: string };
  _embedded?: {
    author?: Array<{ name: string }>;
    "wp:featuredmedia"?: Array<{ source_url?: string; alt_text?: string }>;
    "wp:term"?: Array<Array<{ name: string; taxonomy: string }>>;
  };
};

const stripHtml = (html: string) =>
  html
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?<\/style>/gi, "")
    .replace(/<[^>]*>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&#8217;|&rsquo;/g, "’")
    .replace(/&#8220;|&ldquo;/g, "“")
    .replace(/&#8221;|&rdquo;/g, "”")
    .replace(/\s+/g, " ")
    .trim();

const htmlToParagraphs = (html: string) => {
  const matches = [...html.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/gi)];
  const paragraphs = matches.map((match) => stripHtml(match[1])).filter(Boolean);
  return paragraphs.length ? paragraphs : [stripHtml(html)];
};

const wpBase = () => process.env.WORDPRESS_API_URL?.replace(/\/$/, "");

export async function getWordPressArticles(): Promise<Article[] | null> {
  const base = wpBase();
  if (!base) return null;

  try {
    const response = await fetch(`${base}/wp-json/wp/v2/posts?_embed=1&per_page=100`, {
      next: { revalidate: 300 }
    });

    if (!response.ok) return null;
    const posts = (await response.json()) as WPPost[];

    return posts.map((post) => {
      const category =
        post._embedded?.["wp:term"]
          ?.flat()
          .find((term) => term.taxonomy === "category")?.name || "Fashion";

      const image = post._embedded?.["wp:featuredmedia"]?.[0];

      return {
        slug: post.slug,
        title: stripHtml(post.title.rendered),
        kicker: category,
        dek: stripHtml(post.excerpt.rendered),
        category,
        author: post._embedded?.author?.[0]?.name || "Style Today",
        date: post.date.slice(0, 10),
        dateLabel: new Intl.DateTimeFormat("en-GB", {
          day: "numeric",
          month: "long",
          year: "numeric"
        }).format(new Date(post.date)),
        image: image?.source_url || "/images/she-poetry-in-textile.webp",
        imageAlt: image?.alt_text || stripHtml(post.title.rendered),
        body: htmlToParagraphs(post.content.rendered)
      };
    });
  } catch {
    return null;
  }
}
