import { site } from "@/data/site";

import { CompactProjectList } from "./CompactProjectList";
import { SectionHeading } from "./SectionHeading";

export function FrontendProjects() {
  return (
    <section
      id="frontend"
      aria-labelledby="frontend-heading"
      className="scroll-mt-20 pb-20"
    >
      <SectionHeading id="frontend-heading" className="mb-2">
        Frontend
      </SectionHeading>
      <p className="max-w-md text-sm leading-6 text-muted">
        Client-side UI - no backend. Demos on GitHub Pages.
      </p>
      <CompactProjectList projects={site.frontendProjects} />
    </section>
  );
}
