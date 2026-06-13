"use client";

import { useEffect, useRef, useState } from "react";
import { DUR_CSS, EASE } from "@/motion/tokens";

/**
 * Proof-metric reveal: the figure rises out of a clipping mask while its
 * hairline draws underneath — emergence, not a slot-machine count-up.
 * Triggers once on viewport entry; reduced-motion shows it instantly.
 */
export default function NumberReveal({
  value,
  delay = 0,
  className = "",
}: {
  value: string;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const id = requestAnimationFrame(() => setShown(true));
      return () => cancelAnimationFrame(id);
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <span ref={ref} className={`block ${className}`}>
      <span className="block overflow-hidden">
        <span
          className="block will-change-transform"
          style={{
            transform: shown ? "translateY(0)" : "translateY(110%)",
            transition: `transform ${DUR_CSS.entrance} ${EASE.outCss} ${delay}s`,
          }}
        >
          {value}
        </span>
      </span>
      <span
        aria-hidden
        className="mt-3 block h-px w-12 bg-accent md:w-full"
        style={{
          transform: shown ? "scaleX(1)" : "scaleX(0)",
          transformOrigin: "left",
          transition: `transform ${DUR_CSS.entrance} ${EASE.outCss} ${delay + 0.15}s`,
        }}
      />
    </span>
  );
}
