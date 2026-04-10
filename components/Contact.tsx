export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="mx-auto max-w-5xl">
        <p className="mb-4 font-mono text-xs uppercase tracking-widest text-blue-500">Contact</p>
        <h2 className="mb-10 text-2xl font-semibold text-white">Let&apos;s work together.</h2>
        <div className="flex flex-col gap-4">
          <a
            href="mailto:lujohnson2000@gmail.com"
            className="flex items-center gap-3 text-zinc-400 transition-colors hover:text-white"
          >
            <span className="text-blue-500">→</span>
            lujohnson2000@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/johnson-lu"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-zinc-400 transition-colors hover:text-white"
          >
            <span className="text-blue-500">→</span>
            linkedin.com/in/johnson-lu
          </a>
        </div>
      </div>
    </section>
  );
}
