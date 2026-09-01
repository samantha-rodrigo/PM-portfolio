"use client";

// Wraps any content and fades/slides it into view the first time it
// scrolls into the viewport (using the browser's IntersectionObserver API).
// The actual animation styles live in globals.css under the ".reveal" class
// — this component's only job is to add "is-visible" at the right time.
//
// Usage: <Reveal delay={100}><SomeCard /></Reveal>
// `delay` (ms) staggers a list of items so they animate in one after another
// instead of all at once — see app/work/page.tsx for an example.

import { useEffect, useRef, useState } from "react";

export default function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          // Only need to animate in once, so stop watching after that.
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`}
      style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
    >
      {children}
    </div>
  );
}
