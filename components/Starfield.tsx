"use client";

import { useEffect, useRef } from "react";

type Star = { x: number; y: number; r: number; a: number; tw: number; vx: number; vy: number; gold: boolean };

/** Drifting stars with faint gold constellation lines, echoing the book cover. */
export default function Starfield({ density = 140 }: { density?: number }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const cv = ref.current;
    const ctx = cv?.getContext("2d");
    if (!cv || !ctx) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let stars: Star[] = [];
    let w = 0, h = 0, raf = 0, visible = true;

    const size = () => {
      w = cv.offsetWidth; h = cv.offsetHeight;
      cv.width = w * dpr; cv.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.round(density * Math.min(1, w / 1200) + 30);
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * w, y: Math.random() * h,
        r: Math.random() * 1.3 + 0.2, a: Math.random() * 0.6 + 0.2,
        tw: Math.random() * Math.PI * 2,
        vx: (Math.random() - 0.5) * 0.06, vy: (Math.random() - 0.5) * 0.06,
        gold: Math.random() < 0.14,
      }));
    };

    const draw = (t: number) => {
      ctx.clearRect(0, 0, w, h);
      for (let i = 0; i < stars.length; i++) {
        const s = stars[i];
        if (!reduce) { s.x += s.vx; s.y += s.vy; }
        if (s.x < 0) s.x = w; if (s.x > w) s.x = 0;
        if (s.y < 0) s.y = h; if (s.y > h) s.y = 0;
        for (let j = i + 1; j < stars.length; j++) {
          const o = stars[j];
          if (!(s.gold || o.gold)) continue;
          const dx = s.x - o.x, dy = s.y - o.y, d = dx * dx + dy * dy;
          if (d < 9000) {
            ctx.strokeStyle = `rgba(242,185,31,${(0.16 * (1 - d / 9000)).toFixed(3)})`;
            ctx.lineWidth = 0.6;
            ctx.beginPath(); ctx.moveTo(s.x, s.y); ctx.lineTo(o.x, o.y); ctx.stroke();
          }
        }
        const a = reduce ? s.a : s.a * (0.65 + 0.35 * Math.sin(t * 0.0012 + s.tw));
        ctx.fillStyle = s.gold ? `rgba(246,207,99,${a})` : `rgba(244,239,228,${a})`;
        ctx.beginPath(); ctx.arc(s.x, s.y, s.gold ? s.r + 0.5 : s.r, 0, Math.PI * 2); ctx.fill();
      }
      if (!reduce && visible) raf = requestAnimationFrame(draw);
    };

    size();
    const onResize = () => { size(); if (reduce) draw(0); };
    window.addEventListener("resize", onResize);
    let io: IntersectionObserver | undefined;
    if (reduce) draw(0);
    else {
      io = new IntersectionObserver(([en]) => {
        visible = en.isIntersecting;
        cancelAnimationFrame(raf);
        if (visible) raf = requestAnimationFrame(draw);
      });
      io.observe(cv);
    }
    return () => { cancelAnimationFrame(raf); io?.disconnect(); window.removeEventListener("resize", onResize); };
  }, [density]);

  return <canvas ref={ref} className="starfield" aria-hidden="true" />;
}
