import type { Project } from "../data/portfolio";

interface ProjectArtworkProps {
  variant: Project["art"];
}

interface ForecastArtworkProps {
  title: string;
  caption: string;
}

function ForecastArtwork({ title, caption }: ForecastArtworkProps) {
  return (
    <div className="forecast-art">
      <span className="art-title">
        {title}
        <i>↗</i>
      </span>
      <svg
        viewBox="0 0 360 130"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M10 115H350M10 75H350M10 35H350"
          stroke="currentColor"
          opacity=".12"
        />
        <path
          d="M10 108 65 94 120 97 170 68 230 48 285 24 350 8L350 110 285 96 230 105 170 99 120 110 65 106Z"
          fill="currentColor"
          opacity=".12"
        />
        <path
          d="m10 108 55-8 55 3 50-20 60-12 55-12 65-9"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M170 15V120"
          stroke="currentColor"
          strokeDasharray="3 5"
          opacity=".35"
        />
      </svg>
      <span className="art-footnote">{caption}</span>
    </div>
  );
}

function CourseArtwork() {
  const subjects = ["Explore", "Plan", "Learn", "Discover", "Build", "Grow"];

  return (
    <div className="course-art">
      <span className="art-title">
        KnowlEdge <i>✳</i>
      </span>
      <div className="course-grid">
        {subjects.map((subject) => (
          <span key={subject}>{subject}</span>
        ))}
      </div>
      <span className="art-footnote">make room for what interests you.</span>
    </div>
  );
}

function DatabaseArtwork() {
  return (
    <div className="database-art">
      <span>champions</span>
      <i>↔</i>
      <span>matches</span>
      <i>↔</i>
      <span>players</span>
      <small>SELECT curiosity FROM everything;</small>
    </div>
  );
}

/** Decorative illustrations, not product screenshots or actual forecasts. */
export function ProjectArtwork({ variant }: ProjectArtworkProps) {
  switch (variant) {
    case "forecast":
      return (
        <ForecastArtwork
          title="tricast"
          caption="scenarios, with uncertainty built in"
        />
      );
    case "stocks":
      return (
        <ForecastArtwork
          title="the long view"
          caption="price history · portfolios · watchlists"
        />
      );
    case "courses":
      return <CourseArtwork />;
    case "database":
      return <DatabaseArtwork />;
  }
}
