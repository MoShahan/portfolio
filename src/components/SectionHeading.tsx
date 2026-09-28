export function SectionHeading({
  id,
  children,
}: {
  id: string;
  children: string;
}) {
  return (
    <h2
      id={id}
      className="font-serif mb-8 flex items-center gap-3 text-2xl font-medium text-text"
    >
      <span className="h-3 w-3 shrink-0 bg-accent" aria-hidden="true" />
      {children}
    </h2>
  );
}
