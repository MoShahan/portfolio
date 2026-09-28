import Image from "next/image";

import { site } from "@/data/site";

import { ArrowUpRightIcon } from "./Icons";
import { SectionHeading } from "./SectionHeading";

export function Projects() {
  return (
    <section
      id="work"
      aria-labelledby="work-heading"
      className="scroll-mt-20 pb-20"
    >
      <SectionHeading id="work-heading">Work</SectionHeading>
      <ul className="flex flex-col gap-8">
        {site.projects.map((project) => {
          const primaryHref =
            "liveHref" in project && project.liveHref
              ? project.liveHref
              : "githubHref" in project && project.githubHref
                ? project.githubHref
                : undefined;

          return (
            <li key={project.title}>
              <article className="border border-border bg-surface">
                <div className="relative aspect-[16/8] overflow-hidden border-b border-border">
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 40vw, 100vw"
                  />
                </div>
                <div className="p-4">
                  <p className="font-mono text-xs text-muted">{project.period}</p>
                  <h3 className="font-serif mt-2 text-xl font-medium text-text">
                    {primaryHref ? (
                      <a
                        href={primaryHref}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="inline-flex items-center gap-1.5 hover:text-accent"
                      >
                        {project.title}
                        <ArrowUpRightIcon className="h-4 w-4 opacity-60" />
                      </a>
                    ) : (
                      project.title
                    )}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-muted">
                    {project.summary}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-sm">
                    {"liveHref" in project && project.liveHref ? (
                      <a
                        href={project.liveHref}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="text-accent hover:underline"
                      >
                        Live demo
                      </a>
                    ) : null}
                    {"githubHref" in project && project.githubHref ? (
                      <a
                        href={project.githubHref}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="text-accent hover:underline"
                      >
                        GitHub
                      </a>
                    ) : null}
                  </div>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <li
                        key={tag}
                        className="border border-border px-2 py-0.5 font-mono text-[0.68rem] text-muted"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
