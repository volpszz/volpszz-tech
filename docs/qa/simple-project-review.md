# Simplified project cards — QA

## Change

Removed the repeated project index from the introduction and the diagram panels from home project cards. Each project now appears once on the home page with a name, short summary, technology tags, a GitHub link and one “Saiba mais” / “Learn more” link below. Complete descriptions and diagrams remain on their individual project pages. Uniform cards use three desktop columns, two tablet columns and one mobile column.

## Verification

- ESLint, production static export/TypeScript and `git diff --check` passed.
- 26 persisted browser checks in `simple-project-checks.json`: unique cards and translated labels in both languages, all filters, five widths per language, and all three detail links per language.
- No horizontal page overflow at 320, 390, 768, 1024 or 1440 px.
- All detail links opened the corresponding page with six technical sections and preserved language.
- Mobile menu closed after navigating to Projects; no runtime errors captured during the final mobile filter/menu batch.
- Desktop and mobile screenshots reviewed: `screenshots/simple-projects-desktop.png` and `screenshots/simple-projects-mobile.png`.

## Scope and limitations

Chromium QA of the simplified home and navigation to existing project details. Not a full cross-browser/accessibility audit. Previous bilingual QA remains historical evidence for the earlier layout. A stale preview returned an empty response; verification used a fresh static server on port 3103. No project backend or scanner runtime was executed.
