"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SCROLL } from "@/motion/tokens";

gsap.registerPlugin(ScrollTrigger);

/**
 * Hero motion centerpiece — "network intelligence forming".
 *
 * Meaning, not decoration: scattered points (raw problems) are progressively
 * connected into a structured lattice as the visitor scrolls — engineering
 * order out of chaos, which is the studio's core proposition. Scroll is the
 * director: formation progress is scrubbed, not autoplayed; only a gentle
 * idle drift runs on its own.
 *
 * Canvas 2D, transform-free painting in a single rAF; ~70 nodes (O(n²) edge
 * pass is trivial at this count). DPR-aware, paused when offscreen, and a
 * static, partially-formed frame for prefers-reduced-motion.
 */
const NODE_COUNT = 64;
const NEIGHBOURS = 3; // edges per node when fully formed
const IDLE_FORMATION = 0.18; // how connected the field is before any scroll
const DRIFT = 0.12; // px/frame max idle drift

type Node = { x: number; y: number; vx: number; vy: number; r: number };

export default function NetworkCenterpiece() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let w = 0;
    let h = 0;
    let dpr = 1;
    const fit = () => {
      const rect = canvas.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = rect.width;
      h = rect.height;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    fit();

    // Deterministic-ish scatter, seeded by index so SSR/CSR don't fight.
    const nodes: Node[] = Array.from({ length: NODE_COUNT }, (_, i) => {
      const gx = (i % 8) / 8;
      const gy = Math.floor(i / 8) / 8;
      const jx = Math.sin(i * 127.1) * 0.5 + 0.5;
      const jy = Math.sin(i * 311.7) * 0.5 + 0.5;
      return {
        x: (gx * 0.85 + jx * 0.15 + 0.06) * w,
        y: (gy * 0.85 + jy * 0.15 + 0.06) * h,
        vx: (jx - 0.5) * DRIFT * 2,
        vy: (jy - 0.5) * DRIFT * 2,
        r: 1.5 + jx * 2.2,
      };
    });
    const accentIdx = [9, 31, 50]; // the few red events

    // Formation progress, scrubbed by scroll through the hero.
    const formation = { value: reduced ? 0.7 : IDLE_FORMATION };

    const ink = "9, 12, 2";
    const red = "255, 60, 0";

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      const p = formation.value;

      // edges: each node reaches toward its nearest neighbours; how many of
      // them are "live" follows formation progress
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        const dists: { j: number; d: number }[] = [];
        for (let j = 0; j < nodes.length; j++) {
          if (j === i) continue;
          const dx = nodes[j].x - a.x;
          const dy = nodes[j].y - a.y;
          dists.push({ j, d: dx * dx + dy * dy });
        }
        dists.sort((m, n) => m.d - n.d);
        const live = Math.floor(NEIGHBOURS * p * 1.4);
        for (let k = 0; k < live && k < NEIGHBOURS; k++) {
          const b = nodes[dists[k].j];
          // only draw each pair once
          if (dists[k].j < i) continue;
          ctx.strokeStyle = `rgba(${ink}, ${0.05 + 0.12 * p})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }

      // nodes
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        const isAccent = accentIdx.includes(i);
        ctx.fillStyle = isAccent
          ? `rgba(${red}, ${0.5 + 0.5 * p})`
          : `rgba(${ink}, ${0.18 + 0.3 * p})`;
        ctx.beginPath();
        ctx.arc(n.x, n.y, isAccent ? n.r + 0.8 : n.r, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    if (reduced) {
      // One static, mostly-formed frame. No loop, no listeners.
      draw();
      return;
    }

    // idle drift + repaint
    let raf = 0;
    let running = true;
    const loop = () => {
      if (running) {
        for (const n of nodes) {
          n.x += n.vx;
          n.y += n.vy;
          if (n.x < 0 || n.x > w) n.vx *= -1;
          if (n.y < 0 || n.y > h) n.vy *= -1;
        }
        draw();
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    // pause painting while offscreen
    const io = new IntersectionObserver(([e]) => {
      running = e.isIntersecting;
    });
    io.observe(canvas);

    // scroll scrubs the formation
    const st = ScrollTrigger.create({
      trigger: canvas.parentElement,
      start: "top top",
      end: `+=${SCROLL.pin.heroNetwork * 100}%`,
      scrub: SCROLL.scrub,
      onUpdate: (self) => {
        formation.value = IDLE_FORMATION + (1 - IDLE_FORMATION) * self.progress;
      },
    });

    const onResize = () => fit();
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      st.kill();
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="pointer-events-none absolute inset-0 h-full w-full"
    />
  );
}
