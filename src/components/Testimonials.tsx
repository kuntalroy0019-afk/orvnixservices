import Reveal from "@/components/Reveal";
import SectionLabel from "@/components/SectionLabel";
import SplitReveal from "@/components/SplitReveal";

const perks = [
  {
    title: "Founder-level attention",
    body: "You work directly with the people building it — no account managers, no handoffs, no diluted effort.",
  },
  {
    title: "Founding-partner terms",
    body: "Early partners get our best rates and most flexibility. We're investing in the relationship, not just the invoice.",
  },
  {
    title: "Your story, told properly",
    body: "Be one of our first case studies and we'll make the work — and your results — genuinely shine.",
  },
];

export default function Testimonials() {
  return (
    <section className="section-pad relative border-t border-border">
      <div className="px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <SectionLabel index="08" label="Early days, honestly" meta="TRUST" />
          <SplitReveal
            as="h2"
            text="We'd rather earn your trust than fake it."
            className="display mt-6 text-balance text-[clamp(2.4rem,4.6vw,4rem)]"
          />
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            Orvnix is a new studio, so we&apos;re not going to wallpaper this page
            with invented testimonials. Instead, here&apos;s the honest deal — and
            why being one of our first partners is the best time to work with us.
          </p>
        </Reveal>

        <div className="mt-[clamp(3rem,5vw,4.5rem)] grid gap-px border border-border bg-border md:grid-cols-3">
          {perks.map((p, i) => (
            <Reveal
              key={p.title}
              delay={i * 0.08}
              className="bg-background p-8 transition-colors duration-500 hover:bg-surface"
            >
              <div className="display text-4xl text-accent">{i + 1}</div>
              <h3 className="display mt-7 text-2xl">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{p.body}</p>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
