"use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";
import SectionLabel from "@/components/SectionLabel";
import SplitReveal from "@/components/SplitReveal";
import { faqs } from "@/lib/site";

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

function Faq({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-4 py-6 text-left"
      >
        <span className="font-display text-lg">{q}</span>
        <span
          className={`grid h-7 w-7 shrink-0 place-items-center rounded-full border border-border-strong font-sans text-muted transition-transform duration-300 ${
            open ? "rotate-45 border-accent text-accent" : ""
          }`}
        >
          +
        </span>
      </button>
      <div
        className={`grid transition-all duration-300 ${
          open ? "grid-rows-[1fr] pb-6 opacity-100" : "grid-rows-[0fr] opacity-0"
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
    <section id="pricing" className="section-pad relative border-t border-border">
      <div className="px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <SectionLabel index="09" label="Ways to work together" meta="ENGAGEMENTS" />
          <SplitReveal
            as="h2"
            text="Three ways in. One conversation to start."
            className="display mt-6 text-balance text-[clamp(2.4rem,4.6vw,4rem)]"
          />
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            We&apos;ll shape the exact terms together — but here&apos;s how most
            engagements take form. No contracts to puzzle over, no lock-in.
          </p>
        </Reveal>

        <div className="mt-[clamp(3rem,5vw,4.5rem)] grid gap-8 lg:grid-cols-3">
          {plans.map((p, i) => (
            <div
              key={p.name}
              className={`relative flex flex-col p-8 ${
                p.featured ? "ink" : "border border-border bg-surface"
              }`}
            >
              {p.featured && (
                <span className="absolute -top-3 left-8 bg-accent px-3 py-1 font-display text-xs text-accent-foreground">
                  Most popular
                </span>
              )}
              <span className="font-display text-sm text-muted-2">
                P·0{i + 1}
              </span>
              <h3 className="display mt-6 text-3xl">{p.name}</h3>
              <div className="mt-3 flex items-baseline gap-2">
                <span className="font-display text-2xl">{p.price}</span>
                <span className="font-display text-sm text-muted-2">
                  · {p.cadence}
                </span>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted">{p.blurb}</p>

              <ul className="mt-8 flex-1 space-y-3 border-t border-border pt-6">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <span className="mt-0.5 text-accent">✓</span>
                    <span className="text-foreground/90">{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`group mt-9 font-sans ${p.featured ? "btn-ink" : "btn-line"}`}
              >
                {p.cta}
                <span className="transition-transform group-hover:translate-x-0.5">→</span>
              </a>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <div className="mt-[clamp(5rem,8vw,7rem)] grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <SectionLabel index="09·a" label="Questions" />
            <h3 className="display mt-6 text-balance text-[clamp(1.9rem,3vw,2.6rem)]">
              Everything else you might be wondering.
            </h3>
            <p className="mt-6 text-sm leading-relaxed text-muted">
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
          <div className="border-t border-border">
            {faqs.map((f) => (
              <Faq key={f.q} {...f} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
