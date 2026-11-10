"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#philosophy", label: "Philosophy" },
  { href: "#framework", label: "The Path" },
  { href: "#start", label: "The Planner" },
  { href: "#author", label: "Carlton" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => { window.removeEventListener("scroll", onScroll); document.removeEventListener("keydown", onKey); };
  }, []);

  useEffect(() => { document.body.style.overflow = open ? "hidden" : ""; }, [open]);

  return (
    <header className={`site-nav${scrolled ? " scrolled" : ""}${open ? " nav-open" : ""}`}>
      <nav className="nav-inner" aria-label="Main navigation">
        <a href="#" className="nav-logo" aria-label="Pivotal365, back to top">Pivotal<span aria-hidden="true">365</span></a>
        <ul className="nav-links">
          {links.map((l) => <li key={l.href}><a href={l.href}>{l.label}</a></li>)}
          <li><a href="#start-your-pivot" className="btn btn-gold">Start Your Pivot</a></li>
        </ul>
        <button
          className="nav-toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((o) => !o)}
        >
          <span /><span /><span />
        </button>
      </nav>
      <div className="mobile-menu" id="mobile-menu" onClick={(e) => (e.target as HTMLElement).closest("a") && setOpen(false)}>
        {links.map((l) => <a key={l.href} href={l.href}>{l.label}</a>)}
        <a href="#join">Join</a>
        <a href="#start-your-pivot" className="btn btn-gold btn-lg">Start Your Pivot</a>
      </div>
    </header>
  );
}
