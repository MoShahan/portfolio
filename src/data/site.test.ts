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
    expect(site.availability.detail).toMatch(/frontend focus/i);
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

  it("features all projects with images on disk", () => {
    for (const project of site.projects) {
      expect(project.image).toMatch(/^\/projects\//);
      expect(existsSync(path.join(publicDir, project.image.replace(/^\//, "")))).toBe(
        true,
      );
    }

    expect(site.projects.map((project) => project.title)).toEqual([
      "Trove",
      "Xivi",
      "Cadence",
      "Tandem",
      "Comic Reader",
      "Anvil",
      "Ledger Lens",
    ]);

    const cadence = site.projects.find((project) => project.title === "Cadence");
    expect(cadence && "liveHref" in cadence && cadence.liveHref).toBe(
      "https://cadence-music-web.vercel.app/",
    );
    expect(cadence && "githubHref" in cadence && cadence.githubHref).toBe(
      "https://github.com/MoShahan/cadence",
    );
    expect(cadence?.image).toBe("/projects/cadence.png");

    const anvil = site.projects.find((project) => project.title === "Anvil");
    expect(anvil && "githubHref" in anvil && anvil.githubHref).toBe(
      "https://github.com/MoShahan/anvil",
    );
    expect(anvil?.image).toBe("/projects/anvil.png");
    expect(anvil && "liveHref" in anvil).toBe(false);

    const xivi = site.projects.find((project) => project.title === "Xivi");
    expect(xivi && "liveHref" in xivi && xivi.liveHref).toBe(
      "https://xivi.vercel.app/",
    );
    expect(xivi && "githubHref" in xivi && xivi.githubHref).toBe(
      "https://github.com/MoShahan/xivi",
    );

    const trove = site.projects.find((project) => project.title === "Trove");
    expect(trove && "liveHref" in trove && trove.liveHref).toBe(
      "https://trove-shop.vercel.app/",
    );
    expect(trove && "githubHref" in trove && trove.githubHref).toBe(
      "https://github.com/MoShahan/trove",
    );
    expect(trove?.image).toBe("/projects/trove.png");
    expect(JSON.stringify(site)).not.toMatch(/Aget/i);

    const ledger = site.projects.find((project) => project.title === "Ledger Lens");
    expect(ledger && "liveHref" in ledger && ledger.liveHref).toBe(
      "https://ledger-lens-demo.vercel.app/",
    );
    expect(ledger && "githubHref" in ledger && ledger.githubHref).toBe(
      "https://github.com/MoShahan/ledger-lens",
    );
    expect(ledger?.image).toBe("/projects/ledger-lens.png");
    expect(JSON.stringify(site)).not.toMatch(/Ledger Parse/i);
    expect(JSON.stringify(site)).not.toMatch(/ledger-parser/i);

    expect(site.projects.map((project) => project.title)).not.toContain(
      "Theater Booking",
    );
    expect(site.projects.map((project) => project.title)).not.toContain(
      "Tasks Board",
    );
  });

  it("lists frontend-only UI projects separately from featured work", () => {
    expect(site.frontendProjects.map((project) => project.title)).toEqual([
      "Tasks Board",
      "Bayline",
      "Theater Booking",
      "Folder UI",
      "Rock Paper Scissors",
    ]);
    expect(site.nav.map((item) => item.href)).toContain("#frontend");
  });

  it("lists side projects including Telegram bots and the YouTube userscript", () => {
    expect(site.sideProjects.map((project) => project.title)).toEqual([
      "Gold Rate Bot",
      "Daily Namaz Bot",
      "Discord bots",
      "YouTube 2× Toggle",
    ]);
    expect(site.sideProjects[2] && "githubHref" in site.sideProjects[2]).toBe(
      false,
    );
  });

  it("does not publish a phone number", () => {
    expect(JSON.stringify(site)).not.toMatch(/9741234998/);
  });
});
