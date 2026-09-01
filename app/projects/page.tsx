// Overview page listing every side project as a clickable card.
// Same pattern as app/work/page.tsx, but for lib/content.ts's PROJECTS list.
import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { PROJECTS } from "@/lib/content";

export const metadata: Metadata = { title: "Projects — Samantha Rodrigo" };

export default function ProjectsPage() {
  return (
    <section className="mx-auto max-w-[1000px] px-6 py-16 sm:py-24">
      <h1 className="mb-4 text-3xl sm:text-4xl">Projects</h1>
      <p className="mb-12 max-w-[600px] text-muted">
        Side projects where I build and ship independently, applying growth and product thinking to problems I care about.
      </p>

      <div className="space-y-6">
        {PROJECTS.map((project, index) => (
          <Reveal key={project.slug} delay={index * 100}>
            <Link
              href={`/projects/${project.slug}`}
              className="card-interactive group block rounded-lg border border-border border-l-4 border-l-accent bg-surface p-6 shadow-lg shadow-black/30 sm:p-10"
            >
              <h2 className="mb-1 text-2xl transition-colors group-hover:text-accent sm:text-3xl">{project.title}</h2>
              <p className="mb-6 text-muted">{project.subtitle}</p>
              <div className="flex flex-wrap gap-2">
                {project.skills.map((skill) => (
                  <span key={skill} className="rounded-full border border-border px-3 py-1 text-xs text-muted">
                    {skill}
                  </span>
                ))}
              </div>
              <span className="mt-6 inline-block text-accent">
                View project <span className="arrow-nudge">&rarr;</span>
              </span>
            </Link>
          </Reveal>
        ))}

        <p className="pt-4 text-center text-sm text-muted">More projects coming soon.</p>
      </div>
    </section>
  );
}
