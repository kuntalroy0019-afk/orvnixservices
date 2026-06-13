import Reveal from "@/components/Reveal";
import SectionLabel from "@/components/SectionLabel";
import SplitReveal from "@/components/SplitReveal";

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
    accent: false,
  },
];

export default function Workspace() {
  return (
    <section
      id="workspace"
      className="section-pad relative border-t border-border"
    >
      <div className="px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <SectionLabel index="06" label="Orvnix Workspace" meta="IN-HOUSE" />
          <SplitReveal
            as="h2"
            text="We don't just build for clients. We build for ourselves."
            className="display mt-6 text-balance text-[clamp(2.4rem,4.6vw,4rem)]"
          />
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            Two products coming out of the studio — the same craft we bring to
            partner work, pointed at problems we felt ourselves.
          </p>
        </Reveal>

        <div className="mt-[clamp(3rem,5vw,4.5rem)] grid gap-8 lg:grid-cols-2">
          {products.map((p, i) => (
            <Reveal
              key={p.name}
              delay={i * 0.08}
              className={`group relative flex flex-col p-8 sm:p-10 ${
                p.accent
                  ? "ink"
                  : "border border-border bg-surface transition-colors duration-500 hover:border-border-strong"
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <span className="font-display text-sm text-muted-2">
                  W·0{i + 1}
                </span>
                <span
                  className={`inline-flex items-center gap-1.5 px-3 py-1 font-display text-xs ${
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

              <h3 className="display mt-10 text-[clamp(1.9rem,3vw,2.6rem)]">
                {p.name}
              </h3>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">
                {p.blurb}
              </p>

              <ul className="mt-8 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                {p.points.map((pt) => (
                  <li key={pt} className="flex items-start gap-2.5 text-sm">
                    <span className="mt-0.5 text-accent">✓</span>
                    <span className="text-foreground/90">{pt}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-10 flex items-center gap-5 border-t border-border pt-6">
                <a href="#contact" className="arrow-link text-sm text-foreground">
                  Get early access
                  <span className="arrow">→</span>
                  <span className="line" />
                </a>
                <span className="font-display text-sm text-muted-2">
                  Join the waitlist
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
