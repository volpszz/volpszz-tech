# Minimal black/purple design review

## Direction

An editorial portfolio (Decide/Learn), with project browsing as its secondary Explore surface. The existing content and functionality are retained; the neutral page structure lets selected purple accents carry emphasis.

### Design self-audit

The previous composition scored 3/10 on the design skill's subjective clutter/slop checklist: an ambient illustrated hero gradient, decorative equal-weight goal tiles and an unnecessary blurred header. Purple itself was intentional branding, not a defect.

The revised composition scores 0/10 on those checklist signals: left-aligned presentation, neutral surfaces, restrained typography, no hero ornament/blur and goals as simple editorial rows. The project grid remains because it serves real project browsing, not generic promotional filler. These scores are design judgments, not objective quality measurements.

## Changes

- Black base (`#080808`) and charcoal panels, with neutral white/gray text and borders.
- Purple retained for the hero's emphasis, section labels, career interests, certification heading, calls to action and focus/selection states.
- Removed the large monogram/orbit illustration, floating labels, focus strip and redundant hero caption.
- Simplified the logo, headings, project metadata and stack; removed decorative numbering and boxed technology tags.
- Flattened the project previews: neutral backgrounds, no tilted frames, no shadow stacks or zoom animation.
- Replaced goal tiles/checklists with aligned title/description rows.
- Simplified the contact section and removed repeated About fact panels. Career direction remains explicit in the About copy and highlighted interests.
- Preserved all projects, technology groups, four cybersecurity career interests, certification examples/disclaimer, labs/CTFs and demonstrable security-project goals.

## Visual issue found and fixed

| Severity | Category | Status | Issue |
| --- | --- | --- | --- |
| Low | Visual | Resolved | Text beneath the initially translucent header was faintly visible after scrolling on mobile. |

Reproduction: navigate to Goals on mobile with a translucent, unblurred sticky header. Expected: a clean header without underlying page text. Fix: use the opaque black header token. The final browser check confirmed `rgb(8, 8, 8)` for the header and page background. There were no unresolved issues in the tested flows.

## Verification

- `npm run lint`: passed.
- `GITHUB_PAGES=true npm run build`: passed.
- `git diff --check`: passed.
- No authored hexadecimal color literals outside the root token palette.
- Core content preservation checked in source and the rendered page.
- All four project filters returned their expected projects.
- No missing internal anchor targets.
- No horizontal overflow at 320, 390, 768, 1024 and 1440 px.
- Mobile menu opened, navigated to Goals and closed.
- Menu button measured 44 px tall; category filters measured 49.5 px tall on mobile.
- No error/unhandled-rejection events during tested interactions.
- Keyboard Tab produced a visible purple outline on the GitHub link.
- Desktop and mobile presentation inspected using the actual static export.

### Sampled contrast

| Pair | Ratio |
| --- | ---: |
| Body text / page background | 8.03:1 |
| Career interests / About background | 7.77:1 |
| Primary action text / purple button | 7.92:1 |
| Goal text / page background | 8.03:1 |

These are selected checks, not comprehensive accessibility certification.

## Screenshots

- [Desktop presentation](screenshots/minimal-desktop.png)
- [Mobile presentation](screenshots/minimal-mobile.png)
- [Goals on desktop](screenshots/minimal-goals-desktop.png)
- [Goals on mobile](screenshots/minimal-goals-mobile.png)

Screenshots were collected from the local static export. Publication is separately verified through GitHub Actions and a live browser check. Earlier reports/screenshots document previous visual revisions rather than the current palette.
