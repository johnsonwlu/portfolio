import type { Project } from "../data/portfolio";
import { ProjectArtwork } from "./ProjectArtwork";

interface ProjectCardProps {
  project: Project;
  isExpanded: boolean;
  onToggle: () => void;
}

export function ProjectCard({ project, isExpanded, onToggle }: ProjectCardProps) {
  return (
    <article className="project">
      <button
        className={`project-art project-${project.art}`}
        onClick={onToggle}
        aria-expanded={isExpanded}
        aria-controls={`details-${project.art}`}
        aria-label={`Explore ${project.title}`}
      >
        <span className="concept-label">{project.label}</span>
        <ProjectArtwork variant={project.art} />
        <span className="project-arrow">{isExpanded ? "−" : "+"}</span>
      </button>
      <div className="project-meta">
        <h3>{project.title}</h3>
        <span>{project.period}</span>
      </div>
      <p className="project-description">{project.description}</p>
      <div className="tag-list">
        {project.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
      <div
        id={`details-${project.art}`}
        hidden={!isExpanded}
        className="project-details"
      >
        <p>{project.detail}</p>
      </div>
      {project.href && (
        <a
          className="text-link"
          href={project.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          View on GitHub ↗
        </a>
      )}
    </article>
  );
}
