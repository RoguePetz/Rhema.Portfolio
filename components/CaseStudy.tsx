import Link from "next/link";
import type { Project } from "@/lib/projects";
import CaseGallery from "@/components/CaseGallery";
import Wave from "@/components/Wave";

export default function CaseStudy({ project: p }: { project: Project }) {
  return (
    <>
      <Wave />
      <header className="topnav">
        <div className="wrap">
          <Link className="brand" href="/">
            <span className="mark" />
            Rhema Briggs
          </Link>
          <Link className="back" href="/#work">← All projects</Link>
        </div>
      </header>

      <main>
        <section className="head" data-screen-label="Case Study Header">
          <div className="wrap">
            <div className="eyebrow" data-reveal>Case Study / {p.caseNo}</div>
            <div className="meta-line" data-reveal>{p.meta}</div>
            <h1 className="title" data-reveal>
              {p.titleLines.map((l, k) => (
                <span key={k}>
                  {l}
                  {k < p.titleLines.length - 1 && <br />}
                </span>
              ))}
            </h1>
            <p className="sub" data-reveal>{p.sub}</p>
            <div className="factrow" data-reveal>
              <div className="fact">
                <h4>Role</h4>
                <p className="who">
                  {p.roleLines.map((l, k) => (
                    <span key={k}>
                      {l}
                      {k < p.roleLines.length - 1 && <br />}
                    </span>
                  ))}
                </p>
              </div>
              <div className="fact">
                <h4>Stack</h4>
                <div className="chips">
                  {p.stack.map((s) => (
                    <span className="chip" key={s}>{s}</span>
                  ))}
                </div>
                {p.liveUrl && (
                  <a className="live-btn sheen" href={p.liveUrl} target="_blank" rel="noopener noreferrer">
                    {p.liveLabel}
                  </a>
                )}
              </div>
            </div>
          </div>
        </section>

        <section className="section" data-screen-label="Product">
          <div className="wrap">
            <CaseGallery shots={p.shots} productLab={p.productLab} />
          </div>
        </section>

        <section className="section" data-screen-label="What I built">
          <div className="wrap">
            <div className="sec-head" data-reveal>
              <h2>What I built</h2>
              <span className="lab">01 · Scope</span>
            </div>
            <div className="feat-grid">
              {p.features.map((f) => (
                <div className="feat" data-reveal key={f.idx}>
                  <span className="idx">{f.idx}</span>
                  <h3 dangerouslySetInnerHTML={{ __html: f.title }} />
                  <p>{f.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section" data-screen-label="Impact">
          <div className="wrap">
            <div className="stats">
              {p.stats.map((s) => (
                <div className="stat" data-reveal key={s.lab}>
                  <div className="big">{s.big}</div>
                  <div className="lab">{s.lab}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="cta" data-screen-label="CTA">
          <div className="wrap">
            <h2 data-reveal>More work<br />on the way.</h2>
            <div className="acts" data-reveal>
              <Link href="/#work">← Back to the roadmap</Link>
              <a className="ghost" href="mailto:briggsrhema@gmail.com">briggsrhema@gmail.com</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="foot">
        <div className="wrap">
          <span>© 2026 Rhema Briggs</span>
          <span>{p.title} · Case Study {p.caseNo}</span>
        </div>
      </footer>
    </>
  );
}
