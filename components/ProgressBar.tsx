"use client";

// Thin ink line pinned to the very top of the viewport, above the sticky
// Header (z-60 vs the Header's z-50), that fills left-to-right as you
// scroll. Site-wide, not homepage-only, since it's harmless background
// chrome on any page.
import { useEffect, useRef } from "react";

export default function ProgressBar() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const bar = barRef.current;
    if (!bar) return;

    const onScroll = () => {
      const de = document.documentElement;
      const max = de.scrollHeight - de.clientHeight;
      bar.style.width = max <= 40 ? "0%" : `${(de.scrollTop / max) * 100}%`;
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
      className="fixed left-0 top-0 z-[60] h-1 w-0 bg-ink"
    />
  );
}
