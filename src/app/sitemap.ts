import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { servicesContent } from "@/lib/services-content";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes = [
    { path: "/", priority: 1, changeFrequency: "weekly" as const },
    ...servicesContent.map((s) => ({
      path: `/services/${s.slug}`,
      priority: 0.8,
      changeFrequency: "monthly" as const,
    })),
    { path: "/privacy", priority: 0.3, changeFrequency: "yearly" as const },
    { path: "/terms", priority: 0.3, changeFrequency: "yearly" as const },
    { path: "/cookies", priority: 0.3, changeFrequency: "yearly" as const },
    { path: "/refund-policy", priority: 0.3, changeFrequency: "yearly" as const },
  ];

  return routes.map((r) => ({
    url: `${site.url}${r.path}`,
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
