import { MetadataRoute } from "next";
import { CHAMPIONS } from "@/app/data/champions";

const LOCALES = ["ko", "en"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.loltip.com";
  const now = new Date();

  const urls: MetadataRoute.Sitemap = [];

  for (const locale of LOCALES) {
    // 메인
    urls.push({
      url: `${baseUrl}/${locale}/champ`,
      lastModified: now,
      changeFrequency: "daily",
      priority: locale === "ko" ? 1 : 0.9,
    });

    // 단일 챔피언 페이지
    for (const champ of CHAMPIONS) {
      urls.push({
        url: `${baseUrl}/${locale}/champ/${champ.id}`,
        lastModified: now,
        changeFrequency: "weekly",
        priority: locale === "ko" ? 0.8 : 0.7,
      });
    }

    // 모든 매치업 페이지
    for (let i = 0; i < CHAMPIONS.length; i++) {
      for (let j = i + 1; j < CHAMPIONS.length; j++) {
        const pair = [CHAMPIONS[i].id, CHAMPIONS[j].id].sort().join("-vs-");
        urls.push({
          url: `${baseUrl}/${locale}/matchup/${pair}`,
          lastModified: now,
          changeFrequency: "weekly",
          priority: locale === "ko" ? 0.7 : 0.6,
        });
      }
    }
  }

  return urls;
}