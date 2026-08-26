import type { CaseStudy } from "@/components/CaseStudyCard";
import type { Project } from "@/components/ProjectCard";

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
