"use client";

import { useEffect } from "react";

export default function Wave() {
  useEffect(() => {
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const INK = "18,18,18";
    const canvas = document.createElement("canvas");
    canvas.setAttribute("aria-hidden", "true");
    Object.assign(canvas.style, {
      position: "fixed", top: "0", left: "0", width: "100%", pointerEvents: "none", zIndex: "0",
    });
    document.body.insertBefore(canvas, document.body.firstChild);
    const ctx = canvas.getContext("2d")!;
    let W = 0, H = 0, DPR = 1, gap = 60, cols = 0, rows = 0;
    let pts: { ix: number; jy: number; bx: number; by: number; ph: number; x: number; y: number }[] = [];
    let raf = 0;

    function build() {
      gap = Math.max(58, W / 20);
      cols = Math.ceil(W / gap) + 3;
      rows = Math.ceil(H / gap) + 3;
      pts = [];
      for (let j = 0; j < rows; j++)
        for (let i = 0; i < cols; i++)
          pts.push({ ix: i, jy: j, bx: i * gap - gap, by: j * gap - gap, ph: Math.random() * Math.PI * 2, x: 0, y: 0 });
    }
    function resize() {
      DPR = Math.min(window.devicePixelRatio || 1, 2);
      W = window.innerWidth;
      H = Math.round(window.innerHeight * (2 / 3));
      canvas.style.height = H + "px";
      canvas.width = W * DPR;
      canvas.height = H * DPR;
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
      build();
    }
    const P = (i: number, j: number) => (i < 0 || j < 0 || i >= cols || j >= rows ? null : pts[j * cols + i]);
    function draw(t: number) {
      ctx.clearRect(0, 0, W, H);
      for (const p of pts) {
        p.x = p.bx + Math.sin(p.bx * 0.006 + t * 0.0006 + p.jy * 0.5) * 16 + Math.cos(p.by * 0.01 + t * 0.0009 + p.ix * 0.3) * 9;
        p.y = p.by + Math.sin(t * 0.0008 + p.ph) * 6 + Math.sin(p.bx * 0.008 + t * 0.0005) * 18;
      }
      const maxD = gap * 1.75;
      ctx.lineWidth = 1;
      for (const p of pts) {
        for (const q of [P(p.ix + 1, p.jy), P(p.ix, p.jy + 1)]) {
          if (!q) continue;
          const d = Math.hypot(p.x - q.x, p.y - q.y);
          if (d > maxD) continue;
          const fade = Math.max(0, 1 - (p.y + q.y) / 2 / H);
          const a = fade * fade * 0.32 * (1 - d / maxD + 0.25);
          if (a <= 0.002) continue;
          ctx.strokeStyle = "rgba(" + INK + "," + a.toFixed(3) + ")";
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(q.x, q.y);
          ctx.stroke();
        }
      }
      for (const p of pts) {
        const fade = Math.max(0, 1 - p.y / H);
        const a = fade * fade * 0.42;
        if (a <= 0.002) continue;
        ctx.fillStyle = "rgba(" + INK + "," + a.toFixed(3) + ")";
        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.4, 0, Math.PI * 2);
        ctx.fill();
      }
      raf = requestAnimationFrame(draw);
    }
    window.addEventListener("resize", resize);
    resize();
    raf = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      canvas.remove();
    };
  }, []);
  return null;
}
