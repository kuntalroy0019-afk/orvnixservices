import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  // Explicitly welcome AI / answer-engine crawlers so Orvnix can be cited
  // in ChatGPT, Claude, Perplexity, Gemini and Google AI results.
  const aiBots = [
    "GPTBot",
    "OAI-SearchBot",
    "ChatGPT-User",
    "ClaudeBot",
    "Claude-Web",
    "anthropic-ai",
    "PerplexityBot",
    "Perplexity-User",
    "Google-Extended",
    "Applebot-Extended",
    "Amazonbot",
    "Bytespider",
    "CCBot",
    "cohere-ai",
    "DuckAssistBot",
    "Meta-ExternalAgent",
  ];

  return {
    rules: [
      { userAgent: "*", allow: "/" },
      { userAgent: aiBots, allow: "/" },
    ],
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
