"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

/**
 * Site-wide quiet background system — composites once, never asks for
 * attention:
 *
 *  1. Film grain at ~2.5% — kills banding on the large flat fields and
 *     gives the white ground a printed-paper feel. (static)
 *  2. Two editorial margin rules at the 5vw content edges — the fixed
 *     "page frame" that makes every section feel set on the same sheet. (static)
 *  3. A faint topographic contour watermark in the lower field that drifts a
 *     few px toward the cursor — felt as depth, never seen. Disabled under
 *     prefers-reduced-motion.
 *
 * Fixed position, pointer-events none, z-0 (content sits at z-[2]).
 */
export default function Backdrop() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const x = useSpring(mx, { stiffness: 40, damping: 22, mass: 0.8 });
  const y = useSpring(my, { stiffness: 40, damping: 22, mass: 0.8 });

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const onMove = (e: PointerEvent) => {
      mx.set((e.clientX / window.innerWidth - 0.5) * 2 * 6);
      my.set((e.clientY / window.innerHeight - 0.5) * 2 * 6);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [mx, my]);

  return (
    <>
      {/* under the content: margin rules + contour watermark */}
      <div aria-hidden className="pointer-events-none fixed inset-0 z-0">
        {/* editorial margin rules — the page frame */}
        <div className="absolute bottom-0 left-[5vw] top-0 hidden w-px bg-foreground/[0.05] md:block" />
        <div className="absolute bottom-0 right-[5vw] top-0 hidden w-px bg-foreground/[0.05] md:block" />

        {/* topographic contour watermark, lower field — drifts gently */}
        <motion.svg
          className="absolute bottom-0 left-0 h-[45vh] w-full"
          viewBox="0 0 1600 600"
          preserveAspectRatio="xMidYMax slice"
          style={{ x, y }}
        >
          <g fill="none" stroke="currentColor" strokeWidth="1" className="text-foreground/[0.03]">
            <path d="M-50,420 C220,360 420,460 700,400 C980,340 1180,440 1400,390 C1500,368 1580,390 1660,378" />
            <path d="M-50,470 C220,410 420,510 700,450 C980,390 1180,490 1400,440 C1500,418 1580,440 1660,428" />
            <path d="M-50,520 C220,460 420,560 700,500 C980,440 1180,540 1400,490 C1500,468 1580,490 1660,478" />
            <path d="M-50,570 C220,510 420,610 700,550 C980,490 1180,590 1400,540 C1500,518 1580,540 1660,528" />
          </g>
        </motion.svg>
      </div>

      {/* over EVERYTHING: film grain — uniform across cards, images and
          fields alike, so the ground never reads patchy. 2.5% is felt as
          printed paper, never seen as texture. */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-[100] opacity-[0.025]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />
    </>
  );
}
