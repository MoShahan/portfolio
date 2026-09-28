import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Projects } from "./Projects";

describe("Projects", () => {
  it("shows live and source links only when they exist", () => {
    render(<Projects />);

    expect(screen.getByRole("img", { name: /HiLite Sales/i })).toBeInTheDocument();
    expect(
      screen.getAllByRole("link", { name: "Live demo" }).map((link) =>
        link.getAttribute("href"),
      ),
    ).toEqual([
      "https://ledger-parser-production.up.railway.app/",
      "https://agetware-ecommerce.vercel.app/login",
    ]);
    expect(
      screen.getAllByRole("link", { name: "GitHub" }).map((link) =>
        link.getAttribute("href"),
      ),
    ).toEqual([
      "https://github.com/MoShahan/ledger-parser",
      "https://github.com/MoShahan/agetware-ecommerce",
      "https://github.com/MoShahan/react-theatre-booking",
      "https://github.com/MoShahan/comic-reader-app",
    ]);
  });

  it("does not turn HiLite or Kanban titles into links without URLs", () => {
    render(<Projects />);

    expect(
      screen.queryByRole("link", { name: /HiLite Sales/i }),
    ).not.toBeInTheDocument();
    expect(
      screen.queryByRole("link", { name: /Kanban Task Board/i }),
    ).not.toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "HiLite Sales" })).toBeInTheDocument();
  });
});
