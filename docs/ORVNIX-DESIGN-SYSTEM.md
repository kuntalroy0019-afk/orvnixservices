# Orvnix — Design System & UI/UX Instruction

> **Codename:** "Mission-Control Blueprint"
> **Use this document to redesign any other Orvnix UI (app, dashboard, microsite) so it
> looks and feels like one studio.** Hand it, plus `REDESIGN-WORKSHEET.md`, to anyone
> touching an interface.

---

## 0. One-look cheat sheet

| Token | Value | Use |
|---|---|---|
| Background | `#090C02` (Pitch Black) | page canvas |
| Surface | `#12101A` | cards, panels |
| Surface-2 | `#190B28` (Midnight Violet) | elevated / featured panels |
| Foreground | `#F6F4F3` (White Smoke) | primary text |
| Muted | `#A3A39D` | body / secondary text |
| Muted-2 | `#686963` (Dim Grey) | labels, captions |
| Border | `rgba(246,244,243,.09)` | hairlines |
| Border-strong | `rgba(246,244,243,.18)` | emphasized edges |
| Grid | `rgba(246,244,243,.04)` | blueprint grid |
| **Accent** | `#FF3C00` (Blazing Flame) | **signal only** — 1 thing at a time |
| Accent-foreground | `#090C02` | text on accent |

- **Display font:** Bricolage Grotesque (700–800, tracking `-0.025em`, line-height `0.98`)
- **Mono font:** IBM Plex Mono (indices, coordinates, metadata, numerics)
- **Body font:** Geist (clean neutral sans)
- **Signatures:** blueprint grid · registration brackets · crosshair ticks · indexed section labels `[01]` · monospace numerics · instrument bar

---

## 1. Brand foundation

**Who:** Orvnix — a small, precise studio in Kolkata building software, AI/LLM, robotics
and drones, worldwide.

**Positioning:** Engineers who ship. Few clients, deep work, end-to-end (pixels →
physical machines).

