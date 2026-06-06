import Reveal from "@/components/Reveal";
import Counter from "@/components/Counter";

const benefits = [
  {
    title: "No hiring overhead",
    body: "Skip the recruiters, the equity negotiations and the months of ramp-up. We arrive ready to work.",
    icon: "users",
  },
  {
    title: "Built for speed",
    body: "Tight iteration loops mean you see working software in days. Momentum is the whole point.",
    icon: "bolt",
  },
  {
    title: "Backlog, gone",
    body: "The pile of 'we'll get to it' tickets finally moves. We clear what's been blocking you for months.",
    icon: "stack",
  },
  {
    title: "We learn your product",
    body: "Embedded means context. We understand your users and codebase, so decisions get sharper over time.",
    icon: "brain",
  },
  {
    title: "Flexible by design",
    body: "Scale up before a launch, dial down after. Pause anytime. The plan bends around your roadmap.",
    icon: "flex",
  },
  {
    title: "Iterate, don't gamble",
    body: "Small, reversible releases beat big-bang launches. Less risk, faster learning, better product.",
    icon: "loop",
  },
];

const metrics = [
  { to: 250, prefix: "€", suffix: "M+", label: "raised by partners we've helped build" },
  { to: 65, prefix: "−", suffix: "%", label: "average backlog after the first quarter" },
  { to: 3, prefix: "", suffix: "×", label: "faster iteration than in-house alone" },
  { to: 40, prefix: "", suffix: "+", label: "products shipped across the studio" },
];

function Icon({ name }: { name: string }) {
  const common = {
    width: 22,
    height: 22,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  switch (name) {
    case "users":
      return (
        <svg {...common}>
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      );
    case "bolt":
      return (
        <svg {...common}>
          <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
        </svg>
      );
    case "stack":
      return (
        <svg {...common}>
          <path d="m12 2 9 5-9 5-9-5 9-5zM3 12l9 5 9-5M3 17l9 5 9-5" />
        </svg>
      );
    case "brain":
      return (
        <svg {...common}>
          <path d="M12 5a3 3 0 0 0-6 0v.5A2.5 2.5 0 0 0 4 8a2.5 2.5 0 0 0 1 2 2.5 2.5 0 0 0 1 4.5A3 3 0 0 0 12 17M12 5a3 3 0 0 1 6 0v.5A2.5 2.5 0 0 1 20 8a2.5 2.5 0 0 1-1 2 2.5 2.5 0 0 1-1 4.5A3 3 0 0 1 12 17M12 5v12" />
        </svg>
      );
    case "flex":
      return (
        <svg {...common}>
          <path d="M3 12h18M3 6h18M3 18h18" />
          <circle cx="8" cy="6" r="2" fill="currentColor" stroke="none" />
          <circle cx="16" cy="12" r="2" fill="currentColor" stroke="none" />
          <circle cx="10" cy="18" r="2" fill="currentColor" stroke="none" />
        </svg>
      );
    default:
      return (
        <svg {...common}>
          <path d="M17 2.1 21 6l-4 3.9M3 11v-1a4 4 0 0 1 4-4h14M7 21.9 3 18l4-3.9M21 13v1a4 4 0 0 1-4 4H3" />
        </svg>
      );
  }
}

export default function Benefits() {
  return (
    <section id="why" className="relative border-t border-border py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Why teams choose us</p>
          <h2 className="display mt-5 text-balance text-4xl sm:text-5xl">
            The weight of a team. None of the overhead.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b) => (
            <div key={b.title} className="bg-surface p-7">
              <div className="mb-5 grid h-11 w-11 place-items-center rounded-xl border border-border bg-background text-accent">
                <Icon name={b.icon} />
              </div>
              <h3 className="text-lg font-semibold tracking-tight">{b.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{b.body}</p>
            </div>
          ))}
        </div>

        {/* metrics */}
        <div className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((m) => (
            <div
              key={m.label}
              className="bg-surface px-7 py-10 text-center transition-colors hover:bg-surface-2"
            >
              <Counter
                to={m.to}
                prefix={m.prefix}
                suffix={m.suffix}
                className="block text-4xl font-semibold tracking-tight text-accent sm:text-5xl"
              />
              <p className="mx-auto mt-3 max-w-[16rem] text-sm text-muted">
                {m.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
