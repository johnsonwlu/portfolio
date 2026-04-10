"use client";

import { useState, useEffect } from "react";

const titles = ["DevOps Engineer", "Platform Engineer", "Infrastructure Engineer"];

export default function TypingText() {
  const [text, setText] = useState("");
  const [titleIdx, setTitleIdx] = useState(0);
  const [phase, setPhase] = useState<"typing" | "pausing" | "deleting">("typing");

  useEffect(() => {
    const current = titles[titleIdx];

    if (phase === "typing") {
      if (text.length < current.length) {
        const t = setTimeout(() => setText(current.slice(0, text.length + 1)), 80);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setPhase("deleting"), 2200);
        return () => clearTimeout(t);
      }
    }

    if (phase === "deleting") {
      if (text.length > 0) {
        const t = setTimeout(() => setText(current.slice(0, text.length - 1)), 40);
        return () => clearTimeout(t);
      } else {
        setTitleIdx((prev) => (prev + 1) % titles.length);
        setPhase("typing");
      }
    }
  }, [text, phase, titleIdx]);

  return (
    <span>
      {text}
      <span className="ml-0.5 inline-block h-[1em] w-0.5 translate-y-[2px] bg-blue-500 align-middle animate-pulse" />
    </span>
  );
}
