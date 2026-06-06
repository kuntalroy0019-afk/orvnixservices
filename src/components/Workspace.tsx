import Reveal from "@/components/Reveal";

const products = [
  {
    name: "Agentic AI Calling System",
    status: "Coming soon",
    blurb:
      "Voice agents that actually hold a conversation — booking, qualifying and following up over the phone, around the clock, in a voice that sounds human.",
    points: [
      "Natural, real-time voice",
      "Books & qualifies on the call",
      "Plugs into your CRM & calendar",
      "Full transcripts and outcomes",
    ],
    icon: "phone",
    accent: true,
  },
  {
    name: "Orvnix CRM",
    status: "In development",
    blurb:
      "A CRM built around AI from the first line of code — not bolted on later. Your pipeline, your conversations and your follow-ups, finally in one calm place.",
    points: [
      "AI-native pipeline",
      "Auto-captured context",
      "Smart follow-up nudges",
      "Built to pair with our calling agent",
    ],
    icon: "crm",
    accent: false,
  },
];

function ProductIcon({ name }: { name: string }) {
  const c = {
    width: 26,
    height: 26,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  if (name === "phone") {
    return (
      <svg {...c}>
        <path d="M5 3h3l1.5 5-2 1.5a12 12 0 0 0 5 5l1.5-2 5 1.5v3a2 2 0 0 1-2 2A16 16 0 0 1 3 5a2 2 0 0 1 2-2z" />
        <path d="M15 3a6 6 0 0 1 6 6" />
      </svg>
    );
  }
  return (
    <svg {...c}>
      <rect x="3" y="4" width="18" height="16" rx="2.5" />
      <path d="M3 9h18M8 13h5M8 16h8" />
      <circle cx="8" cy="6.5" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

export default function Workspace() {
  return (
    <section
      id="workspace"
      className="relative border-t border-border py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">
            Orvnix Workspace <span className="dot">·</span> In-house
          </p>
          <h2 className="display mt-5 text-balance text-4xl sm:text-5xl">
            We don&apos;t just build for clients. We build for ourselves.
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
            Two products coming out of the studio — the same craft we bring to
            partner work, pointed at problems we felt ourselves.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          {products.map((p, i) => (
            <Reveal
              key={p.name}
              delay={i * 0.08}
              className={`group relative flex flex-col overflow-hidden rounded-2xl border p-7 transition-all duration-300 hover:-translate-y-1 sm:p-9 ${
                p.accent
                  ? "border-accent/30 bg-surface-2"
                  : "border-border bg-surface hover:border-border-strong"
              }`}
            >
              {/* ambient glow */}
              <div
                aria-hidden
                className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full opacity-0 blur-[90px] transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background: "radial-gradient(circle, var(--accent), transparent 70%)",
                }}
              />

              <div className="relative flex items-start justify-between gap-4">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-border bg-background text-accent transition-transform duration-300 group-hover:scale-110">
                  <ProductIcon name={p.icon} />
                </div>
                <span
                  className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium ${
                    p.accent
                      ? "bg-accent text-accent-foreground"
                      : "border border-border-strong text-muted"
                  }`}
                >
                  <span className="relative flex h-1.5 w-1.5">
                    <span
                      className={`absolute inline-flex h-full w-full rounded-full ${
                        p.accent ? "animate-ping bg-accent-foreground/60" : ""
                      }`}
                    />
                    <span
                      className={`relative inline-flex h-1.5 w-1.5 rounded-full ${
                        p.accent ? "bg-accent-foreground" : "bg-accent"
                      }`}
                    />
                  </span>
                  {p.status}
                </span>
              </div>

              <h3 className="relative mt-6 font-display text-3xl">{p.name}</h3>
              <p className="relative mt-3 max-w-md text-sm leading-relaxed text-muted">
                {p.blurb}
              </p>

              <ul className="relative mt-7 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                {p.points.map((pt) => (
                  <li key={pt} className="flex items-start gap-2.5 text-sm">
                    <span className="mt-0.5 text-accent">✓</span>
                    <span className="text-foreground/90">{pt}</span>
                  </li>
                ))}
              </ul>

              <div className="relative mt-8 flex items-center gap-4 border-t border-border pt-6">
                <a
                  href="#contact"
                  className="group/btn inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-accent"
                >
                  Get early access
                  <span className="transition-transform group-hover/btn:translate-x-0.5">
                    →
                  </span>
                </a>
                <span className="text-xs text-muted-2">Join the waitlist</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
