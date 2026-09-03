---
name: Pandu Utomo Portfolio
description: A studio monograph — a developer-and-3D-artist portfolio set on plaster paper in ink and one molten vermilion, printed rather than lit.
descends-from:
  layout: stillpage        # warm editorial x print DNA
  wordmark: gazu           # monochrome fashion x oversized wordmark
  captions: hidden-places  # no scrim; the image is the work
colors:
  paper: "#f2f4f6"
  paper-recessed: "#e5e7ea"
  ink: "#1c1612"
  ink-secondary: "#534b47"
  ink-muted: "#79736f"
  signal: "#e53908"
  signal-ink: "#a62000"
  on-signal: "#130805"
  rule: "#cfd1d3"
  surface: "#e9ebee"
  plate: "#16100c"
  plate-ink: "#ebe6e2"
  dark-paper: "#0f0b09"
  dark-ink: "#eeeae7"
  dark-ink-secondary: "#aeaaa5"
  dark-signal: "#f9582a"
  dark-signal-ink: "#ff8956"
  dark-rule: "#312d2a"
typography:
  display:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "clamp(2.75rem, 11vw, 7rem)"
    fontWeight: 900
    lineHeight: 0.86
    letterSpacing: "-0.035em"
    textTransform: "uppercase"
  headline:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "clamp(2.5rem, 7vw, 5rem)"
    fontWeight: 900
    lineHeight: 0.88
    letterSpacing: "-0.03em"
    textTransform: "uppercase"
  divider:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "clamp(2.75rem, 10vw, 7rem)"
    fontWeight: 900
    lineHeight: 1
    letterSpacing: "-0.03em"
    textTransform: "uppercase"
  title:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "clamp(2rem, 4vw, 3rem)"
    fontWeight: 900
    lineHeight: 0.9
    letterSpacing: "-0.03em"
    textTransform: "uppercase"
  subtitle:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "clamp(1.6rem, 4vw, 2.5rem)"
    fontWeight: 900
    lineHeight: 0.95
    letterSpacing: "-0.02em"
    textTransform: "uppercase"
  lede:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "2rem"
    fontWeight: 400
    lineHeight: 1.18
    letterSpacing: "-0.01em"
  role:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "clamp(1.05rem, 2.4vw, 1.6rem)"
    fontWeight: 500
    lineHeight: 1.2
    textTransform: "uppercase"
  body:
    fontFamily: "Poppins, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
    measure: "65-75ch"
  label-xs:
    fontFamily: "Roboto Mono, monospace"
    fontSize: "0.62rem"
    lineHeight: 1.4
    letterSpacing: "0.16em"
    textTransform: "uppercase"
  label:
    fontFamily: "Roboto Mono, monospace"
    fontSize: "0.68rem"
    lineHeight: 1.4
    letterSpacing: "0.2em"
    textTransform: "uppercase"
  label-md:
    fontFamily: "Roboto Mono, monospace"
    fontSize: "0.75rem"
    lineHeight: 1.4
    letterSpacing: "0.18em"
    textTransform: "uppercase"
rounded:
  hairline: "3px"
  plate: "4px"
  chip: "9999px"
spacing:
  xs: "8px"
  sm: "16px"
  md: "24px"
  lg: "64px"
  section: "112px"
components:
  button-primary:
    backgroundColor: "{colors.signal}"
    textColor: "{colors.on-signal}"
    typography: "{typography.label}"
    rounded: "{rounded.hairline}"
    padding: "14px 28px"
    hover: "inverts to ink field, paper text"
  button-outline:
    backgroundColor: "transparent"
    border: "1px solid {colors.ink}"
    textColor: "{colors.ink}"
    rounded: "{rounded.hairline}"
    hover: "fills ink, text goes paper"
  panel:
    backgroundColor: "{colors.surface}"
    border: "1px solid {colors.rule}"
    rounded: "{rounded.plate}"
    padding: "24px"
---

# Design System: Pandu Utomo Portfolio

