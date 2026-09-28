import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Experience } from "./Experience";

describe("Experience", () => {
  it("renders the Razorpay assignment as a Cognitive Clouds contract", () => {
    render(<Experience />);

    expect(
      screen.getByRole("link", {
        name: /Product Development Engineer I · Razorpay/i,
      }),
    ).toHaveAttribute("href", "https://razorpay.com");
    expect(screen.getByText("Contract via Cognitive Clouds")).toBeInTheDocument();
    expect(screen.getByText("June 2024 – May 2026")).toBeInTheDocument();
  });

  it("keeps Cognitive Clouds visible before Razorpay", () => {
    render(<Experience />);

    expect(
      screen.getByRole("link", {
        name: /Associate Software Engineer · Cognitive Clouds/i,
      }),
    ).toHaveAttribute("href", "https://www.cognitiveclouds.app/");
    expect(
      screen.getByRole("link", {
        name: /Front End Developer, Trainee · Cognitive Clouds/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", {
        name: /RPA Intern · Novigo Solutions/i,
      }),
    ).toHaveAttribute("href", "https://www.novigosolutions.com/");
    expect(screen.queryByText(/First Kampus/i)).not.toBeInTheDocument();
  });
});
