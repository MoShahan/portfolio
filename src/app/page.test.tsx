import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import Home from "@/app/page";

describe("Home page", () => {
  it("exposes skip link, identity, and all page sections", () => {
    render(<Home />);

    expect(screen.getByRole("link", { name: "Skip to content" })).toHaveAttribute(
      "href",
      "#content",
    );
    expect(
      screen.getByRole("heading", { name: "Mohammed Shahan" }),
    ).toBeInTheDocument();
    expect(screen.getByText(/Open to work/)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "View résumé (PDF)" })).toHaveAttribute(
      "href",
      "/resume.pdf",
    );

    for (const id of [
      "about",
      "work",
      "experience",
      "skills",
      "education",
      "contact",
    ]) {
      expect(document.getElementById(id)).not.toBeNull();
    }
  });

  it("links social profiles and does not render a phone number", () => {
    render(<Home />);

    expect(screen.getAllByRole("link", { name: "GitHub" })[0]).toHaveAttribute(
      "href",
      "https://github.com/MoShahan",
    );
    expect(screen.getAllByRole("link", { name: "X" })[0]).toHaveAttribute(
      "href",
      "https://x.com/shahan786",
    );
    expect(screen.queryByText(/9741234998/)).not.toBeInTheDocument();
  });
});
