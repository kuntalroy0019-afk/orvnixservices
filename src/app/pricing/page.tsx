import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import Pricing from "@/components/Pricing";

export const metadata: Metadata = {
  title: "Pricing — Ways to Work Together",
  description:
    "Three ways in — ongoing, embedded, or fixed-scope — and one conversation to start. No contracts to puzzle over, no lock-in.",
  alternates: { canonical: "/pricing" },
  openGraph: {
    title: "Pricing — Orvnix",
    description:
      "Flexible engagement models: ongoing, embedded, or one-off. Start a conversation.",
    url: "https://orvnix.com/pricing",
    type: "website",
  },
};

export default function PricingPage() {
  return (
    <PageShell crumb="Pricing">
      <Pricing />
    </PageShell>
  );
}
