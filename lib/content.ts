import { articles as localArticles } from "@/data/articles";
import { getWordPressArticles } from "@/lib/wordpress";

export async function getArticles() {
  const wordpress = await getWordPressArticles();

  if (!wordpress?.length) {
    return localArticles;
  }

  // Transition safely to WordPress: CMS posts take priority when a slug exists
  // in both places, while the existing local archive remains available until
  // every legacy story has been migrated into WordPress.
  const wordpressSlugs = new Set(wordpress.map((article) => article.slug));
  const localOnly = localArticles.filter((article) => !wordpressSlugs.has(article.slug));

  return [...wordpress, ...localOnly].sort((a, b) => b.date.localeCompare(a.date));
}

export async function getArticle(slug: string) {
  const all = await getArticles();
  return all.find((article) => article.slug === slug);
}
