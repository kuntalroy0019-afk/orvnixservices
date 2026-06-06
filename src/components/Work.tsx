import Image from "next/image";
import Reveal from "@/components/Reveal";

const projects = [
  {
    name: "Mistveil",
    category: "AI · SaaS",
    blurb:
      "An AI writing companion. We rebuilt the editor from scratch and shipped real-time collaboration in six weeks.",
    img: "/images/work-mistveil.jpeg",
    tag: "Product + Engineering",
    result: "+40% activation",
  },
  {
    name: "NodeForge",
    category: "Developer tools",
    blurb:
      "A self-serve infrastructure platform. A redesigned onboarding flow lifted activation by a third in one quarter.",
    img: "/images/work-nodeforge.jpeg",
    tag: "Web + Brand",
    result: "+33% sign-ups",
  },
  {
    name: "Paceline",
    category: "Mobile · Fitness",
    blurb:
      "iOS and Android built from zero — design system, apps and marketing site shipped in a single engagement.",
    img: "/images/work-paceline.jpeg",
    tag: "Mobile + Design",
    result: "4.8★ launch",
  },
  {
    name: "Harborly",
    category: "Fintech",
    blurb:
      "A full brand and product refresh for a payments startup heading into its Series A round.",
    img: "/images/work-harborly.jpeg",
    tag: "Brand + Product",
    result: "Series A closed",
  },
  {
    name: "Quanta",
    category: "Analytics",
    blurb:
      "A dashboard rebuild that cut time-to-insight in half and gave the team a design system to grow on.",
    img: "/images/work-quanta.jpeg",
    tag: "Product + Engineering",
    result: "−50% load time",
  },
  {
    name: "Brightkit",
    category: "E-commerce",
    blurb:
      "Storefront, checkout and brand identity for a DTC launch — live and selling in under eight weeks.",
    img: "/images/work-brightkit.jpeg",
    tag: "Web + Brand",
    result: "8-week launch",
  },
  {
    name: "Sentinel",
    category: "AI · Agents",
    blurb:
      "An autonomous support agent that triages and resolves tickets end-to-end, with humans in the loop for the edge cases.",
    img: "/images/work-sentinel.jpeg",
    tag: "AI Agent Workflows",
    result: "−70% resolution time",
  },
  {
    name: "Atlas Robotics",
    category: "Robotics · Warehouse",
    blurb:
      "Vision and control software for autonomous warehouse robots, from prototype to a live pilot fleet.",
    img: "/images/work-atlas.jpeg",
    tag: "Robotics",
    result: "12-robot pilot",
  },
  {
    name: "Skyline Aerial",
    category: "Drones · Surveying",
    blurb:
      "Autonomous mapping drones with a custom flight planner and a pipeline that turns footage into 3D site models.",
    img: "/images/work-skyline.jpeg",
    tag: "Drone Operations",
    result: "10× faster surveys",
  },
];

export default function Work() {
  return (
    <section id="work" className="relative border-t border-border py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <p className="eyebrow">Selected work</p>
            <h2 className="display mt-5 text-balance text-4xl sm:text-5xl">
              A few things we&apos;re proud of.
            </h2>
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
                  alt={`${p.name} — ${p.category}`}
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
                <span className="absolute bottom-4 right-4 rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">
                  {p.result}
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
