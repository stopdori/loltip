import { MetadataRoute } from "next";
import { CHAMPIONS } from "@/app/data/champions";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.loltip.com";

  const champPages = CHAMPIONS.map((champ) => ({
    url: `${baseUrl}/champ/${champ.id}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    ...champPages,
  ];
}