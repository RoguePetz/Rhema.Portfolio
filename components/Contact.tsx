export default function Contact() {
  return (
    <>
      <section className="block contact" id="contact" data-screen-label="Contact">
        <div className="wrap">
          <div className="eyebrow" data-reveal>Contact</div>
          <h2 data-reveal>
            Let&apos;s work
            <br />
            together
          </h2>
          <a className="email" href="mailto:briggsrhema@gmail.com" data-reveal>
            briggsrhema@gmail.com
          </a>
        </div>
      </section>

      <footer className="footer">
        <div className="wrap">
          <span>© 2026 Rhema Briggs</span>
          <span style={{ display: "flex", gap: 24 }}>
            <a href="https://github.com/roguepetz" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://www.instagram.com/roguepetz/" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://x.com/PetzRogue" target="_blank" rel="noopener noreferrer">X</a>
          </span>
        </div>
      </footer>
    </>
  );
}
