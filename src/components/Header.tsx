"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "Workspace", href: "/workspace" },
  { label: "Studio", href: "/studio" },
  { label: "Pricing", href: "/pricing" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock background scroll + allow Escape to close while the menu is open.
  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.documentElement.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      {/* top scrim — softens content dissolving under the bar once scrolled */}
      <div
        aria-hidden
        className={`pointer-events-none fixed inset-x-0 top-0 z-40 h-28 transition-opacity duration-500 ${
          scrolled && !open ? "opacity-100" : "opacity-0"
        }`}
        style={{
          background: "linear-gradient(to bottom, var(--background), transparent)",
        }}
      />
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color] duration-500 ${
          scrolled && !open
            ? "border-border bg-background/70 backdrop-blur-md"
            : "border-transparent bg-transparent"
        }`}
      >
      <nav className="flex h-16 items-center justify-between pl-5 sm:pl-8 md:h-[4.5rem]">
        <Link href="/#hero" onClick={() => setOpen(false)} className="flex items-center gap-2.5" aria-label="Orvnix — back to top">
          <span className="grid h-7 w-7 place-items-center bg-foreground text-background transition-colors">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 2L4 7v10l8 5 8-5V7l-8-5z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinejoin="round"
              />
              <path d="M12 7v10M7.5 9.5l9 5M16.5 9.5l-9 5" stroke="currentColor" strokeWidth="2" />
            </svg>
          </span>
          <span className="display text-[20px]">Orvnix</span>
        </Link>

        {/* centered nav */}
        <ul className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="nav-underline font-sans text-[13px] text-foreground/80 transition-colors duration-200 hover:text-foreground"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* full-height dark slab CTA, flush to the corner */}
        <Link
          href="/contact"
          className="group hidden h-full items-center gap-2 bg-foreground px-9 font-sans text-[13px] font-medium text-background transition-colors duration-300 hover:bg-accent hover:text-accent-foreground md:flex"
        >
          Book a call
          <span className="transition-transform duration-300 group-hover:translate-x-0.5">→</span>
        </Link>

        <button
          className="relative z-50 mr-5 flex h-9 w-9 items-center justify-center rounded-[3px] border border-border-strong md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <div className="space-y-1.5">
            <span
              className={`block h-px w-5 bg-foreground transition-transform ${
                open ? "translate-y-[6.5px] rotate-45" : ""
              }`}
            />
            <span className={`block h-px w-5 bg-foreground transition-opacity ${open ? "opacity-0" : ""}`} />
            <span
              className={`block h-px w-5 bg-foreground transition-transform ${
                open ? "-translate-y-[6.5px] -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </nav>

      {open && (
        <div className="fixed inset-0 z-40 flex flex-col bg-background md:hidden">
          {/* spacer under the fixed header bar */}
          <div className="h-16 shrink-0 border-b border-border" />

          <nav className="flex flex-1 flex-col justify-center px-6">
            <Link
              href="/#hero"
              onClick={() => setOpen(false)}
              className="reveal display border-b border-border py-4 text-4xl text-foreground"
              style={{ animationDelay: "0.06s" }}
            >
              <span className="mr-4 align-middle font-display text-sm text-accent">
                00
              </span>
              Home
            </Link>
            {links.map((l, i) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="reveal display border-b border-border py-4 text-4xl text-foreground"
                style={{ animationDelay: `${0.11 + i * 0.05}s` }}
              >
                <span className="mr-4 align-middle font-display text-sm text-muted-2">
                  0{i + 1}
                </span>
                {l.label}
              </Link>
            ))}
          </nav>

          <div
            className="reveal shrink-0 border-t border-border p-6"
            style={{ animationDelay: `${0.06 + links.length * 0.05}s` }}
          >
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="btn-ink w-full"
            >
              Book a call
            </Link>
            <a
              href={`mailto:admin@orvnix.com`}
              className="mt-4 block text-center font-sans text-xs tracking-[0.1em] text-muted"
            >
              admin@orvnix.com
            </a>
          </div>
        </div>
      )}
      </header>
    </>
  );
}
