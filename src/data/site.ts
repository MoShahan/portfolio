export const site = {
  name: "Mohammed Shahan",
  role: "Frontend Engineer",
  headline:
    "I build React and TypeScript interfaces for web and mobile, and the API when a feature has to be complete.",
  availability: {
    label: "Open to work",
    detail: "Frontend roles, or full-stack with a frontend focus",
  },
  email: "mohamadshahan@gmail.com",
  resumeHref: "/resume.pdf",
  nav: [
    { href: "#about", label: "About" },
    { href: "#work", label: "Work" },
    { href: "#frontend", label: "Frontend" },
    { href: "#experience", label: "Experience" },
    { href: "#skills", label: "Skills" },
    { href: "#education", label: "Education" },
    { href: "#contact", label: "Contact" },
  ],
  socials: [
    { id: "github", label: "GitHub", href: "https://github.com/MoShahan" },
    {
      id: "linkedin",
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/moshahan786",
    },
    { id: "x", label: "X", href: "https://x.com/shahan786" },
    {
      id: "hackerrank",
      label: "HackerRank",
      href: "https://www.hackerrank.com/profile/MoShahan",
    },
  ],
  about: [
    "I like the overlap of design and engineering: component libraries, fintech flows, and interfaces that have to work on real devices and not just in Figma.",
    "From June 2024 to May 2026 I sat in Razorpay’s office shipping loyalty, gift voucher, and membership UI as a Cognitive Clouds contractor. Before that I built React, Vue, and React Native apps for Cognitive Clouds clients, after being promoted from trainee in five months.",
    "Outside work I coordinated events for GLUG PACE (2020–2022), a campus GNU/Linux user group.",
  ],
  jobs: [
    {
      title: "Product Development Engineer I",
      company: "Razorpay",
      companyHref: "https://razorpay.com",
      subtitle: "Contract via Cognitive Clouds",
      start: "June 2024",
      end: "May 2026",
      location: "Bangalore, India",
      bullets: [
        "Shipped frontend modules for a large-scale fintech loyalty platform using React, TypeScript, and Angular - gift vouchers, premium memberships, and partner offers for banks across India.",
        "Built reusable React and TypeScript component libraries to standardize UI patterns and speed up new loyalty features.",
        "Integrated REST APIs for offer fulfillment and membership lifecycle, working with cross-functional teams from scoping to production.",
      ],
      tags: ["React", "TypeScript", "Angular", "REST"],
    },
    {
      title: "Associate Software Engineer",
      company: "Cognitive Clouds",
      companyHref: "https://www.cognitiveclouds.app/",
      start: "September 2022",
      end: "May 2024",
      location: "Bangalore, India",
      bullets: [
        "Developed and maintained web and mobile applications for clients using React, Vue.js, and React Native with TypeScript - including DoveMed MyCircles (web and iOS/Android).",
        "Implemented responsive, accessible UI components and used Jest to keep frontend releases stable.",
        "Promoted from trainee within five months based on consistent delivery of production-ready features.",
      ],
      tags: ["React", "Vue.js", "React Native", "TypeScript", "Jest"],
    },
    {
      title: "Front End Developer, Trainee",
      company: "Cognitive Clouds",
      companyHref: "https://www.cognitiveclouds.app/",
      start: "April 2022",
      end: "August 2022",
      location: "Bangalore, India",
      bullets: [
        "Completed professional training in React and React Native, with TypeScript for maintainable frontend architecture.",
        "Adopted testing and coverage practices used on production UI components.",
      ],
      tags: ["React", "React Native", "TypeScript"],
    },
    {
      title: "RPA Intern",
      company: "Novigo Solutions",
      companyHref: "https://www.novigosolutions.com/",
      start: "August 2021",
      end: "October 2021",
      location: "Mangalore, India",
      bullets: [
        "Built automated workflows in UiPath Studio for repetitive business processes.",
        "Developed attended and unattended bots for data extraction, web automation, and application integration.",
      ],
      tags: ["UiPath", "RPA"],
    },
  ],
  projects: [
    {
      title: "Trove",
      period: "February 2025 – October 2026",
      summary:
        "E-commerce storefront for browsing products, saving a wishlist, managing a cart, and checking out. Next.js App Router and Material UI, Firebase email/password auth with cookie sessions and middleware, DummyJSON catalog.",
      liveHref: "https://trove-shop.vercel.app/",
      githubHref: "https://github.com/MoShahan/trove",
      tags: ["Next.js", "TypeScript", "Material UI", "Firebase Auth", "Jest"],
      image: "/projects/trove.png",
      imageAlt:
        "Trove catalog with search, category filters, sale prices, and ratings",
    },
    {
      title: "Xivi",
      period: "September 2023 – October 2026",
      summary:
        "Full-stack social app: posts with images, likes, comments, friend requests, and one-way follows. Next.js and Material UI on the frontend; Express, MongoDB, and JWT on the API, with OAuth, notifications, and admin feature flags.",
      liveHref: "https://xivi.vercel.app/",
      githubHref: "https://github.com/MoShahan/xivi",
      tags: ["Next.js", "Express", "MongoDB", "Material UI", "JWT"],
      image: "/projects/xivi.png",
      imageAlt: "Xivi home feed with a left sidebar and Everyone / Following tabs",
    },
    {
      title: "Cadence",
      period: "June 2022 – November 2026",
      summary:
        "Personal music catalog: rate songs, rank artists, and add covers. Vite/React UI with JWT auth; Express and Prisma on MySQL/TiDB, ImageKit uploads, shared Zod validation.",
      liveHref: "https://cadence-music-web.vercel.app/",
      githubHref: "https://github.com/MoShahan/cadence",
      tags: ["React", "Vite", "Express", "Prisma", "MySQL"],
      image: "/projects/cadence.png",
      imageAlt: "Cadence home with Top 10 songs and Top 10 artists by average rating",
    },
    {
      title: "Tandem",
      period: "June 2026 – August 2026",
      summary:
        "Multi-tenant sales ERP with org-isolated users, teams, and RBAC. I built the React UI - role-scoped dashboards, customizable widgets, in-app notifications - and the Express/Prisma/Postgres layer as a TypeScript monorepo with shared Zod schemas and cookie-based auth.",
      liveHref: "https://tandemcrm.vercel.app/",
      githubHref: "https://github.com/MoShahan/tandem",
      tags: ["React", "PostgreSQL", "Prisma", "Express"],
      image: "/projects/hilite-sales.png",
      imageAlt: "Tandem dashboard with widgets, charts, and notifications",
    },
    {
      title: "Comic Reader",
      period: "August 2026",
      summary:
        "Local-first Expo/React Native comic reader for CBZ files: filterable cover library and resume-from-last-page reading with no accounts or cloud. SQLite and Zustand persist progress; a windowed pager keeps large issues memory-safe.",
      githubHref: "https://github.com/MoShahan/comic-reader-app",
      tags: ["React Native", "Expo", "TypeScript", "SQLite", "Zustand"],
      image: "/projects/comic-reader.png",
      imageAlt: "Comic reader mobile app showing a local cover library",
    },
    {
      title: "Anvil",
      period: "October 2026",
      summary:
        "Accessible React component library and design system: tokens, light/dark themes, accent palettes, and Storybook docs. ESM package with TypeScript types - Button, Input, Dialog, Tabs, Toast, and more, not a wrapper around another UI kit.",
      githubHref: "https://github.com/MoShahan/anvil",
      tags: ["React", "TypeScript", "Storybook", "Vite", "Vitest"],
      image: "/projects/anvil.png",
      imageAlt: "Anvil Storybook docs for the Button component with theme controls",
    },
    {
      title: "Ledger Lens",
      period: "September 2026",
      summary:
        "Invoice review UI: upload a PDF, Gemini fills a fixed schema, a validator flags mismatches, and you confirm or edit. Your edit is the source of truth. Extracts stay in the browser; React/Vite UI over an Express extract API.",
      liveHref: "https://ledger-lens-demo.vercel.app/",
      githubHref: "https://github.com/MoShahan/ledger-lens",
      tags: ["React", "Vite", "Express", "Gemini"],
      image: "/projects/ledger-lens.png",
      imageAlt: "Ledger Lens inbox with sample invoices and PDF upload",
    },
  ],
  frontendProjects: [
    {
      title: "Tasks Board",
      summary:
        "Task board with customizable columns, board and list views, drag-and-drop, and filters. State stays in localStorage.",
      liveHref: "https://moshahan.github.io/tasks-board/",
      githubHref: "https://github.com/MoShahan/tasks-board",
      tags: ["React", "TypeScript", "Vite", "dnd-kit"],
    },
    {
      title: "Bayline",
      summary:
        "Parking-deck board to track available, occupied, and reserved bays, assign vehicles, and add temporary spots, with toast feedback.",
      liveHref: "https://moshahan.github.io/bayline/",
      githubHref: "https://github.com/MoShahan/bayline",
      tags: ["React", "TypeScript", "Redux Toolkit", "Tailwind CSS"],
    },
    {
      title: "Theater Booking",
      summary:
        "Movie-theatre seat map with promo codes, GST and fee breakdown, and a booking history. All client-side.",
      liveHref: "https://moshahan.github.io/theater-booking/",
      githubHref: "https://github.com/MoShahan/theater-booking",
      tags: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    },
    {
      title: "Folder UI",
      summary:
        "Nested folder explorer with expand/collapse, name filter, file-type icons, and a footer that shows the selected file.",
      liveHref: "https://moshahan.github.io/folder-ui/",
      githubHref: "https://github.com/MoShahan/folder-ui",
      tags: ["React", "TypeScript", "Vite"],
    },
    {
      title: "Rock Paper Scissors",
      summary:
        "Vanilla HTML, CSS, and JavaScript game with a classic first-website look and a modern match: custom rounds, keyboard play, and object-shaped buttons.",
      liveHref: "https://moshahan.github.io/rock-paper-scissors/",
      githubHref: "https://github.com/MoShahan/rock-paper-scissors",
      tags: ["HTML", "CSS", "JavaScript"],
    },
  ],
  sideProjects: [
    {
      title: "Gold Rate Bot",
      summary:
        "Telegram bot that scrapes daily 22K gold rates from AKGSMA and broadcasts them on a GitHub Actions schedule.",
      githubHref: "https://github.com/MoShahan/kerala-gold-rate-tg-bot",
      tags: ["Python", "Telegram", "GitHub Actions"],
    },
    {
      title: "Daily Namaz Bot",
      summary:
        "Telegram bot that sends daily prayer timings at 12:01 AM IST, with /setcity to change location.",
      githubHref: "https://github.com/MoShahan/daily-namaz-bot",
      tags: ["Python", "Telegram", "GitHub Actions"],
    },
    {
      title: "Discord bots",
      summary:
        "A few Discord bots for personal servers - notifications and small automations.",
      tags: ["Python", "Discord"],
    },
  ],
  skills: [
    {
      label: "Frontend",
      items: [
        "React",
        "TypeScript",
        "Next.js",
        "Angular",
        "Vue.js",
        "React Native",
        "HTML",
        "CSS",
        "Tailwind CSS",
      ],
    },
    {
      label: "Backend",
      items: [
        "Express",
        "REST APIs",
      ],
    },
    {
      label: "Database",
      items: [
        "PostgreSQL",
        "MongoDB",
        "Prisma",
        "Firebase Auth",
      ],
    },
    {
      label: "Quality & tools",
      items: ["Jest", "Python", "Git", "GitHub Actions"],
    },
  ],
  education: {
    degree: "Bachelor of Engineering in Computer Science & Engineering",
    school: "P A College of Engineering",
    dates: "August 2018 – July 2022",
    location: "Mangalore, India",
    detail: "CGPA 8.69 / 10",
  },
  award: {
    title: "1st Place, Intra College Project Expo",
    org: "ISTE in association with IEEE, IEI, CSI-PACE",
    date: "June 2022",
    detail: "Best final-year project, Computer Science branch.",
  },
  hackerrankNote:
    "Problem Solving, Python, 10 Days of JS, and C practice on HackerRank.",
} as const;

export type SocialId = (typeof site.socials)[number]["id"];
