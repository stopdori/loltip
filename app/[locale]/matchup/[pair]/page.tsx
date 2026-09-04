import { notFound, permanentRedirect } from "next/navigation";
import { Fragment } from "react";
import type { Metadata } from "next";

import { CHAMPIONS } from "@/app/data/champions";
import MatchupChampClient from "./MatchupChampClient";
import { getMatchupSummary } from "@/app/data/matchups/_index";
import { hasContent } from "@/app/data/matchups/_types";
import { TAG_LABEL } from "@/app/data/interactions/tags";
import type { TagId } from "@/app/data/interactions/tags";
import { GIMMICK_TAG_LABEL } from "@/app/data/interactions/tags_gimmick";
import type { GimmickTagId } from "@/app/data/interactions/tags_gimmick";

type Lang = "ko" | "en";

type Props = {
  params: Promise<{ locale: string; pair: string }>;
  searchParams: Promise<{ first?: string; highlight?: string }>;
};

function stripTags(text: string, lang: Lang): string {
  return text.replace(/\[\[([^\]]+)\]\]/g, (_, tagId) => {
    return (
      GIMMICK_TAG_LABEL[tagId as GimmickTagId]?.[lang] ??
      TAG_LABEL[tagId as TagId]?.[lang] ??
      tagId
    );
  });
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, pair } = await params;
  const parts = pair.split("-vs-");
  if (parts.length !== 2) return {};

  const [a, b] = [parts[0].toLowerCase(), parts[1].toLowerCase()];
  const champA = CHAMPIONS.find((c) => c.id === a);
  const champB = CHAMPIONS.find((c) => c.id === b);

  const canonical = [a, b].sort().join("-vs-");
  const title = champA && champB
    ? locale === "ko"
      ? `${champA.ko} vs ${champB.ko} 매치업 - LOLTIP`
      : `${champA.en} vs ${champB.en} Matchup - LOLTIP`
    : locale === "ko" ? "매치업 | LOLTIP" : "Matchup | LOLTIP";
  const description = champA && champB
    ? locale === "ko"
      ? `${champA.ko}와 ${champB.ko}의 스킬 상성, CC 판정, 저지불가 상호작용 정리`
      : `${champA.en} vs ${champB.en} skill interactions and matchup tips for League of Legends.`
    : undefined;

  const matchup = await getMatchupSummary(a, b);
  let noindex = false;
  if (!matchup || matchup.status === "missing") {
    noindex = true;
  } else {
    const { data } = matchup;
    const lang: Lang = locale === "en" ? "en" : "ko";
    noindex =
      !hasContent(data.highlightsByChamp?.[a]?.[lang]) &&
      !hasContent(data.highlightsByChamp?.[b]?.[lang]) &&
      !hasContent(data.common?.[lang]);
  }

  return {
    title,
    ...(description && { description }),
    alternates: {
      canonical: `https://loltip.com/${locale}/matchup/${canonical}`,
      languages: {
        ko: `https://loltip.com/ko/matchup/${canonical}`,
        en: `https://loltip.com/en/matchup/${canonical}`,
        "x-default": `https://loltip.com/ko/matchup/${canonical}`,
      },
    },
    ...(noindex && { robots: { index: false, follow: false } }),
    openGraph: {
      title,
      ...(description && { description }),
      url: `https://loltip.com/${locale}/matchup/${canonical}`,
      type: "website",
      images: [{ url: "https://loltip.com/og-image.png", width: 1200, height: 630 }],
    },
  };
}

