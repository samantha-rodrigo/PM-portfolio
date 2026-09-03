// Homepage "Contact" section: full-bleed band with its own gradient
// background, closing out the single-page scroll.
import Reveal from "@/components/Reveal";
import { SITE } from "@/lib/site";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative z-[1] scroll-mt-[90px] border-t border-border bg-[linear-gradient(180deg,transparent,#100e10_55%)]"
    >
      <div className="mx-auto max-w-[1120px] px-6 pb-[88px] pt-24">
        <Reveal className="flex flex-wrap items-end gap-x-16 gap-y-12">
          <div className="min-w-0 flex-1 basis-[420px]">
            <h2 className="mb-5 text-pretty font-serif text-[clamp(32px,3.6vw,46px)] font-bold leading-[1.1] tracking-[-0.025em]">
              Looking for a PM internship for summer 2027.
            </h2>
            <p className="max-w-[500px] text-pretty text-base leading-[1.75] text-muted">
              Credit, payments, or AI-native financial tools. Happy to talk about emerging markets, growth loops, or
              where a rollout usually breaks.
            </p>
          </div>

          <div className="flex flex-none basis-[360px] flex-col font-mono text-xs">
            <a href={`mailto:${SITE.email}`} className="flex justify-between border-t border-border py-[15px]">
              <span className="text-muted">EMAIL</span>
              <span>{SITE.email}</span>
            </a>
            <a
              href={SITE.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex justify-between border-t border-border py-[15px]"
            >
              <span className="text-muted">LINKEDIN</span>
              <span>/in/samantha-rodrigo &#8599;</span>
            </a>
            <a
              href={SITE.github}
              target="_blank"
              rel="noreferrer"
              className="flex justify-between border-t border-border py-[15px]"
            >
              <span className="text-muted">GITHUB</span>
              <span>/samantha-rodrigo &#8599;</span>
            </a>
            <a href={SITE.resumeUrl} className="flex justify-between border-y border-border py-[15px]">
              <span className="text-muted">RESUME</span>
              <span className="text-accent">Download PDF</span>
            </a>
          </div>
        </Reveal>

        <div className="flex justify-between pt-[72px] font-mono text-[11px] text-muted">
          <span>Samantha Rodrigo · Growth PM · Financial Inclusion · Emerging Markets</span>
          <span>Lima &rarr; Berkeley</span>
        </div>
      </div>
    </section>
  );
}
