import Image from "next/image";
import Reveal from "@/components/Reveal";
import SectionLabel from "@/components/SectionLabel";
import SplitReveal from "@/components/SplitReveal";
import { site } from "@/lib/site";

/**
 * Frame 5 — footprint layout: where the studio operates from and how far the
 * work travels, plus the dedicated callout box (the strategic-partner slot,
 * used here for the founding-partner offer).
 */
const footprint = [
  {
    k: "Studio HQ",
    v: `${site.address.city}, ${site.address.state}`,
    sub: site.address.country,
  },
  {
    k: "Coordinates",
    v: `${site.geo.lat.toFixed(2)}°N · ${site.geo.lng.toFixed(2)}°E`,
    sub: "IST · UTC+5:30",
  },
  {
    k: "Engagements",
    v: "Working worldwide",
    sub: "Remote-friendly, embedded by default",
  },
];

export default function Reach() {
  return (
    <section id="reach" className="section-pad relative border-t border-border bg-surface">
      <div className="px-5 md:px-[5vw]">
        <Reveal className="max-w-2xl">
          <SectionLabel index="04·a" label="Where we work" meta="REACH" />
          <SplitReveal
            as="h2"
            text="Based in Kolkata, working worldwide."
            accent={["worldwide."]}
            className="display mt-6 text-balance text-[clamp(2.4rem,4.6vw,4rem)]"
          />
        </Reveal>

        {/* the footprint made visible — routes converging, seen from above */}
        <Reveal className="mt-[clamp(3rem,5vw,4.5rem)] bg-stage p-4 sm:p-6">
          <div className="relative aspect-[16/9] overflow-hidden sm:aspect-[21/8]" data-cursor="Reach">
            <Image
              src="/images/reach-aerial.jpeg"
              alt="Routes converging, seen from above"
              fill
              sizes="90vw"
              className="stage-img img-treat object-cover"
            />
          </div>
          <div className="mt-4 flex items-baseline justify-between font-display text-xs text-muted">
            <span>Fig. 03 — Routes converge where the work is</span>
            <span className="text-accent">/REACH</span>
          </div>
        </Reveal>

        {/* footprint grid */}
        <div className="mt-8 grid gap-px border border-border bg-border md:grid-cols-3">
          {footprint.map((f, i) => (
            <Reveal key={f.k} delay={i * 0.09} className="bg-background p-8">
              <div className="eyebrow">{f.k}</div>
              <div className="display mt-4 text-2xl sm:text-3xl">{f.v}</div>
              <div className="mt-2 font-display text-sm text-muted">{f.sub}</div>
            </Reveal>
          ))}
        </div>

        {/* partner / strategic callout box */}
        <Reveal className="ink mt-8 flex flex-col items-start justify-between gap-6 p-8 sm:flex-row sm:items-center sm:p-10">
          <div>
            <div className="eyebrow">Founding partners</div>
            <h3 className="display mt-3 text-[clamp(1.8rem,2.8vw,2.4rem)]">
              Be our first <strong>case study.</strong>
            </h3>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted">
              Bring us a real problem. We&apos;ll do the work, get you results, and
              tell the story together — with your name on it.
            </p>
          </div>
          <a href="#contact" className="btn-ink group shrink-0 font-sans">
            Start a conversation
            <span className="transition-transform group-hover:translate-x-0.5">→</span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
