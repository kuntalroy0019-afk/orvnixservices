"use client";

import { useEffect, useState } from "react";

/** A quiet, underlined serif "Scroll" affordance pinned to the lower-left of
 *  the viewport; fades out once the visitor starts scrolling. */
export default function ScrollCue() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const onScroll = () => setHidden(window.scrollY > 120);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      aria-hidden
      className={`pointer-events-none fixed bottom-[5vh] left-5 z-40 transition-opacity duration-500 md:bottom-[5vw] md:left-[5vw] ${
        hidden ? "opacity-0" : "opacity-100"
      }`}
    >
      <span className="eyebrow underline underline-offset-4">Scroll</span>
    </div>
  );
}
