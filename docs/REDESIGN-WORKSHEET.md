# Orvnix — UI Redesign & Fine-Tuning Worksheet

> **Goal:** take an existing UI (another app, dashboard, or microsite) and rebuild it to the
> Orvnix "Mission-Control Blueprint" standard so it can sit alongside / replace the current
> website without looking like a different product.
>
> Pair this with **`ORVNIX-DESIGN-SYSTEM.md`** (the source of truth). Copy this file per
> project and fill in the blanks.

```
PROJECT: ______________________   OWNER: ____________   DATE: __________
TARGET UI / URL: _________________________________________________________
FRAMEWORK: ______________   DEADLINE: __________   STATUS: ☐ Audit ☐ Build ☐ QA ☐ Done
```

---

## PHASE 0 — Audit the existing UI

Capture reality before changing anything.

- [ ] Screenshot every screen / state (empty, loading, error, success, mobile).
- [ ] List every page/route: ______________________________________________
- [ ] Inventory components (buttons, inputs, cards, tables, nav, modals…).
- [ ] Note current fonts / colors / spacing (so you know what you're replacing).
- [ ] Mark the **3 biggest problems** (be brutal):

  1. ____________________________________________________
  2. ____________________________________________________
  3. ____________________________________________________

- [ ] Smell-test against anti-patterns (§13 of the system). Tick any present:
  ☐ generic font (Inter/Roboto/Arial) ☐ purple-on-white ☐ accent overused
  ☐ heavy shadows ☐ fake content ☐ centered-serif-AI trope ☐ aimless motion

**Audit verdict (one line):** _______________________________________________

---

## PHASE 1 — Map to the token system

Replace, don't reinvent. Fill the swap table.

| Old value | → | Orvnix token |
|---|---|---|
| bg `________` | → | `--background #090C02` |
| card `________` | → | `--surface #12101A` / `--surface-2 #190B28` |
| text `________` | → | `--foreground #F6F4F3` / `--muted #A3A39D` |
| accent `________` | → | `--accent #FF3C00` (signal only) |
| body font `________` | → | Geist |
| heading font `________` | → | Bricolage Grotesque |
| label/number font `________` | → | IBM Plex Mono |

- [ ] Drop the token block (`:root` vars) from `globals.css` into the target.
- [ ] Load the 3 fonts (Bricolage Grotesque, IBM Plex Mono, Geist).
- [ ] Port the utilities: `.display`, `.eyebrow`, `.mono-num`, `.blueprint`, `.bracket`,
      `.hairline`, `.tick`, `.grain`, `.reveal`.
- [ ] Port the `SectionLabel` component.

---

## PHASE 2 — Apply the grammar (the part that makes it *Orvnix*)

- [ ] Add `.blueprint` (+ `.grain`) to the root layout for atmosphere.
- [ ] Give every major section a `SectionLabel index="NN"` header. Plan the index map:

  `[01] ______  [02] ______  [03] ______  [04] ______  [05] ______`

- [ ] Convert the top bar / hero into an **instrument bar** (brand `//` context — coords — `● STATUS`).
- [ ] Put `.bracket` on the 1–2 most important panels (hero/featured only — don't overuse).
- [ ] Switch all numbers/metrics/prices to `.mono-num`.
- [ ] Replace decorative bullets with `+` (flame) and section kickers with `.eyebrow`.
- [ ] Reduce accent to **≤10%**, one action per viewport.

---

## PHASE 3 — Component-by-component redesign

For **each** component, run this loop and tick when it passes:

```
COMPONENT: ____________________
☐ uses tokens (no hardcoded colors)      ☐ correct fonts (grotesque/mono/Geist)
☐ elevation = value + hairline (no heavy shadow)
☐ ≤1 accent action                       ☐ left-aligned / intentional layout
☐ hover: precise (≤4px lift, color-in)   ☐ focus ring visible
☐ mono for any number/label              ☐ honest copy (no fake claims)
☐ responsive (360 / 768 / 1280)          ☐ a11y (alt, roles, contrast)
```

Priority order: **Buttons → Inputs/Forms → Cards → Nav/Header → Tables → Modals →
Empty/Loading/Error states.**

Buttons spec: pill, `bg-accent text-[#090C02]`, hover `-translate-y-0.5`; secondary =
`border-border-strong`, ghost = text + mono.

Forms spec: `bg-surface` fields, hairline border, `focus:border-accent`, mono labels,
visible validation, real success/error states.

---

## PHASE 4 — Motion & polish

- [ ] ONE orchestrated load reveal (staggered `animation-delay`, 0.04s steps).
- [ ] Hover micro-interactions only where they add meaning.
- [ ] Easing `cubic-bezier(0.16,1,0.3,1)`, 200–700ms.
- [ ] `prefers-reduced-motion` disables marquees/floats/parallax.
- [ ] Optical alignment pass: are hairlines crisp? indices aligned? rhythm even?

---

## PHASE 5 — QA / acceptance (Definition of Done)

Ship only when ALL are true:

- [ ] **Build green**, **lint clean**, **type-check clean**.
- [ ] Looks unmistakably part of Orvnix (side-by-side with the site = same studio).
- [ ] Passes every anti-pattern check (none present).
- [ ] Accent ≤10%, one CTA per view, dark-on-accent button text.
- [ ] Contrast AA everywhere; full keyboard nav; visible focus.
- [ ] Responsive at 360 / 768 / 1280; no overflow; images optimized.
- [ ] All copy is **true** (no fake metrics/testimonials/logos).
- [ ] Reduced-motion respected; no console errors.
- [ ] Security basics if it has a backend (no secrets in client, headers set, inputs validated).

**Sign-off:** _______________   **Date:** __________

---

## Quick "make it premium" checklist (tape to your monitor)

1. Cut elements until it hurts, then cut one more.
2. One flame thing per screen.
3. Grotesque headline, one word in flame, mono everything technical.
4. Space > decoration. Hairlines > shadows.
5. Index it. Coordinate it. Make it feel *measured*.
6. Tell the truth.
7. Animate once, on load, with restraint.
8. If it could be any SaaS template — it's not done.
