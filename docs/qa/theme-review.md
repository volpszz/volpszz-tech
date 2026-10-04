# Portfolio — theme and content QA

**Target:** static export at `/volpszz-tech/`, prepared for https://volpszz.github.io/volpszz-tech/
**Scope:** all rendered sections, project illustrations, secondary text, navigation, filters, buttons, hover/focus states, desktop and mobile layouts.

## Executive summary

One visual defect class was identified and resolved: legacy colors left behind by the partial purple-theme conversion. No additional functional defects were observed in the tested flows. This is a scoped visual/content review, not a full accessibility or security audit.

| Severity | Identified | Unresolved |
| --- | ---: | ---: |
| Critical | 0 | 0 |
| High | 0 | 0 |
| Medium | 1 | 0 |
| Low | 0 | 0 |
| Total | 1 | 0 |

## Issue 1 — inconsistent legacy colors

- **Severity:** Medium
- **Category:** Visual
- **Status:** Resolved
- **URL:** portfolio root, including the Work section and mobile navigation.
- **Reproduction:** inspect project illustrations, language indicators, secondary labels and the expanded mobile menu.
- **Expected:** coherent dark-purple surfaces and lilac accents throughout the interface.
- **Actual before fix:** green CyberShield components, blue scanner details, orange/yellow language indicators, beige secondary text and a brown-toned mobile menu remained in the stylesheet.
- **Fix:** consolidate all authored color literals in `:root` theme tokens; use those tokens for text, panels, borders, illustrations, shadows and interaction states. Rename `.orange` to `.accent`.
- **Evidence after fix:** [project cards](screenshots/projects-desktop.png), [mobile navigation](screenshots/menu-mobile.png).

## Content updates

The stack now matches the user-supplied profile:

- Languages: Rust, Python, C, JavaScript.
- Web: HTML, CSS, React, Next.js.
- Systems, networking & tools: Linux, Bash, PowerShell, Git, GitHub, Windows.

A Goals navigation entry and a new section introduce:

1. Working toward CompTIA Security+ certification.
2. Authorized cyber labs and CTF practice, with documented lessons.
3. Security-focused projects demonstrating tools, technical decisions and reproducible results.

These are explicitly framed as objectives, not completed certifications or claimed achievements. No deadlines, completed labs or specific tool proficiency were invented.

## Verification performed

- `npm run lint`: passed.
- `GITHUB_PAGES=true npm run build`: passed, producing the static export.
- `git diff --check`: passed.
- Source color audit: no hexadecimal color literals remain outside the `:root` palette in `app/globals.css`.
- Browser palette audit at desktop width inspected 304 DOM elements, their rendered styles and relevant `::before`/`::after` pseudo-elements. Saturated computed RGB colors were checked against a purple hue range (250–310 degrees); neutral black was allowed. No out-of-theme computed colors were found. This hue check is a consistency heuristic, not a substitute for visual review.
- Visually inspected project cards and Goals on desktop and mobile.
- All category filters returned the correct projects: All = three; Systems = Hardware Monitor; Web = CyberShield; Security = TCP Port Scanner.
- Internal anchor target audit: no missing targets.
- Mobile menu opened, showed a purple background/text palette, navigated to `#goals`, and closed.
- No horizontal overflow at viewport widths 320, 390, 768, 1024 and 1440 px.
- Keyboard Tab focused the GitHub link with a visible solid lilac outline.
- Forced CSS hover state produced the expected lilac button background.
- Browser error/unhandled-rejection listeners recorded no errors during the tested filter/menu interactions.

### Sampled text contrast ratios

| Pair | Ratio |
| --- | ---: |
| Body description / page background | 8.09:1 |
| Goal description / goal card background | 7.94:1 |
| Contact text / contact panel background | 10.28:1 |
| Button text / hover background | 10.41:1 |

These are selected solid-background checks, not exhaustive contrast certification for every decorative element or gradient.

## Screenshots

- [Project cards, desktop](screenshots/projects-desktop.png)
- [Goals, desktop](screenshots/goals-desktop.png)
- [Mobile navigation](screenshots/menu-mobile.png)
- [Goals, mobile](screenshots/goals-mobile.png)

## Out of scope

- External GitHub/LinkedIn availability and authentication.
- Verification of achievements beyond the information supplied by the user.
- All browsers/devices, exhaustive accessibility certification and security penetration testing.

No application blocker remained after this review. Screenshots were collected from the local static export; publication is independently verified through GitHub Actions and a live browser check.