> **This document was rewritten on 2026-09-03 because it had stopped describing
> the site.** The previous version specified a dark "control room" theme built on
> a cyan `#00d4ff` → violet `#8b5cf6` gradient, glassmorphic cards and coloured
> glow shadows. The code moved off that direction; this file did not, and it is
> the file an agent reads first. Anything built from the stale spec would have
> reintroduced a purple-to-blue gradient as *doctrine*. If you change the
> direction again, change this file in the same commit.

## 1. Overview

**Creative North Star: "The Studio Monograph"**

This is a printed monograph about a person who builds software and renders
worlds — not a control room, not a SaaS landing page. The page reads as cool
plaster paper with near-black ink laid on it: hairline rules that actually
divide things, oversized grotesque headings set tight and uppercase, mono
micro-labels carrying real data, and exactly one molten vermilion that appears
where something is live, selected, or asking to be clicked.

Depth comes from **overlap, rule weight and generous whitespace**, never from
glow, blur or a stack of translucent cards. The one exception is the render
plate: a single always-dark frame holding the live WebGL scene, which reads as a
lightbox on the page rather than a themed panel.

It descends from three library entries in `e:\web\ai reference`:
- **stillpage** — the print DNA: paper ground, hairline rules, mono corner
  labels, near-square corners, no shadows or gradients.
- **gazu** — the oversized uppercase wordmark used as structure, not decoration.
- **hidden-places** — the caption rule: the image is the work, so nothing is
  laid over it.

**Key characteristics**
- Paper ground, warm ink, one vermilion signal — no second accent anywhere in the UI
- Type contrast by *voice* (grotesque display / humanist body / mono label), not by size alone
- Hairline rules and honest spacing instead of cards, glass or glow
- Masked slide-up reveals on headings; almost nothing else moves
- One primary action per screen

## 2. Colours

A cool plaster paper carrying a warm near-black ink and a single molten
vermilion. The neutrals are deliberately **tinted** — the paper runs cool
(hue 250), the ink runs warm (hue 55) — so nothing on the page is a pure or
untempered grey.

### Signal
- **Vermilion** (`#e53908` light / `#f9582a` dark): the one accent. It marks the
  live dot, the selected ink chip, the primary button field, link underlines,
  the full stop after the name, and the small rule above a section label.
  Nothing else is coloured.
- **Signal Ink** (`#a62000` light / `#ff8956` dark): the darker/lighter sibling
  used *only* where vermilion must carry small text or a link at ≥4.5:1.
  Vermilion itself is for fills, icons and large text.

### Neutrals
- **Paper** `#f2f4f6` — the ground. Cool, chroma ≈ 0, and explicitly not cream.
- **Paper recessed** `#e5e7ea` — image wells and recessed panels.
- **Ink** `#1c1612` — headlines and primary text. Warm near-black, never `#000`.
- **Ink secondary** `#534b47` — body prose and supporting copy.
- **Ink muted** `#79736f` — labels and structural marks only.
- **Rule** `#cfd1d3` — the hairline. `--line-strong` promotes it to full ink
  where a divider needs to carry a section.

### The render plate
- **Plate** `#16100c` / **Plate ink** `#ebe6e2` — the live WebGL frame keeps its
  own warm near-black and bone ink in *both* themes. A viewport into a rendered
  world is a lightbox, not a surface that should follow the page theme.

### Named rules
**The Single Signal Rule.** There is exactly one accent hue. If a second colour
appears in the UI, it is a bug. The four render inks (Vermilion, Bone, Moss,
Stone) exist *inside* the WebGL scene as a named ink tray and never leak out.

**The Tinted Neutral Rule.** No `#000`, no `#fff`, no untinted grey. Paper is
cool, ink is warm, and the difference is what stops the page reading as a
default.

**The Muted-Is-Not-Prose Rule.** `ink-muted` is for labels and rules. Reading
text starts at `ink-secondary`.

## 3. Typography

**Display:** Archivo · **Body:** Poppins · **Label:** Roboto Mono

