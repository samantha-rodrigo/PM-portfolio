// Contact page: no form (by design — see project notes), just direct,
// clickable links to email / LinkedIn / GitHub.
import type { Metadata } from "next";
import { SITE } from "@/lib/site";

export const metadata: Metadata = { title: "Contact — Samantha Rodrigo" };

const INTERESTS = [
  "Fintech + financial inclusion",
  "Emerging markets products",
  "Growth stage companies",
  "Building AI-powered products",
];

// Each contact method rendered as its own card below.
const CONTACT_LINKS = [
  { label: SITE.email, href: `mailto:${SITE.email}`, icon: "📧", external: false },
  { label: "linkedin.com/in/samantha-rodrigo", href: SITE.linkedin, icon: "🔗", external: true },
  { label: "github.com/samantha-rodrigo", href: SITE.github, icon: "💻", external: true },
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

      <div className="mt-12 flex flex-col gap-3 border-t border-border pt-10">
        {CONTACT_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            target={link.external ? "_blank" : undefined}
            rel={link.external ? "noopener noreferrer" : undefined}
            className="card-interactive flex items-center justify-center gap-3 rounded-lg border border-border bg-surface px-6 py-4 text-lg text-foreground hover:text-accent"
          >
            <span aria-hidden="true">{link.icon}</span>
            {link.label}
          </a>
        ))}
      </div>
    </section>
  );
}
