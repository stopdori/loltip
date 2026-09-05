import { MetadataRoute } from "next";
import fs from "node:fs";
import path from "node:path";
import { CHAMPIONS } from "@/app/data/champions";
import { hasContent, type MatchupSummary } from "@/app/data/matchups/_types";

const LOCALES = ["ko", "en"] as const;
const LAST_MODIFIED = new Date("2025-03-01");
const MATCHUP_DIR = path.join(process.cwd(), "app/data/matchups");

function extractObjectLiteral(src: string): string | null {
  const trimmed = src.trimEnd();
  const match = trimmed.match(/=\s*(\{[\s\S]*\})\s*;\s*$/);
  return match ? match[1] : null;
}

function parseMatchupFile(filePath: string): MatchupSummary | null {
  const src = fs.readFileSync(filePath, "utf8");
  const literal = extractObjectLiteral(src);
  if (!literal) return null;
  try {
    // 매치업 데이터 파일은 저장소 내부 신뢰된 데이터이며, 정적 import 없이
    // 객체 리터럴만 빠르게 파싱하기 위해 eval을 사용한다.
    // eslint-disable-next-line no-eval
    return (0, eval)("(" + literal + ")") as MatchupSummary;
  } catch {
    return null;
  }
}

function hasIndexableContent(
  data: MatchupSummary,
  champA: string,
  champB: string,
  lang: (typeof LOCALES)[number]
): boolean {
  return (
    hasContent(data.highlightsByChamp?.[champA]?.[lang]) ||
    hasContent(data.highlightsByChamp?.[champB]?.[lang]) ||
    hasContent(data.common?.[lang])
  );
}

function getIndexableMatchupPairs(): Record<(typeof LOCALES)[number], string[]> {
  const pairsByLocale: Record<(typeof LOCALES)[number], string[]> = {
    ko: [],
    en: [],
  };
  if (!fs.existsSync(MATCHUP_DIR)) return pairsByLocale;

  for (const folderEntry of fs.readdirSync(MATCHUP_DIR, { withFileTypes: true })) {
    if (!folderEntry.isDirectory()) continue;
    const champA = folderEntry.name;
    const folderPath = path.join(MATCHUP_DIR, champA);

    for (const fileEntry of fs.readdirSync(folderPath, { withFileTypes: true })) {
      if (!fileEntry.isFile() || !fileEntry.name.endsWith(".ts")) continue;

      const baseName = fileEntry.name.slice(0, -3);
      if (!baseName.startsWith(`${champA}_`)) continue;
      const champB = baseName.slice(champA.length + 1);

      const data = parseMatchupFile(path.join(folderPath, fileEntry.name));
      if (!data) continue;

      const pair = `${champA}-vs-${champB}`;
      for (const locale of LOCALES) {
        if (hasIndexableContent(data, champA, champB, locale)) {
          pairsByLocale[locale].push(pair);
        }
      }
    }
  }

  return pairsByLocale;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://loltip.com";

  const urls: MetadataRoute.Sitemap = [];
  const indexablePairsByLocale = getIndexableMatchupPairs();

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

    // 퀴즈
    urls.push({
      url: `${baseUrl}/${locale}/quiz`,
      changeFrequency: "weekly",
      priority: locale === "ko" ? 0.8 : 0.7,
      lastModified: LAST_MODIFIED,
    });

    // 태그 레퍼런스
    urls.push({
      url: `${baseUrl}/${locale}/tags`,
      changeFrequency: "monthly",
      priority: locale === "ko" ? 0.6 : 0.5,
      lastModified: LAST_MODIFIED,
    });

    // 개인정보처리방침
    urls.push({
      url: `${baseUrl}/${locale}/privacy`,
      changeFrequency: "yearly",
      priority: locale === "ko" ? 0.3 : 0.3,
      lastModified: LAST_MODIFIED,
    });

    // 해당 locale 콘텐츠가 실제로 존재하는 매치업 페이지만 포함
    for (const pair of indexablePairsByLocale[locale]) {
      urls.push({
        url: `${baseUrl}/${locale}/matchup/${pair}`,
        changeFrequency: "weekly",
        priority: locale === "ko" ? 0.7 : 0.6,
        lastModified: LAST_MODIFIED,
      });
    }
  }

  return urls;
}