Three faces on three different axes — grotesque display, humanist body, mono
instrument — so they contrast by voice and never compete. Archivo Black set huge,
uppercase and tight is the spectacle; Poppins keeps prose quiet and readable;
Roboto Mono carries every label, count and annotation.

### Hierarchy
- **Display** (900, `clamp(2.75rem, 11vw, 7rem)`, 0.86, −0.035em): the name in
  the hero, masked slide-up per word, with a vermilion full stop.
- **Headline** (900, `clamp(2.5rem, 7vw, 5rem)`, 0.88, −0.03em): section titles
  via `SectionHeading`, the Marquee band, and the Contact statement — all the
  same role, so all the same step.
- **Divider** (900, `clamp(2.75rem, 10vw, 7rem)`): the scrolling `KineticHeading`
  band. Capped at the display maximum: a *decorative* divider must never be set
  larger than the page's own name, which it was (7.5rem against the hero's 7).
- **Title** (900, `clamp(2rem, 4vw, 3rem)`, 0.9): sticky sub-heads — "Who am I?",
  "My work experience".
- **Subtitle** (900, `clamp(1.6rem, 4vw, 2.5rem)`, 0.95): "Education", project
  names in the modal.
- **Lede** (Archivo, 2rem, 1.18): the one oversized paragraph that opens About.
- **Role** (500, `clamp(1.05rem, 2.4vw, 1.6rem)`): the hero's role line.
- **Body** (400, 1rem, 1.6): Poppins, 65–75ch measure.
- **Label** (Roboto Mono, uppercase, three steps and nothing between):
  `text-label-xs` 0.62rem for captions, fine print and in-frame annotations;
  `text-label-sm` 0.68rem for the default mono label and metadata rows;
  `text-label-md` 0.75rem for nav items, buttons and section kickers.

  This ramp is enforced. Before it existed the codebase carried **ten** one-off
  micro sizes (0.55 / 0.58 / 0.6 / 0.62 / 0.65 / 0.66 / 0.68 / 0.7 / 0.72 /
  0.78rem) across 35 usages. Nobody can tell 0.65rem from 0.66rem; sizes a
  reader cannot distinguish are not a system, they are each component inventing
  its own value. Use the tokens, never a literal `text-[0.6xrem]`.

### Named rules
**The Instrument Label Rule.** Anything that reads as data — labels, counts,
captions, kickers — is Roboto Mono, uppercase, ≥0.18em tracking, with honest
values. Prose is never mono; mono is never prose.

**The Display Ceiling Rule.** The hero clamp tops at 7rem and never tightens past
−0.035em.

## 4. Elevation

**This system is flat by doctrine.** Depth is created by, in order: hairline
rules, generous whitespace, overlap, and a single very soft plate shadow under
images so a render sits *on* the paper rather than being punched into it.

- **`--shadow-plate`** — a 1px contact line plus a wide, low-opacity ink shadow.
  Used only on images.
- **`--shadow-lift`** — the same, slightly deeper. Reserved; use sparingly.

### Named rules
**The No-Glow Rule.** Elevation is never a coloured glow, a neon halo or a
`box-shadow` in the accent hue. That reads as a fake-depth tell. If a surface
needs to separate, give it a rule or give it space.

**The No-Glass Rule.** No `backdrop-filter` as a *surface* treatment. Exactly two
blurs remain, and both are cases where content genuinely passes beneath the
element: the scrolled nav bar, and the project modal's backdrop. Panels are
opaque, bordered and flat. If you add a third, justify it here or don't add it.

## 5. Components

### Buttons (`GradientButton` — name is legacy; there is no gradient)
- **Shape:** 3px radius rectangle. Mono uppercase label at 0.18em.
- **Primary:** solid vermilion field, near-black text, inverting to an ink field
  on hover. Lifts 2px. One per screen.
- **Outline:** transparent with a 1px ink border, inverting to an ink fill.
- **Secondary:** flat surface panel with a hairline border.

