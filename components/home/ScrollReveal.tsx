"use client";

// Wires up every `data-reveal="<delayMs>"` element on the homepage: fades
// in and rises 26px over .7s the first time it scrolls into view. A single
// IntersectionObserver for the whole page (rather than one per element),
// matching the design reference's wireReveal(). Mount once, near the top
// of the homepage tree. Renders nothing — it's pure wiring, and skips
// entirely (leaving elements visible) under prefers-reduced-motion.
import { useEffect } from "react";

export default function ScrollReveal() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    if (!els.length || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const de = document.documentElement;
    if (de.scrollHeight <= de.clientHeight + 40) return;

    const reveal = (el: HTMLElement) => {
      el.style.opacity = "1";
      el.style.transform = "none";
    };

    els.forEach((el) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(26px)";
      el.style.transition = "opacity .7s cubic-bezier(.16,1,.3,1), transform .7s cubic-bezier(.16,1,.3,1)";
      el.style.transitionDelay = `${Number(el.dataset.reveal) || 0}ms`;
    });

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            reveal(e.target as HTMLElement);
            io.unobserve(e.target);
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.05 }
    );
    els.forEach((el) => io.observe(el));

    const timer = setTimeout(() => {
      els.forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.top < window.innerHeight && r.bottom > 0) {
          reveal(el);
          io.unobserve(el);
        }
      });
    }, 2500);

    return () => {
      io.disconnect();
      clearTimeout(timer);
    };
  }, []);

  return null;
}
