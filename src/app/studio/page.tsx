import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import Studio from "@/components/Studio";

export const metadata: Metadata = {
  title: "Studio — About Orvnix",
  description:
    "A small, precise studio in Kolkata working worldwide. Small on purpose, deep by design — we sit at the seam where software meets intelligence meets machines.",
  alternates: { canonical: "/studio" },
  openGraph: {
    title: "Studio — Orvnix",
    description:
      "About Orvnix — a tight, senior studio in Kolkata building software, AI and autonomous systems.",
    url: "https://orvnix.com/studio",
    type: "website",
  },
};

export default function StudioPage() {
  return (
    <PageShell crumb="Studio">
      <Studio />
    </PageShell>
  );
}
