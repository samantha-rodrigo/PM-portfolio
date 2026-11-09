// Homepage hero: eyebrow, headline with an ink-highlighted phrase, pitch,
// CTAs and the particle sculpture, followed by a facts-strip card and a
// looping ink marquee band. Above the fold, so entrance uses the sitewide
// animate-fade-up/delay-N classes (immediate on load) rather than
// scroll-triggered data-reveal.
import ParticleSculpture from "./ParticleSculpture";

const QUICK_FACTS = [
  { label: "NOW", value: "MBA, Berkeley Haas" },
  { label: "BEFORE", value: "McKinsey · Falabella" },
  { label: "FOCUS", value: "Growth · Credit" },
  { label: "SEEKING", value: "PM, summer 2027", live: true },
];

const MARQUEE_ITEMS = [
  "Product Strategy",
  "Growth PM",
  "Credit & Payments",
  "Go-to-Market",
  "Stakeholder Alignment",
  "AI-Native Tools",
  "Financial Inclusion",
];

function MarqueeGroup() {
  return (
    <span className="flex gap-7 pr-7">
      {MARQUEE_ITEMS.map((item) => (
        <span key={item} className="flex gap-7">
          <span>{item}</span>
          <span>·</span>
        </span>
      ))}
    </span>
  );
}

export default function Hero() {
  return (
    <div id="top" className="bg-sun text-ink">
      <div className="mx-auto flex max-w-[1240px] flex-wrap items-center gap-x-14 gap-y-10 px-6 py-[72px] sm:px-10">
        <div className="min-w-0 flex-1 basis-[560px]">
          <div className="animate-fade-up flex items-center gap-2.5 pb-8 font-mono text-xs font-medium uppercase tracking-[0.15em]">
            <span className="h-2 w-2 rounded-full bg-ink" />
            Product Manager · tech · Emerging Markets
          </div>
          <h1 className="animate-fade-up delay-1 mb-9 text-balance font-display text-[clamp(44px,5.6vw,80px)] font-bold leading-[1.02] tracking-[-0.045em]">
            I build products that unlock opportunity for{" "}
            <span className="rounded-[0.12em] bg-[linear-gradient(transparent_12%,#0E0E0C_12%,#0E0E0C_94%,transparent_94%)] px-[0.12em] text-sun [box-decoration-break:clone] [-webkit-box-decoration-break:clone]">
              underserved communities.
            </span>
          </h1>
          <p className="animate-fade-up delay-2 max-w-[580px] text-pretty text-lg font-medium leading-[1.6]">
            Growth PM working across Peru and Latin America. Four years at McKinsey on banking, microfinance and
            insurance strategy, then a year scaling credit products at Banco Falabella. Currently an MBA candidate at
            Berkeley Haas.
          </p>
          <div className="animate-fade-up delay-3 flex flex-wrap gap-3 pt-10">
            <a
              href="#work"
              data-cursor="label"
              data-cursor-label="Scroll"
              className="rounded-full bg-ink px-[26px] py-3.5 text-[15px] font-bold text-sun transition-transform duration-[400ms] [transition-timing-function:cubic-bezier(.34,1.56,.64,1)] hover:-translate-y-[3px] hover:scale-[1.04]"
            >
              See my work →
            </a>
            <a
              href="#contact"
              data-cursor="label"
              data-cursor-label="Let's talk"
              className="rounded-full border-2 border-ink px-6 py-3 text-[15px] font-bold transition-[transform,background] duration-[400ms] [transition-timing-function:cubic-bezier(.34,1.56,.64,1)] hover:-translate-y-[3px] hover:scale-[1.04] hover:bg-cream"
            >
              Get in touch
            </a>
          </div>
        </div>

        <div className="animate-fade-up delay-4">
          <ParticleSculpture />
        </div>

        <div
          data-reveal="0"
          className="grid flex-[1_1_100%] grid-cols-[repeat(auto-fit,minmax(210px,1fr))] gap-x-7 rounded-[20px] border-2 border-ink bg-cream px-[22px] py-1 font-mono text-xs"
        >
          {QUICK_FACTS.map((fact) => (
            <div key={fact.label} className="flex items-center justify-between gap-3 py-3.5">
              <span className="tracking-[0.12em] text-muted-label">{fact.label}</span>
              {fact.live ? (
                <span className="flex items-center gap-2 font-semibold">
                  <span className="animate-pulse-dot h-2 w-2 rounded-full bg-live-green" />
                  {fact.value}
                </span>
              ) : (
                <span>{fact.value}</span>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="overflow-hidden border-y-2 border-ink bg-ink py-4 text-sun">
        <div className="animate-marquee flex w-max font-mono text-[13px] font-medium uppercase tracking-[0.15em]">
          <MarqueeGroup />
          <MarqueeGroup />
        </div>
      </div>
    </div>
  );
}
