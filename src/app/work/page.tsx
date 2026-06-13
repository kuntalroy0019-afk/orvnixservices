import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import Work from "@/components/Work";

export const metadata: Metadata = {
  title: "Work — Concepts & Explorations",
  description:
    "Self-initiated concepts across AI, developer tools, fintech, analytics, robotics and drones — honest explorations of the problems we love to solve.",
  alternates: { canonical: "/work" },
  openGraph: {
    title: "Work — Orvnix",
    description:
      "Concept work that shows how we think — software, AI, robotics and drone explorations.",
    url: "https://orvnix.com/work",
    type: "website",
  },
};

export default function WorkPage() {
  return (
    <PageShell crumb="Work">
      <Work />
    </PageShell>
  );
}
