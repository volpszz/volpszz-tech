# Arthur Volpato — Portfolio

Personal portfolio for [volpsz (@volpszz)](https://github.com/volpszz), focused on software engineering, systems and cybersecurity, with career interests in Blue Team, Red Team, Purple Team and Security Engineering.

**Website:** https://volpszz.github.io/volpszz-tech/

## Features

- Clean charcoal layout with muted blue accents, stronger section hierarchy and responsive spacing.
- Portuguese/English switching with a saved language preference across pages.
- Hardware Monitor, CyberShield and TCP Port Scanner project cards with category filters and individual technical studies.
- About, stack, mobile navigation and LinkedIn contact.
- Current goals: continuous learning and active pursuit of industry certifications (such as CompTIA Network+ and Security+), cyber labs/CTFs and security-focused projects.
- Explicit career objectives in Information Security, spanning cyber defense, authorized offensive security and Security Engineering.
- Shared neutral theme tokens with blue highlights for navigation, project links and interaction states.
- Keyboard focus, skip link and reduced-motion support.
- Static export deployed automatically with GitHub Actions.

Project illustrations are decorative representations, not actual screenshots or live measurements. The portfolio does not run the scanner or provide a security service.

## Development

Requires Node.js 24 or newer and npm:

```bash
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Local development uses the root path. Edit `app/content.ts` for bilingual content, `app/portfolio.tsx` for the home page, `app/project-detail.tsx` for project studies, `app/globals.css` for styling, and `app/layout.tsx` for metadata. Shared navigation lives in `app/components/site-shell.tsx`.

```bash
npm run lint
npm run build
```

`npm run build` creates the static site in `out/`. This project uses `output: "export"`: serve `out/` with a static web server rather than using `next start`.

## Deployment

GitHub Pages uses **GitHub Actions** as its publishing source. Every push to `master` runs `.github/workflows/pages.yml`: install dependencies, lint, build and deploy. Manual runs are available in the Actions tab.

The workflow sets `GITHUB_PAGES=true` to build assets under `/volpszz-tech`. If the repository is renamed, update the base path in `next.config.ts` and the website links.

Featured projects are curated static content; they do not automatically synchronize with GitHub.

## Visual QA

See `docs/qa/bilingual-review.md` for the latest redesign checks and screenshots, and `docs/qa/bilingual-checks.json` for browser assertions. `docs/qa/project-sources.json` records the primary sources used for project descriptions. Earlier reports record historical revisions. Certification and lab goals are presented as objectives, not completed achievements.
