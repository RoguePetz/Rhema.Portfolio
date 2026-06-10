export default function About() {
  return (
    <section className="block" id="about" data-screen-label="About">
      <div className="wrap">
        <div className="eyebrow" data-reveal>About</div>
        <p className="statement" data-reveal>
          I&apos;m a senior engineer who likes owning things end-to-end —{" "}
          <span className="dim">from database schema to the button the user clicks.</span>
        </p>
        <div className="about-grid">
          <p className="lead" data-reveal>
            I&apos;ve built enterprise ERP systems used by 200+ person organisations,
            education funding platforms, and social-impact products across Nigeria. I
            care about code that ships and products that matter.
          </p>
          <div className="about-facts" data-reveal>
            <p className="fact-item"><b>Based in</b>Abuja, Nigeria</p>
            <p className="fact-item"><b>Open to</b>Remote roles globally</p>
            <p className="fact-item"><b>Experience</b>5+ years</p>
            <p className="fact-item"><b>Education</b>B.Sc. Computer Science, UNIPORT · CS50, Harvard University</p>
            <p className="fact-item">
              <b>GitHub</b>
              <a href="https://github.com/roguepetz" target="_blank" rel="noopener noreferrer">github.com/roguepetz</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
