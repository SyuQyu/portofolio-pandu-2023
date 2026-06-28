---
name: Pandu Utomo Portfolio
description: A dark, cinematic developer-and-3D-artist portfolio built like a control room around a glowing core.
colors:
  core-glow: "#00d4ff"
  core-glow-light: "#6366f1"
  signal-violet: "#8b5cf6"
  signal-violet-light: "#a855f7"
  signal-magenta: "#ec4899"
  signal-green: "#10b981"
  star-gold: "#fbbf24"
  void: "#0a0a12"
  void-raised: "#12121c"
  ink: "#f4f4f6"
  ink-secondary: "#9aa0b0"
  ink-muted: "#5c6070"
  day: "#f4f4f8"
  day-raised: "#ebebf2"
  day-ink: "#14141f"
  day-ink-secondary: "#4a5061"
typography:
  display:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "clamp(3rem, 13vw, 8rem)"
    fontWeight: 900
    lineHeight: 0.95
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "clamp(2.5rem, 6vw, 4.5rem)"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "-0.025em"
  body:
    fontFamily: "Poppins, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  label:
    fontFamily: "Roboto Mono, monospace"
    fontSize: "0.75rem"
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: "0.2em"
rounded:
  pill: "9999px"
  card: "16px"
  scroll: "24px"
spacing:
  xs: "8px"
  sm: "16px"
  md: "24px"
  lg: "64px"
  section: "128px"
components:
  button-primary:
    backgroundColor: "{colors.core-glow}"
    textColor: "#ffffff"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "12px 32px"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "12px 32px"
  button-outline-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.void}"
  glass-card:
    backgroundColor: "{colors.void-raised}"
    textColor: "{colors.ink}"
    rounded: "{rounded.card}"
    padding: "24px"
---

# Design System: Pandu Utomo Portfolio

## 1. Overview

**Creative North Star: "The Control Room"**

This is a developer-and-3D-artist portfolio that behaves like the cockpit of a rendered world. A single glowing energy core floats behind the type; everything around it — HUD micro-labels, a live mouse-coordinate readout, mono annotations, honest counters ("3+ Years / 20+ Projects") — is the instrumentation that frames it. The feeling is *stepping into a control room*, not reading a résumé: precision hardware around spectacle, where the spectacle is earned by real WebGL on the page. Calm at rest, alive on interaction.

The system is committed to a dark default (the "void"), because the brand's warmth is carried by the accent glow and the 3D imagery, never by a tinted-paper background. Depth comes from a fixed full-page 3D scene the page scrolls *through*, plus restrained glass panels — not from drop shadows. It explicitly rejects the generic-template-portfolio look (hero → card grid → contact form) and the AI-slop tells: gradient text everywhere, eyebrow kickers on every section, identical icon-heading cards. Differentiation lives in the motion choreography and the 3D world, not the section list.

**Key Characteristics:**
- Dark, cinematic surface with a single luminous accent that reads as a live signal
- HUD/instrumentation voice: mono labels, coordinate readouts, honest numbers
- Depth via a navigable 3D scene + sparse glass, not shadows
- Masked slide-up reveals and a one-time cinematic intro, all motion-safe
- Display type set huge, black, and uppercase against quiet mono support

## 2. Colors

A near-black void carrying one signature luminous cyan, with a tight family of secondary signals reserved for the 3D scene and rare emphasis. Light theme ("Studio Day") mirrors the roles with an indigo-led accent.

