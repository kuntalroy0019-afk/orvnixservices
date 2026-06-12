import Image from "next/image";
import { site } from "@/lib/site";

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
    <section className="relative overflow-hidden pt-28 pb-16 sm:pt-32 sm:pb-20">
      {/* ambient depth */}
      <div
        aria-hidden
        className="animate-float-slow pointer-events-none absolute left-1/4 top-0 h-[460px] w-[760px] -translate-x-1/2 rounded-full opacity-[0.14] blur-[140px]"
        style={{ background: "radial-gradient(circle, var(--accent), transparent 70%)" }}
      />
      <div
        aria-hidden
        className="animate-drift pointer-events-none absolute -right-24 top-24 h-[420px] w-[420px] rounded-full opacity-[0.4] blur-[140px]"
        style={{ background: "radial-gradient(circle, #190b28, transparent 70%)" }}
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        {/* instrument bar */}
        <div className="reveal flex items-center gap-4 border-y border-border py-3 font-mono text-[11px] tracking-[0.18em] text-muted-2">
          <span className="text-foreground">ORVNIX</span>
          <span className="text-accent">{"//"}</span>
          <span>STUDIO·{site.address.city.toUpperCase()}</span>
          <span className="hairline" />
          <span className="hidden sm:inline">
            {site.geo.lat.toFixed(2)}°N · {site.geo.lng.toFixed(2)}°E
          </span>
          <span className="inline-flex items-center gap-1.5 text-foreground">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
            </span>
            ONLINE
          </span>
        </div>

        <div className="mt-12 grid items-end gap-12 lg:grid-cols-[1.2fr_0.8fr] sm:mt-16">
          {/* copy */}
          <div>
            <p
              className="reveal font-mono text-xs tracking-[0.2em] text-muted-2"
              style={{ animationDelay: "0.04s" }}
            >
              [ 00 ] — PRECISION PRODUCT STUDIO
            </p>

            <h1
              className="reveal display mt-6 text-balance text-5xl sm:text-7xl lg:text-[5.5rem]"
              style={{ animationDelay: "0.08s" }}
            >
              We engineer software, <em>AI</em> and autonomous machines.
            </h1>

            <p
              className="reveal mt-8 max-w-xl text-lg leading-relaxed text-muted"
              style={{ animationDelay: "0.14s" }}
            >
              Orvnix is a small studio in {site.address.city}. We take on a handful
              of teams at a time and build the work that moves them forward —
              precisely, and end to end.
            </p>

            {/* discipline spec strip */}
            <div
              className="reveal mt-8 flex flex-wrap gap-x-5 gap-y-2 font-mono text-[11px] tracking-[0.14em] text-muted-2"
              style={{ animationDelay: "0.18s" }}
            >
              {disciplines.map((d) => (
                <span key={d} className="inline-flex items-center gap-1.5">
                  <span className="text-accent">+</span>
                  {d}
                </span>
              ))}
            </div>

            <div
              className="reveal mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center"
              style={{ animationDelay: "0.22s" }}
            >
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-medium text-accent-foreground transition-transform hover:-translate-y-0.5"
              >
                Book a call
                <span className="transition-transform group-hover:translate-x-0.5">→</span>
              </a>
              <a
                href={`mailto:${site.email}`}
                className="font-mono text-xs tracking-[0.1em] text-muted underline-offset-4 transition-colors hover:text-foreground hover:underline"
              >
                {site.email}
              </a>
            </div>
          </div>

          {/* image — framed as a technical readout */}
          <div
            className="reveal bracket relative aspect-[4/5] overflow-hidden border border-border bg-surface"
            style={{ animationDelay: "0.12s" }}
          >
            <Image
              src="/images/hero.jpeg"
              alt="Inside the Orvnix studio"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 38vw"
              className="object-cover opacity-80 grayscale transition-all duration-700 hover:grayscale-0 hover:opacity-100"
            />
            <div
              aria-hidden
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, transparent 35%, rgba(9,12,2,0.92))",
              }}
            />
            {/* technical labels */}
            <div className="absolute left-4 top-4 flex items-center justify-between gap-2 font-mono text-[10px] tracking-[0.18em] text-foreground/70">
              FIG.01
            </div>
            <div className="absolute inset-x-4 bottom-4">
              <div className="font-mono text-[10px] tracking-[0.18em] text-accent">
                /STUDIO
              </div>
              <p className="mt-1.5 font-display text-2xl leading-tight">
                Built in-house, end to end.
              </p>
              <p className="mt-1 font-mono text-[11px] tracking-[0.08em] text-muted">
                Design · engineering · hardware
              </p>
            </div>
          </div>
        </div>

        {/* marquee */}
        <div className="reveal mt-20" style={{ animationDelay: "0.26s" }}>
          <p className="eyebrow mb-6">Concepts taking shape in the studio</p>
          <div className="relative overflow-hidden border-t border-border pt-6 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
            <div className="flex w-max animate-marquee gap-14">
              {[...logos, ...logos].map((name, i) => (
                <span
                  key={i}
                  className="shrink-0 font-display text-2xl text-muted-2/70"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
