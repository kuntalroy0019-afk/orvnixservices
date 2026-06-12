import type { Metadata, Viewport } from "next";
import { Geist, IBM_Plex_Mono, Bricolage_Grotesque } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// Monospace for indices, coordinates and technical metadata (engineered grammar).
const plexMono = IBM_Plex_Mono({
  variable: "--font-geist-mono",
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});

// Distinctive contemporary grotesque for display headlines.
const displayGrotesque = Bricolage_Grotesque({
  variable: "--font-display",
  weight: ["600", "700", "800"],
  subsets: ["latin"],
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
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
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
  themeColor: "#090c02",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${plexMono.variable} ${displayGrotesque.variable} h-full antialiased`}
    >
      <body className="grain blueprint min-h-full flex flex-col">{children}</body>
    </html>
  );
}
