"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const NAV = [
  { href: "#how-it-works", label: "How it works" },
  { href: "#features", label: "Features" },
  { href: "#app", label: "App" },
  { href: "#why-leek", label: "Why LEEK" },
  { href: "#download", label: "Download" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-leek-950/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="#" className="flex items-center gap-2" aria-label="LEEK home">
          <Image
            src="/leek-logo-mark.png"
            alt="LEEK — FRESH. PURE. FAIR."
            width={140}
            height={48}
            className="h-9 w-auto"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium text-white/90 lg:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a
            href="#download"
            className="inline-flex items-center rounded-xl bg-leek-accent px-5 py-2.5 text-sm font-bold text-leek-950 shadow-sm transition hover:bg-leek-accent-bright"
          >
            Get the app
          </a>
        </div>

        <button
          type="button"
          className="inline-flex rounded-lg border border-white/15 p-2 text-white lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {open ? (
        <div id="mobile-nav" className="border-t border-white/10 px-4 py-4 lg:hidden">
          <div className="flex flex-col gap-3">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-lg px-2 py-2 text-white/95"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#download"
              className="mt-2 inline-flex justify-center rounded-xl bg-leek-accent py-3 text-center text-sm font-bold text-leek-950"
              onClick={() => setOpen(false)}
            >
              Get the app
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
