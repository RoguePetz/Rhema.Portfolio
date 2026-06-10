"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { projects } from "@/lib/projects";

const NODE_PCTS = [12.5, 37.5, 62.5, 87.5];

export default function Roadmap() {
  const cardsRef = useRef<HTMLDivElement>(null);
  const fillRef = useRef<HTMLSpanElement>(null);
  const nodesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = cardsRef.current;
    const fill = fillRef.current;
    const nodesWrap = nodesRef.current;
    if (!root || !fill || !nodesWrap) return;
    const nodes = Array.from(nodesWrap.querySelectorAll<HTMLElement>(".node"));

    const setProgress = (idx: number) => {
      fill.style.width = NODE_PCTS[idx] - 12.5 + "%";
      nodes.forEach((n, k) => {
        n.classList.toggle("reached", k <= idx);
        n.classList.toggle("current", k === idx);
      });
    };
    setProgress(0);

    const cleanups: Array<() => void> = [];
    const isMobile = window.matchMedia("(max-width: 880px)").matches;
    const controllers = new Map<Element, { start: () => void; stop: () => void }>();

    root.querySelectorAll<HTMLElement>(".rm-card").forEach((card) => {
      const idx = Number(card.dataset.i);
      const stack = card.querySelector(".preview-stack");
      const pcards = stack ? Array.from(stack.querySelectorAll<HTMLElement>(".pcard")) : [];
      let order = pcards.slice();
      let timer: ReturnType<typeof setInterval> | null = null;

      const layout = () => {
        order.forEach((el, depth) => {
          el.style.transform = `translate(${depth * 8}px, ${depth * -9}px) rotate(${depth * 2.4}deg) scale(${1 - depth * 0.05})`;
          el.style.zIndex = String(50 - depth);
          el.style.opacity = depth > 3 ? "0" : String(1 - depth * 0.07);
        });
      };
      layout();
      const deal = () => {
        if (order.length < 2) return;
        const front = order.shift()!;
        front.style.transform = "translate(-6px, -54px) rotate(-9deg) scale(1.04)";
        front.style.zIndex = "60";
        setTimeout(() => { order.push(front); layout(); }, 210);
      };
      const start = () => {
        setProgress(idx);
        if (timer) return;
        deal();
        timer = setInterval(deal, 700);
      };
      const stop = () => {
        if (timer) clearInterval(timer);
        timer = null;
        order = pcards.slice();
        layout();
      };

      controllers.set(card, { start, stop });

      if (!isMobile) {
        card.addEventListener("mouseenter", start);
        card.addEventListener("mouseleave", stop);
        cleanups.push(() => {
          card.removeEventListener("mouseenter", start);
          card.removeEventListener("mouseleave", stop);
        });
      }
      cleanups.push(() => { if (timer) clearInterval(timer); });
    });

    if (isMobile) {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            const ctrl = controllers.get(e.target);
            if (!ctrl) return;
            if (e.isIntersecting) ctrl.start();
            else ctrl.stop();
          });
        },
        { threshold: 0.45 }
      );
      controllers.forEach((_, card) => io.observe(card));
      cleanups.push(() => io.disconnect());
    } else {
      const reset = () => setProgress(0);
      root.addEventListener("mouseleave", reset);
      cleanups.push(() => root.removeEventListener("mouseleave", reset));
    }

    return () => cleanups.forEach((fn) => fn());
  }, []);

  return (
    <section className="block" id="work" data-screen-label="Selected Work">
      <div className="wrap">
        <div className="eyebrow" data-reveal>Selected Work</div>
        <div className="work-head" data-reveal>
          <h2>Projects</h2>
          <span className="count">Hover the timeline →</span>
        </div>
        <div className="roadmap" data-reveal>
          <div className="rm-nodes" ref={nodesRef}>
            <span className="rm-line" />
            <span className="rm-fill" ref={fillRef} />
            {projects.map((_, i) => (
              <div className="rm-cell" key={i}>
                <span className="node" />
              </div>
            ))}
          </div>
          <div className="rm-cards" ref={cardsRef}>
            {projects.map((p, i) => (
              <article className="rm-card" data-i={i} key={p.slug}>
                <div className="preview-stack">
                  {p.deck.map((src, k) => (
                    <div className="pcard" key={k}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={src} alt="" />
                    </div>
                  ))}
                </div>
                <span className="card-node" />
                <span className="rm-when">{p.when}</span>
                <h3>{p.title}</h3>
                <p className="desc">{p.desc}</p>
                <span className="tag">{p.tag}</span>
                <span className="status done">{p.status}</span>
                <Link className="case-link" href={`/projects/${p.slug}`}>View case study →</Link>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
