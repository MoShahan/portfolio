import { site } from "@/data/site";

import { SocialIcon } from "./Icons";

export function SocialLinks({ className = "" }: { className?: string }) {
  return (
    <ul className={`flex items-center gap-4 ${className}`.trim()}>
      {site.socials.map((social) => (
        <li key={social.id}>
          <a
            href={social.href}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={social.label}
            className="inline-flex border border-border p-2 text-muted transition-colors hover:border-accent hover:text-accent focus-visible:text-accent"
          >
            <SocialIcon id={social.id} className="h-5 w-5" />
          </a>
        </li>
      ))}
    </ul>
  );
}
