import { getArticles } from "@/lib/content";
import { ArticleCard } from "@/components/ArticleCard";

export const metadata = { title: "Search" };

export default async function SearchPage({
  searchParams
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q = "" } = await searchParams;
  const all = await getArticles();
  const term = q.trim().toLowerCase();
  const results = term
    ? all.filter((article) =>
        [article.title, article.dek, article.category, article.author]
          .join(" ")
          .toLowerCase()
          .includes(term)
      )
    : all;

  return (
    <main className="page-shell search-page">
      <header>
        <span className="eyebrow">Search Style Today</span>
        <h1>Find a story</h1>
        <form className="search-form">
          <input name="q" defaultValue={q} placeholder="Search fashion, people, culture…" />
          <button type="submit">Search</button>
        </form>
      </header>

      <div className="archive-grid">
        {results.map((article) => <ArticleCard key={article.slug} article={article} />)}
      </div>
    </main>
  );
}