### Primary
- **Core Glow** (#00d4ff dark / #6366f1 light): The signature accent — it emanates from the 3D energy core and reappears as button fills, the active scroll dot, link underlines, and section rule-lines. The single hue a visitor should associate with the brand.

### Secondary
- **Signal Violet** (#8b5cf6 dark / #a855f7 light): The companion accent — paired with Core Glow in button gradients, glow shadows, and orbiting 3D forms. Never used for body text.
- **Signal Magenta** (#ec4899): Tertiary energy accent, used almost exclusively inside the 3D scene and the rare gradient rule-line.

### Tertiary
- **Signal Green** (#10b981) and **Star Gold** (#fbbf24): Scene-only accents for floating sculptures and starlight. Not part of the UI palette.

### Neutral
- **Void** (#0a0a12): The default page background and the 3D scene's fog/clear color.
- **Void Raised** (#12121c): Secondary surface — scrolled nav bar, raised panels.
- **Ink** (#f4f4f6): Primary text and headlines on dark.
- **Ink Secondary** (#9aa0b0): Supporting text, HUD labels, nav items — the lowest token allowed for real text on the void (~7:1).
- **Ink Muted** (#5c6070): Decorative/structural only — dividers, the "©" mark, idle iconography. **Never** body or label text on its own.
- **Studio Day** neutrals (#f4f4f8 / #ebebf2 / #14141f / #4a5061): the light-theme mirror of the above.

### Named Rules
**The Single Signal Rule.** Core Glow is the one accent a visitor should remember. The other signals belong to the 3D scene; promoting them into the UI dilutes the instrument.

**The Muted-Is-Not-Text Rule.** `ink-muted` (#5c6070) clears ~3:1 at best. It is forbidden for any text the user must read — labels included. Reading text starts at `ink-secondary`.

## 3. Typography

**Display Font:** Archivo (with system-ui, sans-serif)
**Body Font:** Poppins (with system-ui, sans-serif)
**Label/Mono Font:** Roboto Mono (monospace)

**Character:** A high-contrast trio. Archivo Black set huge and uppercase is the spectacle; Poppins keeps prose quietly humanist and readable; Roboto Mono is the instrumentation voice — every label, coordinate, counter, and HUD annotation. The pairing works because the three sit on different axes (grotesque display / humanist body / mono label), never competing.

### Hierarchy
- **Display** (900, `clamp(3rem, 13vw, 8rem)`, 0.95): Hero headline only — black, uppercase, tight tracking, masked slide-up reveal.
- **Headline** (800, `clamp(2.5rem, 6vw, 4.5rem)`, 1): Section titles via `SectionHeading` — uppercase, leading-none, masked reveal.
- **Title** (700, 1.25rem, 1.3): Card and sub-section headings.
- **Body** (400, 1rem, 1.6): Poppins prose; cap measure at 65–75ch.
- **Label** (400, 0.75rem, 0.2em tracking, UPPERCASE): Roboto Mono — HUD micro-labels, nav items, button text, the coordinate readout.

### Named Rules
**The Instrument Label Rule.** Anything that reads as data — labels, counters, coordinates, kickers — is Roboto Mono, uppercase, ≥0.2em tracking. Prose is never mono; mono is never prose.

**The Display Ceiling Rule.** The hero clamp tops at ~8rem and never tightens past −0.025em. Bigger or tighter and it stops designing and starts shouting.

## 4. Elevation

This system is **shadow-light by doctrine**. Depth is created three ways, in order of importance: (1) the fixed full-page 3D scene that the whole page scrolls *through*, giving real parallax; (2) translucent glass panels (`backdrop-filter: blur`) that let the scene bleed behind UI; (3) colored *glow*, not gray shadow, as the only "lift." There are no neutral drop shadows anywhere — a gray shadow would read as a 2014 app against this void.

### Shadow Vocabulary
- **Core Glow Lift** (`box-shadow: 0 0 20px var(--glow-color)`): Resting glow on primary buttons and active glass; the accent's own color at low alpha.
- **Core Glow Hover** (`box-shadow: 0 0 35px var(--glow-color)`): Intensified on hover — the surface responds by glowing brighter, not by casting darker.

### Named Rules
**The Glow-Not-Shadow Rule.** Elevation is expressed as the accent color blooming outward, never as a neutral-gray drop shadow. If it looks gray, it's wrong.

## 5. Components

### Buttons
- **Shape:** Full pill (`9999px`), mono uppercase label at 0.15em tracking, 12px × 32px padding.
- **Primary:** Core Glow → Signal Violet gradient fill, white text, resting Core Glow Lift that intensifies on hover; scales to 1.04 on hover, 0.96 on tap.
- **Outline:** Transparent with a 1px `ink` border; inverts on hover (fills `ink`, text goes `void`).
- **Secondary:** Glass surface (`--surface`) with a `--glass-border`, brightening on hover.

### Cards / Containers (`GlassCard`)
- **Corner Style:** 16px radius (`card`).
- **Background:** `--glass-bg` (translucent) with `backdrop-filter: blur(12–20px)`, so the 3D scene shows through.
- **Border:** 1px `--glass-border`; on hover, border shifts toward Core Glow at 40% and gains Core Glow Lift.
- **Behavior:** Mouse-driven 3D tilt (±8°) and a blur-in entrance (`blur(6px) → 0`). Use glass sparingly — it is a feature, not a default surface.
- **Internal Padding:** 24px.

### Navigation
- **Style:** Fixed top bar, transparent at rest, transitioning to glass (`--glass-bg` + blur) once scrolled past 50px.
- **Typography:** Mono uppercase nav items at 0.2em tracking, each prefixed with its index (`01 … 05`) and an animated underline on hover. A live `X:0000 Y:0000` coordinate readout sits beside the `PU©` wordmark on large screens.
- **States:** `ink-secondary` → `ink` on hover; mobile collapses to a full-screen glass overlay with staggered links.

### Inputs / Fields
- **Style:** Glass surface, 1px `--glass-border`, pill or `card` radius depending on context.
- **Focus:** Border shifts to Core Glow with a soft glow; never a default browser outline alone.

### Signature Component: HUD Instrumentation
The micro-labels (top/bottom of hero), the coordinate readout, the scroll indicator, and the section rule-lines together form the "control room" layer. They are mono, uppercase, low-key in color (`ink-secondary` + a text-shadow scrim over the busy scene), and carry *honest* data — location, years, project counts, live coordinates — never decorative lorem.

## 6. Do's and Don'ts

### Do:
- **Do** keep Core Glow as the single memorable accent; let the other signals live in the 3D scene (The Single Signal Rule).
- **Do** express elevation as colored glow blooming outward (`0 0 20px var(--glow-color)`), never a gray drop shadow (The Glow-Not-Shadow Rule).
- **Do** set instrumentation — labels, counters, coordinates — in Roboto Mono, uppercase, ≥0.2em tracking, with *honest* values.
- **Do** start any real text at `ink-secondary` (#9aa0b0) or brighter; add a text-shadow scrim when text sits over the animated scene.
- **Do** give every animation a `prefers-reduced-motion` path — static scene, instant reveals, no looping indicators (it's a stated non-negotiable).

### Don't:
- **Don't** ship AI-slop tells: gradient text as decoration, an uppercase tracked eyebrow above every section, numbered markers on every section, or identical icon-heading-text card grids. Keep `.text-gradient` rare and meaningful.
- **Don't** build the generic-template-portfolio shape (hero → card grid of projects → contact form) and call it done; differentiation comes from motion and the 3D world.
- **Don't** use `ink-muted` (#5c6070) for any text the user must read (The Muted-Is-Not-Text Rule).
- **Don't** introduce a tinted cream/paper background to feel "warm." Warmth here is the accent glow and the 3D imagery; the body stays the void.
- **Don't** reach for glassmorphism as a default surface or stack nested cards. Glass is a rare, purposeful panel.
- **Don't** push the hero display past ~8rem or tighter than −0.025em (The Display Ceiling Rule).
