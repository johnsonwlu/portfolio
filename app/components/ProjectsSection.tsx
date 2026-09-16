"use client";

import { useState } from "react";
import { projects } from "../data/portfolio";
import { ProjectCard } from "./ProjectCard";

const PROJECT_FILTERS = ["All", "AI & data", "Web apps", "Data systems"];

export function ProjectsSection() {
  const [filter, setFilter] = useState("All");
  const [expanded, setExpanded] = useState<string | null>(null);
  const visibleProjects = projects.filter((project) => {
    return filter === "All" || project.category === filter;
  });

  function toggleProject(title: string) {
    setExpanded((current) => (current === title ? null : title));
  }

  return (
    <section
      className="work-section"
      id="work"
      aria-labelledby="work-title"
    >
      <div className="section-heading">
        <div>
          <span className="eyebrow">01 / SIDE TRAILS</span>
          <h2 id="work-title">
            Ideas worth <em>exploring.</em>
          </h2>
        </div>
        <div
          className="filters"
          aria-label="Filter projects"
        >
          {PROJECT_FILTERS.map((item) => (
            <button
              key={item}
              aria-pressed={filter === item}
              onClick={() => setFilter(item)}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
      <p className="section-intro">
        From university projects to my current experiments in AI and probabilistic forecasting.
      </p>
      <div className="project-grid">
        {visibleProjects.map((project) => (
          <ProjectCard
            key={project.title}
            project={project}
            isExpanded={expanded === project.title}
            onToggle={() => toggleProject(project.title)}
          />
        ))}
      </div>
    </section>
  );
}
