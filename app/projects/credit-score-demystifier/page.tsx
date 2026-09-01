// Detail page for one project. Same pattern as the case study detail pages:
// content lives in lib/content.ts, this file just looks up the right entry.
import type { Metadata } from "next";
import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import { PROJECTS } from "@/lib/content";

const project = PROJECTS.find((p) => p.slug === "credit-score-demystifier")!;

export const metadata: Metadata = { title: `${project.title} — Samantha Rodrigo` };

export default function CreditScoreDemystifierPage() {
  return (
    <section className="mx-auto max-w-[1000px] px-6 py-16 sm:py-24">
      <Link href="/projects" className="mb-8 inline-block text-sm text-muted hover:text-accent">
        &larr; Back to Projects
      </Link>
      <ProjectCard project={project} />
    </section>
  );
}
