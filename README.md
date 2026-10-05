# Arthur Volpato — Portfolio

Personal portfolio for [volpsz (@volpszz)](https://github.com/volpszz), focused on software engineering, systems and cybersecurity, with career interests in Blue Team, Red Team, Purple Team and Security Engineering.

**Website:** https://volpszz.github.io/volpszz-tech/

## Features

- Minimal black/charcoal layout with selective purple accents and responsive spacing.
- Hardware Monitor, CyberShield and TCP Port Scanner project cards with category filters.
- About, stack, mobile navigation and LinkedIn contact.
- Current goals: continuous learning and active pursuit of industry certifications (such as CompTIA Network+ and Security+), cyber labs/CTFs and security-focused projects.
- Explicit career objectives in Information Security, spanning cyber defense, authorized offensive security and Security Engineering.
- Shared neutral theme tokens keep text and surfaces grayscale; purple highlights key labels, career interests, buttons and interaction states.
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

Local development uses the root path. Edit `app/portfolio.tsx` for content and interactions, `app/globals.css` for styling, and `app/layout.tsx` for metadata.

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

See `docs/qa/minimal-review.md` for the latest black/purple design checks and screenshots. `docs/qa/career-review.md` and `docs/qa/theme-review.md` record earlier revisions. Certification and lab goals are presented as objectives, not completed achievements.
