import Reveal from "@/components/Reveal";
import Spotlight from "@/components/Spotlight";

const services = [
  {
    title: "Product Design",
    body: "Research, UX, UI and design systems. We turn fuzzy ideas into interfaces people actually want to use.",
    items: ["User flows & wireframes", "High-fidelity UI", "Design systems", "Prototyping", "Usability testing"],
    icon: "design",
  },
  {
    title: "Web Development",
    body: "Fast, accessible, production-ready front-ends and the back-ends behind them. Built to scale, not to demo.",
    items: ["Next.js & React", "Marketing sites", "Web apps & dashboards", "APIs & integrations", "Performance & SEO"],
    icon: "web",
  },
  {
    title: "Mobile Apps",
    body: "Native-quality iOS and Android from a single team. From first build to App Store launch and beyond.",
    items: ["iOS & Android", "React Native", "App Store delivery", "Push & analytics", "Ongoing iteration"],
    icon: "mobile",
  },
  {
    title: "Branding & Creative",
    body: "Identity, motion and the creative direction that ties it together. A brand that looks as good as the product.",
    items: ["Visual identity", "Logo & guidelines", "Motion design", "Pitch & decks", "Creative direction"],
    icon: "brand",
  },
  {
    title: "AI Agent Workflows",
    body: "Autonomous agents that do real work — research, support, operations — wired straight into the tools your team already lives in.",
    items: ["Custom AI agents", "RAG & knowledge bases", "Workflow automation", "Tool & API orchestration", "Evals & guardrails"],
    icon: "ai",
  },
  {
    title: "LLM Engineering",
    body: "Large language models, made dependable. We fine-tune, ground and deploy models you can actually trust in production.",
    items: ["Fine-tuning & adapters", "Prompt & context systems", "Model deployment", "Inference optimisation", "Safety & evaluation"],
    icon: "llm",
  },
  {
    title: "Robotics",
    body: "From prototype to deployment. Control systems, computer vision and firmware for robots that work in the real world.",
    items: ["Control systems", "Computer vision", "Firmware & embedded", "ROS development", "Sensor fusion"],
    icon: "robot",
  },
  {
    title: "Drone Operations",
    body: "Autonomous flight, aerial data and custom payloads. We build, fly and turn the footage into something useful.",
    items: ["Autonomous flight", "Aerial mapping & survey", "Flight planning", "Payload integration", "Data processing"],
    icon: "drone",
  },
];

function ServiceIcon({ name }: { name: string }) {
  const c = {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  switch (name) {
    case "design":
      return (
        <svg {...c}>
          <path d="M12 19a7 7 0 1 0 0-14 7 7 0 0 0 0 14zM12 5V3M12 21v-2M5 12H3M21 12h-2" />
          <circle cx="12" cy="12" r="2.5" />
        </svg>
      );
    case "web":
      return (
        <svg {...c}>
          <rect x="3" y="4" width="18" height="14" rx="2" />
          <path d="M3 9h18M7 14h6" />
        </svg>
      );
    case "mobile":
      return (
        <svg {...c}>
          <rect x="7" y="2" width="10" height="20" rx="2.5" />
          <path d="M11 18h2" />
        </svg>
      );
    case "ai":
      return (
        <svg {...c}>
          <rect x="5" y="8" width="14" height="11" rx="2.5" />
          <path d="M12 8V4M9 4h6M2 13h3M19 13h3" />
          <circle cx="9.5" cy="13" r="1.2" fill="currentColor" stroke="none" />
          <circle cx="14.5" cy="13" r="1.2" fill="currentColor" stroke="none" />
        </svg>
      );
    case "llm":
      return (
        <svg {...c}>
          <path d="M4 5h16M4 5v11a2 2 0 0 0 2 2h3l3 3 3-3h3a2 2 0 0 0 2-2V5" />
          <path d="M8 10h8M8 13h5" />
        </svg>
      );
    case "robot":
      return (
        <svg {...c}>
          <rect x="4" y="9" width="16" height="11" rx="2.5" />
          <path d="M12 9V5M12 5a1.6 1.6 0 1 0 0-3.2A1.6 1.6 0 0 0 12 5zM8 14h.01M16 14h.01M9 18h6" />
        </svg>
      );
    case "drone":
      return (
        <svg {...c}>
          <circle cx="5" cy="5" r="2.5" />
          <circle cx="19" cy="5" r="2.5" />
          <circle cx="5" cy="19" r="2.5" />
          <circle cx="19" cy="19" r="2.5" />
          <path d="M7 7l3 3M17 7l-3 3M7 17l3-3M17 17l-3-3" />
          <rect x="9.5" y="9.5" width="5" height="5" rx="1.2" />
        </svg>
      );
    default:
      return (
        <svg {...c}>
          <path d="M12 2 4 6v6c0 5 3.5 8 8 10 4.5-2 8-5 8-10V6l-8-4z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      );
  }
}

export default function Services() {
  return (
    <section id="services" className="relative border-t border-border py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">What we do</p>
          <h2 className="display mt-5 text-balance text-4xl sm:text-5xl">
            From the first pixel to the physical machine.
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
            One studio across software, intelligence and hardware. You never hand
            off, re-brief a vendor, or hope the pieces fit. They fit because we
            build all of them.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={(i % 2) * 0.08}>
              <Spotlight className="group h-full rounded-2xl border border-border bg-surface p-7 transition-all duration-300 hover:-translate-y-1 hover:border-border-strong sm:p-9">
              <div className="flex items-start gap-5">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-border bg-background text-accent transition-transform duration-300 group-hover:scale-110 group-hover:border-accent/40">
                  <ServiceIcon name={s.icon} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold tracking-tight">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{s.body}</p>
                </div>
              </div>
              <ul className="mt-6 flex flex-wrap gap-2">
                {s.items.map((it) => (
                  <li
                    key={it}
                    className="rounded-full border border-border bg-background px-3 py-1.5 text-xs text-muted transition-colors group-hover:border-border-strong"
                  >
                    {it}
                  </li>
                ))}
              </ul>
              </Spotlight>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
