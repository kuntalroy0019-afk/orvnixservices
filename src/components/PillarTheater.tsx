"use client";

import Image from "next/image";
import Link from "next/link";
import WireframeArt from "@/components/WireframeArt";
import { useEffect, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "motion/react";

export type Pillar = {
  id: string;
  line1: string;
  line2?: string;
  body: string;
  links: { label: string; slug: string }[];
  stats: { k: string; v: string }[];
  img: string;
  /** lift dark plates into the high-key register so the title reads over them */
  lift?: boolean;
};

/**
 * Frame 4 — the offering as a pinned scroll theater. A container N viewports
 * tall pins a full-screen grey stage; each pillar swaps in place. Within the
 * active stage, the red geometry, the blended image and the oversized title
 * drift at different speeds, linked to scroll through MotionValues (style
 * writes only — no React re-renders, transform/opacity only). Vertical anchor
 * list top-left tracks and jumps between pillars. Collapses to a stacked
 * list on mobile / reduced motion.
 */
export default function PillarTheater({ pillars }: { pillars: Pillar[] }) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [idx, setIdx] = useState(0);
  const [staged, setStaged] = useState(false);

  const { scrollYProgress } = useScroll({
    target: wrapRef,
    offset: ["start start", "end end"],
  });
  // smoothed progress so the bar eases like the cross-fade rather than tracking
  // raw scroll instantly
  const barScale = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 26,
    restDelta: 0.001,
  });

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const mq = window.matchMedia("(min-width: 1024px)");
    const sync = () => setStaged(mq.matches);
    sync();
    mq.addEventListener("change", sync);

    const unsub = scrollYProgress.on("change", (p) => {
      setIdx(Math.min(pillars.length - 1, Math.floor(p * pillars.length)));
    });
    return () => {
      mq.removeEventListener("change", sync);
      unsub();
    };
  }, [pillars.length, scrollYProgress]);

  const goTo = (i: number) => {
    const el = wrapRef.current;
    if (!el) return;
    const total = el.offsetHeight - window.innerHeight;
    const top = window.scrollY + el.getBoundingClientRect().top;
    window.scrollTo({
      top: top + ((i + 0.5) / pillars.length) * total,
      behavior: "smooth",
    });
  };

  if (!staged) {
    // Stacked fallback: small screens & reduced motion
    return (
      <div ref={wrapRef} className="space-y-px bg-border">
        {pillars.map((p) => (
          <div key={p.id} className="bg-stage p-7">
            <h3 className="display text-3xl text-foreground/60">
              {p.line1} {p.line2}
            </h3>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">{p.body}</p>
            <ul className="mt-5 space-y-1.5">
              {p.links.map((l) => (
                <li key={l.slug}>
                  <Link
                    href={`/services/${l.slug}`}
                    className="arrow-link font-sans text-sm text-foreground"
                  >
                    {l.label}
                    <span className="arrow text-accent">→</span>
                  </Link>
                </li>
              ))}
            </ul>
            <dl className="mt-6 border-t border-border-strong pt-3">
              {p.stats.map((s) => (
                <div key={s.k} className="flex items-baseline justify-between py-1.5">
                  <dt className="font-sans text-[10px] font-bold uppercase tracking-[0.1em] text-foreground">
                    {s.k}
                  </dt>
                  <dd className="font-sans text-sm text-muted">{s.v}</dd>
                </div>
              ))}
            </dl>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div
      ref={wrapRef}
      className="relative"
      style={{ height: `${pillars.length * 140 + 80}vh` }}
    >
      <div className="sticky top-0 h-screen overflow-hidden bg-stage">
        {/* vertical anchor list */}
        <div className="absolute left-[5vw] top-[12vh] z-20 flex flex-col gap-2.5">
          {pillars.map((p, i) => (
            <button
              key={p.id}
              onClick={() => goTo(i)}
              className={`text-left font-sans text-xs transition-all duration-500 hover:opacity-100 ${
                idx === i ? "text-foreground opacity-100" : "text-muted opacity-50"
              }`}
            >
              {p.line1}
              {p.line2 ? ` ${p.line2}` : ""}
            </button>
          ))}
        </div>

        {pillars.map((p, i) => (
          <Stage
            key={p.id}
            pillar={p}
            index={i}
            count={pillars.length}
            active={idx === i}
            beforeActive={i < idx}
            progress={scrollYProgress}
          />
        ))}

        {/* progress hairline */}
        <div className="absolute inset-x-[5vw] bottom-[3vh]">
          <div className="h-px w-full bg-border-strong">
            <motion.div
              className="h-px origin-left bg-accent"
              style={{ scaleX: barScale }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function Stage({
  pillar: p,
  index: i,
  count,
  active,
  beforeActive,
  progress,
}: {
  pillar: Pillar;
  index: number;
  count: number;
  active: boolean;
  beforeActive: boolean;
  progress: MotionValue<number>;
}) {
  // Local 0→1 progress while this stage owns the viewport
  const local = useTransform(progress, [i / count, (i + 1) / count], [0, 1]);
  // Layers drift at different speeds — the depth that sells the stage
  const yGeoA = useTransform(local, [0, 1], [70, -70]);
  const yGeoB = useTransform(local, [0, 1], [-50, 50]);
  // the plates "open up" — scaling from a slab into the full panel as the
  // frame settles, then easing on through
  const openA = useTransform(local, [0, 0.55], [0.62, 1]);
  const openB = useTransform(local, [0, 0.62], [0.62, 1]);
  const yImg = useTransform(local, [0, 1], [36, -36]);
  const ySpec = useTransform(local, [0, 1], [54, -54]);
  const yTitle = useTransform(local, [0, 1], [24, -24]);

  const flip = i % 2 === 1;

  return (
    <div
      className="absolute inset-0"
      data-cursor="View"
      style={{
        opacity: active ? 1 : 0,
        transform: active
          ? "translateY(0)"
          : `translateY(${beforeActive ? -30 : 30}px)`,
        // visibility flips after the fade so hidden stages stop compositing
        visibility: active ? "visible" : "hidden",
        transition: `opacity 1.2s var(--ease-1), transform 1.4s var(--ease-1), visibility 0s ${active ? "0s" : "1.2s"}`,
        pointerEvents: active ? "auto" : "none",
      }}
    >
      {/* red geometry — two plates moving against each other */}
      <motion.div
        aria-hidden
        className="absolute bg-accent"
        style={{
          width: "24vw",
          height: "15vw",
          left: flip ? "30%" : "47%",
          top: "20%",
          y: yGeoA,
          scale: openA,
          opacity: 0.6,
        }}
      />
      <motion.div
        aria-hidden
        className="absolute bg-accent"
        style={{
          width: "24vw",
          height: "15vw",
          left: flip ? "47%" : "27%",
          top: "52%",
          y: yGeoB,
          scale: openB,
          opacity: 0.6,
        }}
      />

      {/* photographic plate, set into the stage opposite the geometry */}
      <motion.div
        className="absolute top-1/2 h-[48vh] w-[26vw] -translate-y-1/2"
        style={{ y: yImg, left: flip ? "52%" : "22%" }}
      >
        <Image
          src={p.img}
          alt=""
          fill
          sizes="26vw"
          className={`stage-img object-cover opacity-80 ${p.lift ? "img-lift" : "img-treat"}`}
        />
      </motion.div>

      {/* rotating 3D wireframe specimen, drifting at its own speed */}
      <motion.div
        className="absolute top-1/2 h-[58vh] w-[30vw] -translate-y-1/2 mix-blend-multiply"
        style={{ y: ySpec, left: flip ? "24%" : "44%" }}
      >
        <WireframeArt kind={p.id} className="h-full w-full" />
      </motion.div>

      {/* oversized two-line title — strong and centred so it always reads clearly */}
      <motion.div
        className="absolute left-1/2 top-1/2 z-10 w-[80vw] -translate-x-1/2 -translate-y-1/2"
        style={{ y: yTitle }}
      >
        <span className="display block text-left text-[clamp(3.2rem,8vw,10.5rem)] leading-[0.95] text-foreground">
          {p.line1}
        </span>
        {p.line2 && (
          <span className="display block text-right text-[clamp(3.2rem,8vw,10.5rem)] leading-[0.95] text-foreground">
            {p.line2}
          </span>
        )}
      </motion.div>

      {/* description + links, bottom-left */}
      <div className="absolute bottom-[6vh] left-[5vw] z-20 w-[17vw] min-w-[240px]">
        <p className="font-sans text-[13px] leading-relaxed text-foreground">
          {p.body}
        </p>
        <ul className="mt-4 space-y-1">
          {p.links.map((l) => (
            <li key={l.slug}>
              <Link
                href={`/services/${l.slug}`}
                className="arrow-link font-sans text-xs text-foreground underline underline-offset-4"
              >
                {l.label}
                <span className="arrow text-accent">→</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* mini-stats footer, bottom-right */}
      <dl className="absolute bottom-[6vh] right-[5vw] z-20 text-right">
        {p.stats.map((s) => (
          <div key={s.k} className="mt-4 first:mt-0">
            <dt className="font-sans text-[10px] font-bold uppercase tracking-[0.1em] text-foreground">
              {s.k}
            </dt>
            <dd className="mt-0.5 font-sans text-sm text-muted">{s.v}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
