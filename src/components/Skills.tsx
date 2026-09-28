import { site } from "@/data/site";

import { SectionHeading } from "./SectionHeading";

export function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="scroll-mt-20 pb-20"
    >
      <SectionHeading id="skills-heading">Skills</SectionHeading>
      <div className="space-y-6">
        {site.skills.map((group) => (
          <div key={group.label}>
            <h3 className="text-sm font-semibold text-text">{group.label}</h3>
            <ul className="mt-2 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="border border-border bg-surface px-2 py-0.5 text-sm text-muted"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
        <p className="text-sm text-muted">
          {site.hackerrankNote}{" "}
          <a
            href={
              site.socials.find((social) => social.id === "hackerrank")?.href
            }
            target="_blank"
            rel="noreferrer noopener"
            className="text-accent hover:underline"
          >
            View profile
          </a>
        </p>
      </div>
    </section>
  );
}
