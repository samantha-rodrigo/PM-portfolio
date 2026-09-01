// Renders one full side project (problem / built / features / impact / link).
// Used on project detail pages, e.g. app/projects/credit-score-demystifier/page.tsx.

export type Project = {
  title: string;
  subtitle: string;
  problem: string;
  built: string;
  features: string[];
  impact: string[];
  skills: string[];
  liveUrl?: string;
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="rounded-lg border border-border border-l-4 border-l-accent bg-surface p-6 shadow-xl shadow-black/40 sm:p-10">
      <h2 className="text-2xl sm:text-3xl">{project.title}</h2>
      <p className="mb-6 text-muted">{project.subtitle}</p>

      <div className="mb-6">
        <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-accent">The Problem</h3>
        <p className="text-muted">{project.problem}</p>
      </div>

      <div className="mb-6">
        <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-accent">What I Built</h3>
        <p className="text-muted">{project.built}</p>
      </div>

      <div className="mb-6">
        <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-accent">Features</h3>
        <ul className="space-y-2">
          {project.features.map((feature) => (
            <li key={feature} className="flex gap-2 text-foreground">
              <span className="text-accent">&bull;</span>
              {feature}
            </li>
          ))}
        </ul>
      </div>

      {/* Same tinted "impact" panel treatment as CaseStudyCard, so the two
          content types read as one consistent system. */}
      <div className="mb-8 rounded-md bg-accent-soft p-5">
        <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-accent">Impact</h3>
        <ul className="space-y-2">
          {project.impact.map((line) => (
            <li key={line} className="flex gap-2 text-foreground">
              <span className="text-accent">&bull;</span>
              {line}
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-6 flex flex-wrap gap-2 border-t border-border pt-6">
        {project.skills.map((skill) => (
          <span key={skill} className="rounded-full border border-border px-3 py-1 text-xs text-muted">
            {skill}
          </span>
        ))}
      </div>

      {project.liveUrl && (
        <a
          href={`https://${project.liveUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-block text-accent hover:underline"
        >
          Live at: {project.liveUrl} <span className="arrow-nudge">&rarr;</span>
        </a>
      )}
    </article>
  );
}
