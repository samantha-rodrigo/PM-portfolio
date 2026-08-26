export type CaseStudy = {
  title: string;
  challenge: string;
  actions: { title: string; description: string }[];
  impact: string[];
  skills: string[];
};

export default function CaseStudyCard({ study }: { study: CaseStudy }) {
  return (
    <article className="rounded-lg border border-border bg-surface p-6 sm:p-10">
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

      <div className="mb-8">
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
