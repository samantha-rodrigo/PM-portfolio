"use client";

// One impact stat that counts up from 0 to its final value the first time
// it scrolls into view (McKinsey-style), then holds. Renders the final
// value up front (so it's correct without JS, or under reduced motion) and
// only overwrites it imperatively for the animation, rather than driving
// the count through React state on every frame.
import { useEffect, useRef } from "react";

function format(value: number, prefix: string, suffix: string) {
  return `${prefix}${Math.round(value).toLocaleString("en-US")}${suffix}`;
}

export default function CountUpStat({
  value,
  prefix = "",
  suffix = "",
  label,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
}) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const numberRef = useRef<HTMLDivElement>(null);
  const finalText = format(value, prefix, suffix);

  useEffect(() => {
    const wrap = wrapRef.current;
    const numberEl = numberRef.current;
    if (!wrap || !numberEl) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame: number | null = null;
    const duration = 1400;

    const run = () => {
      const start = Date.now();
      const tick = () => {
        const p = Math.min(1, (Date.now() - start) / duration);
        const eased = 1 - Math.pow(1 - p, 3);
        numberEl.textContent = p >= 1 ? finalText : format(value * eased, prefix, suffix);
        frame = p < 1 ? requestAnimationFrame(tick) : null;
      };
      frame = requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        numberEl.textContent = format(0, prefix, suffix);
        run();
        observer.disconnect();
      },
      { threshold: 0.4 }
    );
    observer.observe(wrap);

    return () => {
      observer.disconnect();
      if (frame !== null) cancelAnimationFrame(frame);
    };
  }, [value, prefix, suffix, finalText]);

  return (
    <div ref={wrapRef}>
      <div ref={numberRef} className="font-serif text-[38px] font-bold leading-none tracking-[-0.02em] text-accent">
        {finalText}
      </div>
      <div className="pt-2 text-[13px] leading-[1.6] text-muted">{label}</div>
    </div>
  );
}
