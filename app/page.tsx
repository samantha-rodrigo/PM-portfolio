import Link from "next/link";
import { SITE } from "@/lib/site";

// Short topic tags shown under the intro paragraph, just for visual texture
// and to hint at focus areas before the visitor reaches the About page.
const FOCUS_TAGS = ["Fintech", "Growth", "Emerging Markets", "AI Products"];

export default function Home() {
  return (
    // min-h subtracts the header's height (73px) so the hero fills the
    // rest of the viewport without a second scroll on tall screens.
    <section className="relative flex min-h-[calc(100vh-73px)] items-center justify-center overflow-hidden px-6">
      {/* Decorative wave graphic at the bottom of the hero. Two layered
          paths (one lighter, one darker) give it some depth instead of
          being a single flat shape, and drift slowly side to side
          (animate-wave-drift, defined in globals.css) so the page doesn't
          feel completely still. aria-hidden because it's purely visual. */}
      <svg
        className="pointer-events-none absolute inset-x-0 bottom-0 h-72 w-full animate-wave-drift"
        viewBox="0 0 1000 240"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path d="M0,140 C250,220 750,60 1000,140 L1000,240 L0,240 Z" className="fill-accent/[0.07]" />
        <path d="M0,170 C300,240 700,90 1000,170 L1000,240 L0,240 Z" className="fill-accent/[0.14]" />
      </svg>

      {/* Each child below fades up in sequence on page load (animate-fade-up
          + a delay-N class), instead of the whole hero appearing at once. */}
      <div className="relative mx-auto max-w-[700px] text-center">
        <span className="animate-fade-up mb-6 inline-block rounded-full border border-accent/30 bg-accent-soft px-4 py-1 text-xs uppercase tracking-widest text-accent">
          Product Manager
        </span>

        <h1 className="animate-fade-up delay-1 text-5xl font-bold sm:text-6xl md:text-7xl">{SITE.name}</h1>
        <p className="animate-fade-up delay-2 mt-4 text-lg text-accent sm:text-xl">{SITE.tagline}</p>
        <p className="animate-fade-up delay-3 mx-auto mt-6 max-w-[560px] text-balance text-muted">
          Fast decision-maker. Cross-functional leader. McKinsey-trained strategist.
          I build financial products that unlock opportunity for underserved communities.
        </p>

        <div className="animate-fade-up delay-4 mt-6 flex flex-wrap items-center justify-center gap-2">
          {FOCUS_TAGS.map((tag) => (
            <span key={tag} className="rounded-full border border-border px-3 py-1 text-xs text-muted">
              {tag}
            </span>
          ))}
        </div>

        <div className="animate-fade-up delay-5 mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link href="/work" className="btn-primary">
            See My Work
          </Link>
          <Link href="/contact" className="btn-secondary">
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  );
}
