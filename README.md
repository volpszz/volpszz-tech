# Arthur Volpato — Portfolio

Personal portfolio for [volpsz (@volpszz)](https://github.com/volpszz), focused on software engineering, systems, networking and application security.

**Website:** https://volpszz.github.io/volpszz-tech/

## Features

- Dark-purple visual identity and responsive layout.
- Hardware Monitor, CyberShield and TCP Port Scanner project cards with category filters.
- About, stack, mobile navigation and LinkedIn contact.
- Current goals: CompTIA Security+, cyber labs/CTFs and security-focused projects.
- Shared purple theme tokens cover illustrations, secondary text and interaction states.
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

See `docs/qa/theme-review.md` for the theme/content review and desktop/mobile screenshots. Certification and lab goals are presented as future objectives, not completed achievements.
