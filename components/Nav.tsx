"use client";

import { useState } from "react";

const navLinks = [
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => setIsOpen(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-800 bg-[#0d0d0d]/90 backdrop-blur-sm">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <span className="font-semibold tracking-tight text-white">Johnson Lu</span>

          {/* Desktop nav */}
          <div className="hidden items-center gap-6 sm:flex">
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

          {/* Hamburger button */}
          <button
            className="flex flex-col gap-1.5 sm:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block h-0.5 w-6 bg-zinc-400 transition-transform duration-300 ${isOpen ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`block h-0.5 w-6 bg-zinc-400 transition-opacity duration-300 ${isOpen ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-6 bg-zinc-400 transition-transform duration-300 ${isOpen ? "-translate-y-2 -rotate-45" : ""}`} />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-[#0d0d0d] sm:hidden">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={handleLinkClick}
              className="text-2xl font-medium text-zinc-300 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://www.linkedin.com/in/johnson-lu"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleLinkClick}
            className="text-2xl font-medium text-zinc-300 transition-colors hover:text-white"
          >
            LinkedIn
          </a>
        </div>
      )}
    </>
  );
}
