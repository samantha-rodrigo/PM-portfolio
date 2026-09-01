// Next.js automatically shows this page for any URL that doesn't match a
// real route (this file's name, "not-found.tsx", is a special convention).
import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-[700px] flex-col items-center px-6 py-24 text-center">
      <h1 className="text-3xl sm:text-4xl">404</h1>
      <p className="mt-4 text-muted">This page doesn&apos;t exist.</p>
      <Link href="/" className="btn-primary mt-8">
        Back to Home
      </Link>
    </section>
  );
}
