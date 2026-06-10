"use client";

import { useState } from "react";
import type { Shot } from "@/lib/projects";

export default function CaseGallery({ shots, productLab }: { shots: Shot[]; productLab: string }) {
  const [i, setI] = useState(0);
  const n = shots.length;
  const go = (k: number) => setI((k + n) % n);
  const s = shots[i];
  const single = n === 1;

  return (
    <>
      <div className="sec-head" data-reveal>
        <h2>{single ? "The product" : "Production captures"}</h2>
        <span className="lab">{productLab}</span>
      </div>

      <div data-reveal>
        <div className="win sheen">
          <div className="win-bar">
            <span className="dot" />
            <span className="dot" />
            <span className="dot" />
            <span className="url">{s.url}</span>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="win-img" src={s.src} alt={s.cap.replace(/<[^>]+>/g, "")} />
        </div>

        {single ? (
          <p
            className="gal-cap"
            style={{ marginTop: 22 }}
            dangerouslySetInnerHTML={{ __html: s.cap }}
          />
        ) : (
          <>
            <div className="gal-bar">
              <p className="gal-cap" dangerouslySetInnerHTML={{ __html: s.cap }} />
              <div className="gal-ctrl">
                <span className="gal-count">
                  {String(i + 1).padStart(2, "0")}
                  <span> / {String(n).padStart(2, "0")}</span>
                </span>
                <button className="gal-btn" onClick={() => go(i - 1)} aria-label="Previous">‹</button>
                <button className="gal-btn" onClick={() => go(i + 1)} aria-label="Next">›</button>
              </div>
            </div>
            <div
              className="thumbs"
              style={n < 4 ? { gridTemplateColumns: `repeat(${n},1fr)`, maxWidth: 560 } : undefined}
            >
              {shots.map((shot, k) => (
                <button
                  key={shot.src}
                  className={`thumb ${k === i ? "active" : ""}`.trim()}
                  onClick={() => go(k)}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={shot.src} alt="" />
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
}
