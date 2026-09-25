import Image from "next/image";

export function ContactSection() {
  return (
    <section
      className="contact-section"
      id="next"
    >
      <div
        className="closing-landscape"
        aria-hidden="true"
      >
        <Image
          src="/alpine-expanded.webp"
          alt=""
          fill
          sizes="100vw"
        />
      </div>
      <span className="eyebrow">05 / THE NEXT CHAPTER</span>
      <h2>
        There’s always
        <br />
        <em>more to explore.</em>
      </h2>
      <p>New systems. New ideas. A trail I haven’t taken yet.</p>
      <a
        className="primary-link"
        href="mailto:lujohnson2000@gmail.com"
      >
        Let’s start a conversation <span>↗</span>
      </a>
      <div className="contact-links">
        <a
          href="https://www.linkedin.com/in/johnson-lu"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn ↗
        </a>
        <a
          href="https://github.com/johnsonwlu"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub ↗
        </a>
      </div>
    </section>
  );
}
