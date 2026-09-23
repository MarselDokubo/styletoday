export const metadata = {
  title: "About Style Today"
};

export default function AboutPage() {
  return (
    <main>
      <section className="about-hero">
        <div className="page-shell about-hero-inner">
          <span className="eyebrow">About Style Today Magazine</span>
          <h1>Observing and Reporting the Movement of Fashion.</h1>
          <p>
            Style Today Magazine observes and reports the movement of fashion.
          </p>
        </div>
      </section>

      <section className="page-shell about-grid section-space" id="editorial">
        <div className="about-large">
          <p>
            We cover the people, brands, culture and ideas shaping what fashion is and what it becomes next.
          </p>
          <p>
            From the runway and garments to the business of fashion, we document the movements, moments and
            minds driving the industry forward.
          </p>
        </div>
        <div className="about-manifesto">
          <p>We see it.</p>
          <p>We document it.</p>
          <p>We report it.</p>
        </div>
      </section>

      <section className="page-shell values-grid section-space">
        <div><span>01</span><h2>Fashion</h2><p>Design, collections, craft and the people who make the clothes.</p></div>
        <div><span>02</span><h2>Business</h2><p>The structures, decisions and ideas shaping fashion as an industry.</p></div>
        <div><span>03</span><h2>Culture</h2><p>How identity, place, music, beauty and community move through style.</p></div>
        <div><span>04</span><h2>Archive</h2><p>Documenting the moments and minds that deserve to remain visible.</p></div>
      </section>

      <section className="contact-panel" id="contact">
        <div className="page-shell contact-inner">
          <div>
            <span className="eyebrow">Contact</span>
            <h2>Stories, partnerships and editorial enquiries.</h2>
          </div>
          <a href="mailto:editorial@styletodaymagazine.com">editorial@styletodaymagazine.com</a>
        </div>
      </section>
    </main>
  );
}
