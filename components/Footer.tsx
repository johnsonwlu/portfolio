export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 px-6 py-8">
      <div className="mx-auto flex max-w-5xl items-center justify-between">
        <p className="font-mono text-xs text-zinc-600">
          © {new Date().getFullYear()} Johnson Lu
        </p>
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/johnsonwlu"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-zinc-600 transition-colors hover:text-zinc-400"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/johnson-lu"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-zinc-600 transition-colors hover:text-zinc-400"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
