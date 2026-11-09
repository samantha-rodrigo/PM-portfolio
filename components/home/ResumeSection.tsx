// Homepage "Resume snapshot" + "Skills & tools" — both sit on the same
// cream panel in the design. The timeline is a 4-column CSS subgrid so
// every column's tile/name/role/dates/card line up and every card is the
// same height, with a 3px connector line threading through the tiles.
import { SKILLS, TIMELINE } from "@/lib/content";

export default function ResumeSection() {
  return (
    <div className="border-t-2 border-ink bg-cream text-ink">
      <div className="mx-auto max-w-[1240px] px-6 py-28 sm:px-10">
        <div data-reveal="0" className="flex items-center gap-2.5 pb-6 font-mono text-xs uppercase tracking-[0.15em]">
          <span className="h-2 w-2 rounded-full bg-ink" />
          Resume snapshot
        </div>
        <div
          data-reveal="40"
          className="mx-[-12px] mb-24 grid grid-cols-[repeat(4,minmax(190px,1fr))] overflow-x-auto pt-6 [scroll-snap-type:x_proximity] [scrollbar-width:thin]"
        >
          {TIMELINE.map((entry, index) => {
            const isFirst = index === 0;
            const isLast = index === TIMELINE.length - 1;
            return (
              <div
                key={entry.org}
                className="relative grid [grid-row:span_5] [grid-template-rows:subgrid] justify-items-center px-3 pb-8 text-center"
              >
                <div
                  className={`absolute top-[58px] h-[3px] bg-ink ${
                    isFirst ? "left-1/2 right-0" : isLast ? "left-0 right-1/2" : "left-0 right-0"
                  }`}
                />
                <div className="relative flex h-[116px] w-[116px] items-center justify-center overflow-hidden rounded-[24px] border-2 border-ink bg-paper transition-transform duration-[400ms] [transition-timing-function:cubic-bezier(.34,1.56,.64,1)] hover:-translate-y-1.5 hover:-rotate-3">
                  {/* eslint-disable-next-line @next/next/no-img-element -- external favicon service, not an optimizable local/remote asset worth next/image config for */}
                  <img
                    src={`https://www.google.com/s2/favicons?domain=${entry.logoDomain}&sz=128`}
                    alt={entry.logoAlt}
                    width={64}
                    height={64}
                    className="block h-16 w-16 object-contain"
                  />
                </div>
                <div className="text-balance pt-7 text-[22px] font-bold leading-[1.15] tracking-[-0.02em]">{entry.org}</div>
                <div className="text-balance pt-2 text-[17px] font-semibold leading-[1.3]">
                  <span className="bg-[linear-gradient(180deg,transparent_55%,#FFF48D_55%)] px-0.5">{entry.role}</span>
                </div>
                <div className="pt-2.5 font-mono text-xs tracking-[0.12em] text-olive">{entry.dates}</div>
                <div className="mt-[22px] box-border flex w-full flex-col self-stretch rounded-[20px] border-2 border-ink bg-paper px-[22px] pb-[18px] pt-2 text-left">
                  {entry.bullets.map((bullet, bIndex) => (
                    <div
                      key={bullet}
                      className={`grid grid-cols-[22px_1fr] py-3 text-sm font-medium leading-[1.5] ${
                        bIndex < entry.bullets.length - 1 ? "border-b-[1.5px] border-dashed border-ink" : ""
                      }`}
                    >
                      <span>◆</span>
                      <span>{bullet}</span>
                    </div>
                  ))}
                  <div className="mt-auto flex items-center gap-2 whitespace-nowrap border-t-2 border-ink pt-3.5 font-mono text-[11px] uppercase tracking-[0.08em] text-olive">
                    {entry.liveLocation && <span className="animate-pulse-dot h-2 w-2 rounded-full bg-live-green" />}
                    {entry.location}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div data-reveal="0" className="flex items-center gap-2.5 pb-6 font-mono text-xs uppercase tracking-[0.15em]">
          <span className="h-2 w-2 rounded-full bg-ink" />
          Skills &amp; tools
        </div>
        <div data-reveal="40" className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-5">
          {SKILLS.map((group) => (
            <div key={group.category} className="rounded-[20px] border-2 border-ink bg-paper px-6 py-[26px]">
              <div className="pb-[18px] text-xl font-bold tracking-[-0.02em]">{group.category}</div>
              <div className="flex flex-wrap gap-[7px]">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border-[1.5px] border-ink bg-sun px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.1em]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
