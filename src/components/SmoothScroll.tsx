"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Weighted, eased page scrolling synchronized with GSAP ScrollTrigger:
 * Lenis is driven from the GSAP ticker (one clock for scroll + timelines),
 * and every Lenis scroll event updates ScrollTrigger so pinned, scrubbed
 * sequences track exactly. Anchor links route through Lenis. Fully inert
 * under prefers-reduced-motion (ScrollTrigger then reads native scroll).
 */
export default function SmoothScroll() {
  useEffect(() => {
    if (
      typeof window === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const lenis = new Lenis({
      duration: 1.1,
      // easeOutExpo — settles with weight, never floaty
      easing: (t: number) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.4,
    });

    // One clock: GSAP's ticker drives Lenis; Lenis updates ScrollTrigger.
    lenis.on("scroll", ScrollTrigger.update);
    const tick = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    // Route same-page hash links (#contact, /#work) through Lenis.
    const onClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement)?.closest?.("a");
      if (!anchor) return;
      const href = anchor.getAttribute("href");
      if (!href || !href.includes("#")) return;
      const id = href.split("#")[1];
      if (!id) return;
      const target = document.getElementById(id);
      if (target) {
        e.preventDefault();
        lenis.scrollTo(target, { offset: -80 });
        history.pushState(null, "", `#${id}`);
      }
    };
    document.addEventListener("click", onClick);

    return () => {
      gsap.ticker.remove(tick);
      document.removeEventListener("click", onClick);
      lenis.destroy();
    };
  }, []);

  return null;
}
