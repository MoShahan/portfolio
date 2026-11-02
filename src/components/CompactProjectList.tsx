import { ArrowUpRightIcon } from "./Icons";

type CompactProject = {
  title: string;
  summary: string;
  tags: readonly string[];
};

export function CompactProjectList<T extends CompactProject>({
  headingLevel = "h3",
  projects,
}: {
  headingLevel?: "h3" | "h4";
  projects: readonly T[];
}) {
  const Heading = headingLevel;

  return (
    <ul className="mt-6 divide-y divide-border border-y border-border">
      {projects.map((project) => {
        const liveHref =
          "liveHref" in project && typeof project.liveHref === "string"
            ? project.liveHref
            : undefined;
        const githubHref =
          "githubHref" in project && typeof project.githubHref === "string"
            ? project.githubHref
            : undefined;
        const primaryHref = liveHref ?? githubHref;

        return (
          <li key={project.title} className="py-4">
            <Heading className="text-base font-medium text-text">
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
            </Heading>
            <p className="mt-1 text-sm leading-6 text-muted">{project.summary}</p>
            {liveHref || githubHref ? (
              <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm">
                {liveHref ? (
                  <a
                    href={liveHref}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-accent hover:underline"
                  >
                    Live demo
                  </a>
                ) : null}
                {githubHref ? (
                  <a
                    href={githubHref}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-accent hover:underline"
                  >
                    GitHub
                  </a>
                ) : null}
              </div>
            ) : null}
            <ul className="mt-2 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <li
                  key={tag}
                  className="border border-border px-2 py-0.5 font-mono text-[0.68rem] text-muted"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </li>
        );
      })}
    </ul>
  );
}
