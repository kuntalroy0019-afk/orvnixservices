/**
 * Line-art "specimens" for the scroll theater — one engineering-drawing
 * voice across all four pillars: single stroke weight, round caps, ink at
 * half strength so the multiply blend settles them into the stage and the
 * red geometry behind. Pure SVG: crisp at any size, zero image weight.
 */
const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

function SoftwarePanes() {
  // exploded stack of interface panes, isometric
  return (
    <g {...stroke}>
      <path d="M170,200 L330,150 L470,200 L310,250 Z" />
      <path d="M170,285 L330,235 L470,285 L310,335 Z" />
      <path d="M170,370 L330,320 L470,370 L310,420 Z" />
      {/* connectors */}
      <path d="M170,200 L170,370 M470,200 L470,370 M310,250 L310,420" strokeDasharray="2 7" />
      {/* detail ticks on the top pane */}
      <path d="M300,168 L340,180 M270,180 L310,192 M330,192 L370,204" />
      {/* cursor dot */}
      <circle cx="395" cy="222" r="5" fill="currentColor" stroke="none" />
    </g>
  );
}

function NeuralBurst() {
  // radial node lattice — dandelion-like, but it's a network
  const spokes = Array.from({ length: 16 }, (_, i) => {
    const a = (i / 16) * Math.PI * 2 - Math.PI / 2;
    const r = [150, 185, 120, 200, 140, 170, 110, 190][i % 8];
    const x = 320 + Math.cos(a) * r;
    const y = 285 + Math.sin(a) * r;
    const dot = [4, 7, 3, 9, 5, 6, 3, 8][i % 8];
    return { x, y, dot };
  });
  return (
    <g {...stroke}>
      {spokes.map((s, i) => (
        <g key={i}>
          <line x1="320" y1="285" x2={s.x} y2={s.y} strokeWidth="1.5" />
          <circle cx={s.x} cy={s.y} r={s.dot} />
        </g>
      ))}
      {/* secondary links between neighbouring nodes */}
      <path
        d={`M${spokes[1].x},${spokes[1].y} L${spokes[3].x},${spokes[3].y} M${spokes[6].x},${spokes[6].y} L${spokes[9].x},${spokes[9].y} M${spokes[12].x},${spokes[12].y} L${spokes[14].x},${spokes[14].y}`}
        strokeWidth="1"
        strokeDasharray="2 6"
      />
      <circle cx="320" cy="285" r="14" />
      <circle cx="320" cy="285" r="4" fill="currentColor" stroke="none" />
    </g>
  );
}

function RobotArm() {
  return (
    <g {...stroke}>
      {/* plinth */}
      <path d="M200,470 L440,470 M230,470 L250,430 L390,430 L410,470" />
      {/* shoulder */}
      <circle cx="320" cy="395" r="34" />
      <circle cx="320" cy="395" r="6" fill="currentColor" stroke="none" />
      {/* upper arm */}
      <path d="M320,361 L255,255" strokeWidth="9" />
      {/* elbow */}
      <circle cx="250" cy="245" r="22" />
      {/* forearm */}
      <path d="M262,227 L370,160" strokeWidth="7" />
      {/* wrist + gripper */}
      <circle cx="380" cy="154" r="13" />
      <path d="M390,144 L425,124 M392,162 L430,150" />
      <path d="M425,124 L437,132 M430,150 L440,141" />
      {/* motion arc */}
      <path d="M430,300 A150,150 0 0,0 360,190" strokeDasharray="2 8" strokeWidth="1.5" />
    </g>
  );
}

function DroneSchematic() {
  return (
    <g {...stroke}>
      {/* body */}
      <rect x="285" y="255" width="70" height="56" rx="12" />
      <circle cx="320" cy="283" r="9" />
      {/* arms */}
      <path d="M291,261 L226,206 M349,261 L414,206 M291,305 L226,360 M349,305 L414,360" strokeWidth="5" />
      {/* rotors */}
      <circle cx="206" cy="190" r="52" />
      <circle cx="434" cy="190" r="52" />
      <circle cx="206" cy="376" r="52" />
      <circle cx="434" cy="376" r="52" />
      {/* prop hubs */}
      <circle cx="206" cy="190" r="5" fill="currentColor" stroke="none" />
      <circle cx="434" cy="190" r="5" fill="currentColor" stroke="none" />
      <circle cx="206" cy="376" r="5" fill="currentColor" stroke="none" />
      <circle cx="434" cy="376" r="5" fill="currentColor" stroke="none" />
      {/* spin arcs */}
      <path d="M167,158 A52,52 0 0,1 240,153" strokeDasharray="3 8" strokeWidth="1.5" />
      <path d="M473,222 A52,52 0 0,1 400,227" strokeDasharray="3 8" strokeWidth="1.5" />
      {/* hover line */}
      <path d="M320,326 L320,430 M300,438 L340,438" strokeDasharray="2 8" strokeWidth="1.5" />
    </g>
  );
}

export default function StageArt({ kind }: { kind: string }) {
  return (
    <svg viewBox="0 0 640 560" className="h-full w-full" aria-hidden>
      {kind === "software" && <SoftwarePanes />}
      {kind === "ai" && <NeuralBurst />}
      {kind === "robotics" && <RobotArm />}
      {kind === "drones" && <DroneSchematic />}
    </svg>
  );
}
