import Reveal from "@/components/Reveal";
import SectionLabel from "@/components/SectionLabel";
import SplitReveal from "@/components/SplitReveal";
import ParallaxImage from "@/components/ParallaxImage";
import { site } from "@/lib/site";

const facts = [
  { k: "Based in", v: `${site.address.city}, India` },
  { k: "Stage", v: "Taking first partners" },
  { k: "Teams a year", v: "A handful" },
  { k: "Disciplines", v: "Software → hardware" },
];

export default function Studio() {
  return (
    <section id="studio" className="section-pad relative border-t border-border">
      <div className="px-5 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal className="relative bg-stage p-4 sm:p-6">
            <div className="relative aspect-[4/3] overflow-hidden" data-cursor="Studio">
              <ParallaxImage
                src="/images/studio.jpeg"
                alt="The Orvnix studio at work"
                sizes="(max-width: 1024px) 100vw, 50vw"
                strength={16}
                className="stage-img img-treat object-cover"
              />
            </div>
            <div className="mt-4 flex items-baseline justify-between font-display text-xs text-muted">
              <span>Fig. 02 — The studio at work</span>
              <span className="text-accent">About</span>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <SectionLabel index="07" label="The studio" meta="ABOUT" />
            <SplitReveal
              as="h2"
              text="Small on purpose. Deep by design."
              className="display mt-6 text-balance text-[clamp(2.4rem,4.6vw,4rem)]"
            />
            <div className="mt-7 space-y-4 text-lg leading-relaxed text-muted">
              <p>
                Orvnix is a tight studio in {site.address.city}, built by people who
                would rather do a few things exceptionally than many things
                adequately. We sit at the rare seam where software meets
                intelligence meets machines.
              </p>
              <p>
                That&apos;s why we keep the roster short. The teams we work with get
                our full attention — and the kind of work that only comes from a
                group that actually cares how it turns out.
              </p>
            </div>

            <dl className="mt-10 grid grid-cols-2">
              {facts.map((f, i) => (
                <div
                  key={f.k}
                  className={`border-t border-border py-5 ${
                    i % 2 === 1 ? "border-l pl-5" : "pr-5"
                  }`}
                >
                  <dt className="eyebrow">{f.k}</dt>
                  <dd className="display mt-2 text-xl text-foreground">
                    {f.v}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
