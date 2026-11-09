"use client";

// Site-wide sticky nav: the "sr." logo + wordmark, Work / AI Projects /
// About links, and an ink "Get in touch" pill — all in the v2 yellow/ink
// system. Shown on every page via app/layout.tsx, including the standalone
// /work and /projects pages (which otherwise keep their original look).
// Has two layouts: a horizontal row on desktop (md and up), and a
// hamburger-triggered dropdown menu on mobile.

import Link from "next/link";
import { useState } from "react";
import { NAV_LINKS } from "@/lib/site";
import Logo from "./Logo";

const PRIMARY_LINKS = NAV_LINKS.slice(0, -1);
const CTA_LINK = NAV_LINKS[NAV_LINKS.length - 1];

export default function Header() {
  // open/setOpen tracks whether the mobile dropdown menu is currently visible.
  const [open, setOpen] = useState(false);

  return (
    // sticky + top-0 keeps the header pinned while scrolling, above the
    // ProgressBar's z-60 but below the Cursor's very high z-index.
    <header className="selection-ink sticky top-0 z-50 border-b-[1.5px] border-ink bg-sun/80 font-display text-ink backdrop-blur-[14px]">
      <div className="mx-auto flex max-w-[1240px] items-center justify-between gap-6 px-6 py-4 sm:px-10">
        <Link
          href="/#top"
          data-cursor="link"
          aria-label="Samantha Rodrigo, home"
          onClick={() => setOpen(false)}
          className="transition-transform duration-[400ms] [transition-timing-function:cubic-bezier(.34,1.56,.64,1)] hover:scale-[1.04]"
        >
          <Logo />
        </Link>

        {/* Desktop nav: hidden below the md breakpoint, shown as a row above it. */}
        <nav className="hidden items-center gap-[clamp(14px,2.4vw,28px)] whitespace-nowrap text-[15px] font-semibold md:flex">
          {PRIMARY_LINKS.map((link) => (
            <Link key={link.href} href={link.href} data-cursor="link" className="transition-colors hover:text-olive">
              {link.label}
            </Link>
          ))}
          <Link
            href={CTA_LINK.href}
            data-cursor="label"
            data-cursor-label="Let's talk"
            className="rounded-full bg-ink px-5 py-[11px] font-bold text-sun transition-transform duration-[400ms] [transition-timing-function:cubic-bezier(.34,1.56,.64,1)] hover:scale-[1.06]"
          >
            Get in touch →
          </Link>
        </nav>

        {/* Mobile hamburger button: three bars that animate into an X when open. */}
        <button
          className="flex flex-col gap-1.5 md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className={`h-0.5 w-6 bg-ink transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`h-0.5 w-6 bg-ink transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`h-0.5 w-6 bg-ink transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {/* Mobile dropdown: only rendered while `open` is true. */}
      {open && (
        <div className="border-t-[1.5px] border-ink px-6 pb-6 md:hidden">
          <nav className="flex flex-col gap-4 pt-4 text-[15px] font-semibold">
            {PRIMARY_LINKS.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>
                {link.label}
              </Link>
            ))}
            <Link
              href={CTA_LINK.href}
              onClick={() => setOpen(false)}
              className="w-fit rounded-full bg-ink px-5 py-[11px] font-bold text-sun"
            >
              Get in touch →
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
