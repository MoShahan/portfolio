"use client";

import { useState } from "react";

import { MailIcon } from "./Icons";

export function CopyEmailButton({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  return (
    <span className="inline-flex flex-wrap items-center gap-3">
      <a
        href={`mailto:${email}`}
        className="font-medium text-text underline-offset-4 transition-colors hover:text-accent hover:underline"
      >
        {email}
      </a>
      <button
        type="button"
        onClick={copy}
        className="inline-flex items-center gap-1.5 border border-border bg-surface px-3 py-1 font-mono text-xs text-muted transition-colors hover:border-accent hover:text-accent"
        aria-label={copied ? "Email copied" : "Copy email address"}
      >
        <MailIcon className="h-3.5 w-3.5" />
        {copied ? "Copied" : "Copy"}
      </button>
    </span>
  );
}
