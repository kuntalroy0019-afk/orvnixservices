"use client";

import { useEffect, useRef } from "react";

type V3 = [number, number, number];

const dist = (a: V3, b: V3) =>
  Math.hypot(a[0] - b[0], a[1] - b[1], a[2] - b[2]);

/** A distinct wireframe primitive per discipline. */
function shapeFor(kind: string): { verts: V3[]; edges: [number, number][] } {
  if (kind === "software") {
    // cube lattice — half-size 0.74 so the corners (0.74·√3 ≈ 1.28) sit in the
    // same envelope as the other primitives and don't clip the drawing box.
    const s = 0.74;
    const verts: V3[] = [
      [-s, -s, -s], [s, -s, -s], [s, s, -s], [-s, s, -s],
      [-s, -s, s], [s, -s, s], [s, s, s], [-s, s, s],
    ];
    const edges: [number, number][] = [
      [0, 1], [1, 2], [2, 3], [3, 0], [4, 5], [5, 6], [6, 7], [7, 4],
      [0, 4], [1, 5], [2, 6], [3, 7],
    ];
    return { verts, edges };
  }
  if (kind === "drones") {
    // octahedron
    const verts: V3[] = [
      [1.25, 0, 0], [-1.25, 0, 0], [0, 1.25, 0],
      [0, -1.25, 0], [0, 0, 1.25], [0, 0, -1.25],
    ];
    const edges: [number, number][] = [
      [0, 2], [0, 3], [0, 4], [0, 5], [1, 2], [1, 3],
      [1, 4], [1, 5], [2, 4], [2, 5], [3, 4], [3, 5],
    ];
    return { verts, edges };
  }
  if (kind === "ai") {
    // icosahedron — a node sphere
    const t = (1 + Math.sqrt(5)) / 2;
    const raw: V3[] = [
      [-1, t, 0], [1, t, 0], [-1, -t, 0], [1, -t, 0],
      [0, -1, t], [0, 1, t], [0, -1, -t], [0, 1, -t],
      [t, 0, -1], [t, 0, 1], [-t, 0, -1], [-t, 0, 1],
    ];
    const verts = raw.map((p) => {
      const l = Math.hypot(p[0], p[1], p[2]);
      return [(p[0] / l) * 1.25, (p[1] / l) * 1.25, (p[2] / l) * 1.25] as V3;
    });
    let min = Infinity;
    for (let i = 0; i < verts.length; i++)
      for (let j = i + 1; j < verts.length; j++)
        min = Math.min(min, dist(verts[i], verts[j]));
    const edges: [number, number][] = [];
    for (let i = 0; i < verts.length; i++)
      for (let j = i + 1; j < verts.length; j++)
        if (dist(verts[i], verts[j]) < min * 1.15) edges.push([i, j]);
    return { verts, edges };
  }
  // robotics → torus mesh
  const R = 1, r = 0.42, N = 16, M = 9;
  const verts: V3[] = [];
  for (let i = 0; i < N; i++)
    for (let j = 0; j < M; j++) {
      const u = (i / N) * Math.PI * 2;
      const v = (j / M) * Math.PI * 2;
      verts.push([
        (R + r * Math.cos(v)) * Math.cos(u),
        r * Math.sin(v),
        (R + r * Math.cos(v)) * Math.sin(u),
      ]);
    }
  const idx = (i: number, j: number) => ((i % N) + N) % N * M + (((j % M) + M) % M);
  const edges: [number, number][] = [];
  for (let i = 0; i < N; i++)
    for (let j = 0; j < M; j++) {
      edges.push([idx(i, j), idx(i + 1, j)]);
      edges.push([idx(i, j), idx(i, j + 1)]);
    }
  return { verts, edges };
}

/**
 * A slowly rotating 3D wireframe rendered to a small canvas (no WebGL / no deps).
 * One per discipline. Ink strokes at low alpha to sit in the engineering-drawing
 * voice. Pauses when off-screen; renders a single still frame for reduced motion.
 */
export default function WireframeArt({
  kind,
  className = "",
}: {
  kind: string;
  className?: string;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const { verts, edges } = shapeFor(kind);
    const dpr = Math.min(2, window.devicePixelRatio || 1);
    let w = 0,
      h = 0,
      raf = 0,
      t = 0,
      visible = true;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      canvas.width = Math.max(1, Math.round(w * dpr));
      canvas.height = Math.max(1, Math.round(h * dpr));
    };

    const draw = (ax: number, ay: number) => {
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, w, h);
      if (w === 0 || h === 0) return;
      const cx = w / 2,
        cy = h / 2,
        scale = Math.min(w, h) * 0.3,
        focal = 3.4;
      const cX = Math.cos(ax),
        sX = Math.sin(ax),
        cY = Math.cos(ay),
        sY = Math.sin(ay);
      const pts = verts.map(([x, y, z]) => {
        const x1 = x * cY - z * sY;
        const z1 = x * sY + z * cY;
        const y1 = y * cX - z1 * sX;
        const z2 = y * sX + z1 * cX;
        const p = focal / (focal + z2);
        return [cx + x1 * scale * p, cy + y1 * scale * p];
      });
      ctx.strokeStyle = "rgba(9,12,2,0.45)";
      ctx.lineWidth = 1;
      ctx.lineCap = "round";
      ctx.beginPath();
      for (const [a, b] of edges) {
        ctx.moveTo(pts[a][0], pts[a][1]);
        ctx.lineTo(pts[b][0], pts[b][1]);
      }
      ctx.stroke();
      ctx.fillStyle = "rgba(9,12,2,0.5)";
      for (const p of pts) {
        ctx.beginPath();
        ctx.arc(p[0], p[1], 1.5, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const loop = () => {
      t += 0.0045;
      draw(t * 0.55, t);
      raf = requestAnimationFrame(loop);
    };

    const ro = new ResizeObserver(() => {
      resize();
      if (reduce) draw(0.5, 0.7);
    });
    ro.observe(canvas);
    resize();

    const io = new IntersectionObserver(
      ([e]) => {
        visible = e.isIntersecting;
        if (reduce) {
          draw(0.5, 0.7);
          return;
        }
        if (visible && !raf) loop();
        else if (!visible && raf) {
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
  }, [kind]);

  return <canvas ref={canvasRef} className={className} aria-hidden />;
}
