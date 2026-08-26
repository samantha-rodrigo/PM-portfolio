import Link from "next/link";
import { SITE } from "@/lib/site";

export default function Home() {
  return (
    <section className="relative flex min-h-[calc(100vh-73px)] items-center justify-center overflow-hidden px-6">
      <svg
        className="pointer-events-none absolute inset-x-0 bottom-0 h-64 w-full text-accent/10"
        viewBox="0 0 1000 200"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M0,120 C250,200 750,40 1000,120 L1000,200 L0,200 Z"
          fill="currentColor"
        />
      </svg>

      <div className="relative mx-auto max-w-[700px] text-center">
        <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl">{SITE.name}</h1>
        <p className="mt-4 text-lg text-accent sm:text-xl">{SITE.tagline}</p>
        <p className="mx-auto mt-6 max-w-[560px] text-balance text-muted">
          Fast decision-maker. Cross-functional leader. McKinsey-trained strategist.
          I build financial products that unlock opportunity for underserved communities.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/work"
            className="rounded border border-foreground px-6 py-3 transition-all hover:bg-accent hover:text-background hover:border-accent"
          >
            See My Work
          </Link>
          <Link
            href="/contact"
            className="rounded border border-border px-6 py-3 text-muted transition-all hover:border-accent hover:text-accent"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  );
}
