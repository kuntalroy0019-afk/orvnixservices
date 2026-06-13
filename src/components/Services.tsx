import Reveal from "@/components/Reveal";
import SplitReveal from "@/components/SplitReveal";
import PillarTheater, { type Pillar } from "@/components/PillarTheater";

/**
 * Frame 4 — a centered statement leads into the pinned scroll theater where
 * the four pillars of the offering swap in place, each with its reusable
 * mini-stats footer. All copy and data points are Orvnix's own.
 */
const pillars: Pillar[] = [
  {
    id: "software",
    line1: "Software",
    line2: "& Product",
    body: "Fast, accessible, production-ready front-ends and the back-ends behind them. Built to scale, not to demo.",
    links: [
      { label: "Product Design", slug: "product-design" },
      { label: "Web Development", slug: "web-development" },
      { label: "Mobile Apps", slug: "mobile-app-development" },
      { label: "Branding & Creative", slug: "branding" },
    ],
    stats: [
      { k: "Stack", v: "Next.js & React" },
      { k: "Surface", v: "Web · Mobile · Brand" },
      { k: "Loop", v: "~48h iterations" },
    ],
    img: "/images/stage-software.jpeg",
    lift: true,
  },
  {
    id: "ai",
    line1: "AI Agents",
    line2: "& LLM",
    body: "Autonomous agents that do real work — research, support, operations — wired straight into the tools your team already lives in.",
    links: [
      { label: "AI Agent Workflows", slug: "ai-agent-workflows" },
      { label: "LLM Engineering", slug: "llm-engineering" },
    ],
    stats: [
      { k: "Agents", v: "Custom AI agents" },
      { k: "Grounding", v: "RAG & knowledge bases" },
      { k: "Safety", v: "Evals & guardrails" },
    ],
    img: "/images/stage-ai.jpeg",
  },
  {
    id: "robotics",
    line1: "Robotics",
    body: "From prototype to deployment. Control systems, computer vision and firmware for robots that work in the real world.",
    links: [{ label: "Robotics", slug: "robotics" }],
    stats: [
      { k: "Control", v: "Systems & firmware" },
      { k: "Vision", v: "Computer vision" },
      { k: "Stack", v: "ROS · sensor fusion" },
    ],
    img: "/images/stage-robotics.jpeg",
  },
  {
    id: "drones",
    line1: "Drone",
    line2: "Operations",
    body: "Autonomous flight, aerial data and custom payloads. We build, fly and turn the footage into something useful.",
    links: [{ label: "Drone Operations", slug: "drone-operations" }],
    stats: [
      { k: "Flight", v: "Autonomous" },
      { k: "Data", v: "Mapping & survey" },
      { k: "Payloads", v: "Custom integration" },
    ],
    img: "/images/stage-drones.jpeg",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative">
      {/* centered statement leading into the theater */}
      <div className="px-5 pb-[clamp(5rem,13vw,11rem)] pt-[clamp(5rem,10vw,9rem)] md:px-[5vw]">
        <Reveal className="mx-auto max-w-4xl text-center">
          <SplitReveal
            as="h2"
            text="From the first pixel to the physical machine."
            accent={["machine."]}
            className="display text-balance text-[clamp(1.9rem,3.4vw,3.4rem)] leading-[1.1]"
          />
          <p className="mx-auto mt-7 max-w-md font-sans text-[15px] leading-relaxed text-muted">
            One studio across software, intelligence and hardware. You never hand
            off, re-brief a vendor, or hope the pieces fit. They fit because we
            build all of them.
          </p>
        </Reveal>
      </div>

      <PillarTheater pillars={pillars} />
    </section>
  );
}
