// Homepage "Contact" section: closes out the single-page scroll on an
// ink band, with a pulsing-dot eyebrow and contact rows that shift right
// on hover.
import { SITE } from "@/lib/site";

const CONTACT_ROWS = [
  { label: "EMAIL", value: SITE.email, href: `mailto:${SITE.email}`, cursorLabel: "Email", external: false },
  {
    label: "LINKEDIN",
    value: "/in/samantha-rodrigo ↗",
    href: SITE.linkedin,
    cursorLabel: "LinkedIn",
    external: true,
  },
  { label: "GITHUB", value: "/samantha-rodrigo ↗", href: SITE.github, cursorLabel: "GitHub", external: true },
];

export default function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-[70px] bg-ink text-cream">
      <div className="mx-auto max-w-[1240px] px-6 pb-16 pt-[120px] sm:px-10">
        <div data-reveal="0" className="flex flex-wrap items-end gap-x-[72px] gap-y-12">
          <div className="min-w-0 flex-[1_1_520px]">
            <div className="flex items-center gap-2.5 pb-7 font-mono text-xs uppercase tracking-[0.15em] text-sun">
              <span className="animate-pulse-dot h-2 w-2 rounded-full bg-live-green" />
              Contact
            </div>
            <h2 className="mb-6 text-balance font-display text-[clamp(40px,5.4vw,72px)] font-bold leading-[0.92] tracking-[-0.04em] text-sun">
              Looking for a PM internship for summer 2027.
            </h2>
            <p className="max-w-[520px] text-pretty text-[17px] font-medium leading-[1.6] text-light-muted">
              Credit, payments, or AI-native financial tools. Happy to talk about emerging markets, growth loops, or
              where a rollout usually breaks.
            </p>
          </div>

          <div className="flex flex-[0_1_400px] flex-col font-mono text-[13px]">
            {CONTACT_ROWS.map((row) => (
              <a
                key={row.label}
                href={row.href}
                target={row.external ? "_blank" : undefined}
                rel={row.external ? "noreferrer" : undefined}
                data-cursor="label"
                data-cursor-label={row.cursorLabel}
                className="flex justify-between gap-4 border-t-[1.5px] border-olive py-[18px] transition-[color,padding] duration-[300ms] [transition-timing-function:cubic-bezier(.16,1,.3,1)] hover:pl-2 hover:text-sun"
              >
                <span className="tracking-[0.12em] text-stone">{row.label}</span>
                <span>{row.value}</span>
              </a>
            ))}
            <a
              href={SITE.resumeUrl}
              data-cursor="label"
              data-cursor-label="Download"
              className="flex items-center justify-between gap-4 border-y-[1.5px] border-olive py-[18px]"
            >
              <span className="tracking-[0.12em] text-stone">RESUME</span>
              <span className="rounded-full bg-sun px-4 py-2 font-semibold text-ink">Download PDF →</span>
            </a>
          </div>
        </div>

        <div className="flex flex-wrap justify-between gap-3 pt-24 font-mono text-[11px] uppercase tracking-[0.12em] text-stone">
          <span>Samantha Rodrigo · Growth PM · Financial Inclusion · Emerging Markets</span>
          <span>Lima → Berkeley</span>
        </div>
      </div>
    </section>
  );
}
