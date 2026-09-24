import Link from "next/link";

const nav = [
  ["Fashion", "/category/Fashion"],
  ["Business", "/category/Business"],
  ["Runway", "/category/Runway"],
  ["Culture", "/category/Culture"],
  ["Style", "/category/Style"],
  ["News", "/category/News"]
];

export function Header() {
  return (
    <>
<div className="utility-bar">
        <div className="page-shell utility-inner">
          <div className="utility-links">
            <Link href="/about">About</Link>
            <Link href="/category/Business">Business</Link>
            <Link href="/category/Culture">Culture</Link>
            <Link href="/about#contact">Contact</Link>
          </div>
          <div className="utility-links">
            <span className="live-dot" />
            <span>Style Today Nigeria</span>
          </div>
        </div>
      </div>

      <header className="site-header">
        <div className="page-shell logo-row">
          <Link href="/" className="wordmark" aria-label="Style Today Magazine home">
            <img
              src="/logo/Logo_Background.svg"
              alt="Style Today Magazine"
              className="site-logo-mark"
            />
          </Link>
        </div>

        <nav className="main-nav" aria-label="Primary">
          <div className="page-shell nav-inner">
            {nav.map(([label, href]) => (
              <Link key={label} href={href}>
                {label}
              </Link>
            ))}
          </div>
        </nav>

        <div className="membership-strip">
          <div className="page-shell membership-inner">
            <span>Style Today — observing and reporting the movement of fashion.</span>
            <Link href="/about">Discover our editorial mission</Link>
          </div>
        </div>
      </header>
    </>
  );
}
