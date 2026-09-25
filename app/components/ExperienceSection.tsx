import { experience } from "../data/portfolio";

export function ExperienceSection() {
  return (
    <section
      className="experience-section"
      id="experience"
      aria-labelledby="experience-title"
    >
      <div className="section-heading">
        <div>
          <span className="eyebrow">02 / THE PATH SO FAR</span>
          <h2 id="experience-title">
            Built through <em>experience.</em>
          </h2>
        </div>
        <span className="section-aside">SOFTWARE → PLATFORMS → RELIABILITY</span>
      </div>
      <div className="timeline">
        {experience.map((job, index) => (
          <details
            className="experience-entry"
            key={`${job.company}-${job.role}`}
            open={index === 0}
          >
            <summary>
              <span className="experience-date">{job.period}</span>
              <span className="experience-heading">
                <strong>{job.company}</strong>
                <span>{job.role}</span>
              </span>
              <span
                className="expand-indicator"
                aria-hidden="true"
              />
            </summary>
            <div className="experience-body">
              <p className="experience-location">{job.location}</p>
              <p className="experience-summary">{job.summary}</p>
              <ul>
                {job.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
              <div className="tag-list">
                {job.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
