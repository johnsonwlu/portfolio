export interface Project {
  title: string;
  category: string;
  period: string;
  label: string;
  description: string;
  detail: string;
  tags: string[];
  href: string | null;
  art: "forecast" | "stocks" | "courses" | "database";
}

export const experience = [
  {
    company: "D3 Security",
    role: "DevOps Engineer / Software Engineer",
    period: "May 2025 — Present",
    location: "Vancouver, BC · Permanent full-time",
    summary:
      "Building the platforms, delivery workflows, and observability that help engineering teams move with confidence.",
    highlights: [
      "Introduced a Pulumi (Python) IaC platform managing 14+ Azure resources across three environments, cutting provisioning from 3.5 hours to 30 minutes with integrated testing and rollback.",
      "Led a CI/CD upgrade pipeline for customer-facing sites, automating manual deployment steps and reducing downtime by 20 minutes per deployment.",
      "Implemented GitOps with Argo CD and Helm, reducing manual deployment steps by 75% and standardizing releases across environments.",
      "Implemented multi-tenant log ingestion using Vector, Pulsar, and Istio, with mTLS authentication and per-tenant topic isolation.",
      "Architected and built a self-service Go/React application for environment state management, removing direct infrastructure dependencies and reducing cross-team provisioning delays by 10 hours per week.",
      "Architected a custom Go monitoring system with Prometheus and Grafana, replacing legacy systems and reducing mean time to detection (MTTD) by 87.5%.",
      "Designed and shipped an agent-driven pipeline remediation tool that analyzes CI failures and opens human-reviewed fix pull requests.",
      "Mentored four onboarding DevOps engineers in cloud infrastructure and deployment processes.",
    ],
    tags: ["Azure", "Pulumi", "Go", "Kubernetes", "Argo CD", "Prometheus"],
  },
  {
    company: "Eureka DevSecOps",
    role: "Software Engineer",
    period: "Sep 2024 — May 2025",
    location: "Vancouver, BC · Hybrid · Permanent full-time",
    summary:
      "Full-stack development for an application security platform, from vulnerability imports to CI/CD integrations.",
    highlights: [
      "Expanded multi-pipeline functionality across Redux actions and selectors, routing, filtering, dashboard processing, and deleted and legacy pipeline data.",
      "Designed a CSV/XLSX vulnerability import workflow with parsing, validation, transformation, automatic system/component/profile creation, and Azure Blob Storage integration.",
      "Developed application data flows using React/Redux, asynchronous thunks, event logs, read models, and Azure Blob Storage.",
      "Troubleshot GitLab, CircleCI, GitHub, and OWASP ZAP integrations, including container filesystem permission and ownership issues affecting scanners.",
      "Contributed to automated testing, release validation, customer troubleshooting, and technical documentation for application and CI/CD integrations.",
    ],
    tags: ["React", "Redux", "Azure Blob Storage", "CI/CD", "Jest"],
  },
  {
    company: "Eureka DevSecOps",
    role: "Application Security Developer",
    period: "May 2024 — Aug 2024",
    location: "Vancouver, BC · Hybrid · Co-op",
    summary:
      "Developing multi-component workflows and making vulnerability management easier to use.",
    highlights: [
      "Developed multi-component and multi-pipeline functionality using JavaScript, React, Redux, and Azure.",
      "Implemented schema migrations and validation for multi-component support, with supporting data fetching, propagation, and component management.",
      "Built bulk vulnerability management, including multi-vulnerability selection and ignore workflows.",
      "Contributed unit tests and resolved defects across vulnerability management, scanning, and frontend workflows.",
    ],
    tags: ["JavaScript", "React", "Redux", "Azure", "Application security"],
  },
  {
    company: "Smile Digital Health",
    role: "Software Developer",
    period: "Sep 2021 — Aug 2022",
    location: "Toronto, ON · Remote · Co-op",
    summary: "Reliable healthcare data processing, regression testing, and practical debugging.",
    highlights: [
      "Collaboratively developed and maintained an interceptor processing over 100,000 data resources before transmission to a backend database.",
      "Implemented regression tests with JUnit and Mockito, increasing testing coverage by 20%.",
      "Strengthened error handling for over 350 cases, improving reliability and helping developers diagnose failures.",
      "Used Postman to investigate API requests and customer-reported bugs, creating reproduction steps for over 20 incidents.",
    ],
    tags: ["Java", "Spring Boot", "JUnit", "Mockito", "Postman"],
  },
];

