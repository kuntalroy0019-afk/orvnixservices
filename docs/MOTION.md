# Orvnix Motion System

Motion is the brand. Every animation on this site exists to **explain, guide,
reveal, connect, or reinforce** — anything that does none of those gets
removed.

## Tokens

All timing lives in `src/motion/tokens.ts`. Never hardcode a duration.

| Token | Value | Used for |
|---|---|---|
| `DUR.micro` | 0.2s | ticks, toggles, focus |
| `DUR.hover` | 0.35s | links, buttons, cards |
| `DUR.entrance` | 1.0s | section reveals, mask rises |
| `DUR.morph` | 1.8s | transformation sequences |
| `EASE.out` / `EASE.outCss` | power3.out / `cubic-bezier(.16,1,.3,1)` | entrances |
| `EASE.inOut` / `EASE.inOutCss` | power2.inOut / `cubic-bezier(.5,1,.89,1)` | morphs |
| `SCROLL.scrub` | 1.2 | all scrubbed sequences |
| `SCROLL.pin.process` | 3 viewports | the process route |
| `SCROLL.pin.heroNetwork` | 1.2 viewports | hero network formation |

The CSS custom properties `--ease-1` / `--ease-2` in `globals.css` mirror
`EASE.outCss` / `EASE.inOutCss`.

## Engine architecture

- **Lenis** owns scrolling, driven from the **GSAP ticker** (one clock);
  every Lenis scroll event calls `ScrollTrigger.update` → pinned scrubs
  track exactly. Wiring lives in `SmoothScroll.tsx`.
- **GSAP + ScrollTrigger** own scroll choreography (pinned timelines).
- **Motion (React)** owns reactive scroll values inside the pillar theater
  (`useScroll`/`useTransform` MotionValues — style writes, no re-renders).
- **CSS** owns hovers, entrances, the intro, and the marquee.

## The motion inventory — and what each one means

| Where | Motion | Meaning |
|---|---|---|
| Intro (`Intro.tsx`) | wordmark rises, rule draws, curtain lifts | the studio "draws a line" — precision from frame one |
| Hero (`NetworkCenterpiece.tsx`) | scattered nodes connect into a lattice, scrubbed by scroll | raw problems engineered into ordered systems — the core proposition |
| Hero headline (`SplitReveal`) | lines rise from masks in a stepped cascade | controlled disclosure |
| Canvas (`RidgeCanvas` + `.animate-settle`) | one slow settle on load | the ground is stable; nothing fidgets |
| Proof (`NumberReveal.tsx`) | figure rises from a mask, hairline draws | metrics emerge as built facts — no slot-machine counting |
| Services (`PillarTheater.tsx`) | pinned stage; geometry, specimen and title drift at distinct speeds | depth = layers of one practice; scroll directs the tour |
| Process (`ProcessFlow.tsx`) | pinned 3-viewport route: a line draws through four stations, each step locks in as the line arrives | literally "how value is created", playable forwards and backwards |
| Cursor (`Cursor.tsx`) | red signal dot; blooms with a label over media | guides attention to what is explorable |
| Links/buttons | 0.35s underline wipes, fill warms to accent | tactility without spectacle |

## Performance rules

- Animate **transform/opacity only**. No layout properties, no
  `transition: all`, no `backdrop-filter` on scrolling elements.
- Hidden theater stages flip `visibility: hidden` after fading so blend-mode
  layers stop compositing.
- Canvas centerpiece: DPR-capped at 2, pauses offscreen via
  IntersectionObserver, ~64 nodes.
- Marquee edge fades use static gradients, not animated `mask-image`.
- Imagery is vector (SVG ridges + specimens) where possible; photos go
  through `.img-treat` and lazy-load by default.

## Reduced motion

`prefers-reduced-motion: reduce` collapses everything to its meaning:

- Lenis off (native scroll), ScrollTrigger reads native scroll
- Intro never mounts; SplitReveal/Reveal render final state
- ProcessFlow and the pillar theater render their stacked layouts
- NetworkCenterpiece paints one static, mostly-formed frame
- NumberReveal shows instantly

## QA checklist (run before shipping any new animation)

1. Does it explain, guide, reveal, connect, or reinforce? If not — delete it.
2. Is its duration a token from `src/motion/tokens.ts`?
3. Transform/opacity only?
4. Does it hold 60fps with DevTools paint flashing on?
5. Does it have a reduced-motion path?
6. Does it feel inevitable rather than attention-seeking?
