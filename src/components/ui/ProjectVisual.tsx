import { Fingerprint } from "./Fingerprint";

type ProjectVisualProps = {
  label: string;
  className?: string;
};

export function ProjectVisual({ label, className = "h-48" }: ProjectVisualProps) {
  const initials = label
    .split(/[\s-]/)
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div
      className={`relative flex w-full items-center justify-center overflow-hidden rounded-media bg-accent-soft ${className}`}
    >
      <Fingerprint seed={label} cells={14} strokeWidth={0.12} className="absolute inset-0 h-full w-full text-accent" />
      <span className="relative rounded-full border border-border bg-surface px-4 py-1.5 font-mono text-sm font-medium tracking-widest text-accent-ink">
        {initials}
      </span>
    </div>
  );
}
