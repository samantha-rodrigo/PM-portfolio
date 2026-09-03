"use client";

// Thin line at the very top of the page that fills left-to-right as you
// scroll through the homepage. Hides itself on pages/viewports short enough
// that there's nothing to scroll, so it doesn't sit there frozen at 0%.
import { useEffect, useRef } from "react";

export default function ScrollProgressBar() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const bar = barRef.current;
    if (!bar) return;

    const onScroll = () => {
      const de = document.documentElement;
      const max = de.scrollHeight - de.clientHeight;
      if (max <= 40) {
        bar.style.opacity = "0";
        return;
      }
      bar.style.opacity = "1";
      bar.style.width = `${(de.scrollTop / max) * 100}%`;
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div
      ref={barRef}
      aria-hidden="true"
      className="fixed left-0 top-0 z-40 h-0.5 w-0 bg-accent"
    />
  );
}
