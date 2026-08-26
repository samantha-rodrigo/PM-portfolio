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
          <Link
            key={study.slug}
            href={`/work/${study.slug}`}
            className="group block rounded-lg border border-border bg-surface p-6 transition-colors hover:border-accent sm:p-10"
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
      </div>
    </section>
  );
}
