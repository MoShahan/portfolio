import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { FrontendProjects } from "./FrontendProjects";

describe("FrontendProjects", () => {
  it("lists client-side UI projects with live and GitHub links", () => {
    render(<FrontendProjects />);

    expect(screen.getByRole("heading", { name: "Frontend" })).toBeInTheDocument();
    expect(
      screen.getAllByRole("heading", { level: 3 }).map((heading) => heading.textContent),
    ).toEqual([
      "Tasks Board",
      "Bayline",
      "Theater Booking",
      "Folder UI",
      "Rock Paper Scissors",
    ]);

    expect(
      screen
        .getAllByRole("link", { name: "Live demo" })
        .map((link) => link.getAttribute("href")),
    ).toEqual([
      "https://moshahan.github.io/tasks-board/",
      "https://moshahan.github.io/bayline/",
      "https://moshahan.github.io/theater-booking/",
      "https://moshahan.github.io/folder-ui/",
      "https://moshahan.github.io/rock-paper-scissors/",
    ]);
    expect(
      screen
        .getAllByRole("link", { name: "GitHub" })
        .map((link) => link.getAttribute("href")),
    ).toEqual([
      "https://github.com/MoShahan/tasks-board",
      "https://github.com/MoShahan/bayline",
      "https://github.com/MoShahan/theater-booking",
      "https://github.com/MoShahan/folder-ui",
      "https://github.com/MoShahan/rock-paper-scissors",
    ]);
  });
});
