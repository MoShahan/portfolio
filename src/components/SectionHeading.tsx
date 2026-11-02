export function SectionHeading({
  id,
  children,
  className,
}: {
  id: string;
  children: string;
  className?: string;
}) {
  return (
    <h2
      id={id}
      className={`font-serif flex items-center gap-3 text-2xl font-medium text-text ${className ?? "mb-8"}`}
    >
      <span className="h-3 w-3 shrink-0 bg-accent" aria-hidden="true" />
      {children}
    </h2>
  );
}
