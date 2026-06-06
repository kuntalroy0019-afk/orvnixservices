import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const displaySerif = Instrument_Serif({
  variable: "--font-display",
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://orvnix.com"),
  title: {
    default: "Orvnix — A studio for software, AI & autonomous systems",
    template: "%s — Orvnix",
  },
  description:
    "Orvnix is a Kolkata-based studio building software, AI, LLM, robotics and drone systems. We embed with a small number of teams and ship what matters. Start a conversation.",
  keywords: [
    "Orvnix",
    "product studio",
    "AI agents",
    "LLM engineering",
    "robotics",
    "drone operations",
    "software development",
    "Kolkata",
  ],
  openGraph: {
    title: "Orvnix — A studio for software, AI & autonomous systems",
    description:
      "We embed with a small number of ambitious teams and build software, AI, robotics and drone systems worth shipping.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${displaySerif.variable} h-full antialiased`}
    >
      <body className="grain min-h-full flex flex-col">{children}</body>
    </html>
  );
}
