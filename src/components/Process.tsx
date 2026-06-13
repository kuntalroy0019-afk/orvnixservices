import Reveal from "@/components/Reveal";
import SectionLabel from "@/components/SectionLabel";
import SplitReveal from "@/components/SplitReveal";
import ProcessFlow from "@/components/ProcessFlow";

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
    <section id="approach" className="relative">
      <div className="section-pad px-5 pb-0 md:px-[5vw]">
        <Reveal className="max-w-2xl pb-[clamp(3rem,5vw,4.5rem)]">
          <SectionLabel index="01" label="How it works" meta="PROCESS" />
          <SplitReveal
            as="h2"
            text="A short conversation, then real momentum."
            className="display mt-6 text-balance text-[clamp(2.4rem,4.6vw,4rem)]"
          />
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            No procurement theatre. No six-week onboarding. Four steps from the
            first call to something live — and then we keep going.
          </p>
        </Reveal>

      </div>

      {/* the route — scroll draws the line through all four steps */}
      <ProcessFlow steps={steps} />

      {/* team composition */}
      <div className="px-5 py-[clamp(4rem,7vw,6.5rem)] sm:px-8">
        <div className="flex flex-col gap-7 border-t border-border pt-10 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-md">
            <h3 className="display text-3xl">One engagement, the whole team</h3>
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
                className="border border-border-strong px-4 py-2 font-display text-sm text-foreground"
              >
                {role}
              </span>
            ))}
          </div>
        </div>

        <figure className="mt-12 border-t border-border pt-10">
          {/* the serif voice carries the statement, in the reference's manner */}
          <blockquote className="mx-auto max-w-4xl text-balance text-center font-display text-[clamp(1.8rem,3.4vw,3rem)] leading-[1.15]">
            Our aim is simple: to stop feeling like a{" "}
            <em className="not-italic text-accent">vendor</em> and start feeling
            like the team you already had.
          </blockquote>
          <figcaption className="mt-7 flex items-center justify-center gap-3 text-sm">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-foreground font-display text-background">
              O
            </span>
            <span className="font-display">
              <span className="text-foreground">The Orvnix promise</span>
              <span className="text-muted"> — how we work</span>
            </span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
