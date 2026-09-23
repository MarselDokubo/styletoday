import Link from "next/link";
import { ArticleCard } from "@/components/ArticleCard";
import { Newsletter } from "@/components/Newsletter";
import { SectionHeader } from "@/components/SectionHeader";
import { getArticles } from "@/lib/content";

export default async function Home() {
  const articles = await getArticles();
  const lead = articles.find((article) => article.featured) ?? articles[0];
  const styleByNerd = articles.find((a) => a.slug === "style-by-nerd-where-ethos-meets-artistry") ?? articles[1];
  const kauna = articles.find((a) => a.slug === "kauna-collection-cultural-symphony") ?? articles[2];
  const business = articles.filter((a) => ["Business", "News", "Runway"].includes(a.category));
  const culture = articles.filter((a) => a.category === "Culture");
  const style = articles.filter((a) => ["Style", "Fashion"].includes(a.category));

  return (
    <main>
      <section className="page-shell hero-grid section-space">
        <aside className="hero-note">
          <span className="eyebrow">What You Need to Know</span>
          <h2>Style Today tracks fashion as culture, industry and living archive.</h2>
          <ul>
            <li>Designer stories and runway reporting.</li>
            <li>The business structures behind Nigerian fashion.</li>
            <li>Culture, identity and style beyond the clothes.</li>
          </ul>
          <Link className="text-link" href="/about">Read our editorial mission →</Link>
        </aside>

        <ArticleCard article={lead} variant="lead" />

        <aside className="hero-rail">
          <div className="rail-block">
            <span className="eyebrow">Editor&apos;s Lens</span>
            <h2>Ideas shaping the conversation</h2>
            {[styleByNerd, kauna].map((article) => (
              <ArticleCard key={article.slug} article={article} variant="compact" hideImage />
            ))}
          </div>
          <div className="rail-block most-read">
            <span className="eyebrow">Most Read</span>
            {articles.slice(0, 5).map((article, index) => (
              <Link className="ranked-story" href={`/article/${article.slug}`} key={article.slug}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{article.title}</strong>
              </Link>
            ))}
          </div>
        </aside>
      </section>

      <div className="ad-divider">
        <span>ADVERTISEMENT</span>
      </div>

      <section className="page-shell section-space">
        <SectionHeader title="The Business of Nigerian Fashion" href="/category/Business" eyebrow="Industry" />
        <div className="story-grid story-grid--business">
          {business.slice(0, 3).map((article, index) => (
            <ArticleCard key={article.slug} article={article} variant={index === 0 ? "horizontal" : "standard"} />
          ))}
        </div>
      </section>

      <section className="page-shell section-space split-feature">
        <div>
          <SectionHeader title="Culture in Motion" href="/category/Culture" eyebrow="Identity" />
          {culture[0] && <ArticleCard article={culture[0]} variant="horizontal" />}
        </div>
        <aside className="latest-column">
          <span className="eyebrow">Latest</span>
          {articles.slice(1, 6).map((article) => (
            <ArticleCard key={article.slug} article={article} variant="compact" hideImage />
          ))}
        </aside>
      </section>

      <div className="ad-divider">
        <span>ADVERTISEMENT</span>
      </div>

      <section className="page-shell section-space">
        <SectionHeader title="Fashion & Style" href="/category/Fashion" eyebrow="Wardrobe / Runway / Craft" />
        <div className="four-grid">
          {style.slice(0, 4).map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </section>

      <section className="visual-journal section-space">
        <div className="page-shell">
          <SectionHeader title="Visual Journal" eyebrow="Style Today Archive" />
        </div>
        <div className="visual-strip">
          {[
            ["/images/635182-jpg.webp", "SHE editorial portrait"],
            ["/images/whatsapp-image-2026-09-22-at-22-48-121.webp", "Runway look"],
            ["/images/643834-jpg.webp", "Beauty portrait"],
            ["/images/whatsapp-image-2026-09-22-at-22-48-204.webp", "Runway trio"],
            ["/images/whatsapp-image-2026-09-22-at-22-48-27.webp", "Red fashion portrait"]
          ].map(([src, alt]) => (
            <figure key={src}>
              <img src={src} alt={alt} loading="lazy" />
            </figure>
          ))}
        </div>
      </section>

      <section className="page-shell section-space insight-feature">
        <div className="insight-copy">
          <span className="eyebrow">Style Today Insights</span>
          <h2>We see it. We document it. We report it.</h2>
          <p>
            From the runway and garments to the business of fashion, Style Today documents the movements,
            moments and minds driving the industry forward.
          </p>
          <Link className="button-link" href="/about">About Style Today</Link>
        </div>
        <div className="insight-image">
          <img src="/images/whatsapp-image-2026-09-22-at-22-48-29.webp" alt="Style Today visual journal" />
        </div>
      </section>

      <section className="page-shell section-space">
        <Newsletter />
      </section>
    </main>
  );
}
