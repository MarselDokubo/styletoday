import Link from "next/link";
import type { Article } from "@/data/articles";

type Props = {
  article: Article;
  variant?: "standard" | "compact" | "horizontal" | "lead";
  hideImage?: boolean;
};

export function ArticleCard({ article, variant = "standard", hideImage = false }: Props) {
  return (
    <article className={`article-card article-card--${variant}`}>
      {!hideImage && (
        <Link className="article-card__image" href={`/article/${article.slug}`}>
          <img src={article.image} alt={article.imageAlt} loading={variant === "lead" ? "eager" : "lazy"} />
        </Link>
      )}
      <div className="article-card__body">
        <span className="eyebrow">{article.kicker}</span>
        <h3>
          <Link href={`/article/${article.slug}`}>{article.title}</Link>
        </h3>
        {variant !== "compact" && <p>{article.dek}</p>}
        <div className="byline">
          <span>{article.author}</span>
          <span>{article.dateLabel}</span>
        </div>
      </div>
    </article>
  );
}
