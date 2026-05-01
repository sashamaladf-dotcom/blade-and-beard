type Props = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: Props) {
  const alignClass = align === "center" ? "items-center text-center" : "";
  return (
    <div className={`flex flex-col ${alignClass}`}>
      <span className="mb-5 inline-flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-muted">
        <span className="h-px w-8 bg-accent" />
        {eyebrow}
      </span>
      <h2 className="font-serif text-4xl leading-tight tracking-tight text-foreground sm:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-5 max-w-2xl text-base text-muted sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
