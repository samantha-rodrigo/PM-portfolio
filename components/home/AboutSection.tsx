// Homepage "About" section: a rotated photo card with a quick-facts list
// underneath, plus two list cards ("What I do" on ink, "Interests" on
// cream). Pure CSS hover (straightens on hover) — no JS needed.
import Image from "next/image";

const META_ROWS = [
  { label: "LANGUAGES", value: "ES · EN" },
  { label: "MARKETS", value: "6 countries" },
  { label: "TEAM LED", value: "4 people" },
];

const WHAT_I_DO = [
  "Identify high-leverage opportunities using data and AI",
  "Build cross-functional consensus across Risk, Ops, Marketing, and Digital",
  "Ship products that grow",
  "Learn fast and iterate",
];

const INTERESTS = [
  "Financial inclusion in emerging markets",
  "Growth product management",
  "AI-powered financial tools",
  "New cultures through food, music, and marinera",
];

export default function AboutSection() {
  return (
    <section id="about" className="scroll-mt-[70px] border-t-2 border-ink bg-sun text-ink">
      <div className="mx-auto max-w-[1240px] px-6 py-28 sm:px-10">
        <div data-reveal="0" className="flex flex-wrap items-center justify-between gap-3 pb-12">
          <span className="flex items-center gap-2.5 font-mono text-xs uppercase tracking-[0.15em]">
            <span className="h-2 w-2 rounded-full bg-ink" />
            About
          </span>
          <span className="rounded-full border-[1.5px] border-ink px-3.5 py-[7px] font-mono text-[11px] uppercase tracking-[0.15em]">
            Lima → Berkeley
          </span>
        </div>

        <div className="flex flex-wrap items-start gap-x-16 gap-y-12">
          <div data-reveal="0" className="flex-[0_1_320px]">
            <div className="overflow-hidden rounded-[24px] border-2 border-ink bg-cream transition-transform duration-[400ms] [transition-timing-function:cubic-bezier(.34,1.56,.64,1)] [transform:rotate(-1.5deg)] hover:scale-[1.02] hover:[transform:rotate(0deg)]">
              <div className="relative aspect-[4/4.6] w-full border-b-2 border-ink">
                <Image src="/images/headshot.jpg" alt="Samantha Rodrigo" fill sizes="320px" className="object-cover" priority />
              </div>
              <div className="flex flex-col px-5 py-1.5 font-mono text-xs">
                {META_ROWS.map((row, index) => (
                  <div
                    key={row.label}
                    className={`flex justify-between py-3 ${index < META_ROWS.length - 1 ? "border-b-[1.5px] border-dashed border-ink" : ""}`}
                  >
                    <span className="tracking-[0.12em] text-muted-label">{row.label}</span>
                    <span>{row.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div data-reveal="100" className="grid min-w-0 flex-[1_1_480px] grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-5">
            <div className="rounded-[20px] bg-ink px-7 py-[30px] text-cream">
              <div className="pb-3.5 font-mono text-xs uppercase tracking-[0.15em] text-sun">What I do</div>
              <div className="flex flex-col">
                {WHAT_I_DO.map((item, index) => (
                  <div
                    key={item}
                    className={`py-3.5 text-lg font-semibold leading-[1.35] ${index < WHAT_I_DO.length - 1 ? "border-b-[1.5px] border-olive" : "pb-0"}`}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-[20px] border-2 border-ink bg-cream px-7 py-[30px]">
              <div className="pb-3.5 font-mono text-xs uppercase tracking-[0.15em] text-muted-label">Interests</div>
              <div className="flex flex-col">
                {INTERESTS.map((item, index) => (
                  <div
                    key={item}
                    className={`py-3.5 text-lg font-semibold leading-[1.35] ${index < INTERESTS.length - 1 ? "border-b-[1.5px] border-dashed border-ink" : "pb-0"}`}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