export default async function Page({ params, searchParams }: Props) {
  const { locale, pair } = await params;
  const lang = locale as Lang;
  const { first, highlight } = await searchParams;

  const parts = pair.split("-vs-");
  if (parts.length !== 2) notFound();

  const [a, b] = [parts[0].toLowerCase(), parts[1].toLowerCase()];
  const champA = CHAMPIONS.find((c) => c.id === a);
  const champB = CHAMPIONS.find((c) => c.id === b);
  if (!champA || !champB) notFound();

  // canonical 주소로 정규화
  // 주의: ?first= 쿼리를 목적지에 포함하지 않음 - robots.txt의 disallow: '/*?first='와
  // 충돌해 크롤러가 리다이렉트 목적지를 크롤링하지 못하는 문제가 있었음.
  // 순서가 뒤바뀐 URL은 외부/수동 입력 등 드문 경로로만 유입되므로,
  // 배치 선호(first) 없이 canonical 경로로만 리다이렉트해도 실사용 영향은 낮음.
  const canonical = [a, b].sort().join("-vs-");
  if (pair !== canonical) {
    permanentRedirect(`/${locale}/matchup/${canonical}`);
  }

  // first 파라미터로 나/상대 결정
  const forcedMe = first === b ? b : a;
  const forcedEnemy = first === b ? a : b;

  // 매치업 데이터 로딩
  const matchup = await getMatchupSummary(a, b);

  // 판정 세부사항 수집 (SSR + JSON-LD용)
  const highlights: { champId: string; champName: string; items: string[] }[] = [];
  if (matchup?.status === "ok") {
    for (const champId of [forcedMe, forcedEnemy]) {
      const items = (matchup.data.highlightsByChamp?.[champId]?.[lang] ?? []).filter((s) => s !== "");
      if (items.length > 0) {
        const info = CHAMPIONS.find((c) => c.id === champId);
        const champName = (lang === "ko" ? info?.ko : info?.en) ?? champId;
        highlights.push({ champId, champName, items });
      }
    }

    // 공통 항목: 좌우 배치와 무관하게 항상 맨 아래 (MatchupSummaryBox.tsx와 동일한 순서)
    const commonItems = (matchup.data.common?.[lang] ?? []).filter((s) => s !== "");
    if (commonItems.length > 0) {
      highlights.push({ champId: "common", champName: lang === "ko" ? "공통" : "Common", items: commonItems });
    }
  }

  // JSON-LD BreadcrumbList
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: lang === "ko" ? "홈" : "Home", item: "https://loltip.com" },
      { "@type": "ListItem", position: 2, name: lang === "ko" ? "챔피언 목록" : "Champion List", item: `https://loltip.com/${locale}/champ` },
      {
        "@type": "ListItem",
        position: 3,
        name: lang === "ko" ? `${champA.ko} vs ${champB.ko} 매치업` : `${champA.en} vs ${champB.en} Matchup`,
        item: `https://loltip.com/${locale}/matchup/${canonical}`,
      },
    ],
  };

  // JSON-LD FAQPage (판정 세부사항)
  const faqEntities = highlights.flatMap(({ champName, items }) =>
    items.flatMap((text, i) => {
      const stripped = stripTags(text, lang);
      if (!stripped) return [];
      return [{
        "@type": "Question",
        name: lang === "ko" ? `${champName} 판정 ${i + 1}번` : `${champName} Interaction ${i + 1}`,
        acceptedAnswer: { "@type": "Answer", text: stripped },
      }];
    })
  );

  const faqJsonLd =
    faqEntities.length > 0
      ? { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqEntities }
      : null;

  return (
    <Fragment>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}

      {/* 구글 크롤러용 SSR 콘텐츠 */}
      <div className="hidden">
        <h1>
          {lang === "ko" ? (
            <>{champA.ko} vs {champB.ko} 매치업</>
          ) : (
            <>{champA.en} vs {champB.en} Matchup</>
          )}
        </h1>

        {highlights.map(({ champId, champName, items }) => (
          <div key={champId}>
            <h2>{champName} {lang === "ko" ? "판정" : "Interactions"}</h2>
            <ul>
              {items.map((text, i) => (
                <li key={i}>{stripTags(text, lang)}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <MatchupChampClient
        key={`${forcedMe}-vs-${forcedEnemy}`}
        forcedMe={forcedMe}
        forcedEnemy={forcedEnemy}
        highlight={highlight}
      />
    </Fragment>
  );
}
