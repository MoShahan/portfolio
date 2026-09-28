import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { CopyEmailButton } from "./CopyEmailButton";

describe("CopyEmailButton", () => {
  it("links mailto and copies the address", async () => {
    const writeText = vi.fn().mockResolvedValue(undefined);
    Object.defineProperty(window.navigator, "clipboard", {
      configurable: true,
      value: { writeText },
    });

    render(<CopyEmailButton email="mohamadshahan@gmail.com" />);

    expect(
      screen.getByRole("link", { name: "mohamadshahan@gmail.com" }),
    ).toHaveAttribute("href", "mailto:mohamadshahan@gmail.com");

    fireEvent.click(screen.getByRole("button", { name: "Copy email address" }));

    await waitFor(() => {
      expect(writeText).toHaveBeenCalledWith("mohamadshahan@gmail.com");
    });
    expect(
      screen.getByRole("button", { name: "Email copied" }),
    ).toHaveTextContent("Copied");
  });
});
