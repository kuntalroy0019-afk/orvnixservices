/**
 * Quiet section label: a grey serif word in the reference grammar, with an
 * optional fine index and right-hand metadata kept subtle.
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
    <div className="flex items-baseline gap-4">
      <span className="eyebrow">{label}</span>
      <span className="hairline opacity-60" />
      {meta && (
        <span className="hidden font-display text-xs text-muted-2 sm:inline">
          {index} · {meta}
        </span>
      )}
    </div>
  );
}
