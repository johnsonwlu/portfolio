"use client";

const navLinks = [
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-800 bg-[#0d0d0d]/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <span className="font-semibold tracking-tight text-white">Johnson Lu</span>
        <div className="flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-zinc-400 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://www.linkedin.com/in/johnson-lu"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-zinc-400 transition-colors hover:text-white"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </nav>
  );
}
