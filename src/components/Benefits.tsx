import Reveal from "@/components/Reveal";
import SectionLabel from "@/components/SectionLabel";
import SplitReveal from "@/components/SplitReveal";

const benefits = [
  {
    title: "No hiring overhead",
    body: "Skip the recruiters, the equity negotiations and the months of ramp-up. We arrive ready to work.",
  },
  {
    title: "Built for speed",
    body: "Tight iteration loops mean you see working software in days. Momentum is the whole point.",
  },
  {
    title: "Backlog, gone",
    body: "The pile of 'we'll get to it' tickets finally moves. We clear what's been blocking you for months.",
  },
  {
    title: "We learn your product",
    body: "Embedded means context. We understand your users and codebase, so decisions get sharper over time.",
  },
  {
    title: "Flexible by design",
    body: "Scale up before a launch, dial down after. Pause anytime. The plan bends around your roadmap.",
  },
  {
    title: "Iterate, don't gamble",
    body: "Small, reversible releases beat big-bang launches. Less risk, faster learning, better product.",
  },
];

export default function Benefits() {
  return (
    <section id="why" className="section-pad relative border-t border-border">
      <div className="px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <SectionLabel index="03" label="Why teams choose us" meta="ADVANTAGES" />
          <SplitReveal
            as="h2"
            text="The weight of a team. None of the overhead."
            className="display mt-6 text-balance text-[clamp(2.4rem,4.6vw,4rem)]"
          />
        </Reveal>

        <div className="mt-[clamp(3rem,5vw,4.5rem)] grid gap-px border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b, i) => (
            <Reveal
              key={b.title}
              delay={(i % 3) * 0.09}
              className="group bg-background p-8 transition-colors duration-500 hover:bg-surface"
            >
              <div className="font-display text-sm text-muted-2 transition-colors group-hover:text-accent">
                0{i + 1}
              </div>
              <h3 className="display mt-8 text-2xl">{b.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{b.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
