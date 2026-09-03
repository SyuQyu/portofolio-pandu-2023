# Product

## Register

brand

## Users

Two roughly equal audiences, both arriving cold and deciding fast:

- **Recruiters & hiring managers** scanning for a full-stack hire. They want a quick, credible read — "this person can build real things" — and an obvious path to a CV/contact. Often on the move, sometimes on mobile, low patience for fluff.
- **Prospective freelance clients** evaluating Pandu for a project. They want proof of impact and craft (especially the rare code × 3D combination) and an easy way to start a conversation.

The job to be done for both: in under a minute, believe Pandu is unusually capable, remember the site, and know how to reach out. The site itself is the strongest evidence — a portfolio where the medium *is* the proof.

## Product Purpose

A personal portfolio for **Pandu Utomo — Full-Stack Developer & 3D Artist**. It exists to convert a cold visitor into a recruiter callback or a client inquiry by demonstrating, not asserting, a rare blend of engineering rigor and 3D/visual craft. Success looks like: visitors who reach Contact, who describe the site as "how was this made?" rather than "another dev portfolio," and inbound messages that reference specific projects or the experience itself.

## Brand Personality

**Composed · printed · technically precise.** A creative technologist who builds immersive things and sweats the details. The voice is confident and spare — mono micro-labels, honest counts, plain claims — laid on paper around work that speaks for itself. It should feel like opening a studio monograph, not reading a résumé: the renders get room, the type holds still, and the one live WebGL frame earns its place by being real. Emotional goal: a held breath, then trust. Never gimmicky; the spectacle has to be backed by substance.

> Superseded 2026-09-03: this used to read "bold · cinematic" and describe a *control room* built around a glowing core. The site is now a studio monograph on plaster paper — see `DESIGN.md`, which is authoritative for anything visual.

## Anti-references

- **AI-generated slop.** The dead giveaways: an uppercase tracked eyebrow above every section, numbered section markers (01/02/03) by reflex, identical icon-heading-text card grids, gradient text everywhere, glassmorphic cards, and a purple-to-blue gradient on anything. `.text-gradient` is now a flat signal colour and there is no gradient anywhere in the build — keep it that way.
- **Generic template portfolio.** The interchangeable "hero → about → card grid of projects → contact form" that every dev ships. Differentiation has to come from art direction, motion choreography, and the 3D world — not from the section list.
- Also avoid: corporate-SaaS landing tropes (feature grids, pricing-table energy) and noise-for-noise's-sake effect overload that buries readability.

## Design Principles

1. **The medium is the proof.** Every interaction should quietly demonstrate the skill being claimed. A 3D artist's site earns the right to a 3D world; don't describe craft you could just show.
2. **Spectacle must be earned, never decorative.** Big moments are fine — required, even — but each one pays for itself in attention or information. If an effect doesn't make the visitor feel or understand more, cut it.
3. **Precision under the spectacle.** Editorial scale on top of tight typography, honest numbers, and engineering legibility. The monograph feeling comes from rigor and whitespace, not chrome.
4. **One dominant idea per fold.** Long scroll, deliberate pacing, single-purpose viewports. Resist cramming; let moments breathe and land.
5. **Fast to the point for the impatient.** Both audiences decide in under a minute — the path to "who, why credible, how to reach" stays short even inside the immersive experience.

## Accessibility & Inclusion

Target **WCAG 2.1 AA**: body text ≥4.5:1, large text ≥3:1, verified across both the light Studio theme (default) and the dark Cinema theme — the muted foreground tokens (`--foreground-muted`, `--foreground-secondary`) are the most likely contrast offenders and need checking against their real backgrounds.

**Motion-safe is non-negotiable** given the heavy 3D, Lenis smooth scroll, typed text, and orchestrated reveals. Every animation needs a `prefers-reduced-motion: reduce` path (crossfade or instant), the 3D scene and marquee must degrade gracefully, and content must never be gated behind a reveal that fails to fire. Honor reduced-motion for the intro loader and scroll-driven sequences specifically.
