"use client";

import { useEffect, useRef } from "react";

export default function CursorSpotlight() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (!ref.current) return;
      ref.current.style.left = `${e.clientX}px`;
      ref.current.style.top = `${e.clientY}px`;
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      ref={ref}
      className="pointer-events-none fixed z-0 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full"
      style={{
        background: "radial-gradient(circle, rgba(59,130,246,0.06) 0%, transparent 70%)",
        transition: "left 0.12s ease-out, top 0.12s ease-out",
      }}
    />
  );
}
