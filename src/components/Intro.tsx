"use client";

import { useEffect, useState } from "react";

/**
 * One-time page intro: the wordmark rises out of a mask, a red rule draws in,
 * then the whole curtain lifts. Pure CSS animation (transform/opacity only);
 * shown once per browser session; removed from the DOM when finished.
 * Reduced-motion users never see it (display:none in CSS as well).
 */
export default function Intro() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (sessionStorage.getItem("introSeen")) return;
    sessionStorage.setItem("introSeen", "1");
    const raf = requestAnimationFrame(() => setShow(true));
    const t = setTimeout(() => setShow(false), 2300);
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(t);
    };
  }, []);

  if (!show) return null;

  return (
    <div aria-hidden className="intro">
      <span className="mask">
        <span className="wordmark">
          Orvnix<span style={{ color: "var(--accent)" }}>.</span>
        </span>
      </span>
      <span className="rule" />
    </div>
  );
}
