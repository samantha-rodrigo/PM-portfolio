"use client";

// Homepage "AI Projects" section: a sticky intro column + a card grid.
// Clicking a card opens a modal with the full write-up (problem / built /
// features / status). Holds the only piece of React state in the v2
// homepage (`openIndex`), since the modal's open/closed-ness, Esc handling
// and body-scroll lock all need to share it.
import { useEffect, useState } from "react";
import { AI_PROJECTS } from "@/lib/content";

export default function ProjectsSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const selected = openIndex !== null ? AI_PROJECTS[openIndex] : null;

  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenIndex(null);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [openIndex]);

  return (
    <section id="projects" className="scroll-mt-[70px] bg-cream text-ink">
      <div className="mx-auto flex max-w-[1240px] flex-wrap items-start gap-x-16 gap-y-12 px-6 py-28 sm:px-10">
        <div data-reveal="0" className="sticky top-[110px] max-w-[340px] flex-[1_1_280px]">
          <div className="flex items-center gap-2.5 pb-6 font-mono text-xs uppercase tracking-[0.15em]">
            <span className="h-2 w-2 rounded-full bg-ink" />
            AI Projects
          </div>
          <h2 className="mb-5 font-display text-[clamp(40px,5vw,55px)] font-bold leading-[0.94] tracking-[-0.035em]">
            AI Projects
          </h2>
          <p className="mb-7 text-pretty text-[17px] font-medium leading-[1.6] text-olive">
            Exploring AI through product builds, real use cases, and creative play.
          </p>
          <span className="inline-flex items-center gap-2 rounded-full border-[1.5px] border-ink px-3.5 py-[7px] font-mono text-[11px] uppercase tracking-[0.15em]">
            <span className="h-[7px] w-[7px] rounded-full bg-live-green" />
            {AI_PROJECTS.length} projects
          </span>
        </div>

        <div className="grid min-w-0 flex-[1_1_560px] grid-cols-[repeat(auto-fill,minmax(260px,1fr))] gap-5">
          {AI_PROJECTS.map((project, index) => (
            <button
              key={project.title}
              type="button"
              onClick={() => setOpenIndex(index)}
              data-cursor="label"
              data-cursor-label="Open"
              className="group flex flex-col overflow-hidden rounded-[20px] border-2 border-ink bg-paper text-left transition-transform duration-[400ms] [transition-timing-function:cubic-bezier(.34,1.56,.64,1)] hover:-translate-y-1.5 hover:shadow-[6px_8px_0_#0E0E0C]"
            >
              <div className="relative flex aspect-[16/10] items-end overflow-hidden border-b-2 border-ink bg-[repeating-linear-gradient(135deg,#FFF48D_0_14px,#FBEE7A_14px_28px)] p-4">
                {project.video ? (
                  <video
                    src={project.video}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    aria-label={`${project.title} walkthrough`}
                    className="absolute inset-0 block h-full w-full object-cover"
                    ref={(el) => {
                      if (el) el.muted = true;
                    }}
                  />
                ) : (
                  <span className="rounded-full bg-ink px-2.5 py-[5px] font-mono text-[11px] uppercase tracking-[0.12em] text-sun">
                    screenshot · {project.title}
                  </span>
                )}
              </div>
              <div className="flex flex-1 flex-col gap-3 p-[22px] pb-6">
                <div className="flex items-start justify-between gap-3">
                  <div className="font-display text-2xl font-bold leading-[1.05] tracking-[-0.025em]">{project.title}</div>
                  <span className="text-xl leading-none">↗</span>
                </div>
                <div className="text-[15px] font-medium leading-[1.55] text-olive">{project.summary}</div>
                <div className="mt-auto flex flex-wrap gap-1.5 pt-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border-[1.5px] border-ink bg-sun px-2.5 py-[5px] font-mono text-[10px] uppercase tracking-[0.1em]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {selected && (
        <div
          onClick={() => setOpenIndex(null)}
          className="animate-fade-up fixed inset-0 z-[100] flex items-center justify-center bg-[#0E0E0Cb3] p-6 backdrop-blur-[6px]"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label={selected.title}
            className="max-h-[calc(100vh-48px)] w-full max-w-[980px] overflow-auto rounded-[24px] border-2 border-ink bg-paper"
          >
            <div className="relative flex flex-wrap items-end justify-between gap-5 border-b-2 border-ink bg-sun px-10 py-9 pb-7">
              <button
                type="button"
                onClick={() => setOpenIndex(null)}
                aria-label="Close"
                data-cursor="link"
                className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border-2 border-ink bg-paper text-lg font-bold"
              >
                ✕
              </button>
              <div className="pr-12">
                <h2 className="mb-3 font-display text-[clamp(32px,4vw,50px)] font-bold leading-[0.94] tracking-[-0.035em]">
                  {selected.title}
                </h2>
                <div className="font-mono text-xs tracking-[0.08em]">{selected.kicker}</div>
              </div>
              {selected.link && (
                <a
                  href={selected.link}
                  target="_blank"
                  rel="noreferrer"
                  data-cursor="label"
                  data-cursor-label="Visit"
                  className="rounded-full bg-ink px-5 py-[11px] text-[15px] font-bold text-sun"
                >
                  {selected.linkLabel} ↗
                </a>
              )}
            </div>

            <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-x-14 gap-y-9 px-10 py-10">
              <div>
                <div className="pb-3 font-mono text-xs uppercase tracking-[0.15em] text-muted-label">Problem</div>
                <p className="mb-7 text-pretty text-[17px] font-medium leading-[1.6]">{selected.problem}</p>
                <div className="pb-3 font-mono text-xs uppercase tracking-[0.15em] text-muted-label">What I built</div>
                <p className="text-pretty text-[17px] font-medium leading-[1.6]">{selected.built}</p>
              </div>
              <div>
                <div className="pb-1.5 font-mono text-xs uppercase tracking-[0.15em] text-muted-label">Features</div>
                {selected.features.map((feature) => (
                  <div
                    key={feature}
                    className="grid grid-cols-[28px_1fr] border-b-[1.5px] border-dashed border-ink py-3.5 text-[17px] font-semibold leading-[1.4]"
                  >
                    <span>◆</span>
                    <span>{feature}</span>
                  </div>
                ))}
                <div className="flex items-center gap-2.5 pt-[22px] font-mono text-xs uppercase tracking-[0.12em]">
                  <span className="h-2 w-2 rounded-full bg-live-green" />
                  {selected.status}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
