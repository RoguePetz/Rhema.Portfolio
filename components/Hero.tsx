"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const frameRef = useRef<HTMLElement>(null);
  const figureRef = useRef<HTMLDivElement>(null);

  // Gentle parallax: drifting the figure across the wordmark makes the
  // mix-blend-difference text invert live wherever the portrait passes over it.
  useEffect(() => {
    const frame = frameRef.current;
    const figure = figureRef.current;
    if (!frame || !figure) return;

    let raf: number | null = null;
    let tx = 0;
    let ty = 0;
    let cx = 0;
    let cy = 0;

    const tick = () => {
      cx += (tx - cx) * 0.08;
      cy += (ty - cy) * 0.08;
      figure.style.transform = `translateX(calc(-50% + ${cx}px)) translateY(${cy}px)`;
      if (Math.abs(tx - cx) > 0.1 || Math.abs(ty - cy) > 0.1) {
        raf = requestAnimationFrame(tick);
      } else {
        raf = null;
      }
    };

    const onMove = (e: PointerEvent) => {
      const r = frame.getBoundingClientRect();
      tx = ((e.clientX - r.left) / r.width - 0.5) * 26;
      ty = ((e.clientY - r.top) / r.height - 0.5) * 14;
      if (raf === null) raf = requestAnimationFrame(tick);
    };

    const onLeave = () => {
      tx = 0;
      ty = 0;
      if (raf === null) raf = requestAnimationFrame(tick);
    };

    frame.addEventListener("pointermove", onMove);
    frame.addEventListener("pointerleave", onLeave);
    return () => {
      frame.removeEventListener("pointermove", onMove);
      frame.removeEventListener("pointerleave", onLeave);
      if (raf !== null) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <main
      ref={frameRef}
      data-screen-label="Hero"
      className="relative h-screen w-full overflow-hidden"
    >
      {/* Nav */}
      <nav className="absolute inset-x-0 top-0 z-[5] flex items-center justify-between px-[clamp(24px,3.4vw,56px)] py-[clamp(22px,2.6vw,34px)] text-[clamp(13px,1vw,15px)] [animation:fadeDown_0.9s_0.1s_both_ease]">
        <span className="flex items-center gap-[11px] font-bold tracking-[-0.01em]">
          <span className="inline-block h-[13px] w-[13px] flex-none rotate-45 bg-ink [animation:spinIn_1s_0.2s_both_ease]" />
          Rhema Briggs
        </span>
        <span className="flex items-center gap-[clamp(20px,2.4vw,38px)]">
          <a href="#about" className="font-medium text-mute transition-colors hover:text-ink">About</a>
          <a href="#work" className="font-medium text-mute transition-colors hover:text-ink">Projects</a>
          <a href="#archive" className="font-medium text-mute transition-colors hover:text-ink">Archive</a>
          <a href="#contact" className="font-bold text-ink">Get in touch →</a>
        </span>
      </nav>

      {/* Giant inverting wordmark */}
      <h1 className="pointer-events-none absolute left-1/2 top-[56%] z-[3] w-max -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-[clamp(76px,13vw,212px)] font-extrabold leading-[0.9] tracking-[-0.04em] text-white mix-blend-difference [animation:fadeIn_1.1s_0.35s_both_ease]">
        Rhema Briggs
      </h1>

      {/* Portrait */}
      <div
        ref={figureRef}
        className="pointer-events-none absolute bottom-0 left-1/2 z-[2] h-[92%] max-w-[92vw] -translate-x-1/2 select-none [filter:drop-shadow(0_30px_40px_rgba(0,0,0,0.16))] [animation:rise_1.2s_0.15s_both_cubic-bezier(0.2,0.7,0.2,1)]"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/rhema-cutout.png"
          alt="Rhema Briggs"
          className="block h-full w-auto max-w-full object-contain object-bottom"
          draggable={false}
        />
      </div>

      {/* Social rail */}
      <div className="absolute bottom-[clamp(26px,4vw,54px)] left-[clamp(24px,3.4vw,56px)] z-[5] flex flex-col gap-[13px] [animation:fadeUp_0.9s_0.5s_both_ease]">
        <a href="https://x.com/PetzRogue" target="_blank" rel="noopener noreferrer" aria-label="X" className="flex h-[34px] w-[34px] items-center justify-center rounded-full border-[1.4px] border-ink transition-colors hover:bg-ink hover:text-bg">
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-[15px] w-[15px]"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/></svg>
        </a>
        <a href="https://www.instagram.com/roguepetz/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="flex h-[34px] w-[34px] items-center justify-center rounded-[9px] border-[1.4px] border-ink transition-colors hover:bg-ink hover:text-bg">
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-[17px] w-[17px]"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
        </a>
        <a href="https://github.com/roguepetz" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="flex h-[34px] w-[34px] items-center justify-center rounded-[9px] border-[1.4px] border-ink transition-colors hover:bg-ink hover:text-bg">
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-[17px] w-[17px]"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
        </a>
      </div>

      {/* Role */}
      <div className="absolute bottom-[clamp(26px,4vw,52px)] right-[clamp(24px,3.4vw,56px)] z-[5] text-right text-[clamp(18px,2.1vw,32px)] font-semibold leading-[1.1] tracking-[-0.02em] text-white mix-blend-difference [animation:fadeUp_0.9s_0.5s_both_ease]">
        Software Developer
        <br />
        Full-Stack
      </div>
    </main>
  );
}
