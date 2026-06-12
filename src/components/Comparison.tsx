import Reveal from "@/components/Reveal";
import SectionLabel from "@/components/SectionLabel";

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
      className={`flex items-center gap-2 px-5 py-4 text-sm ${
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
    <section className="relative border-t border-border py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <SectionLabel index="04" label="The honest comparison" meta="VS." />
          <h2 className="display mt-5 text-balance text-4xl sm:text-5xl">
            The maths most studios won&apos;t show you.
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
            All the output of an in-house team — without the cost, the lock-in, or
            the months of waiting to find out if it works.
          </p>
        </Reveal>

        <div className="mt-14 overflow-x-auto">
          <div className="min-w-[680px] overflow-hidden rounded-2xl border border-border">
            {/* header */}
            <div className="grid grid-cols-4 border-b border-border bg-surface-2">
              <div className="px-5 py-5 text-sm font-medium text-muted-2">
                Compared on
              </div>
              <div className="relative px-5 py-5 text-sm font-semibold text-accent">
                Orvnix
                <span className="absolute inset-x-0 -top-px h-0.5 bg-accent" />
              </div>
              <div className="px-5 py-5 text-sm font-medium">In-house hire</div>
              <div className="px-5 py-5 text-sm font-medium">Freelancer</div>
            </div>

            {/* rows */}
            {rows.map((r, i) => (
              <div
                key={r.label}
                className={`grid grid-cols-4 ${
                  i % 2 === 0 ? "bg-surface" : "bg-background"
                }`}
              >
                <div className="px-5 py-4 text-sm text-muted">{r.label}</div>
                <div className="bg-accent/[0.04]">
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
