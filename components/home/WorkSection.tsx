// Homepage "Selected work" section: the Secure Credit Card case study,
// summarized inline with animated impact stats and flip cards, rather than
// linking out to the standalone /work/secure-credit-card page.
import Reveal from "@/components/Reveal";
import CountUpStat from "./CountUpStat";
import FlipCard from "./FlipCard";
import { CASE_STUDIES } from "@/lib/content";

const study = CASE_STUDIES.find((s) => s.slug === "secure-credit-card")!;

export default function WorkSection() {
  return (
    <section id="work" className="scroll-mt-[90px] pb-32">
      <Reveal>
        <div className="mb-14 flex items-baseline justify-between border-b border-border pb-3.5">
          <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent">Selected work</span>
          <span className="font-mono text-[11px] tracking-[0.1em] text-muted">Banco Falabella · 2025–2026</span>
        </div>
      </Reveal>

      <Reveal delay={60}>
        <div className="flex flex-wrap items-start gap-x-14 gap-y-12">
          <div className="min-w-0 flex-1 basis-[420px]">
            <h2 className="mb-[22px] text-pretty font-serif text-[clamp(30px,3.2vw,40px)] font-bold leading-[1.14] tracking-[-0.02em]">
              {study.title}
            </h2>
            <p className="max-w-[560px] text-pretty text-base leading-[1.8] text-muted">{study.challenge}</p>
          </div>

          <div className="flex-none basis-[400px] border border-border bg-surface px-8 py-[34px]">
            <div className="pb-[30px] font-mono text-[11px] uppercase tracking-[0.14em] text-muted">Impact</div>
            <div className="flex flex-col gap-[26px]">
              {study.impactStats?.map((stat) => (
                <CountUpStat key={stat.label} value={stat.value} prefix={stat.prefix} suffix={stat.suffix} label={stat.label} />
              ))}
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal delay={90} className="pt-14">
        <div className="flex items-baseline justify-between pb-5">
          <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">What I did</span>
          <span className="font-mono text-[11px] tracking-[0.1em] text-muted">hover to read &rarr;</span>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-5">
          {study.actions.map((action, index) => (
            <FlipCard
              key={action.title}
              index={String(index + 1).padStart(2, "0")}
              title={action.title}
              description={action.description}
            />
          ))}
        </div>
      </Reveal>

      <Reveal delay={120} className="flex flex-wrap gap-2 pt-11">
        {study.skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full border border-accent/[0.34] bg-accent/[0.13] px-3.5 py-[7px] font-mono text-[11px] text-accent"
          >
            {skill}
          </span>
        ))}
      </Reveal>
    </section>
  );
}
