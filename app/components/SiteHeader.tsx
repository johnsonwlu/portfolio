export function SiteHeader() {
  return (
    <header className="site-header">
      <a
        className="wordmark"
        href="#"
        aria-label="Johnson Lu home"
      >
        johnson lu<span className="wordmark-dot">.</span>
      </a>
      <nav aria-label="Main navigation">
        <a href="#work">
          Projects <span>04</span>
        </a>
        <a href="#experience">Experience</a>
        <a
          className="nav-contact"
          href="#next"
        >
          Let’s connect <span>↗</span>
        </a>
      </nav>
    </header>
  );
}
