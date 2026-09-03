// Homepage "About" section: photo + quick facts, what-I-do/interests,
// resume snapshot timeline, and skills & tools — all inline on the
// homepage rather than the standalone /about page.
import Reveal from "@/components/Reveal";
import AboutVisual from "./AboutVisual";

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

const RESUME_ITEMS = [
  {
    years: "2026–2028",
    title: "MBA Candidate",
    description: "AI for Business certificate. Haas Tech Club, Haas AI Club, Haas Consulting Club.",
    org: "UC Berkeley, Haas",
    location: "Berkeley, CA",
  },
  {
    years: "2025–2026",
    title: "Growth & Customer Acquisition Manager",
    description:
      "Led a team of 4. Relaunched the digital credit card acquisition channel (+50% new cardholders) and scaled a secured credit card to national rollout.",
    org: "Banco Falabella",
    location: "Lima, Peru",
  },
  {
    years: "2021–2025",
    title: "Business Analyst / Location Analyst",
    description:
      "Product strategy, growth, and data-driven insights for banking, insurance, retail, and microfinance clients across Peru, Bolivia, Colombia, Ecuador, Guatemala, and Panama.",
    org: "McKinsey & Company",
    location: "Lima, Peru",
  },
  {
    years: "2016–2020",
    title: "BS, Industrial Engineering",
    description: "Top 10% of class. International exchange at UNAM, Mexico (2019).",
    org: "Universidad Privada del Norte, Peru",
    location: "",
  },
];

const SKILL_GROUPS = [
  {
    category: "Product & Strategy",
    items: ["Product Strategy", "Product Development", "Innovation & Strategy", "User-Centric Design"],
  },
  {
    category: "Growth & Data",
    items: ["Growth PM", "Data-Driven Decisions", "Market Research", "AI-Native Tools", "Metabase", "Google Cloud Platform"],
  },
  {
    category: "Leadership & Execution",
    items: ["Cross-functional Leadership", "Stakeholder Alignment", "Execution", "Go-to-Market Strategy"],
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="scroll-mt-[90px] pb-32">
      <Reveal>
        <div className="mb-14 flex items-baseline justify-between border-b border-border pb-3.5">
          <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent">About</span>
          <span className="font-mono text-[11px] tracking-[0.1em] text-muted">Lima &rarr; Berkeley</span>
        </div>
      </Reveal>

      <div className="flex flex-wrap items-start gap-x-14 gap-y-12 pb-[88px]">
        <AboutVisual />

        <Reveal delay={120} className="min-w-0 flex-1 basis-[440px]">
          <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-x-14 gap-y-10">
            <div>
              <div className="pb-[18px] font-mono text-[11px] uppercase tracking-[0.14em] text-muted">What I do</div>
              <div className="flex flex-col gap-3">
                {WHAT_I_DO.map((item) => (
                  <div key={item} className="grid grid-cols-[22px_1fr] text-[15px] leading-[1.6]">
                    <span className="text-accent">&middot;</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="pb-[18px] font-mono text-[11px] uppercase tracking-[0.14em] text-muted">Interests</div>
              <div className="flex flex-col gap-3">
                {INTERESTS.map((item) => (
                  <div key={item} className="grid grid-cols-[22px_1fr] text-[15px] leading-[1.6] text-muted">
                    <span className="text-accent">&middot;</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      <Reveal className="mb-10 border-b border-border pb-3.5 font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
        Resume snapshot
      </Reveal>
      <Reveal delay={40} className="flex flex-col pb-[88px]">
        {RESUME_ITEMS.map((item) => (
          <div
            key={item.title}
            className="grid grid-cols-[minmax(0,110px)_minmax(0,1fr)_minmax(0,200px)] items-baseline gap-6 border-b border-border py-[26px]"
          >
            <div className="font-mono text-xs text-accent">{item.years}</div>
            <div>
              <div className="pb-1.5 text-[17px] font-semibold">{item.title}</div>
              <div className="text-sm leading-[1.6] text-muted">{item.description}</div>
            </div>
            <div className="font-mono text-xs leading-[1.7] text-muted">
              {item.org}
              {item.location && (
                <>
                  <br />
                  {item.location}
                </>
              )}
            </div>
          </div>
        ))}
      </Reveal>

      <Reveal className="mb-10 border-b border-border pb-3.5 font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
        Skills &amp; tools
      </Reveal>
      <Reveal delay={40} className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-5">
        {SKILL_GROUPS.map((group) => (
          <div key={group.category} className="border border-border bg-surface px-6 py-[26px]">
            <div className="pb-[18px] text-sm font-semibold">{group.category}</div>
            <div className="flex flex-wrap gap-[7px]">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-accent/[0.34] bg-accent/[0.13] px-3 py-1.5 font-mono text-[11px] text-accent"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
