import Reveal from "@/components/Reveal";
import SectionLabel from "@/components/SectionLabel";

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
    <section className="relative border-t border-border py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <SectionLabel index="08" label="Early days, honestly" meta="TRUST" />
          <h2 className="display mt-5 text-balance text-4xl sm:text-5xl">
            We&apos;d rather earn your trust than fake it.
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
            Orvnix is a new studio, so we&apos;re not going to wallpaper this page
            with invented testimonials. Instead, here&apos;s the honest deal — and
            why being one of our first partners is the best time to work with us.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {perks.map((p, i) => (
            <Reveal
              key={p.title}
              delay={i * 0.08}
              className="rounded-2xl border border-border bg-surface p-7 transition-colors hover:border-border-strong"
            >
              <div className="grid h-10 w-10 place-items-center rounded-full bg-surface-2 font-display text-lg text-accent">
                {i + 1}
              </div>
              <h3 className="mt-5 text-lg font-semibold tracking-tight">
                {p.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{p.body}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-8 flex flex-col items-start justify-between gap-5 rounded-2xl border border-accent/30 bg-surface-2 p-7 sm:flex-row sm:items-center sm:p-9">
          <div>
            <h3 className="font-display text-2xl">Be our first case study.</h3>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted">
              Bring us a real problem. We&apos;ll do the work, get you results, and
              tell the story together — with your name on it.
            </p>
          </div>
          <a
            href="#contact"
            className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-medium text-accent-foreground transition-transform hover:-translate-y-0.5"
          >
            Start a conversation
            <span className="transition-transform group-hover:translate-x-0.5">→</span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
