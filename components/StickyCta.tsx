"use client";

import { useEffect, useState } from "react";

/** Phone-only bar that appears after the hero and hides over the pricing section. */
export default function StickyCta() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      const hero = document.querySelector<HTMLElement>(".hero");
      const pricing = document.getElementById("get-the-planner");
      const join = document.getElementById("join");
      const over = (el: HTMLElement | null) => {
        if (!el) return false;
        const r = el.getBoundingClientRect();
        return r.top < window.innerHeight * 0.6 && r.bottom > 0;
      };
      setShow(window.scrollY > (hero?.offsetHeight ?? 600) * 0.7 && !over(pricing) && !over(join));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={`sticky-cta${show ? " show" : ""}`}>
      <div className="sticky-cta-text"><b>Pivotal365</b>Start with the planner</div>
      <a href="#start-your-pivot" className="btn btn-gold">Start Your Pivot</a>
    </div>
  );
}
