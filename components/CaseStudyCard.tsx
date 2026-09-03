// Renders one full case study (challenge / actions / impact / skills).
// Used on the case study detail pages, e.g. app/work/secure-credit-card/page.tsx.

export type CaseStudy = {
  title: string;
  challenge: string;
  actions: { title: string; description: string }[];
  impact: string[];
  // Optional structured version of `impact`, used by the homepage's
  // animated count-up stat cards (see components/home/CountUpStat.tsx).
  impactStats?: { value: number; prefix?: string; suffix?: string; label: string }[];
  skills: string[];
};

export default function CaseStudyCard({ study }: { study: CaseStudy }) {
  return (
    // border-l-4 gives the card a colored "spine" on the left so it doesn't
    // look identical to a plain gray box; shadow-xl adds depth against the background.
    <article className="rounded-lg border border-border border-l-4 border-l-accent bg-surface p-6 shadow-xl shadow-black/40 sm:p-10">
      <h2 className="mb-6 text-2xl sm:text-3xl">{study.title}</h2>

      <div className="mb-8">
        <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-accent">The Challenge</h3>
        <p className="text-muted">{study.challenge}</p>
      </div>

      <div className="mb-8">
        <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-accent">What I Did</h3>
        <ul className="space-y-3">
          {study.actions.map((action) => (
            <li key={action.title}>
              <span className="font-semibold text-foreground">{action.title}: </span>
              <span className="text-muted">{action.description}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Impact is the strongest proof-point content, so it gets its own
          tinted panel instead of blending into the rest of the card. */}
      <div className="mb-8 rounded-md bg-accent-soft p-5">
        <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-accent">Impact</h3>
        <ul className="space-y-2">
          {study.impact.map((line) => (
            <li key={line} className="flex gap-2 text-foreground">
              <span className="text-accent">&bull;</span>
              {line}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-wrap gap-2 border-t border-border pt-6">
        {study.skills.map((skill) => (
          <span key={skill} className="rounded-full border border-border px-3 py-1 text-xs text-muted">
            {skill}
          </span>
        ))}
      </div>
    </article>
  );
}
