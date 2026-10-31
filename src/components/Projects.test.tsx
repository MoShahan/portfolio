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
      "https://xivi.vercel.app/",
      "https://tandemcrm.vercel.app/",
      "https://ledger-parser-production.up.railway.app/",
      "https://trove-shop.vercel.app/",
      "https://moshahan.github.io/theater-booking/",
      "https://moshahan.github.io/tasks-board/",
    ]);
    expect(
      screen
        .getAllByRole("link", { name: "GitHub" })
        .map((link) => link.getAttribute("href")),
    ).toEqual([
      "https://github.com/MoShahan/xivi",
      "https://github.com/MoShahan/tandem",
      "https://github.com/MoShahan/ledger-parser",
      "https://github.com/MoShahan/trove",
      "https://github.com/MoShahan/theater-booking",
      "https://github.com/MoShahan/tasks-board",
      "https://github.com/MoShahan/comic-reader-app"
    ]);
  });
});
