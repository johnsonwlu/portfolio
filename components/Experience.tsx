import FadeIn from "./FadeIn";

const experiences = [
  {
    company: "D3 Security",
    role: "DevOps Engineer",
    period: "May 2025 – Present",
    tech: ["Python", "Kubernetes", "Helm", "Pulumi", "Argo CD"],
    bullets: [
      "Introduced Pulumi (Python) IaC platform managing 14+ Azure resources across 3 environments, reducing provisioning time from 3.5 hours to 30 minutes with integrated testing and rollback",
      "Led implementation of a CI/CD upgrade pipeline for customer-facing sites, fully automating manual deployment steps and reducing downtime by 20 minutes per deployment",
      "Implemented GitOps workflow with Argo CD and Helm, reducing manual deployment steps by 75% and standardizing releases across all environments",
      "Built multi-tenant log ingestion pipeline using Vector, Pulsar, and Istio service mesh with mTLS authentication and per-tenant topic isolation",
    ],
  },
  {
    company: "Eureka DevSecOps",
    role: "Software Engineer I",
    period: "Sept 2024 – May 2025",
    tech: ["Azure DevOps", "Ruby", "Jest"],
    bullets: [
      "Led development of a feature to import ExcelJs sheets with asynchronous uploads to Azure Blob Storage for in-app data display",
      "Built automated testing pipeline in Azure DevOps handling test data setup and execution, reducing manual effort by 90%",
      "Developed GitHub App integration automating user signups through webhook-based account creation and OAuth login",
      "Built user-configurable categorization system for vulnerability data, enabling filtering and grouping across dashboards",
    ],
  },
  {
    company: "Eureka DevSecOps",
    role: "Application Security Developer (Co-op)",
    period: "May 2024 – Aug 2024",
    tech: ["Azure DevOps", "Jest", "Material-UI"],
    bullets: [
      "Created 500+ test cases with Jest, expanding frontend selector coverage from 0% to 82%",
      "Migrated custom data tables to Material UI, removing 1,000 lines of code while adding sorting, filtering, and pagination",
      "Added bulk state modification feature, eliminating the need for users to edit items individually",
    ],
  },
  {
    company: "Smile Digital Health",
    role: "Software Developer (Co-op)",
    period: "Sept 2021 – Aug 2022",
    tech: ["Java", "JUnit", "Mockito", "Postman"],
    bullets: [
      "Developed a data interceptor processing 100,000+ resources before transmission to a backend database",
      "Implemented regression tests using JUnit and Mockito, increasing test coverage by 20%",
      "Strengthened error handling across 350+ cases, enhancing reliability and aiding future diagnosis",
      "Used Postman to investigate API bugs and produce reproduction steps for 20+ customer-reported incidents",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="mx-auto max-w-5xl">
        <FadeIn>
          <p className="mb-12 font-mono text-xs uppercase tracking-widest text-blue-500">
            Experience
          </p>
        </FadeIn>
        <div className="space-y-14">
          {experiences.map((exp, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="flex flex-col gap-4 sm:flex-row sm:gap-10">
                <div className="w-44 flex-shrink-0">
                  <p className="font-mono text-xs text-zinc-500">{exp.period}</p>
                </div>
                <div className="flex-1 border-l border-zinc-800 pl-6">
                  <h3 className="text-base font-semibold text-white">{exp.role}</h3>
                  <p className="mb-3 text-sm text-blue-500">{exp.company}</p>
                  <div className="mb-4 flex flex-wrap gap-2">
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded bg-zinc-800 px-2 py-0.5 font-mono text-xs text-zinc-400"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <ul className="space-y-2">
                    {exp.bullets.map((b, j) => (
                      <li key={j} className="flex gap-3 text-sm leading-relaxed text-zinc-400">
                        <span className="mt-1.5 flex-shrink-0 text-blue-500">▸</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
