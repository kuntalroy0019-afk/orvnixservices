export type ServiceContent = {
  slug: string;
  name: string;
  category: string;
  tagline: string;
  intro: string[];
  capabilities: string[];
  approach: { title: string; body: string }[];
  faqs: { q: string; a: string }[];
  image: string;
  keywords: string[];
};

export const servicesContent: ServiceContent[] = [
  {
    slug: "ai-agent-workflows",
    name: "AI Agent Workflows",
    category: "Artificial Intelligence",
    tagline: "Autonomous agents that do real work inside your business.",
    intro: [
      "We design and ship AI agents that go beyond chat — agents that take actions, call tools, move data and complete multi-step tasks while a human stays in control of the outcomes that matter.",
      "From customer support that resolves tickets end-to-end to internal operations that quietly run themselves, we build agentic systems grounded in your data and wired into the tools your team already uses.",
    ],
    capabilities: [
      "Custom single- and multi-agent systems",
      "Retrieval-augmented generation (RAG) over your knowledge",
      "Tool, API and database orchestration",
      "Human-in-the-loop review and approvals",
      "Evaluation harnesses, guardrails and monitoring",
      "Cost and latency optimisation",
    ],
    approach: [
      {
        title: "Ground it in your data",
        body: "We connect agents to your real sources — docs, tickets, databases — so answers and actions reflect your business, not the open internet.",
      },
      {
        title: "Make it reliable",
        body: "Every agent ships with evals, guardrails and observability, so you can trust what it does and catch regressions before your users do.",
      },
      {
        title: "Keep humans in command",
        body: "We design clear hand-off points so people approve the decisions that carry risk, while the agent handles the repetitive volume.",
      },
    ],
    faqs: [
      {
        q: "What can an AI agent actually automate?",
        a: "Anything that follows a repeatable pattern across your tools — triaging and resolving support tickets, qualifying leads, drafting and routing documents, reconciling data between systems, and more.",
      },
      {
        q: "How do you stop it making things up?",
        a: "We ground agents in your own data with retrieval, constrain them with guardrails, and run continuous evaluations. High-risk actions are gated behind human approval.",
      },
    ],
    image: "/images/work-sentinel.jpeg",
    keywords: [
      "AI agent development",
      "agentic AI",
      "AI automation",
      "RAG development",
      "AI workflow automation India",
    ],
  },
  {
    slug: "llm-engineering",
    name: "LLM Engineering",
    category: "Artificial Intelligence",
    tagline: "Large language models, made dependable in production.",
    intro: [
      "Most LLM projects stall between a promising demo and a system you can trust. We close that gap — fine-tuning, grounding, evaluating and deploying models that hold up under real traffic.",
      "Whether you need a private model on your own infrastructure or a fine-tuned adapter for a specific task, we build the full pipeline around it: prompts, context, safety, monitoring and cost control.",
    ],
    capabilities: [
      "Fine-tuning and lightweight adapters (LoRA)",
      "Prompt and context engineering systems",
      "Private and on-premise model deployment",
      "Inference optimisation and caching",
      "Safety, red-teaming and evaluation",
      "Token-cost and latency budgeting",
    ],
    approach: [
      {
        title: "Right model, right job",
        body: "We pick the smallest model that meets the bar — balancing quality, speed and cost rather than reaching for the biggest by default.",
      },
      {
        title: "Measure everything",
        body: "We build evaluation sets specific to your use case, so quality is a number you can track, not a vibe.",
      },
      {
        title: "Own your stack",
        body: "Where it matters, we deploy models you control — your infrastructure, your data, no third party in the loop.",
      },
    ],
    faqs: [
      {
        q: "Do we need to fine-tune a model?",
        a: "Often not. Strong prompting and retrieval solve most problems. We recommend fine-tuning only when evals show it clearly earns its keep.",
      },
      {
        q: "Can the model run on our own servers?",
        a: "Yes. We deploy open-weight models privately when data residency, cost or control require it.",
      },
    ],
    image: "/images/work-mistveil.jpeg",
    keywords: [
      "LLM engineering",
      "fine-tuning",
      "private LLM deployment",
      "prompt engineering",
      "machine learning company India",
    ],
  },
  {
    slug: "robotics",
    name: "Robotics",
    category: "Autonomous Systems",
    tagline: "From prototype to deployment, for robots that work in the real world.",
    intro: [
      "We build the software and control systems that make robots useful — perception, planning and control that take a machine from a lab demo to a reliable part of an operation.",
      "Across warehouse automation, inspection and custom builds, we cover the full stack: firmware and embedded code, computer vision, sensor fusion and the interfaces people use to run it all.",
    ],
    capabilities: [
      "Control systems and motion planning",
      "Computer vision and perception",
      "Firmware and embedded development",
      "ROS / ROS 2 development",
      "Sensor fusion and calibration",
      "Operator dashboards and tele-operation",
    ],
    approach: [
      {
        title: "Prototype fast",
        body: "We get a working proof-of-concept moving early, so you can see the hard problems before committing to a full build.",
      },
      {
        title: "Engineer for the field",
        body: "Real environments are messy. We build for the edge cases — lighting, noise, failure modes — not just the happy path.",
      },
      {
        title: "Make it operable",
        body: "A robot is only useful if your team can run it. We ship the dashboards, logs and controls that make that effortless.",
      },
    ],
    faqs: [
      {
        q: "Do you build the hardware too?",
        a: "We specialise in the software, control and vision that bring hardware to life, and partner on the mechanical and electrical side where a build needs it.",
      },
      {
        q: "Can you work with our existing robots?",
        a: "Yes. We frequently add perception, autonomy or better operator tooling on top of existing platforms.",
      },
    ],
    image: "/images/work-atlas.jpeg",
    keywords: [
      "robotics company India",
      "robotics software development",
      "computer vision",
      "ROS development",
      "warehouse automation",
    ],
  },
  {
    slug: "drone-operations",
    name: "Drone Operations",
    category: "Autonomous Systems",
    tagline: "Autonomous flight, aerial data and the pipelines that make it useful.",
    intro: [
      "We build and fly autonomous drone systems — and, just as importantly, turn the footage they capture into data you can actually act on.",
      "From mapping and surveying to inspection and custom payloads, we handle flight planning, autonomy and the processing pipeline that converts raw aerial captures into maps, models and reports.",
    ],
    capabilities: [
      "Autonomous and waypoint flight",
      "Aerial mapping, surveying and 3D models",
      "Flight planning and mission software",
      "Custom payload integration",
      "Photogrammetry and data processing",
      "Inspection and reporting workflows",
    ],
    approach: [
      {
        title: "Fly with intent",
        body: "Every mission is planned around the data you need, so a single flight captures exactly what the downstream pipeline expects.",
      },
      {
        title: "Turn pixels into answers",
        body: "Raw footage isn't the deliverable. We build the pipeline that produces orthomosaics, 3D models and the metrics you act on.",
      },
      {
        title: "Operate responsibly",
        body: "We plan around airspace rules and site permissions, and build operations that are safe, logged and repeatable.",
      },
    ],
    faqs: [
      {
        q: "What can drone surveys deliver?",
        a: "High-resolution maps, orthomosaics, elevation models, 3D site reconstructions and inspection reports — far faster and cheaper than ground methods.",
      },
      {
        q: "Do you handle regulations?",
        a: "We plan operations in line with applicable aviation rules, including India's DGCA framework for unmanned aircraft, and coordinate the permissions a site needs.",
      },
    ],
    image: "/images/work-skyline.jpeg",
    keywords: [
      "drone services Kolkata",
      "drone survey",
      "aerial mapping",
      "drone inspection India",
      "photogrammetry",
    ],
  },
  {
    slug: "web-development",
    name: "Web Development",
    category: "Software",
    tagline: "Fast, accessible, production-ready web — built to scale, not to demo.",
    intro: [
      "We build web products that are quick, dependable and a pleasure to use — marketing sites, web apps and dashboards engineered for real traffic and real teams.",
      "Modern front-ends, solid back-ends, and the performance and SEO foundations that help the work get found and stay fast as it grows.",
    ],
    capabilities: [
      "Next.js and React applications",
      "Marketing sites and landing pages",
      "Web apps and admin dashboards",
      "APIs and third-party integrations",
      "Performance, accessibility and SEO",
      "Analytics and instrumentation",
    ],
    approach: [
      {
        title: "Performance first",
        body: "We build for Core Web Vitals from the start — fast loads, smooth interaction and search engines that reward it.",
      },
      {
        title: "Accessible by default",
        body: "Semantic, keyboard-friendly, screen-reader-ready. Good for users, and good for ranking.",
      },
      {
        title: "Built to maintain",
        body: "Clean, typed, documented code your team can extend long after we hand it over.",
      },
    ],
    faqs: [
      {
        q: "Which stack do you use?",
        a: "Typically Next.js, React and TypeScript, with the back-end and database chosen to fit the product. We're pragmatic, not dogmatic.",
      },
      {
        q: "Will the site be SEO-ready?",
        a: "Yes. Server rendering, clean metadata, structured data, sitemaps and fast performance are baked in — the same foundations this very site ships with.",
      },
    ],
    image: "/images/work-nodeforge.jpeg",
    keywords: [
      "web development company Kolkata",
      "Next.js development",
      "React development",
      "web application development",
      "SEO-friendly websites",
    ],
  },
  {
    slug: "mobile-app-development",
    name: "Mobile App Development",
    category: "Software",
    tagline: "Native-quality iOS and Android from a single team.",
    intro: [
      "We design and build mobile apps that feel native, perform well and ship on time — from first build through App Store and Play Store launch and the iterations after.",
      "One team covers design, engineering and release, so your app looks and behaves like one coherent product across every device.",
    ],
    capabilities: [
      "iOS and Android apps",
      "React Native and cross-platform",
      "App Store and Play Store delivery",
      "Push notifications and analytics",
      "Offline-first and sync",
      "Ongoing iteration and support",
    ],
    approach: [
      {
        title: "Design and build together",
        body: "Designers and engineers work as one team, so what's designed is what ships — no lossy hand-offs.",
      },
      {
        title: "Ship to the stores",
        body: "We handle the unglamorous parts — review guidelines, signing, release pipelines — so launch is a non-event.",
      },
      {
        title: "Iterate on real usage",
        body: "Analytics and crash reporting from day one mean every release is informed by how people actually use the app.",
      },
    ],
    faqs: [
      {
        q: "Native or cross-platform?",
        a: "We choose per project. Cross-platform (React Native) covers most needs efficiently; we go fully native when performance or platform features demand it.",
      },
      {
        q: "Do you handle store submission?",
        a: "Yes — end to end, including review, signing and phased rollout on both the App Store and Google Play.",
      },
    ],
    image: "/images/work-paceline.jpeg",
    keywords: [
      "mobile app development Kolkata",
      "iOS app development",
      "Android app development",
      "React Native development",
      "app developers India",
    ],
  },
  {
    slug: "product-design",
    name: "Product Design",
    category: "Design",
    tagline: "Research, UX and UI that turn ideas into products people use.",
    intro: [
      "We design products end to end — from the research that finds the real problem to the interface that solves it and the design system that keeps it consistent as it grows.",
      "Less decoration, more decisions. We design for clarity, speed and the outcomes your business actually cares about.",
    ],
    capabilities: [
      "User research and flows",
      "Wireframing and prototyping",
      "High-fidelity UI design",
      "Design systems and components",
      "Usability testing",
      "Design-to-development hand-off",
    ],
    approach: [
      {
        title: "Start with the problem",
        body: "We research before we draw, so the design solves something real rather than looking good in a portfolio.",
      },
      {
        title: "Prototype to decide",
        body: "Interactive prototypes let us test and resolve the hard interactions before a line of production code is written.",
      },
      {
        title: "Systematise it",
        body: "We deliver a design system, not just screens, so the product stays coherent as your team builds on it.",
      },
    ],
    faqs: [
      {
        q: "Do you only design, or build too?",
        a: "Both. Because the same studio engineers the product, our designs are made to be built — and they get built well.",
      },
      {
        q: "Will we get a design system?",
        a: "For anything beyond a small scope, yes — reusable components and guidelines your team can extend.",
      },
    ],
    image: "/images/work-quanta.jpeg",
    keywords: [
      "product design studio",
      "UX UI design Kolkata",
      "design system",
      "product design agency India",
      "user experience design",
    ],
  },
  {
    slug: "branding",
    name: "Branding & Creative",
    category: "Design",
    tagline: "Identity, motion and creative direction that tie it all together.",
    intro: [
      "We build brands that look as considered as the products behind them — identity, guidelines, motion and the creative direction that keeps everything feeling like one thing.",
      "A brand isn't a logo. It's the whole impression. We design that impression to be distinctive, consistent and unmistakably yours.",
    ],
    capabilities: [
      "Visual identity and logo design",
      "Brand guidelines",
      "Motion and animation",
      "Pitch decks and presentations",
      "Creative direction",
      "Marketing and launch assets",
    ],
    approach: [
      {
        title: "Find the angle",
        body: "We dig for what actually makes you different, then build an identity around that — not around trends.",
      },
      {
        title: "Design the system",
        body: "Colour, type, motion and voice as a coherent kit, so the brand holds together everywhere it appears.",
      },
      {
        title: "Make it move",
        body: "Motion turns a static identity into a living one — for product, web and the moments that need to land.",
      },
    ],
    faqs: [
      {
        q: "Can you rebrand an existing company?",
        a: "Yes. We handle full rebrands as well as refreshes, and roll the new identity across product, web and marketing.",
      },
      {
        q: "Do you deliver brand guidelines?",
        a: "Always. You get a clear, usable guideline set so the brand stays consistent however your team applies it.",
      },
    ],
    image: "/images/work-brightkit.jpeg",
    keywords: [
      "branding agency Kolkata",
      "logo design",
      "brand identity",
      "creative studio India",
      "motion design",
    ],
  },
];

export function getService(slug: string) {
  return servicesContent.find((s) => s.slug === slug);
}
