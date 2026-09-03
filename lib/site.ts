// Site-wide constants: name, links, and contact info used across the app
// (Header, Footer, About, Contact, and the page metadata in layout.tsx).
// Keeping these in one place means updating an email or social link only
// has to happen here, not in every file that uses it.
export const SITE = {
  name: "Samantha Rodrigo",
  tagline: "Growth PM | Financial Inclusion | Emerging Markets",
  url: "https://samantharodrigo.com",
  email: "samantha_rodrigo@berkeley.edu",
  linkedin: "https://linkedin.com/in/samantha-rodrigo",
  github: "https://github.com/samantha-rodrigo",
  resumeUrl: "/resume/Samantha_Rodrigo_Resume.pdf",
};

// The main navigation links shown in the Header (desktop and mobile).
// These point at the homepage's own sections (it's a single scrolling page)
// rather than the standalone /work, /projects, /about, /contact routes,
// which still exist for direct links but aren't part of primary navigation.
export const NAV_LINKS = [
  { href: "/#work", label: "Work" },
  { href: "/#projects", label: "Projects" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
] as const;
