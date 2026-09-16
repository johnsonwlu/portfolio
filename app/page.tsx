"use client";

import { useState } from "react";
import { AboutSection } from "./components/AboutSection";
import { ContactSection } from "./components/ContactSection";
import { ExperienceSection } from "./components/ExperienceSection";
import { ImpactSection } from "./components/ImpactSection";
import { LandscapeHero } from "./components/LandscapeHero";
import { ProjectsSection } from "./components/ProjectsSection";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";
import { SkillsSection } from "./components/SkillsSection";

export default function Home() {
  const [quiet, setQuiet] = useState(false);

  function toggleStillness() {
    setQuiet((current) => !current);
  }

  return (
    <div className={quiet ? "portfolio quiet" : "portfolio"}>
      <a
        className="skip-link"
        href="#main"
      >
        Skip to content
      </a>
      <SiteHeader />
      <main id="main">
        <LandscapeHero
          quiet={quiet}
          onToggleStillness={toggleStillness}
        />
        <div className="trail-divider">
          <span>ROOTED IN NATURE. WIRED TO BUILD.</span>
          <span className="divider-line" />
          <span className="divider-line" />
          <a href="#work">A FEW THINGS ALONG THE WAY ↓</a>
        </div>
        <ImpactSection />
        <ProjectsSection />
        <ExperienceSection />
        <SkillsSection />
        <AboutSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  );
}
