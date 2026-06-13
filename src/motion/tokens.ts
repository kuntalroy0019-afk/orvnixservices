/**
 * Motion design tokens — single source of truth for every timing decision.
 * Derived from the motion worksheet:
 *
 *   Section entrances   0.8–1.2s  easeOut
 *   Morph sequences     1.5–2s
 *   Hover effects       250–400ms
 *   Micro interactions  150–250ms
 *   Scroll sequences    2–4 viewport heights, scrub 1–2
 *
 * Never hardcode a duration in a component — import from here.
 */

/** Durations in seconds (GSAP / Motion units). */
export const DUR = {
  /** Micro interactions: focus rings, ticks, toggles. */
  micro: 0.2,
  /** Hover transitions: links, cards, buttons. */
  hover: 0.35,
  /** Section entrances: reveals, mask rises. */
  entrance: 1.0,
  /** Morph / transformation sequences. */
  morph: 1.8,
} as const;

/** Durations as CSS strings, for inline style/transition use. */
export const DUR_CSS = {
  micro: `${DUR.micro}s`,
  hover: `${DUR.hover}s`,
  entrance: `${DUR.entrance}s`,
  morph: `${DUR.morph}s`,
} as const;

/** Easing — one out-curve for entrances, one in-out for morphs. */
export const EASE = {
  /** GSAP string form. */
  out: "power3.out",
  inOut: "power2.inOut",
  /** CSS cubic-bezier form (matches --ease-1 / --ease-2 in globals.css). */
  outCss: "cubic-bezier(0.16, 1, 0.3, 1)",
  inOutCss: "cubic-bezier(0.5, 1, 0.89, 1)",
} as const;

/** Scroll choreography. */
export const SCROLL = {
  /** Scrub smoothing (seconds of lag behind the scrollbar). */
  scrub: 1.2,
  /** Pinned sequence lengths, in viewport heights. */
  pin: {
    process: 3,
    heroNetwork: 1.2,
  },
} as const;
