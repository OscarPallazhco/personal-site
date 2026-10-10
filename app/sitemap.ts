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
  ];
}
