import Image from "next/image";
import { site } from "@/lib/site";

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
    <section className="relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-20">
      {/* animated grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage:
            "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse 90% 60% at 30% 0%, black, transparent 75%)",
        }}
      />
      <div
        aria-hidden
        className="animate-float-slow pointer-events-none absolute left-1/4 top-0 h-[480px] w-[760px] -translate-x-1/2 rounded-full opacity-[0.16] blur-[130px]"
        style={{ background: "radial-gradient(circle, var(--accent), transparent 70%)" }}
      />
      <div
        aria-hidden
        className="animate-drift pointer-events-none absolute -right-24 top-24 h-[420px] w-[420px] rounded-full opacity-[0.35] blur-[130px]"
        style={{ background: "radial-gradient(circle, #190b28, transparent 70%)" }}
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-end gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          {/* copy */}
          <div>
            <div className="reveal eyebrow inline-flex items-center gap-2">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
              </span>
              Studio <span className="dot">·</span> {site.address.city}, India
            </div>

            <h1
              className="reveal display mt-7 text-balance text-5xl sm:text-6xl lg:text-[5rem]"
              style={{ animationDelay: "0.05s" }}
            >
              Software, AI and autonomous
              <br className="hidden sm:block" /> systems, built like they{" "}
              <em className="text-accent">matter</em>.
            </h1>

            <p
              className="reveal mt-8 max-w-xl text-lg leading-relaxed text-muted"
              style={{ animationDelay: "0.12s" }}
            >
              Orvnix is a small studio in {site.address.city}. We take on a handful
              of teams at a time and build the work that moves them forward — web,
              mobile, LLMs, AI agents, robotics and drones. Quietly, and very well.
            </p>

            <div
              className="reveal mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center"
              style={{ animationDelay: "0.18s" }}
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
                className="text-sm text-muted underline-offset-4 transition-colors hover:text-foreground hover:underline"
              >
                or write to {site.email}
              </a>
            </div>
          </div>

          {/* image */}
          <div
            className="reveal relative aspect-[4/5] overflow-hidden rounded-2xl border border-border"
            style={{ animationDelay: "0.1s" }}
          >
            <Image
              src="/images/hero.jpeg"
              alt="Inside the Orvnix studio"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover opacity-90 grayscale transition-all duration-700 hover:grayscale-0"
            />
            <div
              aria-hidden
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, transparent 40%, rgba(8,8,10,0.85))",
              }}
            />
            <div className="absolute inset-x-0 bottom-0 p-6">
              <p className="font-display text-2xl">Built in-house, end to end.</p>
              <p className="mt-1 text-sm text-muted">
                Design, engineering and hardware under one roof.
              </p>
            </div>
          </div>
        </div>

        {/* logo marquee */}
        <div className="reveal mt-20" style={{ animationDelay: "0.24s" }}>
          <p className="eyebrow mb-7">Teams we&apos;ve built alongside</p>
          <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
            <div className="flex w-max animate-marquee gap-14">
              {[...logos, ...logos].map((name, i) => (
                <span
                  key={i}
                  className="shrink-0 font-display text-2xl text-muted-2/80"
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
