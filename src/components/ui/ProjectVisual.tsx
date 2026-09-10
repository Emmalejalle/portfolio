type ProjectVisualProps = {
  label: string;
};

export function ProjectVisual({ label }: ProjectVisualProps) {
  const initials = label
    .split(/[\s-]/)
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="relative flex h-48 w-full items-center justify-center overflow-hidden rounded-2xl bg-accent-soft">
      <div className="absolute -right-8 -top-10 h-32 w-32 rounded-full bg-accent/30 blur-2xl" />
      <div className="absolute -bottom-12 -left-6 h-28 w-28 rounded-full bg-accent-strong/15 blur-2xl" />
      <span className="relative font-accent text-6xl italic text-accent-strong/70">
        {initials}
      </span>
    </div>
  );
}
