import { site } from "@/data/site";

import { SectionHeading } from "./SectionHeading";

export function Education() {
  return (
    <section
      id="education"
      aria-labelledby="education-heading"
      className="scroll-mt-20 pb-20"
    >
      <SectionHeading id="education-heading">Education</SectionHeading>
      <article>
        <h3 className="font-serif text-xl font-medium text-text">
          {site.education.degree}
        </h3>
        <p className="mt-1 text-sm text-muted">{site.education.school}</p>
        <p className="mt-1 font-mono text-xs text-muted">
          {site.education.dates} · {site.education.location} ·{" "}
          {site.education.detail}
        </p>
        <p className="mt-4 text-sm leading-6 text-muted">
          <span className="font-medium text-text">{site.award.title}</span>
          {" · "}
          {site.award.org} · {site.award.date}. {site.award.detail}
        </p>
      </article>
    </section>
  );
}
