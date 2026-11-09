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

// AI Projects shown on the homepage's "AI Projects" section (components/home/*).
// Distinct from PROJECTS below (the side-project list used by the standalone
// /projects pages) — same underlying work, different shape: this one drives
// the homepage's card grid + modal, including an optional video cover.
export type AIProject = {
  title: string;
  kicker: string;
  summary: string;
  tags: string[];
  problem: string;
  built: string;
  features: string[];
  status: string;
  link?: string;
  linkLabel?: string;
  video?: string;
};

export const AI_PROJECTS: AIProject[] = [
  {
    title: "Credit Score Demystifier",
    kicker: "Spanish + Peru-focused financial education tool",
    summary: "Spanish + Peru-focused financial education tool",
    tags: ["Python", "Streamlit", "Fintech"],
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
    status: "In progress",
    link: "https://conocetucredito.io",
    linkLabel: "conocetucredito.io",
  },
  {
    title: "Cardtown Quest",
    kicker: "Story-driven isometric credit literacy game",
    summary: "A story-driven isometric game that teaches young adults to manage their first credit card.",
    tags: ["AI", "Game", "Fintech", "Lovable"],
    problem:
      "Credit card literacy is intimidating. Young adults get their first card without knowing how to manage it, and they fall into high fees, minimum-payment traps and debt spirals.",
    built:
      "A story-driven isometric adventure. Players walk through a town, talk to neighbors at 5 key locations, and solve single-elimination financial scenario quizzes to keep their credit healthy and beat the game. Built with Lovable (React, TanStack, Tailwind CSS), with game art and assets created using Lovable AI's image and video generation.",
    features: [
      "Choosing a card without high annual fees you can't waive",
      "Credit limits and debt spirals: borrowed money vs. income, minimum payment traps",
      "Statement closing date vs. payment due date",
      "Rewards and points: paying in full to earn perks responsibly",
    ],
    status: "Live · 5 story scenarios, animated cutscenes, desktop + mobile",
    link: "https://cardtown-quest.lovable.app",
    linkLabel: "cardtown-quest.lovable.app",
    video: "/videos/cardtown_walkthrough.mp4",
  },
];

// Resume snapshot timeline on the homepage's "Resume snapshot" section.
// `logoDomain` feeds Google's favicon service as a placeholder
// (https://www.google.com/s2/favicons?domain=...) — swap in official logo
// files under public/logos/ when available.
export type TimelineEntry = {
  org: string;
  logoDomain: string;
  logoAlt: string;
  role: string;
  dates: string;
  location: string;
  liveLocation?: boolean;
  bullets: string[];
};

export const TIMELINE: TimelineEntry[] = [
  {
    org: "UC Berkeley, Haas",
    logoDomain: "haas.berkeley.edu",
    logoAlt: "UC Berkeley Haas logo",
    role: "MBA Candidate",
    dates: "2026–2028",
    location: "Berkeley, CA",
    liveLocation: true,
    bullets: [
      "AI for Business certificate.",
      "Haas Tech Club, Haas AI Club, Haas Consulting Club.",
      "AI & Entrepreneurship course: leading the build of a consumer health startup that streamlines the patient journey with software.",
    ],
  },
  {
    org: "Banco Falabella",
    logoDomain: "bancofalabella.pe",
    logoAlt: "Banco Falabella logo",
    role: "Growth & Customer Acquisition Manager",
    dates: "2025–2026",
    location: "Lima, Peru",
    bullets: [
      "Led a team of 4.",
      "Relaunched the digital credit card acquisition channel (+50% new cardholders).",
      "Scaled a secured credit card to national rollout.",
    ],
  },
  {
    org: "McKinsey & Company",
    logoDomain: "mckinsey.com",
    logoAlt: "McKinsey & Company logo",
    role: "Business Analyst / Location Analyst",
    dates: "2021–2025",
    location: "Lima, Peru",
    bullets: [
      "Product strategy, growth, and data-driven insights for banking, insurance, retail, and microfinance clients.",
      "Across Peru, Bolivia, Colombia, Ecuador, Guatemala, and Panama.",
    ],
  },
  {
    org: "Universidad Privada del Norte, Peru",
    logoDomain: "upn.edu.pe",
    logoAlt: "Universidad Privada del Norte logo",
    role: "BS, Industrial Engineering",
    dates: "2016–2020",
    location: "Trujillo, Peru",
    bullets: [
      "Top 10% of class.",
      "International exchange at UNAM, Mexico (2019).",
      "Represented Peru at the Hult Prize regional round with a food-waste startup (2020).",
    ],
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
