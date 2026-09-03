# Asset provenance

Every asset served from `public/` is recorded here: where it came from, what
made it, and whether embedded Content Credentials (C2PA) survive in the file.

This exists because a page can pass every layout rule while the giveaway sits
inside the image — rendered text, a generator watermark, repeating tiles, an
unattributed licensed asset. Provenance is decided, not discovered.

**When you add an asset, add a row here in the same commit.**
`node "e:/web/ai reference/scripts/verify.mjs" src` fails a build whose declared
assets have no provenance.

Origin vocabulary: `authored` (made by the site owner) · `shot` (photographed)
· `licensed` (third party, under licence) · `generated` (model output).

---

## `image/3D/` — 24 renders · ~161 MB

| Field | Value |
| --- | --- |
| Origin | `authored` |
| Tool | Blender (3D modelling, lighting and render) |
| Author | Pandu Utomo |
| C2PA | **None embedded.** Blender does not write Content Credentials; these files carry no manifest. Recorded as absent, not stripped. |
| Generated content | **No.** Inspected at full size — geometry, raytraced reflections and light direction are internally consistent; no generator watermark, no AI-rendered lettering, no repeating-tile artifacts. Text that appears in-frame (e.g. the torii plaque in `kunoichi.png`) is a modelled texture, part of the scene. |

These renders **are the portfolio** — the thing the visitor came to look at.
Consequences that follow from that, and are now enforced in the code:

- **Nothing is laid over them.** Captions sit on the paper below each plate.
  The previous build put `linear-gradient(to top, black 75%, transparent)` over
  the bottom of every one, which crushed the lower third of bright marble and
  landscape renders into mud to make white type legible.
- **Nothing is cropped to fit a cell.** 13 of the 24 files are 9:16 portrait
  (2160×3840 or 1080×1920) and 11 are 16:9 or wider. The old fixed `4/3` grid
  cell with `object-cover` displayed roughly 42% of each portrait render. The
  gallery is now column masonry and every plate keeps its native aspect;
  `width`/`height` are carried per item in `src/contants/portofolio.ts`.

### Known issue — file weight

`s15.png` is 40.4 MB; `thorneroom.png` 12.4 MB; `livingroom.png` 10.9 MB;
`door.png` 10.2 MB; `cube.png` 10.0 MB; `done.png` 9.9 MB.

Served bytes are fine — every one goes through `next/image`, which re-encodes
to WebP/AVIF at the requested width. The cost is repository size, cold build
time and `git clone`. Re-exporting the masters to high-quality WebP would cut
~161 MB to roughly 15–20 MB with no visible change. **Not done here:** it
rewrites the artist's master files, which is the owner's call.

## `image/coding/` — 3 files

| Field | Value |
| --- | --- |
| Origin | `authored` — screenshots of shipped work (Peluang.co, Ankersal, Iroiro) |
| Tool | Screen capture |
| C2PA | None embedded |

> **Note:** `compro.png` is currently reused as the image for ~35 entries in
> `codingPortfolio`. That array is **not rendered anywhere** — `Projects.tsx`
> reads `src/contants/projectCuration.ts` instead. Either give each entry a real
> screenshot before using it, or delete the array.

## `image/company/` — 8 employer logos

| Field | Value |
| --- | --- |
| Origin | `licensed` — third-party brand marks (CrescentRating, Maxy, Peluang.co, Barras, Brilyan, KSM, MD, ITID) |
| Basis | Nominative use: identifying real employers in an employment history. Not endorsements. |
| C2PA | None embedded |

`itid.jpg` (PT Implementasi Teknologi Indonesia) was added 2026-09-03. The
company's LinkedIn page needs a login, so the mark came from The Grid's
company directory (`sgpgrid.com`), which carries the same 200×200 LinkedIn
tile the other logos here use; it matches the mark on the company's own
Facebook page and the avatar on their LinkedIn profile. Re-encoded PNG → JPEG
q92, no crop. **Not** taken from `itindonesia.id` — that domain now serves a
product login (SIPASTI) whose illustrated logo is a different mark entirely.

## `image/skill/` — 24 technology logos

