"use client";

import Image from "next/image";
import { motion, useMotionTemplate, useMotionValue, useReducedMotion, useSpring, useTransform } from "motion/react";

/** The book cover in 3D, tilting toward the cursor with a moving glare. */
export default function BookTilt() {
  const reduce = useReducedMotion();
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const sx = useSpring(px, { stiffness: 120, damping: 14 });
  const sy = useSpring(py, { stiffness: 120, damping: 14 });
  const rotateY = useTransform(sx, [-0.5, 0.5], [-26, 4]);
  const rotateX = useTransform(sy, [-0.5, 0.5], [12, -4]);
  const gx = useTransform(sx, [-0.5, 0.5], [0, 100]);
  const gy = useTransform(sy, [-0.5, 0.5], [0, 100]);
  const glare = useMotionTemplate`radial-gradient(circle at ${gx}% ${gy}%, rgba(255,255,255,.24), transparent 45%)`;

  return (
    <div
      className="start-visual reveal"
      onPointerMove={(e) => {
        if (reduce || e.pointerType !== "mouse") return;
        const r = e.currentTarget.getBoundingClientRect();
        px.set((e.clientX - r.left) / r.width - 0.5);
        py.set((e.clientY - r.top) / r.height - 0.5);
      }}
      onPointerLeave={() => { px.set(0); py.set(0); }}
    >
      <motion.div className="book" style={reduce ? undefined : { rotateY, rotateX }}>
        <Image src="/bookCover.jpg" alt="Pivotal365: The Quiet Power Lifestyle Planner by Carlton Chapman" width={1159} height={1500} sizes="(max-width: 900px) 52vw, 380px" />
        <motion.div className="book-glare" aria-hidden="true" style={{ background: glare }} />
        <div className="book-floor" aria-hidden="true" />
      </motion.div>
      <div className="hero-badge" aria-hidden="true"><div><b>163</b><small>Pages of<br />follow-through</small></div></div>
    </div>
  );
}
