const projects = [
  {
    name: "KnowlEdge",
    description: "A course scheduling platform designed to help students find and enroll in courses that match their interests and prerequisites.",
    href: "https://github.com/abigailMoraes/KnowlEdgePublic",
  },
  {
    name: "Stock Tracker",
    description: "A web app for tracking stock portfolios with real-time price data, historical charts, and watchlist management.",
    href: "https://github.com/johnsonwlu/Stock_Tracker",
  },
  {
    name: "League of Legends Database",
    description: "A relational database application for querying and exploring League of Legends game data, built with SQL and a custom query interface.",
    href: "https://github.com/johnsonwlu/League-of-Legends-Database",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="mx-auto max-w-5xl">
        <p className="mb-2 font-mono text-xs uppercase tracking-widest text-blue-500">Projects</p>
        <p className="mb-12 text-sm text-zinc-500">Personal projects from my time at UBC.</p>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {projects.map((p) => (
            <a
              key={p.name}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-xl border border-zinc-800 bg-[#141414] p-6 transition-colors hover:border-zinc-600"
            >
              <p className="mb-2 font-medium text-white group-hover:text-blue-400 transition-colors">
                {p.name}
              </p>
              <p className="text-sm leading-relaxed text-zinc-500">{p.description}</p>
              <p className="mt-4 font-mono text-xs text-blue-500 opacity-0 transition-opacity group-hover:opacity-100">
                View on GitHub →
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
