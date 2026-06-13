import Reveal from "@/components/Reveal";
import NumberReveal from "@/components/NumberReveal";
import SplitReveal from "@/components/SplitReveal";

/**
 * Frame 3 — centered about statement followed by the impact statistics:
 * thin-bordered transparent cards in a descending stair. Each figure
 * emerges from a mask while its hairline draws — build, not count-up.
 */
const metrics = [
  { value: "8", k: "Under one roof", label: "disciplines" },
  { value: "2", k: "In active build", label: "in-house products" },
  { value: "~48h", k: "Typical loop", label: "from idea to iteration" },
  { value: "100%", k: "Senior team", label: "no juniors on your budget" },
];

export default function AboutImpact() {
  return (
    <section id="about" className="relative py-[clamp(5rem,10vw,9rem)]">
      <div className="px-5 md:px-[5vw]">
        {/* centered statement */}
        <Reveal className="mx-auto max-w-4xl text-center">
          <SplitReveal
            as="h2"
            text="We embed with a small number of ambitious teams and build what's worth shipping."
            accent={["shipping."]}
            className="display text-balance text-[clamp(1.9rem,3.4vw,3.4rem)] leading-[1.1]"
          />
          <p className="mx-auto mt-7 max-w-md font-sans text-[15px] leading-relaxed text-muted">
            Software, AI, robotics and drone systems — based in Kolkata, working
            worldwide.
          </p>
        </Reveal>

        {/* staggered stat cards — each steps down from the last */}
        <div className="mt-[clamp(4rem,8vw,7.5rem)] grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
          {metrics.map((m, i) => (
            <Reveal
              key={m.label}
              delay={i * 0.1}
              className={["", "lg:mt-[5vw]", "lg:mt-[10vw]", "lg:mt-[15vw]"][i]}
            >
              <div className="flex min-h-[13rem] flex-col justify-between gap-6 border border-border-strong/50 bg-transparent p-6 sm:min-h-[24rem] lg:-ml-px">
                <div className="font-sans text-xs text-foreground">{m.k}</div>
                <NumberReveal
                  value={m.value}
                  delay={i * 0.12}
                  className="mono-num text-[clamp(4rem,6vw,6.5rem)] leading-none text-accent"
                />
                <div className="font-sans text-xs text-muted">{m.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
