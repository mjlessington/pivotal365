"use client";

import { useRef, useState } from "react";
import { motion, useMotionValueEvent, useScroll, useSpring } from "motion/react";
import { stages } from "@/lib/content";

/** The five-stage timeline: the rail fills and each stage lights up as it passes the middle of the screen. */
export default function Path() {
  const listRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: listRef, offset: ["start 55%", "end 55%"] });
  const fill = useSpring(scrollYProgress, { stiffness: 120, damping: 24, mass: 0.3 });
  const [lit, setLit] = useState(-1);

  useMotionValueEvent(scrollYProgress, "change", () => {
    const mid = window.innerHeight * 0.55;
    const nodes = listRef.current?.querySelectorAll(".stage") ?? [];
    let n = -1;
    nodes.forEach((el, i) => { if (el.getBoundingClientRect().top < mid) n = i; });
    setLit(n);
  });

  return (
    <section className="section framework" id="framework" aria-labelledby="framework-title">
      <div className="container framework-grid">
        <div className="framework-head">
          <p className="eyebrow reveal">The Pivot Path</p>
          <h2 id="framework-title" className="reveal">The Architecture <span className="gold">of Change</span></h2>
          <p className="lede reveal">Five stages you move through in order, and come back to whenever life shifts. They&apos;re how a pivot sticks.</p>
          <div className="stage-dots reveal" aria-hidden="true">
            {stages.map((s, i) => <span key={s.name} className={i <= lit ? "on" : ""} />)}
          </div>
          <div className="stage-now reveal" aria-hidden="true">
            <span>Now</span>
            <b>{lit >= 0 ? stages[lit].name : "Begin"}</b>
          </div>
        </div>

        <div className="stages" ref={listRef}>
          <div className="stages-rail" aria-hidden="true" />
          <motion.div className="stages-fill" aria-hidden="true" style={{ scaleY: fill }} />
          <ol className="stage-list">
            {stages.map((s, i) => (
              <li key={s.name} className="stage reveal" data-lit={i <= lit}>
                <div className="stage-node" aria-hidden="true">{s.num}</div>
                <div className="stage-card">
                  <div className="stage-label" aria-hidden="true">{s.label}</div>
                  <h3>{s.name} <span className="sr-only">: {s.antidote}</span></h3>
                  <div className="stage-antidote" aria-hidden="true">{s.antidote}</div>
                  <p>{s.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
