import type { Metadata } from "next";
import Link from "next/link";
import CaseStudyCard from "@/components/CaseStudyCard";
import { CASE_STUDIES } from "@/lib/content";

const study = CASE_STUDIES.find((s) => s.slug === "secure-credit-card")!;

export const metadata: Metadata = { title: `${study.title} — Samantha Rodrigo` };

export default function SecureCreditCardPage() {
  return (
    <section className="mx-auto max-w-[1000px] px-6 py-16 sm:py-24">
      <Link href="/work" className="mb-8 inline-block text-sm text-muted hover:text-accent">
        &larr; Back to Featured Work
      </Link>
      <CaseStudyCard study={study} />
    </section>
  );
}
