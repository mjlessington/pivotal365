"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import Starfield from "./Starfield";
import Magnetic from "./Magnetic";
import { stages } from "@/lib/content";

// Node positions on the dial: five points evenly spaced on a circle, starting at 12 o'clock.
const points = stages.map((_, i) => {
  const a = (i / stages.length) * Math.PI * 2;
  return { x: 50 + 50 * Math.sin(a), y: 50 - 50 * Math.cos(a) };
});

function Dial() {
  const reduce = useReducedMotion();
  const [lit, setLit] = useState(0);
  useEffect(() => {
    if (reduce) { setLit(stages.length); return; }
    const id = setInterval(() => setLit((n) => (n + 1) % (stages.length + 1)), 1400);
    return () => clearInterval(id);
  }, [reduce]);

  return (
    <div className="dial" aria-hidden="true">
      <div className="dial-ring" />
      <div className="dial-ring r2" />
      <div className="dial-ring r3" />
      <svg className="dial-arc" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="49.5" pathLength={1}
          style={{ strokeDashoffset: 1 - Math.min(lit, stages.length) / stages.length }} />
      </svg>
      <div className="dial-core"><div><b>365</b><small>Days to your pivot</small></div></div>
      {stages.map((s, i) => (
        <div key={s.name} className={`dial-node${i <= lit || lit === stages.length ? " on" : ""}`}
          style={{ "--x": `${points[i].x}%`, "--y": `${points[i].y}%` } as React.CSSProperties}>
          <i /><span>{s.name}</span>
        </div>
      ))}
    </div>
  );
}

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const textY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 120]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.8], [1, reduce ? 1 : 0]);
  const dialY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -80]);
  const dialScale = useTransform(scrollYProgress, [0, 1], [1, reduce ? 1 : 0.88]);

  return (
    <section className="hero" ref={ref} aria-labelledby="hero-title">
      <Starfield density={160} />
      <div className="hero-orbit" aria-hidden="true" />

      <div className="hero-inner">
        <motion.div className="hero-text" style={{ y: textY, opacity: textOpacity }}>
          <p className="eyebrow intro" style={{ "--i": 0 } as React.CSSProperties}>Pivotal365 · Quiet Power</p>
          <h1 id="hero-title">
            <span className="line intro" style={{ "--i": 1 } as React.CSSProperties}>Master the art</span>
            <span className="line intro" style={{ "--i": 2 } as React.CSSProperties}>of the</span>
            <span className="line intro" style={{ "--i": 3 } as React.CSSProperties}><span className="gold shimmer">quiet pivot.</span></span>
          </h1>
          <p className="hero-sub intro" style={{ "--i": 4 } as React.CSSProperties}>
            Pivotal365 is a year-long shift toward the person you keep saying you&apos;ll become. You start with who you are,
            choose fewer things, build a rhythm you can keep, and finish what you start.
          </p>
          <div className="hero-cta intro" style={{ "--i": 5 } as React.CSSProperties}>
            <Magnetic><a href="#start-your-pivot" className="btn btn-gold btn-lg">Start Your Pivot <span className="arrow" aria-hidden="true">→</span></a></Magnetic>
            <a href="#philosophy" className="btn btn-line btn-lg">Read the Philosophy</a>
          </div>
          <p className="hero-entry intro" style={{ "--i": 6 } as React.CSSProperties}>
            Step one: <a href="#start">the Quiet Power Lifestyle Planner</a>, from $9.99 on Amazon.
          </p>
        </motion.div>

        <motion.div className="hero-visual intro" style={{ y: dialY, scale: dialScale, "--i": 3 } as never}>
          <Dial />
        </motion.div>
      </div>

      <a href="#problem" className="scroll-cue" aria-label="Scroll to next section"><span aria-hidden="true">Scroll</span><i aria-hidden="true" /></a>
    </section>
  );
}
