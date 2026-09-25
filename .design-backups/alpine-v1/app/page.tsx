"use client";

import Image from "next/image";
import { useState } from "react";

const observations = [
  { name: "Perspective", label: "01 / OBSERVE", text: "Step back. See the whole system, not just the symptom.", x: "57%", y: "32%" },
  { name: "The path ahead", label: "02 / EXPLORE", text: "On the trail or in a codebase, curiosity is a good compass.", x: "43%", y: "68%" },
  { name: "Small details", label: "03 / NOTICE", text: "Small details make a difference. In nature. In the systems we build.", x: "70%", y: "77%" },
];
const areas = [
  { title: "Foundations for what’s next", type: "Platform & DevOps", category: "Infrastructure", className: "platform", text: "The infrastructure behind the experience. A place for stories about platforms, delivery workflows, and making the path from idea to production smoother.", note: "Project details will be added here." },
  { title: "Making complexity feel simple", type: "Software & reliability", category: "Software", className: "software", text: "Software that earns trust. A place for stories about building useful tools, understanding systems, and keeping them dependable.", note: "Project details will be added here." },
];
export default function Home() {
  const [observation, setObservation] = useState<number | null>(null);
  const [filter, setFilter] = useState("All");
  const [expanded, setExpanded] = useState<string | null>(null);
  const [quiet, setQuiet] = useState(false);
  return (
    <div className={quiet ? "portfolio quiet" : "portfolio"}>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header">
        <a className="wordmark" href="#" aria-label="Johnson Lu home">johnson lu<span className="wordmark-dot">.</span></a>
        <nav aria-label="Main navigation"><a href="#work">Engineering <span>02</span></a><a href="#about">Off the clock</a><a className="nav-contact" href="#next">What’s next <span>↗</span></a></nav>
      </header>
      <main id="main">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <div className="eyebrow"><span className="green-dot" /> ENGINEER BY TRADE. EXPLORER BY NATURE.</div>
            <h1 id="hero-title">Building systems.<br />Finding balance.<br /><em>Taking the trail.</em></h1>
            <p className="intro">Hi, I’m Johnson. I work across platform engineering, DevOps, software, and reliability. Away from the keyboard, you’ll find my curiosity pointed outside.</p>
            <a className="primary-link" href="#work">Explore my world <span>↘</span></a>
            <div className="hero-footnote"><span className="handwritten">From the command line<br />to the ridgeline.</span><svg viewBox="0 0 80 42" fill="none" aria-hidden="true"><path d="M2 8c25 32 42 24 66 3m-15 1 17-3-5 17" stroke="currentColor" strokeWidth="1.3"/></svg><span className="small-label">A DIFFERENT KIND<br />OF ENVIRONMENT</span></div>
          </div>
          <div className="photo-composition">
            <div className="photo-frame">
              <Image className="landscape" src="/IMG_9867.jpeg" alt="An alpine trail winds through wildflowers and rocky slopes above cloud-covered mountains under a sunlit sky." fill priority sizes="(max-width: 760px) 100vw, 50vw" />
              <div className="photo-shade" />
              <div className="photo-topline"><span>FIELD NOTES — No. 001</span><button className="stillness" onClick={() => setQuiet(!quiet)} aria-pressed={quiet}>{quiet ? "◉ Stillness on" : "◎ Find stillness"}</button></div>
              {observations.map((item, index) => <button key={item.name} className={`photo-point ${observation === index ? "active" : ""}`} style={{ left: item.x, top: item.y }} onClick={() => setObservation(observation === index ? null : index)} aria-label={`${observation === index ? "Close" : "Explore"}: ${item.name}`} aria-expanded={observation === index}><span>0{index + 1}</span></button>)}
              <div className="photo-caption" aria-live="polite"><span className="small-label">{observation === null ? "SOMEWHERE ABOVE THE EVERYDAY" : observations[observation].label}</span><p>{observation === null ? "A little perspective changes everything." : observations[observation].text}</p></div>
            </div>
            <span className="photo-stamp">TAKE THE SCENIC ROUTE <span>✳</span></span>
            <div className="photo-bottom"><span>↟ From my camera roll / IMG_9867</span><span>Tap a marker to wander ↗</span></div>
          </div>
        </section>
        <div className="trail-divider"><span>ROOTED IN NATURE. WIRED TO BUILD.</span><span className="divider-line" /><span className="divider-line" /><a href="#work">A FEW THINGS ALONG THE WAY ↓</a></div>
        <section className="work-section" id="work" aria-labelledby="work-title">
          <div className="section-heading"><div><span className="eyebrow">01 / AT THE KEYBOARD</span><h2 id="work-title">Systems with <em>intention.</em></h2></div><div className="filters" aria-label="Filter engineering areas">{["All", "Infrastructure", "Software"].map(item => <button key={item} aria-pressed={filter === item} onClick={() => setFilter(item)}>{item}</button>)}</div></div>
          <p className="draft-note">Areas I work in. Project stories coming soon.</p>
          <div className="project-grid">{areas.filter(project => filter === "All" || project.category === filter).map(project => <article className="project" key={project.title}>
            <button className={`project-art ${project.className}`} onClick={() => setExpanded(expanded === project.title ? null : project.title)} aria-expanded={expanded === project.title} aria-controls={`details-${project.category}`} aria-label={`Explore ${project.type}`}>
              <span className="concept-label">{project.category === "Infrastructure" ? "01 / THE FOUNDATION" : "02 / THE CONNECTIONS"}</span>
              {project.category === "Infrastructure" ? <div className="terminal"><div className="terminal-bar"><span>● ● ●</span><span>~/the-way-forward</span></div><div className="terminal-body"><span className="terminal-muted"># make room for possibility</span><span><b>→</b> build something thoughtful</span><span><b>→</b> automate the repetitive</span><span><b>→</b> keep learning<span className="cursor">_</span></span></div><span className="terminal-footer">small steps. solid foundations.</span></div> : <div className="orbital-art"><span className="orbit orbit-one" /><span className="orbit orbit-two" /><span className="orbit orbit-three" /><span className="orbit-center">✳</span><span className="orbit-caption">everything is connected.</span></div>}
              <span className="project-arrow">{expanded === project.title ? "−" : "↗"}</span>
            </button>
            <div className="project-meta"><h3>{project.title}</h3><span>{project.type}</span></div>
            <div id={`details-${project.category}`} hidden={expanded !== project.title} className="project-details"><p>{project.text}</p><p>{project.note}</p></div>
          </article>)}</div>
        </section>
        <section className="about-section" id="about"><div className="about-mark" aria-hidden="true"><span>STAY CURIOUS</span></div><div><span className="eyebrow">02 / BEYOND THE TERMINAL</span><h2>Less noise.<br /><em>More perspective.</em></h2><p>Technology and nature are both part of my world. One gives me problems to untangle; the other gives me room to think.</p><p>This space brings them together: a little structured, a little exploratory, and always a work in progress.</p></div><div className="margin-note">Not all connections<br />need a network.<span>✳</span></div></section>
        <section className="contact-section" id="next"><span className="eyebrow">03 / THE NEXT CHAPTER</span><h2>There’s always<br /><em>more to explore.</em></h2><p>New systems. New ideas. A trail I haven’t taken yet.</p><span className="contact-pending">Contact details coming soon</span></section>
      </main>
      <footer><a className="wordmark" href="#">johnson lu.</a><span>Made with intention. Inspired by outside.</span><a href="#">Back to the top ↑</a></footer>
    </div>
  );
}
