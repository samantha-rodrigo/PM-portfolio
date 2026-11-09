import ScrollReveal from "@/components/home/ScrollReveal";
import Hero from "@/components/home/Hero";
import WorkSection from "@/components/home/WorkSection";
import ProjectsSection from "@/components/home/ProjectsSection";
import AboutSection from "@/components/home/AboutSection";
import ResumeSection from "@/components/home/ResumeSection";
import ContactSection from "@/components/home/ContactSection";

export default function Home() {
  return (
    <div className="selection-ink font-display">
      <ScrollReveal />
      <Hero />
      <WorkSection />
      <ProjectsSection />
      <AboutSection />
      <ResumeSection />
      <ContactSection />
    </div>
  );
}
