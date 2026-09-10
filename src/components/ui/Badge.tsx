type BadgeProps = {
  children: string;
  tone?: "soft" | "outline";
};

export function Badge({ children, tone = "soft" }: BadgeProps) {
  const tones = {
    soft: "bg-accent-soft text-accent-strong",
    outline: "border border-border text-foreground-muted",
  };

  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${tones[tone]}`}
    >
      {children}
    </span>
  );
}
