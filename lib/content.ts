import { articles as localArticles } from "@/data/articles";
import { getWordPressArticles } from "@/lib/wordpress";

export async function getArticles() {
  const wordpress = await getWordPressArticles();
  return wordpress?.length ? wordpress : localArticles;
}

export async function getArticle(slug: string) {
  const all = await getArticles();
  return all.find((article) => article.slug === slug);
}
