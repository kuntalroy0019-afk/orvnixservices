import type { Metadata, Viewport } from "next";
import { Geist, IBM_Plex_Mono, Fraunces } from "next/font/google";
import { site } from "@/lib/site";
import SmoothScroll from "@/components/SmoothScroll";
import ScrollCue from "@/components/ScrollCue";
import HomeDial from "@/components/HomeDial";
import Cursor from "@/components/Cursor";
import Intro from "@/components/Intro";
import Backdrop from "@/components/Backdrop";
import "./globals.css";

// Secondary voice: neutral grotesque for labels, nav and UI chrome.
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// Monospace kept for coordinates and fine technical metadata.
const plexMono = IBM_Plex_Mono({
  variable: "--font-geist-mono",
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});

// Primary voice: a sharp editorial serif with optical sizing — display and body.
const displaySerif = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Orvnix — Software, AI, Robotics & Drone Studio in Kolkata",
    template: "%s — Orvnix",
  },
  description:
    "Orvnix is a Kolkata-based studio building software, AI agents, LLM, robotics and drone systems. We embed with a small number of teams and ship what matters. Start a conversation.",
  applicationName: "Orvnix",
  authors: [{ name: "Orvnix", url: site.url }],
  creator: "Orvnix",
  publisher: "Orvnix",
  category: "technology",
  keywords: [
    "Orvnix",
    "software development company Kolkata",
    "AI development agency",
    "AI agents",
    "agentic AI calling system",
    "LLM engineering",
    "machine learning",
    "robotics company India",
    "drone services Kolkata",
    "web development",
    "mobile app development",
    "product design studio",
    "CRM software",
    "Kolkata",
    "West Bengal",
    "India",
  ],
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/icon.svg" }],
  },
  openGraph: {
    title: "Orvnix — Software, AI, Robotics & Drone Studio",
    description:
      "We embed with a small number of ambitious teams and build software, AI, robotics and drone systems worth shipping. Based in Kolkata, working worldwide.",
    url: site.url,
    siteName: "Orvnix",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Orvnix — Software, AI, Robotics & Drone Studio",
    description:
      "A Kolkata studio building software, AI, LLM, robotics and drone systems. Start a conversation.",
    creator: site.twitterHandle,
    site: site.twitterHandle,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  other: {
    "geo.region": `${site.address.countryCode}-WB`,
    "geo.placename": site.address.city,
    "geo.position": `${site.geo.lat};${site.geo.lng}`,
    ICBM: `${site.geo.lat}, ${site.geo.lng}`,
  },
};

export const viewport: Viewport = {
  themeColor: "#f4f2ee",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${plexMono.variable} ${displaySerif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Intro />
        <Backdrop />
        <SmoothScroll />
        {children}
        <ScrollCue />
        <HomeDial />
        <Cursor />
      </body>
    </html>
  );
}
