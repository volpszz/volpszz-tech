# Arthur Volpato — Portfolio

Personal portfolio for [volpsz (@volpszz)](https://github.com/volpszz), covering software, systems and cybersecurity. Arthur studies Software Engineering at UniCesumar and works in Help Desk N1 at an ISP/IoT company. Career interests include Security Analyst, Blue Team, Red Team, Purple Team and Security Engineering.

Arthur's personal stack includes Rust, Python, C, JavaScript, HTML and CSS, alongside the systems/tools listed on the site. JavaScript is part of the stack, not labeled as a learning-only skill. React and Next.js are not listed as personal competencies; their use to implement this portfolio does not imply proficiency or a web-developer career focus.

**Website:** https://volpszz.github.io/volpszz-tech/

## Site and design

The home page follows this order: introduction → About → Projects → Toolkit → Goals → Contact. The navigation follows the same order, with About before Projects.

- Portuguese/English switching, with the preferred language saved across pages.
- One card per project, category filters and a “Saiba mais” / “Learn more” link to an individual technical study.
- Project studies covering context, features, architecture, decisions, lessons and limitations.
- Responsive navigation, keyboard focus, skip link and reduced-motion support.
- LinkedIn contact and GitHub repository links.

The design uses neutral charcoal surfaces and restrained gold accents, without a terminal/dashboard aesthetic. Main tokens in `app/globals.css`:

| Role | Color |
| --- | --- |
| Background | `#121212` |
| Main text | `#f5f5f3` |
| Surfaces | `#191919`, `#242424`, `#1c1c1c` |
| Gold accent / hover | `#e3bf69` / `#f1d79d` |

Gold highlights section labels, the “Arthur Volpato · Portfólio/Portfolio” introduction label, active navigation and links/interactions. Large headings, goal headings (including “Industry certifications”) and neutral primary buttons remain off-white. Do not reintroduce a second project list in the introduction or duplicate the home cards with diagram panels.

## Projects and content

The curated catalog currently includes Hardware Monitor, CyberShield and TCP Port Scanner. It does not automatically synchronize with GitHub. Architecture diagrams are explanatory illustrations, not screenshots or live measurements. The portfolio does not execute the projects, run a scanner or provide a security service; CyberShield is described as an educational application.

Goals include industry certifications such as CompTIA Network+ and Security+, authorized cyber labs/CTFs and security-focused projects. These are learning objectives, not completed achievements or credentials already earned.

## Site implementation and architecture

The current manifest uses Next.js `16.3.8`, React/React DOM `19.2.8`, TypeScript, Tailwind CSS `4` and ESLint `9`. Check `package.json` and `package-lock.json` when changing dependencies.

The App Router generates a **static export** using `output: "export"` and `trailingSlash: true`. There is no portfolio backend, database, CMS or admin interface. GitHub Pages serves the generated files in `out/`; features requiring a runtime server need a different hosting plan.

| File | Responsibility |
| --- | --- |
| `app/page.tsx` | Home entry point |
| `app/content.ts` | PT/EN copy, social links, toolkit, goals and project data/types |
| `app/portfolio.tsx` | Home sections, project cards and filters |
| `app/project-detail.tsx` | Shared project-study layout |
| `app/projects/[slug]/page.tsx` | Static routes and project metadata |
| `app/language-provider.tsx` | Language context, storage and document language |
| `app/components/site-shell.tsx` | Header, active navigation, section headings and footer |
| `app/components/project-artwork.tsx` | Project-specific architecture diagrams |
| `app/globals.css` | Theme tokens, CSS components and responsive rules |
| `app/layout.tsx`, `app/icon.svg` | Fonts, general metadata, provider and icon |
| `next.config.ts` | Export and conditional Pages base path |
| `.github/workflows/pages.yml` | Build and deployment workflow |

Read `AGENTS.md` and the relevant guides in `node_modules/next/dist/docs/` before changing Next.js code. If reordering sections, update both translated menus and the section ID order used for active navigation in `site-shell.tsx`.

## Local development

Use Node.js 24 as the reference version used in CI, and npm. From the project directory:

```bash
npm ci
npm run dev
```

Open http://localhost:3000/ (or the address reported by the dev server). Normal local development uses the root path, without `/volpszz-tech`.

Validation commands:

```bash
npm run lint
npm run build
git diff --check
```

The build checks TypeScript and writes the static site to `out/`. Although a `start` script exists, **do not use `next start` to serve this export**; use a static web server. There is no unit-test script configured. Lint/build success does not replace browser testing.

## Adding or editing a project

1. Read the project's README and implementation before describing its features. Separate implemented behavior, limitations and plans.
2. Edit `projects` in `app/content.ts`, using the `Project` type and existing entries as references. Provide a unique `slug`, `name`, `category`, nonempty `stack`, `visual`, and both languages for `platform`, `summary`, `overview`, `features`, `flow`, `decisions`, `lessons` and `limitations`. `flow` and `decisions` contain `{ title, text }` items.
3. Adapt the artwork. The existing `hardware`, `web` and `scanner` diagrams contain fixed project names and architecture; **they are not generic templates for new projects**. Add a matching diagram or implement a genuine generic/optional fallback. Update the visual type, toolbar map, PT/EN `artLabels` and rendering as needed.
4. Rebuild and test the new card, category filter, detail link and direct page reload. `generateStaticParams()` derives routes from the catalog; a new entry needs a new build, not a manually duplicated route file.

Current categories are `systems`, `web` and `security`. A new category also requires changes to `Category`, PT/EN filter labels and the home filter list.

Repository links currently use `github + "/" + project.slug`, so the slug must match a repository name under `volpszz`. To support a different owner/name, add an explicit repository URL to the data model and update home/detail/README link consumers. Do not silently link to a nonexistent repository.

Interface translations live in `copy.pt` and `copy.en`. Project metadata is statically generated from the Portuguese summary; language switching does not create separate locale URLs or translated static metadata.

## Deployment

GitHub Pages uses GitHub Actions as its publishing source. Every push to `master` runs `.github/workflows/pages.yml`: `npm ci`, lint, build, upload `out/` and deploy. Manual runs are also available.

The workflow sets `GITHUB_PAGES=true`, which enables the `/volpszz-tech` base path. Test that configuration before publishing:

```bash
# Git Bash / bash
GITHUB_PAGES=true npm run build
```

```powershell
# PowerShell
$env:GITHUB_PAGES = "true"
npm run build
Remove-Item Env:GITHUB_PAGES
```

If the repository is renamed, update `next.config.ts` and site links. A simple static server at the root does not automatically map the Pages prefix.

Review the diff, commit only intended files, then push when publication is authorized. Wait for the workflow for the **exact new commit** and verify the public site; a successful push or an earlier green run does not prove the new deployment succeeded.

## Browser review and QA records

Check PT/EN, language persistence, unique project cards, category filters, detail-page reloads, external links, active navigation, mobile menu and keyboard focus. Test widths such as 320, 390, 768, 1024 and 1440 px, with no horizontal overflow or clipped content. Preserve the off-white goal headings and gold introduction/section labels.

`docs/qa/` contains historical reports and screenshots, not an automated test suite:

- `simple-project-review.md` / `simple-project-checks.json`: simplified cards and removal of duplicate listings.
- `editorial-review.md` / `editorial-checks.json`: About-first order, neutral styling and off-white goals.
- `gold-accent-checks.json` / `screenshots/gold-accent-desktop.png`: gold accents in PT/EN at mobile/desktop widths.
- `project-sources.json`: source references used for project descriptions.

Earlier theme, career and bilingual reports document previous revisions; their screenshots are not the current design specification. Keep this README in sync when changing structure, appearance, setup or deployment.
