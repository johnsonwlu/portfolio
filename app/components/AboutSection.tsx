export function AboutSection() {
  return (
    <section
      className="about-section"
      id="about"
    >
      <div
        className="about-mark"
        aria-hidden="true"
      >
        <span>STAY CURIOUS</span>
      </div>
      <div>
        <span className="eyebrow">04 / BEYOND THE TERMINAL</span>
        <h2>
          Less noise.
          <br />
          <em>More perspective.</em>
        </h2>
        <p>
          I bridge software and infrastructure: CI/CD pipelines, IaC platforms, and GitOps workflows
          that turn complex systems into reliable, reproducible processes.
        </p>
        <p>
          Nature gives me room to think. This space brings both sides of me together: a little
          structured, a little exploratory, and always a work in progress.
        </p>
        <div className="education">
          <span className="eyebrow">EDUCATION / AUG 2024</span>
          <h3>The University of British Columbia</h3>
          <p>Bachelor of Science · Computer Science</p>
        </div>
      </div>
      <div className="margin-note">
        Not all connections
        <br />
        need a network.<span>✳</span>
      </div>
    </section>
  );
}
