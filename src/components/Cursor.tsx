"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Site cursor companion: a small signal dot trails the pointer; over elements
 * marked `data-cursor="label"` it blooms into a labelled circle. Pure
 * transform/RAF work — no layout. Hidden on touch devices and for
 * prefers-reduced-motion via CSS.
 */
export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const [label, setLabel] = useState("View");
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (
      window.matchMedia("(hover: none), (prefers-reduced-motion: reduce)")
        .matches
    ) {
      return;
    }

    let tx = -100;
    let ty = -100;
    let dx = -100;
    let dy = -100;
    let bx = -100;
    let by = -100;
    let raf = 0;

    const onMove = (e: PointerEvent) => {
      tx = e.clientX;
      ty = e.clientY;
      const hit = (e.target as Element | null)?.closest?.("[data-cursor]");
      if (hit) {
        setLabel(hit.getAttribute("data-cursor") || "View");
        setActive(true);
      } else {
        setActive(false);
      }
    };

    const loop = () => {
      // dot trails quickly; badge drifts a touch behind it
      dx += (tx - dx) * 0.35;
      dy += (ty - dy) * 0.35;
      bx += (tx - bx) * 0.16;
      by += (ty - by) * 0.16;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${dx}px, ${dy}px, 0)`;
      }
      if (badgeRef.current) {
        badgeRef.current.style.transform = `translate3d(${bx}px, ${by}px, 0)`;
      }
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div aria-hidden className="cursor-root">
      <div
        ref={dotRef}
        className="cursor-dot"
        style={{ opacity: active ? 0 : 1 }}
      />
      <div ref={badgeRef} className={`cursor-badge ${active ? "is-on" : ""}`}>
        <span className="scaler">
          <span>{label}</span>
        </span>
      </div>
    </div>
  );
}
