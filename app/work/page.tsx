// Overview page listing every case study as a clickable card.
// The actual case study data comes from lib/content.ts — add a new case
// study there and it will automatically show up here.
import type { Metadata } from "next";
import Link from "next/link";
import { CASE_STUDIES } from "@/lib/content";

export const metadata: Metadata = { title: "Featured Work — Samantha Rodrigo" };

export default function WorkPage() {
  return (
    <section className="mx-auto max-w-[1000px] px-6 py-16 sm:py-24">
      <h1 className="mb-4 text-3xl sm:text-4xl">Featured Work</h1>
      <p className="mb-12 max-w-[600px] text-muted">
        Case studies from my time driving growth and product strategy at Banco Falabella and McKinsey & Company.
      </p>

      <div className="space-y-6">
        {CASE_STUDIES.map((study) => (
          // card-interactive (defined in globals.css) adds the hover lift + glow.
          // border-l-accent gives it the same "spine" treatment as the detail page.
          <Link
            key={study.slug}
            href={`/work/${study.slug}`}
            className="card-interactive group block rounded-lg border border-border border-l-4 border-l-accent bg-surface p-6 shadow-lg shadow-black/30 sm:p-10"
          >
            <h2 className="mb-3 text-2xl transition-colors group-hover:text-accent sm:text-3xl">{study.title}</h2>
            <p className="mb-6 text-muted">{study.challenge}</p>
            <div className="flex flex-wrap gap-2">
              {study.skills.map((skill) => (
                <span key={skill} className="rounded-full border border-border px-3 py-1 text-xs text-muted">
                  {skill}
                </span>
              ))}
            </div>
            <span className="mt-6 inline-block text-accent">Read full case study &rarr;</span>
          </Link>
        ))}

        {/* Sets expectations instead of leaving a big empty page below a single card. */}
        <p className="pt-4 text-center text-sm text-muted">More case studies coming soon.</p>
      </div>
    </section>
  );
}
