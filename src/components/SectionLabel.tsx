/**
 * Engineered section header: a monospace index, the section name, a hairline
 * rule, and optional right-aligned metadata. Used across the site to create a
 * consistent technical-drawing identity.
 */
export default function SectionLabel({
  index,
  label,
  meta,
}: {
  index: string;
  label: string;
  meta?: string;
}) {
  return (
    <div className="flex items-center gap-4">
      <span className="font-mono text-xs font-medium tracking-[0.1em] text-accent">
        [{index}]
      </span>
      <span className="font-mono text-xs font-medium uppercase tracking-[0.22em] text-muted-2">
        {label}
      </span>
      <span className="hairline" />
      {meta && (
        <span className="hidden font-mono text-xs tracking-[0.1em] text-muted-2 sm:inline">
          {meta}
        </span>
      )}
    </div>
  );
}
