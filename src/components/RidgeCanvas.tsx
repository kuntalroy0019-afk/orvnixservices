/**
 * The persistent canvas behind hero + about + stats: layered ridgelines
 * cresting in the hero's lower third, dissolving into white fog as the
 * visitor scrolls into the statistics. Pure SVG painted in token greys —
 * no photo, no licensing, instant load. A single tiny red survey tick marks
 * the summit (the only color event, brand grammar).
 *
 * The viewBox is tall (1600×1800 ≈ two viewports) and stretches to the
 * wrapper, so the composition lines up with both chapters.
 */
export default function RidgeCanvas() {
  return (
    <svg
      className="absolute inset-0 h-full w-full"
      viewBox="0 0 1600 1800"
      preserveAspectRatio="none"
      aria-hidden
    >
      <defs>
        <linearGradient id="fog-a" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ffffff" stopOpacity="0.95" />
          <stop offset="1" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="fog-b" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ffffff" stopOpacity="0" />
          <stop offset="1" stopColor="#ffffff" stopOpacity="1" />
        </linearGradient>
        <linearGradient id="ridge-back" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#e6e4df" />
          <stop offset="0.5" stopColor="#f3f1ed" />
          <stop offset="1" stopColor="#ffffff" />
        </linearGradient>
        <linearGradient id="ridge-mid" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#dbd9d3" />
          <stop offset="0.55" stopColor="#eeece8" />
          <stop offset="1" stopColor="#ffffff" />
        </linearGradient>
        <linearGradient id="ridge-front" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#d2d0ca" />
          <stop offset="0.6" stopColor="#e9e7e3" />
          <stop offset="1" stopColor="#ffffff" />
        </linearGradient>
      </defs>

      {/* back ridge — crests just below the headline */}
      <path
        d="M0,640 C150,600 290,645 430,610 C570,575 660,625 800,600 C920,578 1010,540 1130,570 C1270,605 1400,565 1600,600 L1600,1800 L0,1800 Z"
        fill="url(#ridge-back)"
      />
      <rect x="0" y="600" width="1600" height="320" fill="url(#fog-a)" opacity="0.8" />

      {/* mid ridge — the summit carries the survey tick */}
      <path
        d="M0,790 C180,735 330,800 480,765 C640,727 760,650 900,685 C1030,717 1130,780 1280,750 C1400,726 1500,765 1600,745 L1600,1800 L0,1800 Z"
        fill="url(#ridge-mid)"
      />
      <rect x="0" y="750" width="1600" height="380" fill="url(#fog-a)" opacity="0.85" />

      {/* front ridge — rolls under the about statement */}
      <path
        d="M0,960 C200,915 340,975 520,945 C700,912 820,860 980,892 C1130,922 1260,968 1420,940 C1490,928 1550,942 1600,934 L1600,1800 L0,1800 Z"
        fill="url(#ridge-front)"
      />
      <rect x="0" y="905" width="1600" height="450" fill="url(#fog-a)" opacity="0.9" />

      {/* far foothill, barely there behind the statistics */}
      <path
        d="M0,1240 C260,1200 420,1255 640,1228 C860,1200 1040,1160 1240,1195 C1390,1222 1500,1208 1600,1215 L1600,1800 L0,1800 Z"
        fill="#f0eeea"
      />
      <rect x="0" y="1180" width="1600" height="620" fill="url(#fog-a)" opacity="0.95" />

      {/* contour hairlines tracing the mid ridge — drafting-table detail */}
      <path
        d="M0,802 C180,747 330,812 480,777 C640,739 760,662 900,697 C1030,729 1130,792 1280,762 C1400,738 1500,777 1600,757"
        fill="none"
        stroke="#090c02"
        strokeOpacity="0.08"
        strokeWidth="1"
      />
      <path
        d="M0,818 C180,763 330,828 480,793 C640,755 760,678 900,713 C1030,745 1130,808 1280,778 C1400,754 1500,793 1600,773"
        fill="none"
        stroke="#090c02"
        strokeOpacity="0.05"
        strokeWidth="1"
      />

      {/* bottom seal — the whole composition dissolves to pure white before
          the wrapper ends, so no seam can show against the next section */}
      <rect x="0" y="1450" width="1600" height="350" fill="url(#fog-b)" />

      {/* survey tick on the summit — the single red event */}
      <g transform="translate(900,685)">
        <line x1="0" y1="-28" x2="0" y2="-9" stroke="#ff3c00" strokeWidth="2.5" />
        <circle cx="0" cy="-4" r="3" fill="#ff3c00" />
      </g>
    </svg>
  );
}
