import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import Services from "@/components/Services";

export const metadata: Metadata = {
  title: "Services — Software, AI, Robotics & Drones",
  description:
    "One studio across software, AI/LLM, robotics and drones — product design, web and mobile, AI agents, and autonomous systems, built end to end.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Services — Orvnix",
    description:
      "Software, AI agents, LLM engineering, robotics and drone operations — one embedded studio.",
    url: "https://orvnix.com/services",
    type: "website",
  },
};

export default function ServicesPage() {
  return (
    <PageShell crumb="Services">
      <Services />
    </PageShell>
  );
}
