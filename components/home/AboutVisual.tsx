"use client";

// The About section's photo + quick-facts meta block. Slides in from the
// left the first time it scrolls into view (Reveal, variant="left"), and
// separately drifts continuously as you scroll through the About section:
// the photo eases right, the meta block eases up, tracking how far through
// the section you've scrolled (0 at the bottom of viewport, 1 once the
// section has scrolled fully past the top).
import { useEffect, useRef } from "react";
import Image from "next/image";
import Reveal from "@/components/Reveal";

const META_ROWS = [
  { label: "LANGUAGES", value: "ES · EN" },
  { label: "MARKETS", value: "6 countries" },
  { label: "TEAM LED", value: "4 people" },
];

export default function AboutVisual({ strength = 64 }: { strength?: number }) {
  const photoRef = useRef<HTMLDivElement>(null);
  const metaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const section = document.getElementById("about");
    if (!section) return;

    let frame: number | null = null;
    const apply = () => {
      frame = null;
      const rect = section.getBoundingClientRect();
      const span = rect.height + window.innerHeight;
      const p = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / span));
      const eased = p * p * (3 - 2 * p);
      if (photoRef.current) photoRef.current.style.transform = `translateX(${(eased * strength).toFixed(2)}px)`;
      if (metaRef.current) metaRef.current.style.transform = `translateY(${(eased * -strength * 0.85).toFixed(2)}px)`;
    };
    const onScroll = () => {
      if (frame === null) frame = requestAnimationFrame(apply);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    apply();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame !== null) cancelAnimationFrame(frame);
    };
  }, [strength]);

  return (
    <Reveal variant="left" className="flex-none basis-[300px]">
      <div ref={photoRef} className="will-change-transform">
        <div className="relative aspect-[4/4.75] w-full overflow-hidden border border-border grayscale-[0.15]">
          <Image
            src="/images/headshot.jpg"
            alt="Samantha Rodrigo"
            fill
            sizes="300px"
            className="object-cover"
            priority
          />
        </div>
      </div>
      <div ref={metaRef} className="will-change-transform flex flex-col pt-5 font-mono text-[11px]">
        {META_ROWS.map((row) => (
          <div key={row.label} className="flex justify-between border-b border-border py-2.5">
            <span className="text-muted">{row.label}</span>
            <span>{row.value}</span>
          </div>
        ))}
      </div>
    </Reveal>
  );
}
