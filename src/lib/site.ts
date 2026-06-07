export const site = {
  name: "Orvnix",
  legalName: "Orvnix",
  // Update this to your live domain when you deploy.
  url: "https://orvnix.com",
  tagline: "A studio for software, AI & autonomous systems",
  description:
    "Orvnix is a Kolkata-based studio building software, AI, LLM, robotics and drone systems. We embed with a small number of teams and ship what matters.",
  email: "admin@orvnix.com",
  emailAlt: "hello@orvnix.com",
  foundingYear: "2021",
  address: {
    line1: "Nalta, Bakultala Road, Dum Dum",
    city: "Kolkata",
    state: "West Bengal",
    postcode: "700028",
    country: "India",
    countryCode: "IN",
  },
  // Approx. coordinates for Dum Dum, Kolkata — refine to your exact location.
  geo: {
    lat: 22.642,
    lng: 88.4312,
  },
  // Areas the studio serves (helps local + regional SEO).
  areaServed: ["Kolkata", "West Bengal", "India", "Worldwide"],
  // Update these to your real profiles — used for sameAs in structured data.
  socials: {
    linkedin: "https://www.linkedin.com/company/orvnix",
    x: "https://x.com/orvnix",
    instagram: "https://www.instagram.com/orvnix",
    github: "https://github.com/kuntalroy0019-afk/orvnixservices",
  },
  // Twitter handle for cards (without URL).
  twitterHandle: "@orvnix",
  legalUpdated: "7 June 2026",
};

export const fullAddress = `${site.address.line1}, ${site.address.city}, ${site.address.state} ${site.address.postcode}, ${site.address.country}`;

export const sameAs = Object.values(site.socials);

/** Services offered — reused for the page and for Service structured data. */
export const services = [
  {
    name: "Product Design",
    description:
      "Research, UX, UI and design systems that turn ideas into interfaces people want to use.",
  },
  {
    name: "Web Development",
    description:
      "Fast, accessible, production-ready front-ends and the back-ends behind them.",
  },
  {
    name: "Mobile App Development",
    description: "Native-quality iOS and Android, from first build to launch.",
  },
  {
    name: "Branding & Creative",
    description: "Visual identity, motion and creative direction.",
  },
  {
    name: "AI Agent Workflows",
    description:
      "Autonomous AI agents wired into the tools your team already uses.",
  },
  {
    name: "LLM Engineering",
    description:
      "Fine-tuning, prompt and context systems, and dependable model deployment.",
  },
  {
    name: "Robotics",
    description:
      "Control systems, computer vision and firmware for robots in the real world.",
  },
  {
    name: "Drone Operations",
    description:
      "Autonomous flight, aerial mapping and custom payloads with data pipelines.",
  },
];

/** FAQs — reused for the FAQ UI and FAQPage structured data. */
export const faqs = [
  {
    q: "How quickly can we begin?",
    a: "Usually within a few business days of our first call. Once we've agreed it's a fit, we're inside your stack and moving on the first piece of work almost immediately.",
  },
  {
    q: "What if we only need you some months?",
    a: "That's how most of our engagements work. Ease off when the roadmap quietens, pick back up when it doesn't. You're never paying for a team sitting idle.",
  },
  {
    q: "Who actually does the work?",
    a: "A small, senior, cross-functional team — engineers, AI and LLM specialists, robotics and drone operators, and a creative director. No juniors learning on your time, no offshoring.",
  },
  {
    q: "How is this different from hiring?",
    a: "Hiring takes months and locks you in. We cover the whole surface — software, AI, hardware — stay accountable to your roadmap, and scale up or down without anyone being re-hired or let go.",
  },
  {
    q: "Do you work in our tools and codebase?",
    a: "Yes. We embed directly — your repository, your design files, your board, your channel of choice. It should feel like we were always there.",
  },
  {
    q: "Who owns the work?",
    a: "You do. Every deliverable, file and line of code is yours, handed over as we go. No hostage situations.",
  },
];
