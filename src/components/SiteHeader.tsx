import { site } from "@/data/site";

import { SectionNav } from "./SectionNav";
import { SocialLinks } from "./SocialLinks";

export function SiteHeader() {
  return (
    <header className="relative z-10 flex flex-col justify-between border-border pt-16 pb-12 lg:sticky lg:top-0 lg:max-h-screen lg:w-[38%] lg:border-r lg:py-24 lg:pr-12">
      <div>
        <p className="font-mono text-xs text-accent">{site.role}</p>
        <h1 className="font-serif mt-3 text-4xl font-medium tracking-tight text-text sm:text-5xl">
          {site.name}
        </h1>
        <p className="mt-5 max-w-sm text-base leading-relaxed text-muted">
          {site.headline}
        </p>
        <div className="mt-6">
          <p className="inline-flex items-center gap-2 border border-accent/35 bg-accent/10 px-3 py-1.5 text-sm text-text">
            <span
              className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
              aria-hidden="true"
            />
            <span className="font-medium">{site.availability.label}</span>
          </p>
          <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted">
            {site.availability.detail}
          </p>
        </div>
        <div className="mt-12">
          <SectionNav />
        </div>
      </div>
      <div className="mt-12 flex flex-col gap-4 border-t border-border pt-6">
        <SocialLinks />
        <a
          href={site.resumeHref}
          className="w-fit font-mono text-xs text-muted underline-offset-4 hover:text-accent hover:underline"
        >
          View résumé (PDF)
        </a>
      </div>
    </header>
  );
}
