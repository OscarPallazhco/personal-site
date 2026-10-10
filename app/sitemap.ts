import type { MetadataRoute } from "next";

const siteUrl = "https://oscarpallazhco.github.io";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${siteUrl}/kanban-demo/`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${siteUrl}/game/`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];
}
