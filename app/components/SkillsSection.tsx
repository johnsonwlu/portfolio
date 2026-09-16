import { skillGroups } from "../data/portfolio";

export function SkillsSection() {
  return (
    <section
      className="skills-section"
      id="skills"
      aria-labelledby="skills-title"
    >
      <span className="eyebrow">03 / TOOLS IN MY PACK</span>
      <h2 id="skills-title">
        A practical <em>toolkit.</em>
      </h2>
      <div className="skill-groups">
        {skillGroups.map((group) => (
          <details
            key={group.title}
            open={group.title === "Cloud & infrastructure"}
          >
            <summary>
              {group.title}
              <span>{group.skills.length.toString().padStart(2, "0")}</span>
            </summary>
            <div className="tag-list">
              {group.skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
