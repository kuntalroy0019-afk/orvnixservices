"use client";

import { useEffect, useRef } from "react";

/**
 * A grid of dots that is invisible at rest and blooms only around the cursor —
 * a quiet "instrument" texture that reveals itself as you move, so it never
 * competes with the hero canvas or the headline. Canvas, no deps; aria-hidden,
 * pointer-events-none; pauses when the cursor is away or the hero is off-screen;
 * disabled for reduced motion.
 */
export default function HeroDotMatrix({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(2, window.devicePixelRatio || 1);
    const GAP = 34; // grid spacing
    const RADIUS = 150; // bloom radius around cursor
    let w = 0,
      h = 0,
      raf = 0,
      onscreen = true;
    // target + eased cursor (canvas-local); -999 = away
    let tx = -999,
      ty = -999,
      cxp = -999,
      cyp = -999;

    const resize = () => {
      const r = canvas.getBoundingClientRect();
      w = r.width;
      h = r.height;
      canvas.width = Math.max(1, Math.round(w * dpr));
      canvas.height = Math.max(1, Math.round(h * dpr));
    };

    const draw = () => {
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, w, h);
      if (cxp > -500) {
        const x0 = Math.max(0, cxp - RADIUS);
        const x1 = Math.min(w, cxp + RADIUS);
        const y0 = Math.max(0, cyp - RADIUS);
        const y1 = Math.min(h, cyp + RADIUS);
        for (let gx = Math.floor(x0 / GAP) * GAP; gx <= x1; gx += GAP) {
          for (let gy = Math.floor(y0 / GAP) * GAP; gy <= y1; gy += GAP) {
            const d = Math.hypot(gx - cxp, gy - cyp);
            if (d > RADIUS) continue;
            const f = 1 - d / RADIUS; // 0..1
            const a = f * f * 0.5;
            const rad = 0.6 + f * 1.8;
            // nearest dots pick up a touch of flame
            ctx.fillStyle =
              f > 0.7
                ? `rgba(255,60,0,${a})`
                : `rgba(9,12,2,${a * 0.8})`;
            ctx.beginPath();
            ctx.arc(gx, gy, rad, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }
    };

    const loop = () => {
      // ease current toward target
      if (tx < -500) {
        // cursor away — drift the bloom out, then stop
        cxp = cxp > -500 ? cxp : -999;
      }
      cxp += (tx - cxp) * 0.18;
      cyp += (ty - cyp) * 0.18;
      draw();
      const settled = tx < -500 && Math.abs(cxp - tx) < 0.5;
      if (settled || !onscreen) {
        raf = 0;
        return;
      }
      raf = requestAnimationFrame(loop);
    };
    const kick = () => {
      if (!raf && onscreen) raf = requestAnimationFrame(loop);
    };

    const onMove = (e: PointerEvent) => {
      const r = canvas.getBoundingClientRect();
      if (
        e.clientX < r.left ||
        e.clientX > r.right ||
        e.clientY < r.top ||
        e.clientY > r.bottom
      ) {
        tx = -999;
      } else {
        tx = e.clientX - r.left;
        ty = e.clientY - r.top;
        if (cxp < -500) {
          cxp = tx;
          cyp = ty;
        }
      }
      kick();
    };

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    resize();
    const io = new IntersectionObserver(
      ([en]) => {
        onscreen = en.isIntersecting;
        if (onscreen) kick();
      },
      { threshold: 0 }
    );
    io.observe(canvas);
    window.addEventListener("pointermove", onMove, { passive: true });

    return () => {
      ro.disconnect();
      io.disconnect();
      window.removeEventListener("pointermove", onMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return <canvas ref={canvasRef} className={className} aria-hidden />;
}
