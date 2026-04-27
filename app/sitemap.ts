import { MetadataRoute } from "next";
import { CHAMPIONS } from "@/app/data/champions";
import fs from "fs";
import path from "path";

const LOCALES = ["ko", "en"] as const;
const FALLBACK_DATE = new Date("2025-03-01");

function getMtime(filePath: string): Date {
  try {
    return fs.statSync(filePath).mtime;
  } catch {
    return FALLBACK_DATE;
  }
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.loltip.com";
  const root = process.cwd();

  const urls: MetadataRoute.Sitemap = [];

  // 챔프 mtime 사전 계산
  const champMtimes = new Map<string, Date>();
  for (const champ of CHAMPIONS) {
    const filePath = path.join(root, "app", "data", "champs", `${champ.id}.ts`);
    champMtimes.set(champ.id, getMtime(filePath));
  }

  // 매치업 mtime 사전 계산
  const matchupMtimes = new Map<string, Date>();
  for (let i = 0; i < CHAMPIONS.length; i++) {
    for (let j = i + 1; j < CHAMPIONS.length; j++) {
      const [champ1, champ2] = [CHAMPIONS[i].id, CHAMPIONS[j].id].sort();
      const key = `${champ1}-vs-${champ2}`;
      const filePath = path.join(root, "app", "data", "matchups", champ1, `${champ1}_${champ2}.ts`);
      matchupMtimes.set(key, getMtime(filePath));
    }
  }

  for (const locale of LOCALES) {
    // 메인
    urls.push({
      url: `${baseUrl}/${locale}/champ`,
      changeFrequency: "daily",
      priority: locale === "ko" ? 1 : 0.9,
      lastModified: FALLBACK_DATE,
    });

    // 단일 챔피언 페이지
    for (const champ of CHAMPIONS) {
      urls.push({
        url: `${baseUrl}/${locale}/champ/${champ.id}`,
        changeFrequency: "weekly",
        priority: locale === "ko" ? 0.8 : 0.7,
        lastModified: champMtimes.get(champ.id),
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
          lastModified: matchupMtimes.get(pair),
        });
      }
    }
  }

  return urls;
}