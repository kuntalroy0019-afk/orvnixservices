import Reveal from "@/components/Reveal";
import SectionLabel from "@/components/SectionLabel";
import SplitReveal from "@/components/SplitReveal";
import CurtainImage from "@/components/CurtainImage";

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
    <section id="work" className="section-pad relative border-t border-border">
      <div className="px-5 sm:px-8">
        <Reveal className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <SectionLabel index="05" label="Concept work" meta="SELF-INITIATED" />
            <SplitReveal
              as="h2"
              text="Concepts that show how we think."
              className="display mt-6 text-balance text-[clamp(2.4rem,4.6vw,4rem)]"
            />
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
              We&apos;re a young studio, so these are self-initiated concepts —
              honest explorations of the problems we love to solve. Client case
              studies are on the way.
            </p>
          </div>
          <a href="#contact" className="arrow-link text-sm text-foreground">
            Start a conversation
            <span className="arrow">→</span>
            <span className="line" />
          </a>
        </Reveal>

        <div className="mt-[clamp(3rem,5vw,4.5rem)] grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal as="article" key={p.name} delay={(i % 3) * 0.07} className="group">
              <div data-cursor="View" className="relative bg-stage">
                <CurtainImage
                  src={p.img}
                  alt={`${p.name} — ${p.category} (concept)`}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  delay={(i % 3) * 0.05}
                  className="aspect-[4/3]"
                  imgClassName="stage-img img-treat object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
                >
                  <span className="absolute left-4 top-4 font-display text-xs text-foreground/70">
                    {p.tag}
                  </span>
                  <span className="absolute bottom-4 right-4 bg-accent px-2.5 py-1 font-display text-xs text-accent-foreground">
                    Concept
                  </span>
                </CurtainImage>
              </div>

              <div className="mt-5 border-t border-border pt-4">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="display text-2xl">{p.name}</h3>
                  <span className="shrink-0 text-muted-2 transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-accent">
                    ↗
                  </span>
                </div>
                <div className="eyebrow mt-1.5 text-sm">{p.category}</div>
                <p className="mt-3 text-sm leading-relaxed text-muted">{p.blurb}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
