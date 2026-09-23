import Link from "next/link";

export function Footer() {
  return (
    <footer className="site-footer" id="contact">
      <div className="page-shell footer-grid">
        <div className="footer-brand">
          <img src="/logo/style-today-white.svg" alt="Style Today Magazine" />
          <p>
            We cover the people, brands, culture and ideas shaping what fashion is and what it becomes next.
          </p>
        </div>

        <div>
          <h3>Explore</h3>
          <Link href="/category/Fashion">Fashion</Link>
          <Link href="/category/Business">Business</Link>
          <Link href="/category/Culture">Culture</Link>
          <Link href="/category/Style">Style</Link>
        </div>

        <div>
          <h3>Style Today</h3>
          <Link href="/about">About</Link>
          <Link href="/about#editorial">Editorial mission</Link>
          <Link href="/about#contact">Contact</Link>
        </div>

        <div className="footer-newsletter">
          <h3>Newsletter</h3>
          <p>A considered edit of fashion, culture and industry stories.</p>
          <form>
            <label className="sr-only" htmlFor="footer-email">Email address</label>
            <input id="footer-email" type="email" placeholder="Email address" />
            <button type="button">Join</button>
          </form>
        </div>
      </div>
      <div className="page-shell footer-bottom">
        <span>© 2026 Style Today Magazine</span>
        <span>Observing and Reporting the Movement of Fashion.</span>
      </div>
    </footer>
  );
}
