"use client";

import { useEffect, useRef } from "react";

/**
 * The one bold "tech" moment, scoped to the dark contact band: a perspective
 * grid floor recedes to a horizon while a faint column rain drifts behind the
 * content. Transparent canvas (the section's ink ground shows through), drawn at
 * low alpha so copy and the form stay perfectly readable. No deps; aria-hidden,
 * pointer-events-none; paused off-screen; a single static grid for reduced
 * motion (no rain).
 */
const GLYPHS = "01<>/\\[]{}=+*#ABCDEFGHJKLMNPRTUVXZ0123456789".split("");

export default function TronBand({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = Math.min(2, window.devicePixelRatio || 1);
    let w = 0,
      h = 0,
      raf = 0,
      onscreen = true,
      t = 0;

    // rain columns
    const COL = 22;
    let drops: { y: number; speed: number; len: number }[] = [];
    const seedDrops = () => {
      const n = Math.ceil(w / COL);
      drops = Array.from({ length: n }, () => ({
        y: Math.random() * h,
        speed: 0.4 + Math.random() * 0.9,
        len: 6 + Math.floor(Math.random() * 10),
      }));
    };

    const resize = () => {
      const r = canvas.getBoundingClientRect();
      w = r.width;
      h = r.height;
      canvas.width = Math.max(1, Math.round(w * dpr));
      canvas.height = Math.max(1, Math.round(h * dpr));
      seedDrops();
    };

    const drawGrid = (phase: number) => {
      const horizon = h * 0.52;
      const vpX = w / 2;
      ctx.lineWidth = 1;
      // converging verticals
      ctx.strokeStyle = "rgba(255,60,0,0.16)";
      ctx.beginPath();
      const cols = 22;
      for (let i = -cols; i <= cols; i++) {
        const x = vpX + (i / cols) * w * 1.1;
        ctx.moveTo(vpX + (i / cols) * w * 0.06, horizon);
        ctx.lineTo(x, h);
      }
      ctx.stroke();
      // receding horizontals — spacing grows toward the viewer, scrolling in
      ctx.strokeStyle = "rgba(255,60,0,0.2)";
      ctx.beginPath();
      for (let k = 0; k < 16; k++) {
        const f = ((k + phase) % 16) / 16; // 0..1
        const y = horizon + Math.pow(f, 2.4) * (h - horizon);
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
      }
      ctx.stroke();
      // horizon glow line
      ctx.strokeStyle = "rgba(255,60,0,0.28)";
      ctx.beginPath();
      ctx.moveTo(0, horizon);
      ctx.lineTo(w, horizon);
      ctx.stroke();
    };

    const drawRain = () => {
      ctx.font = "12px ui-monospace, monospace";
      ctx.textBaseline = "top";
      for (let i = 0; i < drops.length; i++) {
        const d = drops[i];
        const x = i * COL + 4;
        for (let j = 0; j < d.len; j++) {
          const yy = d.y - j * 15;
          if (yy < 0 || yy > h * 0.6) continue; // keep rain to the upper field
          const a = (1 - j / d.len) * 0.16;
          ctx.fillStyle =
            j === 0 ? "rgba(246,244,243,0.32)" : `rgba(255,60,0,${a})`;
          ctx.fillText(
            GLYPHS[(Math.floor(yy / 15) + i) % GLYPHS.length],
            x,
            yy
          );
        }
        d.y += d.speed * 4;
        if (d.y - d.len * 15 > h) d.y = -Math.random() * 60;
      }
    };

    const frame = () => {
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, w, h);
      drawRain();
      drawGrid(t % 16);
      t += 0.05;
      raf = onscreen ? requestAnimationFrame(frame) : 0;
    };

    const renderStatic = () => {
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, w, h);
      drawGrid(0);
    };

    const ro = new ResizeObserver(() => {
      resize();
      if (reduce) renderStatic();
    });
    ro.observe(canvas);
    resize();

    const io = new IntersectionObserver(
      ([e]) => {
        onscreen = e.isIntersecting;
        if (reduce) {
          renderStatic();
          return;
        }
        if (onscreen && !raf) raf = requestAnimationFrame(frame);
        else if (!onscreen && raf) {
          cancelAnimationFrame(raf);
          raf = 0;
        }
      },
      { threshold: 0 }
    );
    io.observe(canvas);

    return () => {
      ro.disconnect();
      io.disconnect();
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return <canvas ref={canvasRef} className={className} aria-hidden />;
}
