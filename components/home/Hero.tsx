// Homepage intro: headline, one-line pitch, CTAs, and a quick-facts panel.
// Above the fold, so it animates in immediately on load (animate-fade-up)
// rather than on scroll, same convention as the About/Contact pages.
const QUICK_FACTS = [
  { label: "NOW", value: "MBA, Berkeley Haas" },
  { label: "BEFORE", value: "McKinsey · Falabella" },
  { label: "FOCUS", value: "Growth · Credit" },
  { label: "SEEKING", value: "PM, summer 2027", accent: true },
];

export default function Hero() {
  return (
    <div id="top" className="relative flex flex-wrap items-end gap-x-16 gap-y-14">
      <div className="min-w-0 flex-1 basis-[480px]">
        <div className="animate-fade-up pb-[30px] font-mono text-[11px] uppercase tracking-[0.16em] text-accent">
          Product Manager · Fintech · Emerging Markets
        </div>
        <h1 className="animate-fade-up delay-1 mb-[30px] text-pretty font-serif text-[clamp(40px,5.2vw,68px)] font-bold leading-[1.06] tracking-[-0.025em]">
          I build financial products that unlock opportunity for underserved communities.
        </h1>
        <p className="animate-fade-up delay-2 max-w-[580px] text-pretty text-[17px] leading-[1.75] text-muted">
          Growth PM working across Peru and Latin America. Four years at McKinsey on banking and microfinance
          strategy, then a year scaling credit products at Banco Falabella. Currently an MBA candidate at Berkeley
          Haas.
        </p>
        <div className="animate-fade-up delay-3 mt-10 flex gap-3.5">
          <a href="#work" className="btn-primary">
            See my work
          </a>
          <a href="#contact" className="btn-secondary">
            Get in touch
          </a>
        </div>
      </div>

      <div className="animate-fade-up delay-4 flex flex-none basis-[300px] flex-col font-mono text-[11px]">
        {QUICK_FACTS.map((fact, index) => (
          <div
            key={fact.label}
            className={`flex justify-between border-t border-border py-3 ${index === QUICK_FACTS.length - 1 ? "border-b" : ""}`}
          >
            <span className="text-muted">{fact.label}</span>
            <span className={fact.accent ? "text-accent" : undefined}>{fact.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
