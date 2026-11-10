import Image from "next/image";
import type { CSSProperties } from "react";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Path from "@/components/Path";
import BookTilt from "@/components/BookTilt";
import JoinForm from "@/components/JoinForm";
import StickyCta from "@/components/StickyCta";
import Starfield from "@/components/Starfield";
import Magnetic from "@/components/Magnetic";
import Effects from "@/components/Effects";
import Icon from "@/components/Icon";
import {
  AMAZON_URL, bookJsonLd, formats, miniChapters, tenets, tiles, vignetteList, voices, ways,
} from "@/lib/content";

const d = (s: number) => ({ "--d": `${s}s` }) as CSSProperties;
const NewTab = ({ label = " (opens Amazon in new tab)" }: { label?: string }) => <span className="sr-only">{label}</span>;
const marqueeWords = ["Identity", "Vision", "Structure", "Adjustment", "Reflection"];

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(bookJsonLd) }} />
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <Effects />
      <Nav />

      <main id="main-content">
        <Hero />

        {/* MARQUEE */}
        <div className="marquee" aria-hidden="true">
          <div className="marquee-track">
            {[0, 1].map((g) => (
              <div className="marquee-group" key={g}>
                {marqueeWords.map((w) => <span key={w} className="mq">{w}<i /></span>)}
                <span className="mq alt">Start less. Finish more.<i /></span>
              </div>
            ))}
          </div>
        </div>

        {/* THE PROBLEM */}
        <section className="section problem" id="problem" aria-labelledby="problem-title">
          <div className="container center">
            <p className="eyebrow reveal">You&apos;re not alone</p>
            <h2 id="problem-title" className="reveal">
              You have a graveyard of unfinished projects. <span className="dim">That&apos;s not a character flaw.</span>
            </h2>
            <div className="copy reveal">
              <p>It&apos;s an architecture problem. Most plans assume you&apos;re already emotionally regulated and ready to perform. They hand you blank boxes and wish you luck in the messy middle.</p>
              <p>You&apos;ve been blaming yourself. But the tools were never built for the moment you actually needed them.</p>
            </div>
            <div className="voices">
              {voices.map((v, i) => (
                <figure className="voice reveal" style={d(i * 0.08)} key={v}><p>{v}</p></figure>
              ))}
            </div>
            <p className="closing reveal">What if the problem was never discipline, but <b>identity?</b></p>
          </div>
        </section>

        {/* PHILOSOPHY */}
        <section className="section manifesto" id="philosophy" aria-labelledby="philosophy-title">
          <div className="container">
            <div className="manifesto-head">
              <p className="eyebrow reveal">The Quiet Power Philosophy</p>
              <h2 id="philosophy-title" className="reveal">Six ideas behind every <span className="gold">Pivotal365 day</span></h2>
              <p className="lede reveal">They come from Carlton Chapman&apos;s own years of starting and stopping, and they&apos;re why the method keeps working after motivation runs out.</p>
            </div>
            <ol className="tenets">
              {tenets.map((t) => (
                <li className="tenet reveal" key={t.title}><h3>{t.title}</h3><p>{t.body}</p></li>
              ))}
            </ol>
          </div>
        </section>

        <Path />

        {/* WAYS IN */}
        <section className="section ways-in" id="start-your-pivot" aria-labelledby="ways-title">
          <div className="container">
            <div className="ways-head center">
              <p className="eyebrow reveal">Your Way In</p>
              <h2 id="ways-title" className="reveal">Start your pivot <span className="gold">today</span></h2>
              <p className="lede reveal">The planner is step one. More ways to go deeper with Pivotal365 are on the way.</p>
            </div>
            <div className="ways">
              <article className="way primary reveal">
                <span className="way-status">Available now</span>
                <div className="way-inner">
                  <div className="way-book">
                    <Image src="/bookCover.jpg" alt="" width={1159} height={1500} sizes="(max-width: 600px) 58vw, 230px" />
                  </div>
                  <div>
                    <div className="way-step">Step 01 · Start here</div>
                    <h3>The Quiet Power Lifestyle Planner</h3>
                    <p>A full-year planner that takes you through all five stages, with coaching written into the margins for the moments you&apos;d normally quit.</p>
                    <a href="#start" className="way-link">Explore the planner <span className="arrow" aria-hidden="true">→</span></a>
                  </div>
                </div>
              </article>
              {ways.map((w, i) => (
                <article className={`way reveal${w.wide ? " wide" : ""}`} style={d(0.08 * (i + 1))} key={w.title}>
                  <span className="way-status">{w.status}</span>
                  <div className="way-step">{w.step}</div>
                  <h3>{w.title}</h3>
                  <p>{w.body}</p>
                  <a href={w.href} className="way-link">{w.cta} <span className="arrow" aria-hidden="true">→</span></a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* START HERE: THE PLANNER */}
        <section className="section start" id="start" aria-labelledby="start-title">
          <div className="container">
            <div className="start-grid">
              <BookTilt />
              <div className="start-text">
                <p className="eyebrow reveal">Step 01 · Start Here</p>
                <h2 id="start-title" className="reveal">The planner is where <span className="gold">your pivot begins</span></h2>
                <p className="reveal">The Quiet Power Lifestyle Planner is a hybrid: part lifestyle planner, part psychological coaching system. It begins before the first date box, with identity, and it doesn&apos;t let you off the hook when things get hard.</p>
                <p className="reveal">Embedded throughout the planning year are 10 Mini Chapters and 6 Vignettes: written interventions that meet you in the exact moments most people abandon everything.</p>
                <div className="stats reveal">
                  {[["5", "Stages"], ["10", "Mini Chapters"], ["6", "Vignettes"], ["365", "Days"]].map(([n, l]) => (
                    <div className="stat" key={l}><b data-count={n}>{n}</b><span>{l}</span></div>
                  ))}
                </div>
                <a href="#get-the-planner" className="btn btn-gold btn-lg reveal">Choose Your Format <span className="arrow" aria-hidden="true">→</span></a>
              </div>
            </div>

            <div className="sub-head center" id="inside">
              <p className="eyebrow reveal">Inside the Planner</p>
              <h3 className="reveal">A full year of <span className="gold">quiet execution</span></h3>
              <p className="reveal">Every section was designed with one question in mind: what does the person about to quit actually need right now?</p>
            </div>

            <div className="bento">
              {tiles.map((t, i) => (
                <article className={`tile reveal${t.size ? " " + t.size : ""}`} style={d((i % 3) * 0.08)} key={t.title}>
                  <span className="tile-num" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
                  <div className="tile-icon"><Icon name={t.icon} /></div>
                  <h4 className="tile-title">{t.title}</h4>
                  <p>{t.body}</p>
                  {t.tiers && (
                    <div className="tier" aria-label={t.tiers.join(", ")}>
                      {t.tiers.map((x) => <span key={x}>{x}</span>)}
                    </div>
                  )}
                  <span className="tile-tag">{t.tag}</span>
                </article>
              ))}
            </div>

            <div className="vig-grid vig-block">
              <div className="vig-text">
                <p className="eyebrow reveal">Mentorship in a Planner</p>
                <h3 className="vig-title reveal">Built for the moments you <span className="gold">normally quit</span></h3>
                <p className="reveal">Standard planners leave you alone at the hardest point: the 60% mark, when the initial excitement has faded and the finish line is still invisible.</p>
                <p className="reveal">Pivotal365 stays with you. The Vignettes and Mini Chapters are a coach in the margins, written for the specific emotional realities of ambition: comparison, self-doubt, toxic environments, and the perfectionism that kills projects at 80%.</p>
                <ul className="vig-list reveal">
                  {vignetteList.map((v, i) => <li key={v}><span className="num">V{i + 1}</span> {v}</li>)}
                </ul>
              </div>
              <div className="vig-cards">
                {miniChapters.map((m, i) => (
                  <article className="vig-card reveal" style={d(i * 0.1)} key={m.title}>
                    <div className="vig-label">{m.label}</div>
                    <h4>{m.title}</h4>
                    <p>{m.body}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* PRICING */}
        <section className="section pricing" id="get-the-planner" aria-labelledby="pricing-title">
          <div className="container">
            <div className="pricing-head center">
              <p className="eyebrow reveal">Choose Your Format</p>
              <h2 id="pricing-title" className="reveal">One planner. Three ways to hold it.</h2>
              <p className="lede reveal">Available on Amazon now in all three formats. Start where you are.</p>
            </div>
            <div className="price-grid">
              {formats.map((f, i) => (
                <div className={`price-card reveal${f.featured ? " featured" : ""}`} style={d(i * 0.1)} key={f.name}>
                  {f.featured && <div className="badge">Most Popular</div>}
                  <div className="price-format">{f.format}</div>
                  <h3>{f.name}</h3>
                  <div className="price-sub">{f.sub}</div>
                  <div className="price" aria-label={`$${f.dollars}${f.cents}`}><sup>$</sup>{f.dollars}<span className="cents">{f.cents}</span></div>
                  <div className="price-desc">{f.desc}</div>
                  <a href={AMAZON_URL} target="_blank" rel="noopener noreferrer" className={`btn btn-block ${f.featured ? "btn-gold" : "btn-line"}`}>
                    {f.cta} <span className="arrow" aria-hidden="true">→</span><NewTab />
                  </a>
                  <ul className="price-features">{f.features.map((x) => <li key={x}>{x}</li>)}</ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FOUNDER */}
        <section className="section author" id="author" aria-labelledby="author-title">
          <div className="container author-grid">
            <div className="author-photo reveal">
              <Image src="/ChapmanHSW-2.jpeg" alt="Carlton Chapman, founder of Pivotal365" width={980} height={1466} sizes="(max-width: 900px) 360px, 400px" />
              <div className="author-caption"><b>Carlton Chapman</b>Founder &amp; Author, Pivotal365</div>
            </div>
            <div className="author-text">
              <p className="eyebrow reveal">The Founder</p>
              <h2 id="author-title" className="reveal">Carlton Chapman built Pivotal365 for <span className="accent">the person he used to be.</span></h2>
              <p className="reveal">Pivotal365 was not designed from the outside looking in. It was built from inside the specific frustration of having too many ideas, too much potential, and a graveyard of things that should have been finished.</p>
              <p className="reveal">The Quiet Power philosophy (Identity first, Vision curation, Structure as elegance, Reflection as refinement) is the architecture that closed those loops in his own life.</p>
              <p className="reveal">Carlton&apos;s conviction: the chronically ambitious don&apos;t have a discipline problem. They have a framework problem. Pivotal365 is his answer, designed for the way the quietly unstoppable actually work.</p>
              <div className="author-callout reveal">
                <p>&quot;You did not come this far to only come this far. The year you finally finish what you started begins on the next page.&quot;</p>
              </div>
            </div>
          </div>
        </section>

        {/* JOIN */}
        <section className="section join" id="join" aria-labelledby="join-title">
          <div className="container">
            <div className="join-card reveal">
              <div>
                <p className="eyebrow">Join the Movement</p>
                <h2 id="join-title">Make this your <span className="gold">pivot year</span></h2>
                <p>Get on the Pivotal365 list to hear first when The Weekly Pivot, the community and workshops with Carlton open up.</p>
              </div>
              <JoinForm />
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="cta" aria-labelledby="cta-title">
          <Starfield density={110} />
          <div className="cta-inner">
            <p className="eyebrow reveal">The Year Starts Now</p>
            <h2 id="cta-title" className="reveal">The year you <span className="gold shimmer">finish</span> what you started.</h2>
            <p className="reveal">One year. One quiet pivot. Start with the planner today, and join the movement for what comes next.</p>
            <div className="cta-buttons reveal">
              <Magnetic>
                <a href={AMAZON_URL} target="_blank" rel="noopener noreferrer" className="btn btn-gold btn-lg">
                  Get the Planner on Amazon <span className="arrow" aria-hidden="true">→</span><NewTab />
                </a>
              </Magnetic>
              <a href="#join" className="btn btn-line btn-lg">Join the Movement</a>
            </div>
            <div className="cta-formats reveal">
              {formats.map((f) => (
                <div className="cta-format" key={f.name}>
                  <div className="cta-format-label">{f.name}</div>
                  <div className="cta-format-price">${f.dollars}{f.cents}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container">
          <div className="footer-top">
            <div>
              <div className="footer-logo">Pivotal<span>365</span></div>
              <div className="footer-tagline">Master the art of the quiet pivot. Start less. Finish more.</div>
            </div>
            <nav aria-label="Footer navigation">
              <ul className="footer-links">
                <li><a href="#philosophy">Philosophy</a></li>
                <li><a href="#framework">The Path</a></li>
                <li><a href="#start">The Planner</a></li>
                <li><a href="#author">Carlton Chapman</a></li>
                <li><a href="#join">Join</a></li>
                <li><a href={AMAZON_URL} target="_blank" rel="noopener noreferrer">Buy on Amazon<NewTab label=" (opens in new tab)" /></a></li>
              </ul>
            </nav>
          </div>
          <div className="footer-copy">
            <span>© {new Date().getFullYear()} Pivotal365 · Carlton Chapman</span>
            <em>Master the art of the quiet pivot</em>
          </div>
        </div>
      </footer>

      <StickyCta />
    </>
  );
}