| Field | Value |
| --- | --- |
| Origin | `licensed` — third-party project/product marks (React, Next.js, Blender, Figma, Adobe, …) |
| Basis | Nominative use in a skills list. Several are Devicon/Icons8 assets (`icons8-express-js.svg`, `file-type-light-prisma.svg`); Adobe marks remain Adobe trademarks. |
| C2PA | None embedded |

---

## Removed

**`public/scene/` — deleted 2026-09-03.** Held `smol/` (Sketchfab model,
7 MB of GLB/GLTF) plus three `person*.glb` files. Only ever loaded by
`src/components/Canvas/computers.tsx` and `person.tsx`, both of which were dead
code and are also removed.

It mattered beyond housekeeping: `smol/` is **"Smol Ame in an Upcycled
Terrarium [HololiveEn]" by Seafoam**, Sketchfab, licensed **CC-BY-4.0**, which
*requires attribution*. It was being served publicly with no credit rendered
anywhere on the site. Deleting the orphaned asset ends the obligation. **If you
ever restore it, the credit line from `license.txt` must appear on the page:**

> This work is based on "Smol Ame in an Upcycled Terrarium [HololiveEn]"
> (https://sketchfab.com/3d-models/smol-ame-in-an-upcycled-terrarium-hololiveen-490cecc249d242188fda5ad3160a4b24)
> by Seafoam (https://sketchfab.com/seafoam) licensed under CC-BY-4.0.

Recover with `git checkout HEAD -- public/scene`.

**`public/next.svg`, `public/vercel.svg` — deleted 2026-09-03.**
`create-next-app` leftovers, referenced nowhere.

---

## Missing

**`public/resume.pdf` does not exist.** `Navigation.tsx` opens it from the
desktop **Resume** button and the mobile **Download Resume** button — both
currently open a blank 404 tab. For a site whose stated primary audience is
recruiters, this is the highest-intent action on the page. Add the file, or
point both buttons somewhere real.

## `image/work/` — 5 screen captures

| Field | Value |
| --- | --- |
| Origin | `shot` — screen captures of live, shipped sites |
| Tool | Headless Chromium driven by Playwright, 1600×1000 CSS viewport at DPR 2 (3200×2000 px, 16:10); `hr-scheduler` at 960×600 DPR 3 (2880×1800, same 16:10) so its sign-in card is not lost in an empty field. Encoded to WebP q92 with sharp — 7.8 MB of PNG became 1.1 MB with no visible change at any display size. |
| Author | Pandu Utomo |
| Captured | 2026-09-03 |
| C2PA | **None embedded.** Chromium's screenshot encoder writes no Content Credentials; recorded as absent, not stripped. |
| Generated content | **No.** Every pixel is a rendering of the real page by a real browser. No model output, no compositing, no retouching. |

| File | Page captured | Note |
| --- | --- | --- |
| `oils-patra-logistik.webp` | `oils.patralogistik.com` — Dashboard MT | Behind a login. Captured with credentials supplied by the site's owner; the credentials are **not** stored in this repository. Waited out the post-login welcome toast so no account name is shown. |
| `mitra-kawan-bersama.webp` | `www.mitrakawanbersama.com` — home | Captured after the hero's entrance animation settles. |
| `crescentrating.webp` | `crescentrating.com` — home | Zoho PageSense was blocked at the network layer for the capture, so the plate shows the site's own design rather than a push-permission bubble and a survey pop-up sitting over it. The cookie banner was dismissed with **Reject All**. |
| `hr-scheduler.webp` | `hr-scheduler-v3.pages.dev` — sign-in | The sign-in screen is the public surface; the schedule behind it is staff-only. |
| `company-profile-mni.webp` | `company-profile-mni.vercel.app` — home | — |

Displayed at native 16:10 in a 16:10 plate, so nothing is cropped, and the
caption sits on the paper below each plate — no scrim, no gradient, no type
over the capture. Third-party marks inside the frames (Komatsu, Scania, UD
Trucks liveries in the MKB hero; the Pertamina-affiliated OILS logo) belong to
the captured sites and appear here only as part of the record of work done.
