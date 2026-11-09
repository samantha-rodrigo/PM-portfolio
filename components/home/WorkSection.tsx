// Homepage "Selected work" section: the Secure Credit Card case study,
// summarized inline with animated impact stats and three "what I did"
// cards (hover: lift + slight rotate), rather than linking out to the
// standalone /work/secure-credit-card page.
import CountUpStat from "./CountUpStat";
import { CASE_STUDIES } from "@/lib/content";

const study = CASE_STUDIES.find((s) => s.slug === "secure-credit-card")!;
const CARD_ROTATE = ["-1deg", "1deg", "-1deg"];

export default function WorkSection() {
  return (
    <section id="work" className="scroll-mt-[70px] bg-ink text-cream">
      <div className="mx-auto max-w-[1240px] px-6 py-28 sm:px-10">
        <div data-reveal="0" className="flex flex-wrap items-center justify-between gap-3 pb-14">
          <span className="flex items-center gap-2.5 font-mono text-xs uppercase tracking-[0.15em] text-sun">
            <span className="h-2 w-2 rounded-full bg-sun" />
            Selected work
          </span>
          <span className="rounded-full border-[1.5px] border-olive px-3.5 py-[7px] font-mono text-[11px] uppercase tracking-[0.15em] text-light-muted">
            Banco Falabella · 2025–2026
          </span>
        </div>

        <div data-reveal="60" className="flex flex-wrap items-end gap-x-[72px] gap-y-12 pb-[72px]">
          <h2 className="min-w-0 flex-[1_1_520px] text-balance font-display text-[clamp(40px,5vw,64px)] font-bold leading-[0.94] tracking-[-0.035em]">
            {study.title}
          </h2>
          <p className="flex-[1_1_360px] text-pretty text-[17px] font-medium leading-[1.6] text-light-muted">
            {study.challenge}
          </p>
        </div>

        <div
          data-reveal="90"
          className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] border-y-[1.5px] border-olive"
        >
          {study.impactStats?.map((stat, index) => {
            const count = study.impactStats?.length ?? 0;
            const isFirst = index === 0;
            const isLast = index === count - 1;
            return (
            <div
              key={stat.label}
              className={`py-8 ${isFirst ? "pl-0" : "pl-6"} ${isLast ? "pr-0" : "pr-6"} ${
                isLast ? "" : "border-r-[1.5px] border-olive"
              }`}
            >
              <CountUpStat value={stat.value} prefix={stat.prefix} suffix={stat.suffix} label={stat.label} />
            </div>
            );
          })}
        </div>

        <div
          data-reveal="0"
          className="pt-[72px] pb-6 font-mono text-xs uppercase tracking-[0.15em] text-stone"
        >
          ( What I did )
        </div>
        <div data-reveal="40" className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-5">
          {study.actions.map((action, index) => (
            <div
              key={action.title}
              style={{ "--hover-rotate": CARD_ROTATE[index % CARD_ROTATE.length] } as React.CSSProperties}
              className="group flex flex-col gap-3.5 rounded-[20px] border-2 border-ink bg-sun px-[26px] pb-[30px] pt-7 text-ink transition-transform duration-[400ms] [transition-timing-function:cubic-bezier(.34,1.56,.64,1)] hover:-translate-y-1.5 hover:rotate-[var(--hover-rotate)]"
            >
              <div className="font-mono text-xs tracking-[0.15em]">STEP {String(index + 1).padStart(2, "0")}</div>
              <div className="font-display text-[26px] font-bold leading-[1.05] tracking-[-0.025em]">{action.title}</div>
              <div className="text-base font-medium leading-[1.55]">{action.description}</div>
            </div>
          ))}
        </div>

        <div data-reveal="60" className="flex flex-wrap gap-2 pt-10">
          {study.skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border-[1.5px] border-sun px-3.5 py-[7px] font-mono text-[11px] uppercase tracking-[0.12em] text-sun"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
