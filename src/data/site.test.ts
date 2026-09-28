import { existsSync } from "node:fs";
import path from "node:path";

import { describe, expect, it } from "vitest";

import { site } from "@/data/site";

const publicDir = path.join(process.cwd(), "public");

describe("site content", () => {
  it("positions as a frontend engineer who is open to work", () => {
    expect(site.name).toBe("Mohammed Shahan");
    expect(site.role).toBe("Frontend Engineer");
    expect(site.availability.label).toBe("Open to work");
    expect(site.availability.detail).toMatch(/frontend-focus/i);
    expect(site.email).toBe("mohamadshahan@gmail.com");
  });

  it("keeps Cognitive Clouds as employer of record on the Razorpay row", () => {
    const razorpay = site.jobs[0];
    expect(razorpay.company).toBe("Razorpay");
    expect(razorpay.start).toBe("June 2024");
    expect(razorpay.end).toBe("May 2026");
    expect("subtitle" in razorpay && razorpay.subtitle).toBe(
      "Contract via Cognitive Clouds",
    );
  });

  it("lists four employment rows including the Novigo internship", () => {
    expect(site.jobs).toHaveLength(4);
    expect(site.jobs[3]?.company).toBe("Novigo Solutions");
    expect(JSON.stringify(site)).not.toMatch(/First Kampus/i);
  });

  it("has valid social and résumé links", () => {
    expect(site.resumeHref).toBe("/resume.pdf");
    expect(existsSync(path.join(publicDir, "resume.pdf"))).toBe(true);

    for (const social of site.socials) {
      expect(social.href).toMatch(/^https:\/\//);
    }

    const ids = site.socials.map((social) => social.id);
    expect(ids).toEqual(["github", "linkedin", "x", "hackerrank"]);
  });

  it("features four projects with images on disk", () => {
    expect(site.projects).toHaveLength(4);

    for (const project of site.projects) {
      expect(project.image).toMatch(/^\/projects\//);
      expect(existsSync(path.join(publicDir, project.image.replace(/^\//, "")))).toBe(
        true,
      );
    }

    const aget = site.projects.find((project) => project.title === "Aget.Co");
    expect(aget && "liveHref" in aget && aget.liveHref).toBe(
      "https://agetware-ecommerce.vercel.app/login",
    );
  });

  it("does not publish a phone number", () => {
    expect(JSON.stringify(site)).not.toMatch(/9741234998/);
  });
});
