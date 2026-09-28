"use client";

import { useEffect, useState } from "react";

import { site } from "@/data/site";

export function SectionNav() {
  const [active, setActive] = useState<string>(site.nav[0]?.href ?? "");

  useEffect(() => {
    const ids = site.nav.map((item) => item.href.slice(1));
    const nodes = ids
      .map((id) => document.getElementById(id))
      .filter((node): node is HTMLElement => Boolean(node));

    if (nodes.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) {
          setActive(`#${visible.target.id}`);
        }
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: [0, 0.25, 0.5, 1] },
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return (
    <nav aria-label="Page sections" className="hidden lg:block">
      <ol className="flex flex-col gap-1">
        {site.nav.map((item, index) => {
          const isActive = active === item.href;
          const n = String(index + 1).padStart(2, "0");

          return (
            <li key={item.href}>
              <a
                href={item.href}
                aria-current={isActive ? "location" : undefined}
                className={`group flex items-baseline gap-3 py-1.5 text-sm transition-colors ${
                  isActive ? "text-text" : "text-muted hover:text-text"
                }`}
              >
                <span className="w-6 font-mono text-[0.68rem] tabular-nums text-accent/80">
                  {n}
                </span>
                <span
                  className={
                    isActive
                      ? "border-b border-accent pb-px"
                      : "border-b border-transparent pb-px group-hover:border-border"
                  }
                >
                  {item.label}
                </span>
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
