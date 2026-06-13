"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

/**
 * Image that drifts slightly slower than scroll for depth. The image is
 * over-sized so the drift never exposes an edge. Honors reduced-motion.
 * Drop-in for a `fill` image inside an overflow-hidden, positioned frame.
 */
export default function ParallaxImage({
  src,
  alt,
  priority = false,
  sizes,
  className = "",
  strength = 14,
}: {
  src: string;
  alt: string;
  priority?: boolean;
  sizes?: string;
  className?: string;
  /** max drift in px each direction */
  strength?: number;
}) {
  const wrap = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = wrap.current;
    if (
      !el ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    let raf = 0;
    const update = () => {
      raf = 0;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      // -1 (above) .. 1 (below) relative to viewport centre
      const progress = (rect.top + rect.height / 2 - vh / 2) / (vh / 2 + rect.height / 2);
      const y = Math.max(-1, Math.min(1, progress)) * strength;
      el.style.transform = `translate3d(0, ${y}px, 0)`;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [strength]);

  // Over-sized wrapper (top/bottom bleed) so drift stays covered.
  return (
    <div
      ref={wrap}
      className="absolute inset-x-0"
      style={{ top: "-8%", height: "116%", willChange: "transform" }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className={className}
      />
    </div>
  );
}
