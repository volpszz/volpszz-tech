# Bilingual portfolio redesign — QA

## Scope and result

Reviewed the static GitHub Pages export locally: home and all three individual project studies. The persisted browser report contains 72 passing assertions. No unresolved functional issue was observed within this scope; this is not a comprehensive accessibility audit or cross-browser certification.

## Verified behavior

- Portuguese and English home content, document language and saved preference.
- All category filters in both languages.
- Active navigation for Projects, About, Toolkit, Goals and Contact.
- Six translated technical sections on each project page, working section anchors and project-specific content.
- Direct reload of every exported project URL and language persistence.
- Return from every project to the home project section.
- No horizontal page overflow for four pages in both languages at 320, 390, 768, 1024 and 1440 px (40 responsive assertions).
- Mobile menu opening and Escape dismissal with focus restored to its trigger, in both languages.
- Language buttons with 44 × 44 px targets at 320 px.
- Language switching when localStorage writes fail, using an in-memory fallback.
- No captured runtime errors during the home filter/navigation interaction batch.
- ESLint, TypeScript/static production build and `git diff --check` passed.

## Content and visual review

The redesign replaces purple with muted blue accents on charcoal surfaces, strengthens section headings and active navigation, and gives projects a dedicated visual hierarchy. The opening headline is “Software, sistemas e cibersegurança.” / “Software, systems and cybersecurity.”

Technical project descriptions use repository README/source evidence recorded in `project-sources.json`. Architecture illustrations are explicitly conceptual rather than live measurements or fabricated product screenshots. CyberShield remains described as an educational application, the scanner as an authorized-use learning project, and certifications as goals rather than earned credentials. Scanner limitations include the timeout ordering and socket/error-handling improvements visible in its implementation.

## Evidence

- `bilingual-checks.json`: persisted browser assertions and programmatically verified count.
- `project-sources.json`: repository commits and source file identifiers.
- `screenshots/bilingual-projects-desktop.png`
- `screenshots/bilingual-hardware-case-desktop.png`
- `screenshots/bilingual-home-mobile.png`
- `screenshots/bilingual-cybershield-case-mobile.png`

## Testing limitations

Tests used the available Chromium browser. Screenshot session recovery was needed after a browser harness permission error; successful captures and assertions were preserved separately. No backend or project runtime was exercised: this site links to the repositories and presents their technical studies. Public deployment is verified separately after the Pages workflow.
