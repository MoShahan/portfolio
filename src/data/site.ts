export const site = {
  name: "Mohammed Shahan",
  role: "Frontend Engineer",
  headline:
    "I build React and TypeScript interfaces for web and mobile, and the API when a feature has to be complete.",
  availability: {
    label: "Open to work",
    detail: "Frontend and full-stack (frontend-focus)",
  },
  email: "mohamadshahan@gmail.com",
  resumeHref: "/resume.pdf",
  nav: [
    { href: "#about", label: "About" },
    { href: "#work", label: "Work" },
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
        "Shipped frontend modules for a large-scale fintech loyalty platform using React, TypeScript, and Angular — gift vouchers, premium memberships, and partner offers for banks across India.",
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
        "Developed and maintained web and mobile applications for clients using React, Vue.js, and React Native with TypeScript — including DoveMed MyCircles (web and iOS/Android).",
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
      title: "HiLite Sales",
      period: "June 2026 – August 2026",
      summary:
        "Multi-tenant sales ERP with org-isolated users, teams, and RBAC. I built the React UI — role-scoped dashboards, customizable widgets, in-app notifications — and the Express/Prisma/Postgres layer as a TypeScript monorepo with shared Zod schemas and cookie-based auth.",
      tags: ["React", "PostgreSQL", "Prisma", "Express"],
      image: "/projects/hilite-sales.png",
      imageAlt: "HiLite Sales dashboard with widgets, charts, and notifications",
    },
    {
      title: "Aget.Co",
      period: "February 2025",
      summary:
        "Responsive e-commerce storefront: catalog search, category filters, cart, wishlist, and checkout. Public product API plus Firebase email/password auth, gated with Next.js middleware.",
      liveHref: "https://agetware-ecommerce.vercel.app/login",
      githubHref: "https://github.com/MoShahan/agetware-ecommerce",
      tags: ["Next.js", "TypeScript", "Material UI", "Firebase Auth", "Jest"],
      image: "/projects/aget-co.png",
      imageAlt: "Aget.Co storefront with product grid, search, and filters",
    },
    {
      title: "Kanban Task Board",
      period: "August 2026",
      summary:
        "Local Kanban board for planning work, persisted in localStorage with no backend. Drag-and-drop and keyboard moves across columns, add/edit/delete modals, search, sort, overdue highlighting, and a light/dark theme.",
      tags: ["React", "TypeScript", "Vite", "Tailwind CSS"],
      image: "/projects/kanban.png",
      imageAlt: "Kanban board with To do, In progress, and Done columns",
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
      label: "Full-stack",
      items: [
        "Express",
        "REST APIs",
        "PostgreSQL",
        "MongoDB",
        "Prisma",
        "Firebase Auth",
      ],
    },
    {
      label: "Quality & tools",
      items: ["Jest", "Git", "GitHub Actions"],
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
