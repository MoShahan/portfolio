import { site } from "@/data/site";

import { SectionHeading } from "./SectionHeading";

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="scroll-mt-20 pb-20"
    >
      <SectionHeading id="about-heading">About</SectionHeading>
      <div className="space-y-4 text-base leading-7 text-muted">
        {site.about.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
}
