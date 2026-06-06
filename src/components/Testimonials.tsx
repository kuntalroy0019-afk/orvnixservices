import Reveal from "@/components/Reveal";

const testimonials = [
  {
    quote:
      "Orvnix shipped more in our first month than our last two hires managed in a quarter. The pace is genuinely unfair.",
    name: "Ana Ferreira",
    role: "CEO, NodeForge",
    initial: "A",
  },
  {
    quote:
      "We briefed them once. They learned the product, the users and the codebase, and just kept delivering. No babysitting.",
    name: "Tomás Silva",
    role: "CTO, Quanta",
    initial: "T",
  },
  {
    quote:
      "Design, engineering and brand from one team meant zero handoff friction. Everything finally looked and felt like one product.",
    name: "Mariana Lopes",
    role: "Founder, Brightkit",
    initial: "M",
  },
  {
    quote:
      "Being able to pause between funding rounds and pick straight back up saved us a fortune — and a lot of stress.",
    name: "David Nunes",
    role: "Founder, Harborly",
    initial: "D",
  },
  {
    quote:
      "It feels like having a senior product team on tap. We scale them up before launches and down afterwards. Effortless.",
    name: "Sofia Reis",
    role: "Head of Product, Paceline",
    initial: "S",
  },
  {
    quote:
      "The backlog we'd been staring at for a year was gone in eight weeks. I still can't quite believe it.",
    name: "Rafael Costa",
    role: "Founder, Lumora",
    initial: "R",
  },
];

export default function Testimonials() {
  return (
    <section className="relative border-t border-border py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">In their words</p>
          <h2 className="display mt-5 text-balance text-4xl sm:text-5xl">
            Founders don&apos;t hand us their roadmap lightly.
          </h2>
        </Reveal>

        <div className="mt-14 columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="break-inside-avoid rounded-2xl border border-border bg-surface p-7"
            >
              <blockquote className="text-[15px] leading-relaxed text-foreground/90">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-surface-2 text-sm font-semibold text-accent">
                  {t.initial}
                </span>
                <span className="text-sm">
                  <span className="block font-medium text-foreground">{t.name}</span>
                  <span className="text-muted">{t.role}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
