# Web Scraper v1 portfolio review

## Scope and source review

Added `/projects/web-scraper/`, category `web`, with repository URL `https://github.com/volpszz/web-scraper`. PT/EN content covers context, features, architecture, decisions, lessons and limitations. A dedicated `scraper` visual shows URL → GET → HTML → JSON; it does not reuse CyberShield's login diagram. Existing projects and language/routing components are unchanged.

Content was checked against the local scraper's `main.py`, `functions/scraping.py`, `README.md` and `docs/GUIA_DO_PROJETO.md`. The case distinguishes response HTML from a JavaScript-rendered DOM, structural validation from SSRF protection, request timeouts from global deadlines, and ordinary JSON overwrite from atomic persistence. Authenticated-site scraping with authorized sessions/cookies and safe secret handling is explicitly **planned v2**, not implemented authentication or bypass.

## Executed checks

- `npm ci`: successful; no dependency manifests changed.
- `npm run lint`: successful.
- `GITHUB_PAGES=true npm run build`: successful with Next.js 16.3.8, TypeScript checks and 8/8 generated static pages. Routes include the new Web Scraper study and all three existing studies.
- `git diff --check`: successful.
- Scraper source verification: `.venv/bin/python -m unittest discover -s tests -v` passed all 17 tests, including loopback HTTP integration, JSON readback and real CLI subprocesses.
- Headless Chromium against the actual Pages-mode `out/` export, served temporarily with `/volpszz-tech` mapped to its root:
  - All four project detail routes in PT and EN at 320, 390, 768, 1024 and 1440 px: 40 route/language/viewport checks, six study sections each, no document horizontal overflow.
  - Home project catalog, Web filter, unique Web Scraper card, exact repository URL, detail navigation, direct reload and language persistence: 10 language/viewport combinations passed.
  - New study uses `.artwork-scraper`, not `.web-diagram`, and contains the planned/not-implemented v2 statement in each language.
  - No browser page errors observed. Desktop EN and mobile PT screenshots were captured under the agent scratch directory and visually inspected.
  - The temporary server and browser were closed after testing; no persistent server was started.

## Known limits / unchanged warnings

`npm ci` / `npm audit --json` report five high-severity findings in the existing ESLint dependency chain (`braces`, `micromatch`, `fast-glob`, `@next/eslint-plugin-next`, `eslint-config-next`). npm also reports a blocked `unrs-resolver` postinstall and deprecated ESLint 9.39.5. No dependency upgrades, audit fixes or install-script approvals were applied; lint and build still passed.

Browser checks are targeted regression checks, not a full accessibility or security audit. The portfolio does not execute the scraper. No commit, push, remote modification or deployment was performed.
