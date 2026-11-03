import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Projects } from "./Projects";

describe("Projects", () => {
  it("shows live and source links only when they exist", () => {
    render(<Projects />);

    expect(screen.getByRole("img", { name: /Tandem/i })).toBeInTheDocument();
    expect(
      screen
        .getAllByRole("link", { name: "Live demo" })
        .map((link) => link.getAttribute("href")),
    ).toEqual([
      "https://trove-shop.vercel.app/",
      "https://xivi.vercel.app/",
      "https://cadence-music-web.vercel.app/",
      "https://tandemcrm.vercel.app/",
      "https://ledger-lens-demo.vercel.app/",
    ]);
    expect(
      screen
        .getAllByRole("link", { name: "GitHub" })
        .map((link) => link.getAttribute("href")),
    ).toEqual([
      "https://github.com/MoShahan/trove",
      "https://github.com/MoShahan/xivi",
      "https://github.com/MoShahan/cadence",
      "https://github.com/MoShahan/tandem",
      "https://github.com/MoShahan/comic-reader-app",
      "https://github.com/MoShahan/anvil",
      "https://github.com/MoShahan/ledger-lens",
      "https://github.com/MoShahan/kerala-gold-rate-tg-bot",
      "https://github.com/MoShahan/daily-namaz-bot",
      "https://github.com/MoShahan/youtube-2x-shortcut",
    ]);
    expect(
      screen.getByRole("heading", { name: "Side projects" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "YouTube 2× Toggle" }),
    ).toBeInTheDocument();
    expect(
      screen.queryByRole("link", { name: /Discord bots/i }),
    ).not.toBeInTheDocument();
  });
});
