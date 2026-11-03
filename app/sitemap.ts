import { MetadataRoute } from "next";
import fs from "node:fs";
import path from "node:path";
import { CHAMPIONS } from "@/app/data/champions";
import { listIndexableMatchupPairs } from "@/app/data/matchups/_index";

const LOCALES = ["ko", "en"] as const;
// 페이지별 마지막 커밋일 매니페스트 (scripts/gen-lastmod.mjs가 로컬 git log로 생성)
const LASTMOD_PATH = path.join(process.cwd(), "app/data/_lastmod.json");

type LastmodManifest = {
  pages: Record<string, string>;
  champs: Record<string, string>;
  matchups: Record<string, string>;
};

function loadLastmod(): LastmodManifest {
  try {
    return JSON.parse(fs.readFileSync(LASTMOD_PATH, "utf8")) as LastmodManifest;
  } catch {
    return { pages: {}, champs: {}, matchups: {} };
  }
}

// 매니페스트에 없는 항목은 lastModified를 생략 (가짜 날짜를 넣지 않음)
function lastmodOf(date: string | undefined): { lastModified?: string } {
  return date ? { lastModified: date } : {};
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://loltip.com";

  const urls: MetadataRoute.Sitemap = [];
  const lastmod = loadLastmod();

  for (const locale of LOCALES) {
    // 메인
    urls.push({
      url: `${baseUrl}/${locale}/champ`,
      changeFrequency: "daily",
      priority: locale === "ko" ? 1 : 0.9,
      ...lastmodOf(lastmod.pages.champ),
    });

    // 단일 챔피언 페이지
    for (const champ of CHAMPIONS) {
      urls.push({
        url: `${baseUrl}/${locale}/champ/${champ.id}`,
        changeFrequency: "weekly",
        priority: locale === "ko" ? 0.8 : 0.7,
        ...lastmodOf(lastmod.champs[champ.id]),
      });
    }

    // 퀴즈
    urls.push({
      url: `${baseUrl}/${locale}/quiz`,
      changeFrequency: "weekly",
      priority: locale === "ko" ? 0.8 : 0.7,
      ...lastmodOf(lastmod.pages.quiz),
    });

    // 태그 레퍼런스
    urls.push({
      url: `${baseUrl}/${locale}/tags`,
      changeFrequency: "monthly",
      priority: locale === "ko" ? 0.6 : 0.5,
      ...lastmodOf(lastmod.pages.tags),
    });

    // 사이트 소개
    urls.push({
      url: `${baseUrl}/${locale}/about`,
      changeFrequency: "yearly",
      priority: locale === "ko" ? 0.4 : 0.3,
      ...lastmodOf(lastmod.pages.about),
    });

    // 개인정보처리방침
    urls.push({
      url: `${baseUrl}/${locale}/privacy`,
      changeFrequency: "yearly",
      priority: locale === "ko" ? 0.3 : 0.3,
      ...lastmodOf(lastmod.pages.privacy),
    });

    // 해당 locale에서 색인 대상(판정 문장 MIN_HIGHLIGHTS_FOR_INDEX개 이상)인 매치업 페이지만 포함.
    // interactions/[pair]의 generateStaticParams와 같은 목록이라 여기 있는 페이지는 빌드 때 생성된다.
    for (const pair of listIndexableMatchupPairs(locale)) {
      urls.push({
        url: `${baseUrl}/${locale}/interactions/${pair}`,
        changeFrequency: "weekly",
        priority: locale === "ko" ? 0.7 : 0.6,
        // lastmod 매니페스트의 매치업 키는 "a-vs-b" 형식
        ...lastmodOf(lastmod.matchups[pair.replace("-", "-vs-")]),
      });
    }
  }

  return urls;
}
