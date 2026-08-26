import type { Metadata } from "next";
import Avatar from "@/components/Avatar";
import SocialLinks from "@/components/SocialLinks";
import { SITE } from "@/lib/site";

export const metadata: Metadata = { title: "About — Samantha Rodrigo" };

const BACKGROUND = [
  "MBA Candidate at UC Berkeley, Haas School of Business (Expected 2028) — pursuing the AI for Business Graduate Certificate; member of Haas Tech Club, Haas AI Club, and Haas Consulting Club",
  "BS in Industrial Engineering, Universidad Privada del Norte, Perú (2016–2020, top 10% of class); international exchange at UNAM, Mexico (2019)",
  "Growth and Customer Acquisition Manager at Banco Falabella, Peru (2025–2026) — led a team of 4, relaunched the bank's digital credit card acquisition channel (+50% new cardholders), and scaled a secured credit card product to national rollout",
  "Business Analyst / Location Analyst at McKinsey & Company, Peru (2021–2025) — delivered product strategy, growth, and data-driven insights work for banking, insurance, retail, and microfinance clients across Peru, Bolivia, Colombia, Ecuador, Guatemala, and Panama",
];

const WHAT_I_DO = [
  "Identify high-leverage opportunities using data and AI",
  "Build cross-functional consensus across Risk, Ops, Marketing, and Digital",
  "Ship products that grow",
  "Learn fast and iterate",
];

const INTERESTS = [
  "Financial inclusion in emerging markets",
  "Growth product management",
  "AI-powered financial tools",
  "Chasing new cultures through local food, music, and dancing marinera — one country at a time",
  "Founded Cultivos, an ethical honey and coffee sourcing business (2,000 units sold)",
];

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-[1000px] px-6 py-16 sm:py-24">
      <div className="mb-12 flex flex-col items-center gap-6 text-center sm:flex-row sm:text-left">
        <Avatar />
        <div>
          <h1 className="text-3xl sm:text-4xl">About</h1>
          <p className="mt-2 max-w-[520px] text-muted">
            Growth PM with emerging markets expertise and a passion for financial inclusion.
          </p>
        </div>
      </div>

      <div className="grid gap-10 sm:grid-cols-2">
        <div>
          <h2 className="mb-4 text-lg font-semibold uppercase tracking-wide text-accent">Background</h2>
          <ul className="space-y-4">
            {BACKGROUND.map((item) => (
              <li key={item} className="text-muted">
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="mb-4 text-lg font-semibold uppercase tracking-wide text-accent">What I Do</h2>
          <ul className="mb-10 space-y-2">
            {WHAT_I_DO.map((item) => (
              <li key={item} className="flex gap-2 text-foreground">
                <span className="text-accent">&bull;</span>
                {item}
              </li>
            ))}
          </ul>

          <h2 className="mb-4 text-lg font-semibold uppercase tracking-wide text-accent">Interests</h2>
          <ul className="space-y-2">
            {INTERESTS.map((item) => (
              <li key={item} className="flex gap-2 text-muted">
                <span className="text-accent">&bull;</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-14 flex flex-col items-center gap-6 border-t border-border pt-10 text-center">
        <a
          href={SITE.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded border border-foreground px-6 py-3 transition-all hover:bg-accent hover:text-background hover:border-accent"
        >
          Download Resume
        </a>
        <SocialLinks />
      </div>
    </section>
  );
}
