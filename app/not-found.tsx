import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-[700px] flex-col items-center px-6 py-24 text-center">
      <h1 className="text-3xl sm:text-4xl">404</h1>
      <p className="mt-4 text-muted">This page doesn&apos;t exist.</p>
      <Link
        href="/"
        className="mt-8 rounded border border-foreground px-6 py-3 transition-all hover:bg-accent hover:text-background hover:border-accent"
      >
        Back to Home
      </Link>
    </section>
  );
}
