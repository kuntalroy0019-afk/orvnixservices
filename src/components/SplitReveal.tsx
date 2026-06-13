"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Reveals a heading with a smooth fade-and-rise when it scrolls into view.
 * Accent words are tinted. Deliberately simple — one transform on the whole
 * element — so it can never jitter or reflow mid-animation. Honors
 * prefers-reduced-motion (shows instantly).
 */
export default function SplitReveal({
  text,
  as: Tag = "h2",
  className = "",
  delay = 0,
  accent = [],
}: {
  text: string;
  as?: React.ElementType;
  className?: string;
  delay?: number;
  /** words (punctuation-insensitive) rendered in the accent colour */
  accent?: string[];
}) {
  const ref = useRef<HTMLElement>(null);
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
      { threshold: 0.2, rootMargin: "0px 0px -8% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const accentSet = new Set(accent.map((w) => w.toLowerCase()));
  const words = text.split(" ");

  return (
    <Tag
      ref={ref}
      className={className}
      style={{
        opacity: shown ? 1 : 0,
        transform: shown ? "none" : "translateY(26px)",
        transition: `opacity 0.9s cubic-bezier(0.16,1,0.3,1) ${delay}s, transform 0.9s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
      }}
    >
      {words.map((word, i) => {
        const clean = word.replace(/[^\p{L}\p{N}]/gu, "").toLowerCase();
        const isAccent = accentSet.has(clean);
        return (
          <span key={i} className={isAccent ? "text-accent" : undefined}>
            {word}
            {i < words.length - 1 ? " " : ""}
          </span>
        );
      })}
    </Tag>
  );
}
