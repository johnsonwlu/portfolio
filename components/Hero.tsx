export default function Hero() {
  return (
    <section
      id="home"
      className="flex min-h-screen flex-col items-center justify-center px-6 text-center"
    >
      <p className="mb-4 font-mono text-xs uppercase tracking-widest text-blue-500">
        DevOps Engineer
      </p>
      <h1 className="mb-6 text-6xl font-bold tracking-tight text-white sm:text-7xl">
        Johnson Lu
      </h1>
      <p className="mb-10 max-w-xl text-lg leading-relaxed text-zinc-400">
        Building the infrastructure that helps engineering teams ship faster and more reliably.
      </p>
      <div className="flex gap-4">
        <a
          href="https://github.com/johnsonwlu"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg bg-blue-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-500"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/johnson-lu"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg border border-zinc-700 px-6 py-3 text-sm font-medium text-zinc-300 transition-colors hover:border-zinc-500 hover:text-white"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
}
