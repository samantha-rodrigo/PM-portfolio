import type { Metadata } from "next";
import { SITE } from "@/lib/site";

export const metadata: Metadata = { title: "Contact — Samantha Rodrigo" };

const INTERESTS = [
  "Fintech + financial inclusion",
  "Emerging markets products",
  "Growth stage companies",
  "Building AI-powered products",
];

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-[700px] px-6 py-16 text-center sm:py-24">
      <h1 className="text-3xl sm:text-4xl">Let&apos;s Connect</h1>
      <p className="mx-auto mt-4 max-w-[560px] text-muted">
        I&apos;m interested in growth PM roles at high-impact companies. Especially excited about:
      </p>

      <ul className="mx-auto mt-6 inline-flex flex-col gap-2 text-left">
        {INTERESTS.map((item) => (
          <li key={item} className="flex gap-2 text-foreground">
            <span className="text-accent">&bull;</span>
            {item}
          </li>
        ))}
      </ul>

      <div className="mt-12 flex flex-col items-center gap-4 border-t border-border pt-10">
        <a href={`mailto:${SITE.email}`} className="text-lg text-accent hover:underline">
          📧 {SITE.email}
        </a>
        <a href={SITE.linkedin} target="_blank" rel="noopener noreferrer" className="text-lg text-accent hover:underline">
          🔗 linkedin.com/in/samantha-rodrigo
        </a>
        <a href={SITE.github} target="_blank" rel="noopener noreferrer" className="text-lg text-accent hover:underline">
          💻 github.com/samantha-rodrigo
        </a>
      </div>
    </section>
  );
}