### Panels
Flat, opaque `--surface` with a 1px `--line` border and a 4–5px radius. **No
nesting** — a panel inside a panel is a bug. If a container has no border,
background or purpose, delete it.

### Section openers (`SectionHeading`)
A full-width ink rule that draws itself left-to-right, then an oversized
uppercase title with an optional plain-language descriptor set to the right.
No tracked-uppercase eyebrow above every section, and **no per-section numbering
by default** — the `number` prop exists only where an ordered sequence is real.

### Image captions
Captions sit on the paper **below** the image, above a hairline rule: title in
display or semibold, mono tag to the right. Never over the image, and never on a
gradient scrim. The renders are the work; obscuring one to make white type
legible destroys the lighting the render was made for.

### The render plate (signature component)
The live WebGL frame in the 3D section: a bordered always-dark plate with a mono
status bar (`LIVE RENDER · WEBGL`, a vermilion live dot), the canvas itself, and
two flat control clusters — shape and a **named ink tray** (Vermilion, Bone,
Moss, Stone). It is the page's one strong moment, and it earns it by being real
3D rather than a video.

## 6. Motion

Short and flat. Fade-and-rise 12–26px over 600–900ms on `[0.16, 1, 0.3, 1]`;
headings use a masked slide-up from 108–115%. Stagger 30–80ms. Hover and state
changes transition **named properties** over 200–300ms.

- **No bounce, no elastic, no overshoot.** The two springs in the codebase are
  low-amplitude nudges (`y: -2` on a button), not physics toys.
- Every animation respects `prefers-reduced-motion` via `MotionConfig
  reducedMotion="user"` in the layout.
- Never `transition-all` — name the properties, or a layout-thrashing one gets
  caught by accident.

## 7. Do's and Don'ts

### Do
- **Do** keep vermilion as the only accent, and be able to point at the one place
  it earns attention on each screen (The Single Signal Rule).
- **Do** tint every neutral — cool paper, warm ink (The Tinted Neutral Rule).
- **Do** separate with hairline rules and whitespace, not cards or glow.
- **Do** caption images below them, on the paper.
- **Do** set instrumentation in Roboto Mono, uppercase, with honest values.
- **Do** record provenance for every asset in `public/ASSETS.md` when you add one.

### Don't
- **Don't** reintroduce a gradient of any kind — least of all purple-to-blue.
  The previous spec mandated cyan → violet on the primary button; that is the
  single most recognisable AI-generated signature there is.
- **Don't** use `#000` or `#fff`. There are tokens for both ends.
- **Don't** add glassmorphism, `backdrop-blur` surfaces, or coloured glow
  shadows (The No-Glass and No-Glow Rules).
- **Don't** put a scrim, gradient or dark overlay on top of a render to make text
  readable. Move the text off the image.
- **Don't** nest cards, or add a wrapper `div` with no border, background or job.
- **Don't** ship the generic template shape (hero → icon-card trio → contact
  form) or an uppercase tracked eyebrow above every section.
- **Don't** add a second CTA of equal weight to any screen.
- **Don't** swap in Inter or DM Sans. The stack is Archivo / Poppins / Roboto
  Mono, and it is named on purpose.

## 8. Accessibility

Target **WCAG 2.1 AA** in both themes: body text ≥4.5:1, large text ≥3:1.
`--foreground-secondary` and `--foreground-muted` are the tokens most likely to
fail — check them against their real background, not against paper. Vermilion
`#e53908` does not clear 4.5:1 for small text on paper; that is what
`--signal-ink` is for. Every animation has a reduced-motion path.

## 9. Before shipping

Run the knowledge-base pre-flight from the project root:

```bash
node "e:/web/ai reference/scripts/verify.mjs" src
node "e:/web/ai reference/scripts/verify.mjs" --contrast http://localhost:3000
npx impeccable detect src
```

A clean pass means "no mechanical tells", not "good". It cannot see nested
cards, cannot read text rendered inside a render, and cannot tell you whether
this still looks like a specific design. Those stay human.
