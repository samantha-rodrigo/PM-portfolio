import SocialLinks from "./SocialLinks";

export default function Footer() {
  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto flex max-w-[1000px] flex-col items-center gap-4 px-6 py-10 text-center text-sm text-muted sm:flex-row sm:justify-between sm:text-left">
        <p>&copy; {new Date().getFullYear()} Samantha Rodrigo. Built with Next.js, deployed on Vercel.</p>
        <SocialLinks />
      </div>
    </footer>
  );
}
