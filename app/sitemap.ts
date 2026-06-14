import { MetadataRoute } from "next";
import { CHAMPIONS } from "@/app/data/champions";

const LOCALES = ["ko", "en"] as const;
const LAST_MODIFIED = new Date("2025-03-01");

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://loltip.com";

  const urls: MetadataRoute.Sitemap = [];

  for (const locale of LOCALES) {
    // 메인
    urls.push({
      url: `${baseUrl}/${locale}/champ`,
      changeFrequency: "daily",
      priority: locale === "ko" ? 1 : 0.9,
      lastModified: LAST_MODIFIED,
    });

    // 단일 챔피언 페이지
    for (const champ of CHAMPIONS) {
      urls.push({
        url: `${baseUrl}/${locale}/champ/${champ.id}`,
        changeFrequency: "weekly",
        priority: locale === "ko" ? 0.8 : 0.7,
        lastModified: LAST_MODIFIED,
      });
    }

    // 모든 매치업 페이지
    for (let i = 0; i < CHAMPIONS.length; i++) {
      for (let j = i + 1; j < CHAMPIONS.length; j++) {
        const [champ1, champ2] = [CHAMPIONS[i].id, CHAMPIONS[j].id].sort();
        const pair = `${champ1}-vs-${champ2}`;
        urls.push({
          url: `${baseUrl}/${locale}/matchup/${pair}`,
          changeFrequency: "weekly",
          priority: locale === "ko" ? 0.7 : 0.6,
          lastModified: LAST_MODIFIED,
        });
      }
    }
  }

  return urls;
}