export const projects: Project[] = [
  {
    title: "Tricast",
    category: "AI & data",
    period: "May 2026 — Present",
    label: "01 / PROBABILITY, NOT CERTAINTY",
    description:
      "A probabilistic stock scenario tool combining Monte Carlo price distributions, live FRED macro regime scoring, and AI-assisted analysis.",
    detail:
      "Self-hosted Qwen 30B via Ollama and Claude support the analysis, with schema-level guardrails and Brier-scored forecast tracking. Built with Python and Streamlit.",
    tags: ["Python", "Streamlit", "Ollama", "Pandas", "NumPy", "SQLite"],
    href: null,
    art: "forecast",
  },
  {
    title: "KnowlEdge",
    category: "Web apps",
    period: "University project",
    label: "02 / ROOM TO LEARN",
    description:
      "A course scheduling platform helping students find and enroll in courses that match their interests and prerequisites.",
    detail: "An exploration of making course discovery and planning easier for students.",
    tags: ["Course planning", "Web application"],
    href: "https://github.com/abigailMoraes/KnowlEdgePublic",
    art: "courses",
  },
  {
    title: "Stock Tracker",
    category: "Web apps",
    period: "University project",
    label: "03 / A CLEARER VIEW",
    description:
      "A web app for tracking stock portfolios with real-time price data, historical charts, and watchlist management.",
    detail: "Portfolio tracking, price history, and watchlists brought into one interface.",
    tags: ["Portfolio tracking", "Data visualization"],
    href: "https://github.com/johnsonwlu/Stock_Tracker",
    art: "stocks",
  },
  {
    title: "League of Legends Database",
    category: "Data systems",
    period: "University project",
    label: "04 / CONNECTING THE DOTS",
    description:
      "A relational database application for querying and exploring League of Legends game data, using SQL and a custom query interface.",
    detail: "A project exploring relationships in game data through a custom query interface.",
    tags: ["SQL", "Relational databases"],
    href: "https://github.com/johnsonwlu/League-of-Legends-Database",
    art: "database",
  },
];

export const skillGroups = [
  {
    title: "Cloud & infrastructure",
    skills: [
      "Azure",
      "AWS",
      "Google Cloud Platform",
      "Kubernetes",
      "AKS",
      "ACR",
      "Docker",
      "Helm",
      "Pulumi",
      "Terraform",
      "Ansible",
      "Infrastructure as code",
      "Linux",
      "Red Hat Linux",
      "Azure Blob Storage",
    ],
  },
  {
    title: "Delivery & reliability",
    skills: [
      "CI/CD",
      "GitOps",
      "Argo CD",
      "Jenkins",
      "GitLab",
      "Prometheus",
      "Grafana",
      "Elastic Stack (ELK)",
      "Elasticsearch",
      "Logstash",
      "Kibana",
      "On-call support",
      "Bash",
      "PowerShell",
    ],
  },
  {
    title: "Software & data",
    skills: [
      "Go",
      "Python",
      "Java",
      "JavaScript",
      "TypeScript",
      "C",
      "C++",
      "C#",
      "Ruby",
      "React",
      "Redux",
      "HTML",
      "CSS",
      "Front-end development",
      "Spring Boot",
      "Redis",
      "SQLite",
      "Pandas",
      "NumPy",
    ],
  },
  {
    title: "AI & developer tools",
    skills: [
      "Generative AI",
      "LLM integration",
      "Ollama",
      "Streamlit",
      "LiteLLM",
      "Model Context Protocol (MCP)",
      "Claude Code",
      "Claude Skills",
    ],
  },
  {
    title: "Quality & collaboration",
    skills: ["Jest", "JUnit", "Maven", "SonarQube", "Snyk", "Code review", "Jira"],
  },
];
