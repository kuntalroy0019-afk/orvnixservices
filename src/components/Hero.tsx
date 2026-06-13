import { site } from "@/lib/site";
import SplitReveal from "@/components/SplitReveal";
import NetworkCenterpiece from "@/components/NetworkCenterpiece";

const disciplines = [
  "WEB",
  "MOBILE",
  "AI AGENTS",
  "LLM",
  "ROBOTICS",
  "DRONES",
];

const logos = [
  "Mistveil",
  "NodeForge",
  "Lumora",
  "Brightkit",
  "Paceline",
  "Harborly",
  "Quanta",
  "Atlas",
];

export default function Hero() {
  return (
    <section className="relative">
      {/* ===== Full-viewport hero — the shared canvas shows through ===== */}
      <div className="relative min-h-[100svh]">
        {/* motion centerpiece: the network forms in the open right field as
            the visitor scrolls — order engineered out of scatter */}
        <div
          aria-hidden
          className="absolute right-[6vw] top-[14vh] hidden h-[52vh] w-[34vw] md:block"
        >
          <NetworkCenterpiece />
        </div>

        {/* stepped headline cascade, anchored left */}
        <h1
          className="display absolute left-5 top-1/2 w-[92vw] -translate-y-1/2 text-[clamp(2.7rem,6.8vw,8rem)] leading-[1.02] md:left-[10vw] md:w-[72vw]"
          aria-label="We engineer software, AI and autonomous machines."
        >
          <SplitReveal as="span" text="We engineer" delay={0.1} className="block" />
          <SplitReveal
            as="span"
            text="software, AI and"
            accent={["AI"]}
            delay={0.24}
            className="block md:ml-[9vw]"
          />
          <SplitReveal
            as="span"
            text="autonomous machines."
            delay={0.38}
            className="block md:ml-[18vw]"
          />
        </h1>

        {/* supporting passage — mid-right, quiet */}
        <div className="absolute bottom-[12vh] left-5 right-5 md:bottom-auto md:left-auto md:right-[10vw] md:top-[58%] md:w-[20vw] md:min-w-[280px]">
          <p
            className="reveal font-sans text-[15px] leading-relaxed text-foreground"
            style={{ animationDelay: "0.55s" }}
          >
            Orvnix is a small studio in {site.address.city}. We take on a handful
            of teams at a time and build the work that moves them forward —
            precisely, and end to end.
          </p>
          <div
            className="reveal mt-5 flex flex-col items-start gap-2.5"
            style={{ animationDelay: "0.65s" }}
          >
            <a href="#contact" className="arrow-link font-sans text-sm text-foreground">
              Book a call
              <span className="arrow text-accent">→</span>
              <span className="line" />
            </a>
            <a
              href={`mailto:${site.email}`}
              className="font-sans text-xs text-muted underline-offset-4 hover:underline"
            >
              {site.email}
            </a>
          </div>
        </div>
      </div>

      {/* ===== disciplines strip — a hairline-bounded spec row ===== */}
      <div className="relative z-[1] flex flex-wrap items-center gap-x-7 gap-y-2 border-y border-border bg-background px-5 py-5 font-sans text-[11px] tracking-[0.14em] text-muted md:px-[5vw]">
        <span className="eyebrow">What we build</span>
        {disciplines.map((d) => (
          <span key={d} className="inline-flex items-center gap-1.5">
            <span className="text-accent">+</span>
            {d}
          </span>
        ))}
        <span className="hairline hidden md:block" />
        <span className="hidden font-display text-sm normal-case tracking-normal text-muted md:inline">
          Built in-house, end to end. — Design · engineering · hardware
        </span>
      </div>

      {/* ===== marquee ===== */}
      <div className="relative border-b border-border bg-background px-5 py-12 md:px-[5vw]">
        <p className="eyebrow mb-6">Concepts taking shape in the studio</p>
        <div className="fade-edges overflow-hidden">
          <div className="flex w-max animate-marquee items-baseline gap-16">
            {[...logos, ...logos].map((name, i) => (
              <span
                key={i}
                className="display shrink-0 text-4xl text-muted-2/70"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
