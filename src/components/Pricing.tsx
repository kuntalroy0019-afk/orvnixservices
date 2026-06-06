"use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";

const plans = [
  {
    name: "Ongoing",
    price: "Monthly",
    cadence: "rolling",
    blurb: "A steady hand for teams with a living roadmap. One focus at a time, shipped continuously.",
    features: [
      "One active workstream",
      "Design & development",
      "~48 hour iteration loop",
      "Shared board & direct line",
      "Pause whenever you need",
    ],
    cta: "Start a conversation",
    featured: false,
  },
  {
    name: "Embedded",
    price: "Monthly",
    cadence: "rolling",
    blurb: "The full studio, inside your team. For the moments that decide the year.",
    features: [
      "Two active workstreams",
      "Software, AI, robotics & drones",
      "~24 hour iteration loop",
      "Dedicated creative direction",
      "Roadmap & architecture",
      "Priority on everything",
    ],
    cta: "Start a conversation",
    featured: true,
  },
  {
    name: "One-Off",
    price: "Project",
    cadence: "fixed scope",
    blurb: "A launch, a rebrand, an MVP, a prototype — one clear outcome, one clear deadline.",
    features: [
      "Defined scope & timeline",
      "Dedicated project team",
      "Milestone-based delivery",
      "Full handover & docs",
      "Optional ongoing support",
    ],
    cta: "Start a conversation",
    featured: false,
  },
];

const faqs = [
  {
    q: "How quickly can we begin?",
    a: "Usually within a few business days of our first call. Once we've agreed it's a fit, we're inside your stack and moving on the first piece of work almost immediately.",
  },
  {
    q: "What if we only need you some months?",
    a: "That's how most of our engagements work. Ease off when the roadmap quietens, pick back up when it doesn't. You're never paying for a team sitting idle.",
  },
  {
    q: "Who actually does the work?",
    a: "A small, senior, cross-functional team — engineers, AI and LLM specialists, robotics and drone operators, and a creative director. No juniors learning on your time, no offshoring.",
  },
  {
    q: "How is this different from hiring?",
    a: "Hiring takes months and locks you in. We cover the whole surface — software, AI, hardware — stay accountable to your roadmap, and scale up or down without anyone being re-hired or let go.",
  },
  {
    q: "Do you work in our tools and codebase?",
    a: "Yes. We embed directly — your repository, your design files, your board, your channel of choice. It should feel like we were always there.",
  },
  {
    q: "Who owns the work?",
    a: "You do. Every deliverable, file and line of code is yours, handed over as we go. No hostage situations.",
  },
];

function Faq({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
      >
        <span className="text-base font-medium">{q}</span>
        <span
          className={`grid h-7 w-7 shrink-0 place-items-center rounded-full border border-border text-muted transition-transform ${
            open ? "rotate-45 border-accent text-accent" : ""
          }`}
        >
          +
        </span>
      </button>
      <div
        className={`grid transition-all duration-300 ${
          open ? "grid-rows-[1fr] pb-5 opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="max-w-2xl text-sm leading-relaxed text-muted">{a}</p>
        </div>
      </div>
    </div>
  );
}

export default function Pricing() {
  return (
    <section id="pricing" className="relative border-t border-border py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Ways to work together</p>
          <h2 className="display mt-5 text-balance text-4xl sm:text-5xl">
            Three ways in. One conversation to start.
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
            We&apos;ll shape the exact terms together — but here&apos;s how most
            engagements take form. No contracts to puzzle over, no lock-in.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`relative flex flex-col rounded-2xl border p-7 ${
                p.featured
                  ? "border-accent/40 bg-surface-2"
                  : "border-border bg-surface"
              }`}
            >
              {p.featured && (
                <span className="absolute -top-3 left-7 rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">
                  Most popular
                </span>
              )}
              <h3 className="font-display text-2xl">{p.name}</h3>
              <div className="mt-3 flex items-baseline gap-2">
                <span className="text-2xl font-semibold tracking-tight">{p.price}</span>
                <span className="text-sm text-muted-2">· {p.cadence}</span>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted">{p.blurb}</p>

              <ul className="mt-7 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <span className="mt-0.5 text-accent">✓</span>
                    <span className="text-foreground/90">{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`group mt-8 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition-transform hover:-translate-y-0.5 ${
                  p.featured
                    ? "bg-accent text-accent-foreground"
                    : "border border-border-strong text-foreground hover:bg-surface-2"
                }`}
              >
                {p.cta}
                <span className="transition-transform group-hover:translate-x-0.5">→</span>
              </a>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <div className="mt-24 grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="eyebrow">Questions</p>
            <h3 className="display mt-5 text-balance text-3xl sm:text-4xl">
              Everything else you might be wondering.
            </h3>
            <p className="mt-5 text-sm leading-relaxed text-muted">
              Still unsure?{" "}
              <a
                href="#contact"
                className="text-accent underline-offset-4 hover:underline"
              >
                Ask us directly
              </a>
              .
            </p>
          </div>
          <div>
            {faqs.map((f) => (
              <Faq key={f.q} {...f} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