**The competitor trap we avoid:** bright, centered, sans-serif "enterprise marketing"
sites (e.g. fire/Agni-themed AI co's) **and** the generic "dark + orange + big serif AI
startup" template. We are neither. We are an *instrument*.

---

## 2. Design vision — "Mission-Control Blueprint"

The interface behaves like a **technical drawing / control surface**, not a brochure.
Every screen feels measured, indexed, and intentional.

Three pillars:

1. **System, not page.** Sections are numbered `[01] … [10]`. Everything reads like part
   of one engineered apparatus.
2. **Signal over decoration.** Flame orange is an *active-state signal* (`//`, `+`, `[ ]`,
   status dots, one key word) — never a wash, never "fire."
3. **Precision is the luxury.** Premium comes from restraint, alignment, hairlines, and
   monospace exactness — not gradients, glow, or noise for its own sake.

---

## 3. Design psychology (the "premium / off-brand" layer)

Design the *feeling*, not just the pixels. Every choice should trigger one of these:

| Principle | Why it reads premium | How we apply it |
|---|---|---|
| **Restraint** | Scarcity of elements = confidence | One accent action per view; huge negative space; thin rules |
| **Authority** | Precision signals competence | Coordinates, indices, spec tables, mono numerics |
| **Exclusivity** | "Not for everyone" raises value | "We take on a handful of teams"; founding-partner framing |
| **Coherence** | Systems feel engineered, not assembled | The same grammar (`[NN]`, brackets, ticks) everywhere |
| **Honest proof** | Truth builds durable trust | Real in-house products as proof; concepts labeled "Concept"; no fake metrics |
| **Calm tension** | Dark + a single hot signal = focus | Pitch-black canvas, one flame accent drawing the eye to the action |

**Anti-psychology (never do):** hype words, fake urgency, invented testimonials,
rainbow gradients, stock-photo smiles, "synergy" copy. These cheapen instantly.

---

## 4. Color system

### Rules
- **60 / 30 / 10:** ~60% background, ~30% surfaces/text, **≤10% accent.** If orange is
  everywhere, it stops being a signal.
- **One accent action per viewport.** The primary CTA owns the orange; everything else is
  greyscale until hover.
- **Elevation by value, not shadow:** background → surface → surface-2. Use hairline
  borders to separate, not heavy drop-shadows.
- **Never** put long body text in `--accent` or `--muted-2` (contrast). Body = `--muted`
  or `--foreground`.

### Contrast (verified)
- Foreground `#F6F4F3` on `#090C02` → ~18:1 ✓
- Accent text `#FF3C00` on `#090C02` → ~5.9:1 ✓ (fine for labels/large)
- **On accent buttons, text is `#090C02`** (dark on orange ≈ 5.9:1) — never white (~3.5:1).

---

## 5. Typography

| Role | Font | Weight | Tracking | Notes |
|---|---|---|---|---|
| Display (h1–h2) | Bricolage Grotesque | 700 | `-0.025em` | line-height `0.98`; big, tight, confident |
| Sub-display (h3) | Bricolage Grotesque | 600 | `-0.02em` | card titles |
| Body | Geist | 400 | normal | line-height ~1.6 |
| Label / eyebrow | IBM Plex Mono | 500 | `0.22em` UPPERCASE | `#686963` |
| Index / meta / coords | IBM Plex Mono | 400–500 | `0.1–0.2em` | `[01]`, `22.64°N` |
| Numerics (metrics) | IBM Plex Mono | 600 | `tnum` on | `.mono-num` |

**Scale (fluid):** hero `clamp(2.75rem, 7vw, 5.5rem)` · h2 `clamp(2rem, 5vw, 3.25rem)` ·
h3 `1.25–1.5rem` · body `1rem–1.125rem` · label `0.7rem`.

**Rules:** one display weight per screen; accentuate ONE word per headline with
`<em>` (renders flame, non-italic); never set body in the display font.

---

## 6. Spacing, layout & grid

- **Base unit:** 4px. Use the 4/8 scale (4, 8, 12, 16, 20, 24, 32, 40, 56, 80, 112).
- **Container:** `max-w-7xl` (1280px), padding `px-5 sm:px-8`.
- **Section rhythm:** `py-20 sm:py-28`, divided by `border-t border-border`.
- **Layout bias:** left-aligned, editorial, asymmetric (`[1.2fr_0.8fr]`). Center only for
  rare punctuation. **No** dead-center hero.
- **Generosity:** when unsure, add space, not elements.

---

## 7. The engineered grammar (our signature — reuse verbatim)

These CSS utilities live in `globals.css`. Port them to any Orvnix UI.

| Utility | What it does | Where |
|---|---|---|
| `.blueprint` (on `<body>`) | fixed faint grid wash, masked at top | global atmosphere |
| `SectionLabel` component | `[01]  LABEL  ———————  META` indexed header | every section |
| `.bracket` | L-shaped flame registration corners on a panel | featured cards, hero image |
| `.hairline` | thin rule that fills remaining flex space | labels, dividers |
| `.tick` | crosshair `+` marker | grid intersections, accents |
| `.mono-num` | tabular monospace figures | metrics, specs, prices |
| `.eyebrow` | mono uppercase label | small kickers |
| `.display` / `.font-display` | grotesque headline type | headings |
| Instrument bar | `ORVNIX // STUDIO·KOLKATA —— 22.64°N · 88.43°E ● ONLINE` | top of hero / app chrome |

**Recurring motifs:** `[NN]` indices · `//` separators (flame) · `+` list bullets ·
`●  STATUS` dots · `FIG.0x` / `/LABEL` callouts on imagery.

---

## 8. Component catalog (current site → reusable patterns)

- **Header:** fixed, blur-on-scroll, hairline border; mono-ish nav; one accent pill CTA.
- **Hero:** instrument bar → `[00]` kicker → tight grotesque H1 (one flame word) → mono
  discipline strip → accent CTA + mono email → bracketed image readout.
- **Cards (service/work):** `bg-surface`, hairline border, hover `-translate-y-1` +
  border-strong; greyscale image → color on hover; `Concept` tag where applicable.
- **Featured card:** `.bracket` + `bg-surface-2` + border-accent/30.
- **Metrics:** 4-up, `.mono-num`, count-up on scroll, honest numbers only.
- **Comparison table:** Orvnix column tinted with `accent/[0.04]`, ✓ in accent.
- **Pricing:** 3 engagement cards, featured = bracketed; CTAs → contact.
- **FAQ:** accordion, `+` → rotates to `×` in accent.
- **Contact:** left = `[10]` + coords/email/address; right = form → `mailto:` draft.
- **Footer:** brand + address + legal links; mono fine print.

---

## 9. Motion

- **Library:** CSS-first. Existing keyframes: `reveal` (fade-up on scroll via
  IntersectionObserver), `marquee` / `marquee-reverse`, `float-slow`, `drift`.
- **Page load:** ONE orchestrated staggered reveal (`animation-delay` 0.04s increments).
- **Hover:** small, precise (1–4px lifts, 105% image scale, color-in).
- **Duration/easing:** 200–700ms, `cubic-bezier(0.16,1,0.3,1)`.
- **Respect `prefers-reduced-motion`** — disable marquees/floats/parallax.
- Restraint: a few high-impact moments beat scattered micro-animations.

---

## 10. Imagery & iconography

- **Treatment (mandatory for cohesion):** `grayscale opacity-80` → `grayscale-0 opacity-100`
  on hover; dark gradient tint bottom; optional `.bracket` + `FIG.0x` / `/LABEL`.
- **Source:** self-hosted, properly licensed (Pexels/Unsplash) in `/public/images`.
- **Icons:** 1.5px stroke line icons, `currentColor`, accent only on emphasis. No filled
  emoji as primary UI.
- **Never:** cheesy stock smiles, drop-shadowed 3D blobs, AI-rainbow art.

---

## 11. Voice & copy

- **Tone:** confident, plain, understated. Short declaratives. Dry, not hypey.
- **Person:** "we" (the studio), "you" (the client).
- **Do:** specifics, honest scope, one clear action. "Book a call." "Be our first case study."
- **Don't:** "revolutionary," "cutting-edge synergy," fake numbers, exclamation spam.
- **Microcopy uses the grammar:** `[ 00 ] — PRECISION PRODUCT STUDIO`, `+ ROBOTICS`,
  `● ONLINE`.

---

## 12. Accessibility (non-negotiable)

- Contrast ≥ 4.5:1 body / 3:1 large & UI. (Dark-on-accent for buttons.)
- Visible focus rings (`focus:border-accent` + outline); full keyboard nav.
- Semantic landmarks (`header/main/nav/footer`), one `<h1>` per page, ordered headings.
- `alt` on every meaningful image; `aria-hidden` on decorative grid/brackets/glows.
- Honor `prefers-reduced-motion`. Don't rely on color alone for meaning (pair with text/icon).

---

## 13. Anti-patterns — never ship these

- ❌ Centered serif hero on dark with an orange word (the trope we left behind).
- ❌ Orange used as a background wash / gradient "fire."
- ❌ More than one accent CTA competing in a viewport.
- ❌ Inter / Roboto / Arial / Space Grotesk; purple-on-white gradients.
- ❌ Fake testimonials, invented metrics, borrowed client logos.
- ❌ Heavy drop-shadows for elevation (use value + hairlines).
- ❌ Decorative motion with no purpose; motion that ignores reduced-motion.
- ❌ Inconsistent grammar (a section without an index, a panel without alignment).

---

### Definition of "on-brand & premium"
A screen passes if: it's indexed/systematic, uses ≤10% accent on one action, sets
headlines in the grotesque with one flame word, uses mono for all metadata/numerics,
elevates with value + hairlines, animates once on load with restraint, says something
true, and would look at home next to a technical drawing — not a SaaS brochure.
