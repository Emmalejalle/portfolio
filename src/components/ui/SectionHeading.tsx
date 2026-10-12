type SectionHeadingProps = {
  index?: string;
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  index,
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "items-center text-center mx-auto" : "items-start text-left";

  return (
    <div className={`flex max-w-2xl flex-col gap-3 ${alignment}`}>
      <span className="type-eyebrow flex items-baseline gap-2">
        {index ? <span className="text-foreground-muted">{index} /</span> : null}
        {eyebrow}
      </span>
      <h2 className="type-title">
        {title}
      </h2>
      {description ? (
        <p className="type-body">{description}</p>
      ) : null}
    </div>
  );
}
