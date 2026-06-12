import Image from "next/image";
import Reveal from "@/components/Reveal";
import SectionLabel from "@/components/SectionLabel";

const projects = [
  {
    name: "Mistveil",
    category: "AI · SaaS",
    blurb:
      "A concept for an AI writing companion — a focused editor with real-time collaboration built in.",
    img: "/images/work-mistveil.jpeg",
    tag: "Product + Engineering",
  },
  {
    name: "NodeForge",
    category: "Developer tools",
    blurb:
      "A self-serve developer-infrastructure concept, with an onboarding flow designed to reach value fast.",
    img: "/images/work-nodeforge.jpeg",
    tag: "Web + Brand",
  },
  {
    name: "Paceline",
    category: "Mobile · Fitness",
    blurb:
      "A fitness-app concept — design system, iOS/Android UI and marketing site as one coherent product.",
    img: "/images/work-paceline.jpeg",
    tag: "Mobile + Design",
  },
  {
    name: "Harborly",
    category: "Fintech",
    blurb:
      "A brand and product concept for a payments startup — identity through to the dashboard.",
    img: "/images/work-harborly.jpeg",
    tag: "Brand + Product",
  },
  {
    name: "Quanta",
    category: "Analytics",
    blurb:
      "An analytics-dashboard concept focused on cutting time-to-insight, with a design system to grow on.",
    img: "/images/work-quanta.jpeg",
    tag: "Product + Engineering",
  },
  {
    name: "Brightkit",
    category: "E-commerce",
    blurb:
      "A DTC e-commerce concept — storefront, checkout and brand identity in a single system.",
    img: "/images/work-brightkit.jpeg",
    tag: "Web + Brand",
  },
  {
    name: "Sentinel",
    category: "AI · Agents",
    blurb:
      "A concept for an autonomous support agent that triages and resolves tickets, humans in the loop.",
    img: "/images/work-sentinel.jpeg",
    tag: "AI Agent Workflows",
  },
  {
    name: "Atlas Robotics",
    category: "Robotics · Warehouse",
    blurb:
      "A robotics concept — vision and control software for autonomous warehouse robots.",
    img: "/images/work-atlas.jpeg",
    tag: "Robotics",
  },
  {
    name: "Skyline Aerial",
    category: "Drones · Surveying",
    blurb:
      "A drone-surveying concept — autonomous flight planning and a footage-to-3D pipeline.",
    img: "/images/work-skyline.jpeg",
    tag: "Drone Operations",
  },
];

export default function Work() {
  return (
    <section id="work" className="relative border-t border-border py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <SectionLabel index="05" label="Concept work" meta="SELF-INITIATED" />
            <h2 className="display mt-5 text-balance text-4xl sm:text-5xl">
              Concepts that show how we think.
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
              We&apos;re a young studio, so these are self-initiated concepts —
              honest explorations of the problems we love to solve. Client case
              studies are on the way.
            </p>
          </div>
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-foreground"
          >
            Start a conversation
            <span className="transition-transform group-hover:translate-x-0.5">→</span>
          </a>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal
              as="article"
              key={p.name}
              delay={(i % 3) * 0.07}
              className="group relative overflow-hidden rounded-2xl border border-border bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-border-strong hover:shadow-2xl hover:shadow-black/40"
            >
              <div className="relative aspect-[16/11] overflow-hidden">
                <Image
                  src={p.img}
                  alt={`${p.name} — ${p.category} (concept)`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover opacity-80 grayscale transition-all duration-700 group-hover:scale-105 group-hover:opacity-100 group-hover:grayscale-0"
                />
                {/* tint for cohesion */}
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent"
                />
                <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/40 px-3 py-1 text-xs text-foreground/90 backdrop-blur">
                  {p.tag}
                </span>
                <span className="absolute bottom-4 right-4 rounded-full border border-accent/40 bg-black/40 px-3 py-1 text-xs font-medium text-accent backdrop-blur">
                  Concept
                </span>
                <span className="absolute bottom-4 left-4 font-display text-2xl text-foreground drop-shadow">
                  {p.name}
                </span>
              </div>
              <div className="flex items-start justify-between gap-4 p-6">
                <div>
                  <div className="text-xs uppercase tracking-[0.16em] text-muted-2">
                    {p.category}
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{p.blurb}</p>
                </div>
                <span className="mt-0.5 shrink-0 text-muted transition-transform duration-300 group-hover:translate-x-0.5 group-hover:text-accent">
                  ↗
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
