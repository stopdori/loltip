import { MetadataRoute } from "next";
import { CHAMPIONS } from "@/app/data/champions";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.loltip.com";

  const urls: MetadataRoute.Sitemap = [];

  // 메인
  urls.push({
    url: `${baseUrl}/champ`,
    lastModified: new Date(),
    changeFrequency: "daily",
    priority: 1,
  });

  // 단일 챔피언 페이지
  for (const champ of CHAMPIONS) {
    urls.push({
      url: `${baseUrl}/champ/${champ.id}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    });
  }

  // ★ 핵심: 모든 매치업 페이지 생성
  for (let i = 0; i < CHAMPIONS.length; i++) {
    for (let j = i + 1; j < CHAMPIONS.length; j++) {
      const a = CHAMPIONS[i].id;
      const b = CHAMPIONS[j].id;

      const pair = [a, b].sort().join("-vs-");

      urls.push({
        url: `${baseUrl}/matchup/${pair}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.7,
      });
    }
  }

  return urls;
}