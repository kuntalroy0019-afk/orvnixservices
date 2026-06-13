"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useMotionValueEvent,
  type MotionValue,
} from "motion/react";

type Step = { n: string; title: string; body: string };

/** Station x-positions on the 1600-wide route, the dot heights, and the path. */
const STATIONS = [200, 600, 1000, 1400];
const TOPS = [80, 150, 70, 140];
const ROUTE_D =
  "M200,80 C340,80 430,150 600,150 C770,150 860,70 1000,70 C1140,70 1240,140 1400,140";

/** The accent line finishes drawing at this scroll fraction; reveals map under it. */
const DRAW_END = 0.9;

/**
 * Scroll-scrubbed route. A sticky stage is held while the wrapper scrolls; the
 * visitor's scroll draws the accent line across the curve, and as the line
 * reaches each station that dot pops and its step rises in — talk → embed →
 * ship → keep going, driven entirely by scroll, latched so it persists.
 * Sticky (not GSAP-pinned), so it never leaves a stray spacer or duplicate.
 *
 * The pinned, scroll-bound part lives in <RouteFlow>, which is only mounted on
 * desktop with motion enabled — so its scroll ref always exists when useScroll
 * runs (no "target ref not hydrated"). Mobile / reduced-motion get a stacked grid.
 */
export default function ProcessFlow({ steps }: { steps: Step[] }) {
  const [staged, setStaged] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const mq = window.matchMedia("(min-width: 1024px)");
    const sync = () => setStaged(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  if (!staged) {
    return (
      <div className="grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((s) => (
          <div key={s.n} className="bg-background p-7">
            <div className="mb-10 font-display text-2xl text-accent">{s.n}</div>
            <h3 className="display text-xl">{s.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">{s.body}</p>
          </div>
        ))}
      </div>
    );
  }

  return <RouteFlow steps={steps} />;
}

function RouteFlow({ steps }: { steps: Step[] }) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  // each station's fraction ALONG the path (0..1); refined by measurement
  const [fracs, setFracs] = useState<number[]>(() =>
    STATIONS.map((_, i) => (STATIONS.length > 1 ? i / (STATIONS.length - 1) : 0))
  );

  const { scrollYProgress } = useScroll({
    target: wrapRef,
    offset: ["start start", "end end"],
  });
  // Latched progress: only ever increases, so reveals persist on scroll back.
  const latched = useMotionValue(0);
  useMotionValueEvent(scrollYProgress, "change", (p) => {
    if (p > latched.get()) latched.set(p);
  });
  const dashoffset = useTransform(latched, [0, DRAW_END], [1, 0]);

  // Measure where each station sits along the curve (path is always present here).
  useEffect(() => {
    const p = pathRef.current;
    if (!p) return;
    const total = p.getTotalLength();
    if (total <= 0) return;
    setFracs(
      STATIONS.map((sx) => {
        let lo = 0;
        let hi = total;
        for (let k = 0; k < 22; k++) {
          const mid = (lo + hi) / 2;
          if (p.getPointAtLength(mid).x < sx) lo = mid;
          else hi = mid;
        }
        return (lo + hi) / 2 / total;
      })
    );
  }, []);

  return (
    <div
      ref={wrapRef}
      className="relative"
      style={{ height: `${steps.length * 42 + 70}vh` }}
    >
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden px-[5vw]">
        <div className="relative">
          <svg
            viewBox="0 0 1600 220"
            className="block w-full"
            aria-hidden
            preserveAspectRatio="none"
            style={{ height: "180px" }}
          >
            <path d={ROUTE_D} fill="none" stroke="var(--border)" strokeWidth="1.5" />
            <motion.path
              ref={pathRef}
              d={ROUTE_D}
              fill="none"
              stroke="var(--accent)"
              strokeWidth="2"
              pathLength={1}
              style={{ strokeDasharray: 1, strokeDashoffset: dashoffset }}
            />
          </svg>

          {/* dots, locking in as the line arrives */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-[180px]">
            {STATIONS.map((x, i) => (
              <Dot
                key={i}
                progress={latched}
                arrive={fracs[i] * DRAW_END}
                left={(x / 1600) * 100}
                top={(TOPS[i] / 220) * 100}
              />
            ))}
          </div>

          {/* steps, rising in just after their dot */}
          <div className="mt-14 grid grid-cols-4 gap-8">
            {steps.map((s, i) => (
              <StepCol
                key={s.n}
                step={s}
                progress={latched}
                arrive={fracs[i] * DRAW_END}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Dot({
  progress,
  arrive,
  left,
  top,
}: {
  progress: MotionValue<number>;
  arrive: number;
  left: number;
  top: number;
}) {
  const scale = useTransform(progress, [Math.max(0, arrive - 0.04), arrive], [0, 1]);
  return (
    <motion.span
      className="absolute block h-3.5 w-3.5 rounded-full bg-accent"
      style={{ left: `calc(${left}% - 7px)`, top: `calc(${top}% - 7px)`, scale }}
    />
  );
}

function StepCol({
  step: s,
  progress,
  arrive,
}: {
  step: Step;
  progress: MotionValue<number>;
  arrive: number;
}) {
  const range: [number, number] = [arrive, Math.min(1, arrive + 0.07)];
  const opacity = useTransform(progress, range, [0, 1]);
  const y = useTransform(progress, range, [26, 0]);
  return (
    <motion.div style={{ opacity, y }}>
      <div className="font-display text-2xl text-accent">{s.n}</div>
      <h3 className="display mt-4 text-2xl">{s.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted">{s.body}</p>
    </motion.div>
  );
}
