import type { CSSProperties } from "react";
import WaveBackground from "@/components/home/WaveBackground";
import ScrollProgressBar from "@/components/home/ScrollProgressBar";
import Hero from "@/components/home/Hero";
import WorkSection from "@/components/home/WorkSection";
import ProjectsSection from "@/components/home/ProjectsSection";
import AboutSection from "@/components/home/AboutSection";
import ContactSection from "@/components/home/ContactSection";

// This homepage overrides the accent tokens to white, scoped to this page's
// own subtree (see the style below) — the rest of the site keeps the
// original copper accent from globals.css. --color-accent (Tailwind's
// `@theme inline` binding of --accent, consumed by every `accent` utility:
// text-accent, bg-accent, fill-accent, opacity-modified variants, etc.) is
// only ever declared at :root, so its var(--accent) reference gets
// resolved once there and inherits down as an already-fully-resolved
// value — overriding --accent alone on a descendant doesn't reach it. It
// has to be redeclared directly here too. --accent-soft is redefined
// alongside so components reading that token (e.g. .btn-primary's glow)
// stay in sync instead of mixing a white accent with a copper-tinted glow.
const homeVars = {
  "--accent": "#f5f5f5",
  "--color-accent": "#f5f5f5",
  "--accent-soft": "color-mix(in srgb, #f5f5f5 13%, transparent)",
} as CSSProperties;

export default function Home() {
  return (
    <div className="relative" style={homeVars}>
      <WaveBackground />
      <ScrollProgressBar />

      <div className="relative z-[1] mx-auto max-w-[1120px] px-6 pb-32 pt-[132px]">
        <Hero />
      </div>
      <div className="relative z-[1] mx-auto max-w-[1120px] px-6">
        <WorkSection />
        <ProjectsSection />
        <AboutSection />
      </div>
      <ContactSection />
    </div>
  );
}
