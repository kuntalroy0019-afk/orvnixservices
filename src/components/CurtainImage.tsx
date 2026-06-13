"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

/**
 * An image that is revealed by an accent "curtain" wiping upward as it scrolls
 * into view, while the image itself settles from a slight zoom. Overlay
 * content (badges, labels) is passed as children and sits above the image but
 * below the curtain during the wipe. Honors prefers-reduced-motion.
 */
export default function CurtainImage({
  src,
  alt,
  sizes,
  imgClassName = "",
  className = "",
  delay = 0,
  children,
}: {
  src: string;
  alt: string;
  sizes?: string;
  imgClassName?: string;
  className?: string;
  delay?: number;
  children?: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
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
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      {/* image (settles from a slight zoom) */}
      <div
        className="absolute inset-0 transition-transform duration-[1300ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
        style={{ transform: shown ? "scale(1)" : "scale(1.14)" }}
      >
        <Image src={src} alt={alt} fill sizes={sizes} className={imgClassName} />
      </div>

      {/* overlay content */}
      <div className="relative z-10 h-full w-full">{children}</div>

      {/* the curtain */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-20 origin-bottom bg-accent transition-transform duration-[850ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
        style={{
          transform: shown ? "scaleY(0)" : "scaleY(1)",
          transitionDelay: `${delay}s`,
        }}
      />
    </div>
  );
}
