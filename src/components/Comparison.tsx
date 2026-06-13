import Reveal from "@/components/Reveal";
import SectionLabel from "@/components/SectionLabel";
import SplitReveal from "@/components/SplitReveal";

const rows = [
  { label: "Time to start", orvnix: "A few days", inhouse: "2–4 months", freelance: "1–2 weeks" },
  { label: "Skill coverage", orvnix: "Full team", inhouse: "Per hire", freelance: "One skill" },
  { label: "Monthly cost", orvnix: "Flat & predictable", inhouse: "Salary + benefits + tools", freelance: "Variable hourly" },
  { label: "Scale up or down", orvnix: "Anytime", inhouse: "Slow & costly", freelance: "Re-hire each time" },
  { label: "Long-term commitment", orvnix: "None — pause anytime", inhouse: "Permanent", freelance: "Per contract" },
  { label: "Product context", orvnix: "Embedded & retained", inhouse: "High", freelance: "Resets each gig" },
];

function Cell({ value, kind }: { value: string; kind: "orvnix" | "other" }) {
  return (
    <div
      className={`flex items-center gap-2 px-5 py-5 text-sm ${
        kind === "orvnix" ? "text-foreground" : "text-muted"
      }`}
    >
      {kind === "orvnix" ? (
        <span className="text-accent">✓</span>
      ) : (
        <span className="text-muted-2">·</span>
      )}
      {value}
    </div>
  );
}

export default function Comparison() {
  return (
    <section className="section-pad relative border-t border-border">
      <div className="px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <SectionLabel index="04" label="The honest comparison" meta="VS." />
          <SplitReveal
            as="h2"
            text="The maths most studios won't show you."
            className="display mt-6 text-balance text-[clamp(2.4rem,4.6vw,4rem)]"
          />
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            All the output of an in-house team — without the cost, the lock-in, or
            the months of waiting to find out if it works.
          </p>
        </Reveal>

        {/* Mobile: a stacked card per criterion — Orvnix highlighted, the
            alternatives muted beneath. No horizontal scroll. */}
        <div className="mt-[clamp(3rem,5vw,4.5rem)] space-y-3 md:hidden">
          {rows.map((r) => (
            <div key={r.label} className="border border-border-strong/60 p-5">
              <div className="font-sans text-[11px] uppercase tracking-[0.14em] text-muted-2">
                {r.label}
              </div>
              <div className="mt-3 flex items-baseline justify-between gap-3 border-l-2 border-accent pl-3">
                <span className="font-display text-xs text-accent">Orvnix</span>
                <span className="flex items-center gap-1.5 text-right text-sm text-foreground">
                  <span className="text-accent">✓</span>
                  {r.orvnix}
                </span>
              </div>
              <dl className="mt-3 space-y-1.5 pl-3">
                <div className="flex items-baseline justify-between gap-3">
                  <dt className="font-sans text-xs text-muted-2">In-house</dt>
                  <dd className="text-right text-sm text-muted">{r.inhouse}</dd>
                </div>
                <div className="flex items-baseline justify-between gap-3">
                  <dt className="font-sans text-xs text-muted-2">Freelancer</dt>
                  <dd className="text-right text-sm text-muted">{r.freelance}</dd>
                </div>
              </dl>
            </div>
          ))}
        </div>

        {/* Desktop: the full 4-column table */}
        <div className="mt-[clamp(3rem,5vw,4.5rem)] hidden overflow-x-auto md:block">
          <div className="min-w-[680px] border border-border-strong">
            {/* header */}
            <div className="grid grid-cols-4 border-b border-border-strong">
              <div className="px-5 py-5 font-display text-sm text-muted-2">
                Compared on
              </div>
              <div className="display relative bg-accent/[0.05] px-5 py-5 text-lg text-accent">
                Orvnix
                <span className="absolute inset-x-0 top-0 h-[2px] bg-accent" />
              </div>
              <div className="display px-5 py-5 text-base text-muted">
                In-house hire
              </div>
              <div className="display px-5 py-5 text-base text-muted">
                Freelancer
              </div>
            </div>

            {/* rows */}
            {rows.map((r, i) => (
              <div
                key={r.label}
                className={`grid grid-cols-4 ${i > 0 ? "border-t border-border" : ""}`}
              >
                <div className="px-5 py-5 text-sm text-muted">{r.label}</div>
                <div className="bg-accent/[0.06]">
                  <Cell value={r.orvnix} kind="orvnix" />
                </div>
                <Cell value={r.inhouse} kind="other" />
                <Cell value={r.freelance} kind="other" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
