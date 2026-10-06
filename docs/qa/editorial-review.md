# Editorial styling and About-first navigation

## Changes

- About precedes Projects in the page and in both translated navigation menus.
- Scroll-based active navigation follows the new DOM order.
- The certification goal heading uses the same off-white as all other goal headings.
- Neutral charcoal surfaces replace blue-tinted surfaces; hero and primary buttons are neutral.
- Sans-serif labels, natural capitalization, softer tracking, rounded cards/buttons and pill-shaped technology tags reduce the terminal/dashboard appearance.
- Section numbering is no longer displayed. Existing simple project cards, detail pages and language switching remain intact.

## Verification

ESLint, TypeScript/static production build and `git diff --check` passed. `editorial-checks.json` contains 32 passing browser checks: section/menu ordering and goal computed colors in PT/EN, home at five widths per language, each active section in both languages, filters and project navigation in both languages, and all three detail pages at 320/1440 px. No horizontal overflow was observed in these checks.

Screenshots reviewed: `screenshots/editorial-goals-desktop.png` and `screenshots/editorial-about-mobile.png`. Chromium only; not a comprehensive accessibility or cross-browser audit. Public deployment is verified separately after the Pages workflow.
