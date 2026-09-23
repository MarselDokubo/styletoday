import Link from "next/link";

export function SectionHeader({
  title,
  href,
  eyebrow
}: {
  title: string;
  href?: string;
  eyebrow?: string;
}) {
  return (
    <div className="section-header">
      <div>
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h2>{title}</h2>
      </div>
      {href && <Link href={href}>View all →</Link>}
    </div>
  );
}
