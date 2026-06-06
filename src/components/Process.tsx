import Reveal from "@/components/Reveal";

const steps = [
  {
    n: "01",
    title: "We talk",
    body: "A real conversation about your product, your roadmap and where it hurts. No script, no pitch deck — just whether we're the right people for it.",
  },
  {
    n: "02",
    title: "We embed",
    body: "Within days we're inside your stack — a shared board, a direct line, and a team that operates like it's already yours.",
  },
  {
    n: "03",
    title: "We ship",
    body: "Tight loops: design, build, review, release. You see progress every few days, not every few months. The work speaks for itself.",
  },
  {
    n: "04",
    title: "We keep going",
    body: "Scale up before a launch, ease off after, shift focus when the plan changes. The engagement bends around you, never the reverse.",
  },
];

const team = [
  "Product Designer",
  "Software Engineer",
  "AI / LLM Engineer",
  "Robotics Engineer",
  "Drone Operator",
  "Creative Director",
];

export default function Process() {
  return (
    <section id="approach" className="relative border-t border-border py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">How it works</p>
          <h2 className="display mt-5 text-balance text-4xl sm:text-5xl">
            A short conversation, then real momentum.
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
            No procurement theatre. No six-week onboarding. Four steps from the
            first call to something live — and then we keep going.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <div
              key={s.n}
              className="group bg-surface p-7 transition-colors hover:bg-surface-2"
            >
              <div className="mb-8 font-mono text-sm text-muted-2 transition-colors group-hover:text-accent">
                {s.n}
              </div>
              <h3 className="text-lg font-semibold tracking-tight">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{s.body}</p>
            </div>
          ))}
        </div>

        {/* team composition */}
        <div className="mt-8 rounded-2xl border border-border bg-surface p-7 sm:p-9">
          <div className="flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-md">
              <h3 className="font-display text-2xl">One engagement, the whole team</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                Not a freelancer. Not a single contractor. A cross-functional crew
                that covers the entire surface — from interface to inference to
                hardware.
              </p>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {team.map((role) => (
                <span
                  key={role}
                  className="rounded-full border border-border-strong bg-background px-4 py-2 text-sm text-foreground"
                >
                  {role}
                </span>
              ))}
            </div>
          </div>

          <figure className="mt-9 border-t border-border pt-7">
            <blockquote className="display text-balance text-2xl leading-snug sm:text-3xl">
              &ldquo;It stopped feeling like a vendor. It felt like our own team had
              quietly doubled overnight.&rdquo;
            </blockquote>
            <figcaption className="mt-4 flex items-center gap-3 text-sm">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-accent font-semibold text-accent-foreground">
                R
              </span>
              <span>
                <span className="font-medium text-foreground">Rafael Costa</span>
                <span className="text-muted"> — Founder, Lumora</span>
              </span>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
