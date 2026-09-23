import type { Metadata } from "next";
import { getArticles } from "@/lib/content";
import { ArticleCard } from "@/components/ArticleCard";

export async function generateMetadata({
  params
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await params;
  return { title: `${decodeURIComponent(category)} — Style Today` };
}

export default async function CategoryPage({
  params
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const label = decodeURIComponent(category);
  const all = await getArticles();
  const filtered = all.filter((article) => article.category.toLowerCase() === label.toLowerCase());

  return (
    <main className="page-shell archive-page">
      <header className="archive-header">
        <span className="eyebrow">Style Today</span>
        <h1>{label}</h1>
        <p>Reporting, analysis and visual stories from the Style Today archive.</p>
      </header>
      <div className="archive-grid">
        {(filtered.length ? filtered : all).map((article) => (
          <ArticleCard key={article.slug} article={article} />
        ))}
      </div>
    </main>
  );
}
