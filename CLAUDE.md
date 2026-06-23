# CLAUDE.md — robbradleyweb.com Portfolio Site

## Project overview

Personal portfolio site for Rob Bradley, Web Designer & Developer based in Manchester.
Single page, static HTML/CSS/JS. No frameworks, no build tools, no dependencies.
Purpose: employment applications, primarily targeting design-led web agencies.

---

## File structure

```
robbradleyweb.com/
├── index.html
├── assets/
│   ├── css/
│   │   └── styles.css
│   ├── js/
│   │   └── scripts.js
│   └── images/
│       ├── rob-bradley.jpg
│       └── projects/
│           ├── brighter-homes.jpg
│           ├── brighter-homes-tablet.jpg
│           ├── brighter-homes-mobile.jpg
│           ├── ecumaster-ireland.jpg
│           ├── ecumaster-ireland-tablet.jpg
│           ├── ecumaster-ireland-mobile.jpg
│           ├── mts-customz.jpg
│           ├── mts-customz-tablet.jpg
│           ├── mts-customz-mobile.jpg
│           ├── charlie-allan.jpg
│           ├── charlie-allan-tablet.jpg
│           ├── charlie-allan-mobile.jpg
│           ├── en-scaffolding.jpg
│           ├── en-scaffolding-tablet.jpg
│           └── en-scaffolding-mobile.jpg
```

---

## Tech conventions

- Desktop-first CSS with responsive breakpoints at 960px and 600px
- CSS custom properties throughout — all colours, spacing, type sizes defined in `:root`
- Light/dark mode via `data-theme` attribute on `<html>` — toggled by JS, session-based only
- Google Fonts loaded in `<head>`: Fraunces (display) + DM Sans (body)
- Vanilla JS only — no libraries, no frameworks
- UK English throughout
- Single external stylesheet and script file
- No CSS animations have been added yet — Rob will add these himself using his own animation library

---

## Design system

### Colours

All defined as CSS custom properties in `:root` with dark mode overrides in `[data-theme="dark"]`.

| Token | Light | Dark |
|---|---|---|
| `--colour-bg` | `#F8F7F4` | `#111110` |
| `--colour-surface` | `#FFFFFF` | `#1C1C1A` |
| `--colour-text` | `#1A1917` | `#F0EDE8` |
| `--colour-text-muted` | `#6B6860` | `#8A8780` |
| `--colour-accent` | `#F95C00` | `#F95C00` |
| `--colour-accent-hover` | `#D94E00` | `#D94E00` |
| `--colour-border` | `#E5E2DC` | `#2A2A28` |

### Typography

- **Display/headings:** Fraunces — serif, used at large optical sizes
- **Body/UI:** DM Sans — clean sans-serif
- Signature element: the `<em>` tag in the `<h1>` renders in Fraunces italic, `font-weight: 300`, in `--colour-accent`. Do not change this.

### Spacing

Spacing scale defined as `--space-1` through `--space-24` in rem units. Always use these tokens, never hardcoded values.

---

## Page structure

Single page with four sections in this order:

1. **Header** — sticky, contains logo (`RB`), nav links (Work, Contact), theme toggle button
2. **Hero** — two-column grid (text left, circular photo right), intro copy and CTA
3. **Projects** — five project articles, alternating layout (mockup left/right)
4. **Contact** — email link only, no form
5. **Footer** — copyright year (auto-updated via JS) and social links

---

## Projects

Listed in display order. Each project has:
- A `.project__mockup` div with a `--project-colour` CSS custom property (brand-matched background colour)
- Three device screenshots: desktop, tablet, mobile (all placeholder images until Rob adds real screenshots)
- A `.project__info` div with title, type label, summary, tech stack tags, and a `<details>` accordion

| Project | ID | Accent colour | Live URL |
|---|---|---|---|
| Brighter Homes Ltd | `project-brighter-homes` | `#2C5F3F` | https://brighterhomesltd.com/ |
| ECUMaster Ireland | `project-ecumaster` | `#1A1A2E` | https://ecumaster.ie/ |
| MTS Customz | `project-mts-customz` | `#111111` | https://www.mtscustomz.co.uk/ |
| Charlie Allan Photography | `project-charlie-allan` | `#2B2B2B` | `#` (placeholder — demo URL TBC) |
| EN Scaffolding | `project-en-scaffolding` | `#1C3557` | https://enscaffolding.co.uk/ |

Note: the `--project-colour` values are approximate. Rob will refine these once real screenshots are in place.

---

## Accordion behaviour

The `.project__accordion` uses a native `<details>`/`<summary>` element.
JS intercepts the default toggle to animate open/close using `max-height` transition.
The `<summary>` contains two controls:
- A `<span class="btn btn--secondary accordion-trigger">` — triggers the accordion
- An `<a class="btn btn--primary">` Visit site link — uses `onclick="event.stopPropagation()"` to prevent accordion toggle

Do not change this pattern without testing both controls carefully.

---

## What still needs doing

When Rob hands this to you, the HTML, CSS and JS skeleton is complete. The following tasks remain:

### High priority
- [ ] Add real screenshot images for all five projects (desktop, tablet, mobile) once Rob supplies them
- [ ] Update Charlie Allan Photography "Visit site" href once demo is hosted
- [ ] Update footer LinkedIn and GitHub URLs with correct profile links
- [ ] Confirm and update contact email address once domain email is set up
- [ ] Review and adjust `--project-colour` values per project once real screenshots are in

### Design / polish
- [ ] Review device mockup sizing and positioning on real screens — tweak `.project__device` percentages if needed
- [ ] Check Fraunces rendering at all heading sizes — adjust `font-size` tokens if needed
- [ ] Check dark mode across all sections and components
- [ ] Accessibility audit — check colour contrast ratios in both modes, keyboard navigation, focus states

### Rob will handle himself
- [ ] CSS animations/transitions using his own animation library (scroll-triggered reveals, hover states etc.)
- [ ] Domain email setup

---

## Tone and copy

Do not rewrite any copy without being asked. All project write-ups and intro text have been carefully drafted.
If copy changes are needed, match the existing voice: direct, confident, no filler, no corporate language.
UK English at all times — "colour" not "color" in copy, though CSS property names remain as-is.

---

## What not to do

- Do not add any JavaScript libraries or external dependencies
- Do not add CSS animations — Rob will handle these
- Do not change the HTML structure of the accordion
- Do not use inline styles except for the `--project-colour` custom property on `.project__mockup`
- Do not add a contact form — the contact section uses an email link only
- Do not change the font pairing
