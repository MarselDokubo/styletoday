import type { Article } from "@/data/articles";

type WPTerm = {
  name: string;
  taxonomy: string;
};

type WPPost = {
  id: number;
  date: string;
  slug: string;
  link: string;
  sticky?: boolean;
  title: { rendered: string };
  excerpt: { rendered: string };
  content: { rendered: string };
  _embedded?: {
    author?: Array<{ name: string }>;
    "wp:featuredmedia"?: Array<{ source_url?: string; alt_text?: string }>;
    "wp:term"?: Array<WPTerm[]>;
  };
};

const decodeHtml = (value: string) =>
  value
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&quot;/gi, '"')
    .replace(/&#039;|&apos;/gi, "'")
    .replace(/&#8217;|&rsquo;/gi, "’")
    .replace(/&#8220;|&ldquo;/gi, "“")
    .replace(/&#8221;|&rdquo;/gi, "”")
    .replace(/&#8211;|&ndash;/gi, "–")
    .replace(/&#8212;|&mdash;/gi, "—")
    .replace(/&#(\d+);/g, (_, code) => String.fromCharCode(Number(code)))
    .replace(/&#x([0-9a-f]+);/gi, (_, code) => String.fromCharCode(parseInt(code, 16)));

const stripHtml = (html: string) =>
  decodeHtml(
    html
      .replace(/<script[\s\S]*?<\/script>/gi, "")
      .replace(/<style[\s\S]*?<\/style>/gi, "")
      .replace(/<br\s*\/?>/gi, " ")
      .replace(/<[^>]*>/g, " ")
  )
    .replace(/\s+/g, " ")
    .trim();

const getAttribute = (tag: string, name: string) => {
  const match = tag.match(new RegExp(`\\b${name}=["']([^"']*)["']`, "i"));
  return match ? decodeHtml(match[1]) : "";
};

const htmlToContentBlocks = (html: string): NonNullable<Article["contentBlocks"]> => {
  const cleaned = html
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?<\/style>/gi, "");

  const tokens =
    cleaned.match(
      /<figure\b[\s\S]*?<\/figure>|<blockquote\b[\s\S]*?<\/blockquote>|<h[23]\b[\s\S]*?<\/h[23]>|<p\b[\s\S]*?<\/p>|<img\b[^>]*>/gi
    ) ?? [];

  const blocks: NonNullable<Article["contentBlocks"]> = [];

  for (const token of tokens) {
    if (/^<figure\b/i.test(token) || /^<img\b/i.test(token)) {
      const imgTag = token.match(/<img\b[^>]*>/i)?.[0] ?? token;
      const src = getAttribute(imgTag, "src");
      if (!src) continue;

      const alt = getAttribute(imgTag, "alt");
      const captionMatch = token.match(/<figcaption\b[^>]*>([\s\S]*?)<\/figcaption>/i);
      const caption = captionMatch ? stripHtml(captionMatch[1]) : "";

      blocks.push({
        type: "image",
        src,
        alt,
        ...(caption ? { caption } : {})
      });
      continue;
    }

    if (/^<h[23]\b/i.test(token)) {
      const text = stripHtml(token);
      if (text) blocks.push({ type: "heading", text });
      continue;
    }

    if (/^<blockquote\b/i.test(token)) {
      const text = stripHtml(token);
      if (text) blocks.push({ type: "quote", text });
      continue;
    }

    const text = stripHtml(token);
    if (text) blocks.push({ type: "paragraph", text });
  }

  if (blocks.length) return blocks;

  const fallback = stripHtml(cleaned);
  return fallback ? [{ type: "paragraph", text: fallback }] : [];
};

const wpBase = () => process.env.WORDPRESS_API_URL?.replace(/\/$/, "");

const mapPost = (post: WPPost): Article => {
  const category =
    post._embedded?.["wp:term"]
      ?.flat()
      .find((term) => term.taxonomy === "category")?.name || "Fashion";

  const image = post._embedded?.["wp:featuredmedia"]?.[0];
  const contentBlocks = htmlToContentBlocks(post.content.rendered);

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
    body: contentBlocks
      .filter((block) => block.type !== "image")
      .map((block) => block.text),
    contentBlocks,
    featured: Boolean(post.sticky)
  };
};

export async function getWordPressArticles(): Promise<Article[] | null> {
  const base = wpBase();
  if (!base) return null;

  try {
    const first = await fetch(
      `${base}/wp-json/wp/v2/posts?_embed=1&per_page=100&page=1`,
      { next: { revalidate: 60 } }
    );

    if (!first.ok) return null;

    const firstPosts = (await first.json()) as WPPost[];
    const totalPages = Math.max(1, Number(first.headers.get("x-wp-totalpages") || "1"));

    const remainingPages =
      totalPages > 1
        ? await Promise.all(
            Array.from({ length: totalPages - 1 }, (_, index) =>
              fetch(
                `${base}/wp-json/wp/v2/posts?_embed=1&per_page=100&page=${index + 2}`,
                { next: { revalidate: 60 } }
              )
            )
          )
        : [];

    const remainingPosts = (
      await Promise.all(
        remainingPages
          .filter((response) => response.ok)
          .map((response) => response.json() as Promise<WPPost[]>)
      )
    ).flat();

    return [...firstPosts, ...remainingPosts].map(mapPost);
  } catch {
    return null;
  }
}
