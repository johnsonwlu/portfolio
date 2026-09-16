"use client";

import Image from "next/image";
import { useState, type CSSProperties } from "react";
import { observations } from "../data/observations";
import { useSceneParallax } from "../hooks/useSceneParallax";

interface LandscapeHeroProps {
  quiet: boolean;
  onToggleStillness: () => void;
}

const DEFAULT_OBSERVATION = {
  label: "FIELD NOTES / TAP A MARKER TO EXPLORE",
  text: "A little perspective changes everything.",
};

export function LandscapeHero({ quiet, onToggleStillness }: LandscapeHeroProps) {
  const [selectedObservation, setSelectedObservation] = useState<number | null>(null);
  const [atmosphere, setAtmosphere] = useState(35);
  const sceneRef = useSceneParallax(quiet);
  const sceneStyle = {
    "--atmosphere": atmosphere / 100,
    "--scene-blur": `${atmosphere / 28}px`,
  } as CSSProperties;

  let activeObservation = DEFAULT_OBSERVATION;
  if (selectedObservation !== null) {
    activeObservation = observations[selectedObservation];
  }

  function toggleObservation(index: number) {
    setSelectedObservation((current) => (current === index ? null : index));
  }

  return (
    <section
      className="hero immersive-hero"
      ref={sceneRef}
      aria-labelledby="hero-title"
      style={sceneStyle}
    >
      <div className="scene-image">
        <Image
          src="/alpine-expanded.webp"
          alt="An expanded panorama from my alpine photograph: a rocky trail and wildflowers above a sea of clouds."
          fill
          priority
          sizes="100vw"
        />
      </div>
      <div
        className="scene-wash"
        aria-hidden="true"
      />
      <div
        className="scene-mist mist-one"
        aria-hidden="true"
      />
      <div
        className="scene-mist mist-two"
        aria-hidden="true"
      />
      <div className="hero-copy">
        <div className="eyebrow">
          <span className="green-dot" /> ENGINEER BY TRADE. EXPLORER BY NATURE.
        </div>
        <h1 id="hero-title">
          Building systems.
          <br />
          Finding balance.
          <br />
          <em>Taking the trail.</em>
        </h1>
        <p className="intro">
          Hi, I’m Johnson, a DevOps and software engineer at D3 Security in Vancouver. I build
          reliable platforms and tools that help teams move faster. Away from the keyboard, my
          curiosity points outside.
        </p>
        <a
          className="primary-link"
          href="#work"
        >
          Explore my world <span>↘</span>
        </a>
        <div className="hero-footnote">
          <span className="handwritten">
            From the command line
            <br />
            to the ridgeline.
          </span>
          <svg
            viewBox="0 0 80 42"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M2 8c25 32 42 24 66 3m-15 1 17-3-5 17"
              stroke="currentColor"
              strokeWidth="1.3"
            />
          </svg>
          <span className="small-label">
            A DIFFERENT KIND
            <br />
            OF ENVIRONMENT
          </span>
        </div>
      </div>
      <div
        className="scene-observations"
        aria-label="Explore the landscape"
      >
        {observations.map((item, index) => (
          <button
            key={item.name}
            className={`photo-point ${selectedObservation === index ? "active" : ""}`}
            style={{ left: item.x, top: item.y }}
            onClick={() => toggleObservation(index)}
            aria-label={`${selectedObservation === index ? "Close" : "Explore"}: ${item.name}`}
            aria-expanded={selectedObservation === index}
            aria-controls="scene-note"
          >
            <span>0{index + 1}</span>
          </button>
        ))}
        <div
          className="scene-note"
          id="scene-note"
          aria-live="polite"
        >
          <span className="small-label">{activeObservation.label}</span>
          <p>{activeObservation.text}</p>
        </div>
      </div>
      <div className="scene-toolbar">
        <span className="scene-credit">
          ↟ IMG_9867 <span>/ an expanded perspective</span>
        </span>
        <div className="scene-controls">
          <label
            className="atmosphere-control"
            htmlFor="atmosphere"
          >
            Mist{" "}
            <input
              id="atmosphere"
              type="range"
              min="0"
              max="100"
              value={atmosphere}
              onChange={(event) => setAtmosphere(Number(event.target.value))}
              aria-valuetext={`${atmosphere}% mist`}
            />
            <span>{atmosphere}%</span>
          </label>
          <button
            className="stillness"
            onClick={onToggleStillness}
            aria-pressed={quiet}
          >
            {quiet ? "◉ Stillness on" : "◎ Find stillness"}
          </button>
        </div>
      </div>
    </section>
  );
}
