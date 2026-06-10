"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Reveal() {
  const pathname = usePathname();
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    els.forEach((el, i) => {
      el.style.transitionDelay = Math.min(i, 5) * 60 + "ms";
    });
    let ticking = false;
    const check = () => {
      ticking = false;
      const h = window.innerHeight || document.documentElement.clientHeight;
      els.forEach((el) => {
        const r = el.getBoundingClientRect();
        el.classList.toggle("in", r.top < h * 0.88 && r.bottom > h * 0.12);
      });
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(check);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", check);
    check();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", check);
    };
  }, [pathname]);
  return null;
}
