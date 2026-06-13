"use client";

import { useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
  useReducedMotion,
} from "motion/react";

/**
 * A purely-decorative background depth wrapper. Applies two gentle, composited
 * transforms to its children: a slow scroll-linked drift (the layer lags the
 * page, reading as distance) and a tiny cursor parallax (felt, not seen). The
 * wrapper is over-sized so the drift never exposes an edge inside an
 * overflow-hidden parent. aria-hidden + pointer-events-none, transform/opacity
 * only, and fully inert under prefers-reduced-motion. It never affects layout —
 * children are positioned exactly as before, just nudged a few px.
 */
export default function ParallaxBG({
  children,
  scroll = 70,
  pointer = 10,
}: {
  children: React.ReactNode;
  /** max px the layer drifts across the hero's scroll */
  scroll?: number;
  /** max px the layer shifts toward the cursor */
  pointer?: number;
}) {
  const reduce = useReducedMotion();

  // Track page scroll directly (no target ref → avoids the "ref not hydrated"
  // issue with an absolutely-positioned target). The hero sits at the top, so
  // mapping the first ~900px gives the layer its slow drift.
  const { scrollY } = useScroll();
  const yScroll = useTransform(scrollY, [0, 900], [0, reduce ? 0 : scroll]);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const px = useSpring(mx, { stiffness: 50, damping: 20, mass: 0.6 });
  const py = useSpring(my, { stiffness: 50, damping: 20, mass: 0.6 });

  useEffect(() => {
    if (reduce) return;
    const onMove = (e: PointerEvent) => {
      mx.set((e.clientX / window.innerWidth - 0.5) * 2 * pointer);
      my.set((e.clientY / window.innerHeight - 0.5) * 2 * pointer);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [reduce, pointer, mx, my]);

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none absolute"
      // over-size so the drift stays covered inside the overflow-hidden parent
      style={{ top: "-7%", left: "-5%", width: "110%", height: "114%", y: yScroll }}
    >
      <motion.div className="absolute inset-0" style={{ x: px, y: py }}>
        {children}
      </motion.div>
    </motion.div>
  );
}
