import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { articles as localArticles } from "@/data/articles";
import { getArticle, getArticles } from "@/lib/content";
import { ArticleCard } from "@/components/ArticleCard";

export async function generateStaticParams() {
  return localArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticle(slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.dek
  };
}

export default async function ArticlePage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = await getArticle(slug);
  if (!article) notFound();

  const all = await getArticles();
  const related = all.filter((item) => item.slug !== article.slug).slice(0, 3);

  return (
    <main>
      <article className="article-page page-shell">
        <header className="article-header">
          <Link className="eyebrow" href={`/category/${article.category}`}>{article.kicker}</Link>
          <h1>{article.title}</h1>
          <p className="article-dek">{article.dek}</p>
          <div className="article-meta">
            <strong>By {article.author}</strong>
            <span>{article.dateLabel}</span>
          </div>
        </header>

        <figure className="article-hero">
          <img src={article.image} alt={article.imageAlt} />
        </figure>

        <div className="article-layout">
          <aside className="share-rail">
            <span>Share</span>
            <a href="#" aria-label="Share on X">X</a>
            <a href="#" aria-label="Share on Instagram">IG</a>
            <a href="#" aria-label="Copy link">↗</a>
          </aside>

          <div className="article-copy">
            {article.quote && <blockquote>{article.quote}</blockquote>}
            {article.body.map((paragraph, index) =>
              paragraph.length < 46 && !/[.!?]$/.test(paragraph) ? (
                <h2 className="article-subhead" key={index}>{paragraph}</h2>
              ) : (
                <p key={index}>{paragraph}</p>
              )
            )}

            {article.portraitImage && (
              <figure className="article-inline-image">
                <img src={article.portraitImage} alt="" loading="lazy" />
              </figure>
            )}

            {article.gallery && article.gallery.length > 0 && (
              <section className="article-gallery" aria-label="More images from this story">
                {article.gallery.map((image, index) => (
                  <figure key={image.src} className={index === 0 ? "article-gallery__wide" : undefined}>
                    <img src={image.src} alt={image.alt} loading="lazy" />
                  </figure>
                ))}
              </section>
            )}

            {article.credits && (
              <section className="credits">
                <span className="eyebrow">Credits</span>
                {article.credits.map((credit) => (
                  <div key={`${credit.role}-${credit.name}`}>
                    <strong>{credit.role}</strong>
                    <span>{credit.name}</span>
                    {credit.handle && <em>{credit.handle}</em>}
                  </div>
                ))}
              </section>
            )}
          </div>

          <aside className="article-side-note">
            <span className="eyebrow">Style Today</span>
            <p>
              Observing and reporting the movement of fashion across people, brands, culture and ideas.
            </p>
          </aside>
        </div>
      </article>

      <section className="page-shell section-space more-stories">
        <div className="section-header">
          <h2>More from Style Today</h2>
        </div>
        <div className="three-grid">
          {related.map((item) => <ArticleCard key={item.slug} article={item} />)}
        </div>
      </section>
    </main>
  );
}
