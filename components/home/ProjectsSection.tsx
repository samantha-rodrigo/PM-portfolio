// Homepage "Projects" section: the Credit Score Demystifier project,
// summarized inline rather than linking out to the standalone
// /projects/credit-score-demystifier page.
import Reveal from "@/components/Reveal";
import { PROJECTS } from "@/lib/content";

const project = PROJECTS.find((p) => p.slug === "credit-score-demystifier")!;

export default function ProjectsSection() {
  return (
    <section id="projects" className="scroll-mt-[90px] pb-32">
      <Reveal>
        <div className="mb-14 flex items-baseline justify-between border-b border-border pb-3.5">
          <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent">Projects</span>
          <span className="font-mono text-[11px] tracking-[0.1em] text-muted">Self-directed</span>
        </div>
      </Reveal>

      <Reveal delay={60}>
        <div className="border border-border bg-surface px-11 pb-10 pt-11 transition-[border-color,box-shadow] duration-[250ms] ease hover:border-accent hover:shadow-[0_16px_40px_-16px_color-mix(in_srgb,var(--accent)_24%,transparent)]">
          <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-x-16 gap-y-12">
            <div>
              <h2 className="mb-2.5 font-serif text-[34px] font-bold leading-[1.15] tracking-[-0.02em]">
                {project.title}
              </h2>
              <div className="pb-[30px] font-mono text-xs text-accent">{project.subtitle}</div>
              <div className="pb-3 font-mono text-[11px] uppercase tracking-[0.14em] text-muted">Problem</div>
              <p className="mb-7 text-pretty text-[15px] leading-[1.75] text-muted">{project.problem}</p>
              <div className="pb-3 font-mono text-[11px] uppercase tracking-[0.14em] text-muted">What I built</div>
              <p className="text-pretty text-[15px] leading-[1.75] text-muted">{project.built}</p>
            </div>

            <div>
              <div className="pb-[18px] font-mono text-[11px] uppercase tracking-[0.14em] text-muted">Features</div>
              <div className="flex flex-col gap-3 pb-[34px]">
                {project.features.map((feature) => (
                  <div key={feature} className="grid grid-cols-[22px_1fr] text-[15px] leading-[1.6]">
                    <span className="text-accent">&rarr;</span>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-3 border-t border-border pt-[26px]">
                <span className="h-[7px] w-[7px] rounded-full bg-accent" />
                <span className="font-mono text-xs">In progress</span>
                {project.liveUrl && (
                  <a
                    href={`https://${project.liveUrl}`}
                    target="_blank"
                    rel="noreferrer"
                    className="ml-auto font-mono text-xs text-accent"
                  >
                    {project.liveUrl} &#8599;
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
