import Image from "next/image";
import Reveal from "@/components/Reveal";
import { site } from "@/lib/site";

const facts = [
  { k: "Based in", v: `${site.address.city}, India` },
  { k: "Founded", v: "2021" },
  { k: "Teams a year", v: "A handful" },
  { k: "Disciplines", v: "Software → hardware" },
];

export default function Studio() {
  return (
    <section id="studio" className="relative border-t border-border py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border">
            <Image
              src="/images/studio.jpeg"
              alt="The Orvnix studio at work"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover opacity-90 grayscale transition-all duration-700 hover:grayscale-0"
            />
            <div
              aria-hidden
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, transparent 50%, rgba(8,8,10,0.6))",
              }}
            />
          </Reveal>

          <Reveal delay={0.08}>
            <p className="eyebrow">The studio</p>
            <h2 className="display mt-5 text-balance text-4xl sm:text-5xl">
              Small on purpose. Deep by design.
            </h2>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted">
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

            <dl className="mt-9 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border">
              {facts.map((f) => (
                <div key={f.k} className="bg-surface px-5 py-5">
                  <dt className="eyebrow">{f.k}</dt>
                  <dd className="mt-1.5 font-display text-xl text-foreground">
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
