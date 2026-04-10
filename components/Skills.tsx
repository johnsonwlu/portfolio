import FadeIn from "./FadeIn";

const skills: Record<string, string[]> = {
  Languages: [
    "Python", "TypeScript", "JavaScript", "Go", "Java", "Ruby", "SQL", "Shell Scripting",
  ],
  "Frameworks & Databases": [
    "React", "Node.js", "Express.js", "FastAPI", "Redux", "MongoDB", "PostgreSQL", "Jest", "JUnit", "Material-UI",
  ],
  "Infrastructure & Tools": [
    "Docker", "Kubernetes", "Helm", "Argo CD", "Pulumi", "Azure", "GitHub Actions", "Bitbucket Pipelines", "Linux", "Git", "Postman",
  ],
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="mx-auto max-w-5xl">
        <FadeIn>
          <p className="mb-12 font-mono text-xs uppercase tracking-widest text-blue-500">Skills</p>
        </FadeIn>
        <div className="space-y-10">
          {Object.entries(skills).map(([category, items], i) => (
            <FadeIn key={category} delay={i * 0.1}>
              <div>
                <p className="mb-4 font-mono text-xs uppercase tracking-widest text-zinc-500">
                  {category}
                </p>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-zinc-700 px-3 py-1.5 text-sm text-zinc-300 transition-colors hover:border-blue-500 hover:text-blue-400"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
