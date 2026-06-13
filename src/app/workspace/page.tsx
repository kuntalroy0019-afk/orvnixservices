import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import Workspace from "@/components/Workspace";

export const metadata: Metadata = {
  title: "Workspace — In-house Products",
  description:
    "Products coming out of the studio: an Agentic AI Calling System and Orvnix CRM — the same craft we bring to partner work, pointed at problems we felt ourselves.",
  alternates: { canonical: "/workspace" },
  openGraph: {
    title: "Workspace — Orvnix",
    description:
      "Our in-house products: an Agentic AI Calling System and an AI-native CRM.",
    url: "https://orvnix.com/workspace",
    type: "website",
  },
};

export default function WorkspacePage() {
  return (
    <PageShell crumb="Workspace">
      <Workspace />
    </PageShell>
  );
}
