// All the case study, project, and skills content for the site lives here,
// separate from the page files that display it. To add a new case study,
// add an entry to CASE_STUDIES below (the `slug` becomes its URL, e.g.
// slug: "my-project" -> /work/my-project) and create a matching folder under
// app/work/ with a page.tsx that renders <CaseStudyCard study={...} />,
// the same way app/work/secure-credit-card/page.tsx does.
import type { CaseStudy } from "@/components/CaseStudyCard";
import type { Project } from "@/components/ProjectCard";

// Core skills shown on the About page, grouped into three categories so the
// list reads as organized groups instead of one long wall of tags.
export const SKILLS: { category: string; items: string[] }[] = [
  {
    category: "Product & Strategy",
    items: ["Product Strategy", "Product Development", "Innovation & Strategy", "User-Centric Design"],
  },
  {
    category: "Growth & Data",
    items: [
      "Growth Product Management",
      "Data-Driven Decision Making",
      "Market Research & Competitive Analysis",
      "AI-Native Tools",
      "Metabase",
      "Google Cloud Platform",
    ],
  },
  {
    category: "Leadership & Execution",
    items: ["Cross-functional Team Leadership", "Stakeholder Alignment", "Execution", "Go-to-Market Strategy"],
  },
];

export const CASE_STUDIES: (CaseStudy & { slug: string })[] = [
  {
    slug: "secure-credit-card",
    title: "Secure Credit Card National Rollout",
    challenge:
      "A new credit product had proven traction in 4 branches, but scaling nationally faced a critical bottleneck: the pre-approval process wasn't equipped for volume.",
    actions: [
      {
        title: "Process Optimization",
        description: "Reduced manual review steps by ~40%, enabling 3x throughput.",
      },
      {
        title: "Stakeholder Alignment",
        description: "Facilitated cross-functional conversations between Credit Risk, Ops, Marketing, and Digital.",
      },
      {
        title: "Execution & Go-to-Market",
        description: "Coordinated phased rollout across teams.",
      },
    ],
    impact: [
      "Expanded from 4 → 55 branches (13.75x growth)",
      "19 million pre-approved eligible clients reached",
      "~3,000 secured credit cards acquired per month",
      "Achieved 10% incremental lift in credit card acquisition (vs. current product)",
    ],
    impactStats: [
      { value: 55, prefix: "4 → ", label: "branches reached, 13.75x growth" },
      { value: 19, suffix: "M", label: "pre-approved eligible clients" },
      { value: 3000, prefix: "~", label: "secured credit cards acquired per month" },
      { value: 10, prefix: "+", suffix: "%", label: "incremental lift in credit card acquisition vs. current product" },
    ],
    skills: ["Product Strategy", "Stakeholder Alignment", "Execution", "Cross-functional Leadership", "Growth Focus"],
  },
];

export const PROJECTS: (Project & { slug: string })[] = [
  {
    slug: "credit-score-demystifier",
    title: "Credit Score Demystifier",
    subtitle: "Spanish + Peru-focused financial education tool",
    problem:
      "Young adults entering credit markets in Peru don't understand credit scores or how to improve them. This gap leads to poor financial decisions and limits access to credit.",
    built:
      "An interactive tool (built with Python + Streamlit) that educates users on credit factors, personalizes their score analysis, and provides actionable recommendations.",
    features: [
      "Educational modules on 5 credit factors",
      "Personalized assessment based on user profile",
      "Actionable recommendations ranked by impact",
      "Completely in Spanish, Peru-focused",
    ],
    impact: ["Deployed and live", "Metrics to be added as usage grows"],
    skills: ["Product Design", "Python/Streamlit", "Financial Literacy", "User Education"],
    liveUrl: "conocetucredito.io",
  },
];
