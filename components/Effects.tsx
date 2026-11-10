"use client";

import { useEffect } from "react";
import Lenis from "lenis";

/**
 * Page-wide behaviour that has no markup of its own:
 * smooth scrolling, scroll reveals with count-up stats, and the cursor glow position.
 */
export default function Effects() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const cleanups: (() => void)[] = [];

    // Smooth, weighted scrolling (desktop pointers only; touch keeps native momentum).
    if (!reduce && window.matchMedia("(pointer: fine)").matches) {
      const lenis = new Lenis({ duration: 1.15, anchors: { offset: -80 } });
      let raf = 0;
      const loop = (t: number) => { lenis.raf(t); raf = requestAnimationFrame(loop); };
      raf = requestAnimationFrame(loop);
      cleanups.push(() => { cancelAnimationFrame(raf); lenis.destroy(); });
    }

    // Reveal on scroll + count-up numbers.
    const countUp = (el: Element) => {
      const target = Number(el.getAttribute("data-count"));
      if (reduce || !target) return;
      let start = 0;
      const step = (t: number) => {
        if (!start) start = t;
        const k = Math.min(1, (t - start) / 1400);
        el.textContent = String(Math.round(target * (1 - Math.pow(1 - k, 3))));
        if (k < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (!en.isIntersecting) return;
          en.target.classList.add("in");
          en.target.querySelectorAll("[data-count]").forEach(countUp);
          io.unobserve(en.target);
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 }
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    cleanups.push(() => io.disconnect());

    // Cursor-following glow on cards and the page spotlight.
    const onMove = (e: PointerEvent) => {
      document.documentElement.style.setProperty("--cx", e.clientX + "px");
      document.documentElement.style.setProperty("--cy", e.clientY + "px");
      const card = (e.target as HTMLElement | null)?.closest<HTMLElement>(".tile, .way, .price-card");
      if (card) {
        const r = card.getBoundingClientRect();
        card.style.setProperty("--mx", e.clientX - r.left + "px");
        card.style.setProperty("--my", e.clientY - r.top + "px");
      }
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    cleanups.push(() => window.removeEventListener("pointermove", onMove));

    return () => cleanups.forEach((c) => c());
  }, []);

  return <div className="spotlight" aria-hidden="true" />;
}
