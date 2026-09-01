// Detail page for one case study. The content itself lives in
// lib/content.ts — this file just finds the matching entry by its slug
// and hands it to CaseStudyCard to render.
import type { Metadata } from "next";
import Link from "next/link";
import CaseStudyCard from "@/components/CaseStudyCard";
import Reveal from "@/components/Reveal";
import { CASE_STUDIES } from "@/lib/content";

const study = CASE_STUDIES.find((s) => s.slug === "secure-credit-card")!;

export const metadata: Metadata = { title: `${study.title} — Samantha Rodrigo` };

export default function SecureCreditCardPage() {
  return (
    <section className="mx-auto max-w-[1000px] px-6 py-16 sm:py-24">
      <Link href="/work" className="group mb-8 inline-block text-sm text-muted hover:text-accent">
        <span className="arrow-nudge-left">&larr;</span> Back to Featured Work
      </Link>
      <Reveal>
        <CaseStudyCard study={study} />
      </Reveal>
    </section>
  );
}
