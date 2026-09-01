"use client";

// Site-wide sticky navigation bar. Shown on every page via app/layout.tsx.
// Has two layouts: a horizontal nav on desktop (md and up), and a
// hamburger-triggered dropdown menu on mobile.

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { NAV_LINKS, SITE } from "@/lib/site";
import SocialLinks from "./SocialLinks";

export default function Header() {
  // pathname tells us which page we're on, so we can highlight the matching nav link.
  const pathname = usePathname();
  // open/setOpen tracks whether the mobile dropdown menu is currently visible.
  const [open, setOpen] = useState(false);

  return (
    // sticky + top-0 keeps the header pinned while scrolling.
    // bg-background/80 + backdrop-blur gives it a translucent "frosted glass" look
    // over content scrolling underneath it.
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-[1000px] items-center justify-between px-6 py-4">
        <Link href="/" className="font-serif text-lg font-bold" onClick={() => setOpen(false)}>
          {SITE.name}
        </Link>

        {/* Desktop nav: hidden below the md breakpoint, shown as a row above it. */}
        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-sm transition-colors hover:text-accent ${
                  active ? "text-accent" : "text-foreground"
                }`}
              >
                {link.label}
                {/* Small dot under the current page's link, so it's clear at a glance where you are. */}
                {active && (
                  <span className="absolute -bottom-2 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-accent" />
                )}
              </Link>
            );
          })}
          <SocialLinks />
        </nav>

        {/* Mobile hamburger button: three bars that animate into an X when open. */}
        <button
          className="flex flex-col gap-1.5 md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className={`h-0.5 w-6 bg-foreground transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`h-0.5 w-6 bg-foreground transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`h-0.5 w-6 bg-foreground transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {/* Mobile dropdown: only rendered while `open` is true. */}
      {open && (
        <div className="border-t border-border/60 px-6 pb-6 md:hidden">
          <nav className="flex flex-col gap-4 pt-4">
            {NAV_LINKS.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`text-sm transition-colors hover:text-accent ${
                    active ? "text-accent" : "text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <SocialLinks className="pt-2" />
          </nav>
        </div>
      )}
    </header>
  );
}
