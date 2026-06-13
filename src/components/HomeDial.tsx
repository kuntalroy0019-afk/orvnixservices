"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Magnetic from "@/components/Magnetic";

/**
 * The "mark is home" return control. A floating Orvnix hexagon ringed by a
 * scroll-progress dial: it fades in once the visitor scrolls past the first
 * screen and gracefully hands off to the footer mark as the footer enters
 * view (so the two never show at once). Clicking rides back to the hero
 * (#hero) — smooth via Lenis, instant under reduced motion — or navigates
 * home from a sub-page. Magnetic pull on hover; hexagon swaps to an up-arrow.
 */
export default function HomeDial() {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const y = window.scrollY;
      setProgress(max > 0 ? Math.min(1, Math.max(0, y / max)) : 0);

      const pastHero = y > window.innerHeight * 0.8;
      const footer = document.querySelector("footer");
      const footerIn = footer
        ? footer.getBoundingClientRect().top < window.innerHeight - 40
        : false;
      setVisible(pastHero && !footerIn);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const R = 23;
  const C = 2 * Math.PI * R;

  return (
    <div
      className={`fixed bottom-[5vh] right-5 z-40 transition-all duration-500 md:bottom-[5vw] md:right-[5vw] ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-3 opacity-0"
      }`}
    >
      <Magnetic strength={0.4}>
        <Link
          href="/#hero"
          aria-label="Back to the top"
          className="group relative grid h-[52px] w-[52px] place-items-center rounded-full border border-border bg-background/80 backdrop-blur-md transition-colors duration-300 hover:border-accent"
        >
          {/* scroll-progress dial */}
          <svg
            aria-hidden
            viewBox="0 0 52 52"
            className="absolute inset-0 h-full w-full -rotate-90"
          >
            <circle
              cx="26"
              cy="26"
              r={R}
              fill="none"
              stroke="var(--border)"
              strokeWidth="1.5"
            />
            <circle
              cx="26"
              cy="26"
              r={R}
              fill="none"
              stroke="var(--accent)"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeDasharray={C}
              style={{
                strokeDashoffset: C * (1 - progress),
                transition: "stroke-dashoffset 0.15s linear",
              }}
            />
          </svg>

          {/* hexagon mark — fades out on hover */}
          <span className="text-foreground transition-opacity duration-300 group-hover:opacity-0">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 2L4 7v10l8 5 8-5V7l-8-5z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinejoin="round"
              />
              <path
                d="M12 7v10M7.5 9.5l9 5M16.5 9.5l-9 5"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
          </span>

          {/* up-arrow — fades in on hover */}
          <span className="absolute text-accent opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:opacity-100">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 19V5M5 12l7-7 7 7"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </Link>
      </Magnetic>
    </div>
  );
}
