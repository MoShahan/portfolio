import { site } from "@/data/site";

import { ArrowUpRightIcon } from "./Icons";
import { SectionHeading } from "./SectionHeading";

export function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="scroll-mt-20 pb-20"
    >
      <SectionHeading id="experience-heading">Experience</SectionHeading>
      <ol className="border-l border-border">
        {site.jobs.map((job) => (
          <li
            key={`${job.company}-${job.title}-${job.start}`}
            className="group relative py-0 pl-7 pb-10 last:pb-0"
          >
            <span
              className="absolute top-1.5 -left-[5px] h-2.5 w-2.5 bg-border transition-colors group-hover:bg-accent"
              aria-hidden="true"
            />
            <p className="font-mono text-xs text-muted">
              {job.start} – {job.end}
            </p>
            <h3 className="mt-2 text-base font-semibold text-text">
              <a
                href={job.companyHref}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-1.5 transition-colors hover:text-accent"
              >
                {job.title} · {job.company}
                <ArrowUpRightIcon className="h-4 w-4 opacity-60" />
              </a>
            </h3>
            {"subtitle" in job && job.subtitle ? (
              <p className="mt-1 text-sm text-accent">{job.subtitle}</p>
            ) : null}
            <p className="mt-1 text-xs text-muted">{job.location}</p>
            <ul className="mt-3 space-y-2 text-sm leading-6 text-muted">
              {job.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
            <ul className="mt-3 flex flex-wrap gap-2">
              {job.tags.map((tag) => (
                <li
                  key={tag}
                  className="border border-border bg-surface px-2 py-0.5 font-mono text-[0.68rem] text-muted"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  );
}
