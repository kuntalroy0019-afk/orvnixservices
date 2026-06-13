import type { Metadata } from "next";
import PageShell from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Contact — Start a Conversation",
  description:
    "Tell us what you're trying to build. We take on a small number of teams at a time and usually reply within a day — no pitch, no pressure.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact — Orvnix",
    description:
      "Start a conversation with the studio — software, AI, robotics and drones.",
    url: "https://orvnix.com/contact",
    type: "website",
  },
};

export default function ContactPage() {
  // PageShell appends the shared contact CTA after its children, so the page
  // body is that CTA — no duplication.
  return <PageShell crumb="Contact" />;
}
