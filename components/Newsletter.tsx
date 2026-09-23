export function Newsletter() {
  return (
    <section className="newsletter-panel">
      <div>
        <span className="eyebrow">The Style Today Briefing</span>
        <h2>Fashion, culture and industry — without the noise.</h2>
      </div>
      <div>
        <p>
          A concise editorial briefing on the designers, people, ideas and movements worth paying attention to.
        </p>
        <form>
          <label className="sr-only" htmlFor="newsletter-email">Email address</label>
          <input id="newsletter-email" type="email" placeholder="Email address" />
          <button type="button">Join the list</button>
        </form>
      </div>
    </section>
  );
}
