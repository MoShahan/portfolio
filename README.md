# Mohammed Shahan — Portfolio

**Live:** [https://mohammed-shahan.vercel.app](https://mohammed-shahan.vercel.app)

Personal site for [Mohammed Shahan](https://github.com/MoShahan), a frontend engineer (full-stack with a frontend focus). One dark, mobile-first page. No blog.

**Open to work** — frontend and full-stack (frontend-focus) roles.

- Email: [mohamadshahan@gmail.com](mailto:mohamadshahan@gmail.com)
- [LinkedIn](https://www.linkedin.com/in/moshahan786) · [GitHub](https://github.com/MoShahan) · [X](https://x.com/shahan786) · [HackerRank](https://www.hackerrank.com/profile/MoShahan)

## Features

- Sticky identity + section nav on desktop; stacked layout on mobile
- About, selected work, experience, skills, education, contact
- Honest employment timeline: Razorpay assignment listed as **Contract via Cognitive Clouds**
- Project covers, résumé PDF, copy-email control
- Accessible markup, skip link, visible focus, `prefers-reduced-motion`

## Tech stack

- [Next.js](https://nextjs.org/) (App Router) + React + TypeScript
- [Tailwind CSS](https://tailwindcss.com/)
- [Vitest](https://vitest.dev/) + Testing Library
- Hosted on [Vercel](https://mohammed-shahan.vercel.app)

## Getting started

```bash
git clone https://github.com/MoShahan/portfolio.git
cd portfolio
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

If this repo uses a different name on GitHub, change the clone URL accordingly.

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Local development server |
| `npm run build` | Production build |
| `npm start` | Serve the production build |
| `npm run lint` | ESLint |
| `npm test` | Unit / component tests |
| `npm run test:watch` | Vitest watch mode |
| `npm run test:coverage` | Tests plus coverage report (`coverage/`) |

## CI

Two GitHub Actions workflows run on push and pull requests to `master` / `main`:

- [Lint](.github/workflows/lint.yml) — `npm run lint`
- [Test](.github/workflows/test.yml) — `npm test`

## Project structure

```
src/
  app/            # layout, page, icons, Open Graph image
  components/     # page sections and UI
  data/site.ts    # all copy (jobs, projects, socials)
  test/           # Vitest setup
public/
  resume.pdf
  projects/       # project cover images
```

Edit content in [`src/data/site.ts`](src/data/site.ts). Replace `public/resume.pdf` to update the résumé. Swap files in `public/projects/` (keep the same names) for real screenshots.

## License

Private personal portfolio. Source is published so the site can be reviewed; please do not reuse the content as your own.
