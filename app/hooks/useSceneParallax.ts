import { useEffect, useRef } from "react";

const MAX_SCROLL_DISTANCE = 900;
const PARALLAX_SPEED = 0.12;

/** Moves the landscape gently, unless stillness or reduced motion is enabled. */
export function useSceneParallax(paused: boolean) {
  const sceneRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const scene = sceneRef.current;
    if (!scene) {
      return;
    }

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let animationFrame = 0;

    function updatePosition() {
      animationFrame = 0;
      if (!scene) {
        return;
      }

      let offset = 0;
      if (!paused && !reducedMotion.matches) {
        const distanceScrolled = Math.max(-scene.getBoundingClientRect().top, 0);
        const clampedDistance = Math.min(distanceScrolled, MAX_SCROLL_DISTANCE);
        offset = clampedDistance * PARALLAX_SPEED;
      }

      scene.style.setProperty("--scene-offset", `${offset}px`);
    }

    // Multiple scroll events share one update per animation frame.
    function scheduleUpdate() {
      if (animationFrame === 0) {
        animationFrame = requestAnimationFrame(updatePosition);
      }
    }

    updatePosition();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    reducedMotion.addEventListener("change", scheduleUpdate);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("scroll", scheduleUpdate);
      reducedMotion.removeEventListener("change", scheduleUpdate);
    };
  }, [paused]);

  return sceneRef;
}
