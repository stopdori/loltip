import { notFound, permanentRedirect } from "next/navigation";
import { Fragment } from "react";
import type { Metadata } from "next";

import { CHAMPIONS } from "@/app/data/champions";
import MatchupChampClient from "./MatchupChampClient";
import { getMatchupSummary } from "@/app/data/matchups/_index";
import { isMatchupIndexable } from "@/app/data/matchups/_types";
import { stripTagTokens } from "@/app/utils/stripTagTokens";
import MatchupChampLinks from "@/app/components/MatchupChampLinks";

type Lang = "ko" | "en";

type Props = {
  params: Promise<{ locale: string; pair: string }>;
  searchParams: Promise<{ highlight?: string }>;
};

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
    noindex = !isMatchupIndexable(data, a, b, lang);
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
  const { highlight } = await searchParams;

  const parts = pair.split("-vs-");
  if (parts.length !== 2) notFound();

  const [a, b] = [parts[0].toLowerCase(), parts[1].toLowerCase()];
  const champA = CHAMPIONS.find((c) => c.id === a);
  const champB = CHAMPIONS.find((c) => c.id === b);
  if (!champA || !champB) notFound();

  // 같은 챔피언을 양쪽에 선택한 조합(예: ambessa-vs-ambessa)은 콘텐츠가
  // 나중에라도 생길 수 없는, 원천적으로 존재하지 않는 조합이므로 존재하지
  // 않는 챔피언 id와 동일하게 404 처리한다. generateMetadata는 별도로
  // notFound()를 호출하지 않아도 되는데, Page에서 notFound()가 호출되면
  // Next.js가 최종 응답에 noindex,nofollow를 포함한 404 메타를 알아서
  // 덮어씌우기 때문 (기존 "존재하지 않는 챔피언 id" 케이스로 실측 확인됨).
  if (a === b) notFound();

  // canonical 주소로 정규화
  // 순서가 뒤바뀐 URL은 외부/수동 입력 등 드문 경로로만 유입되므로 canonical 경로로만 리다이렉트.
  const canonical = [a, b].sort().join("-vs-");
  if (pair !== canonical) {
    permanentRedirect(`/${locale}/matchup/${canonical}`);
  }

  // 서버는 항상 알파벳순(canonical) 순서로만 렌더링한다. 예전에 공유된 ?first= 링크가
  // 들어와도 이 파라미터는 더 이상 읽지 않고 무시한다(에러 없이 알파벳순으로 표시).
  // 픽커에서 방금 고른 좌/우 순서는 클라이언트 세션 메모리 힌트로
  // MatchupChampClient가 마운트 시 반영한다(app/utils/matchupOrderHint.ts).
  const forcedMe = a;
  const forcedEnemy = b;

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
      const stripped = stripTagTokens(text, lang);
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
                <li key={i}>{stripTagTokens(text, lang)}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <MatchupChampClient
        key={canonical}
        forcedMe={forcedMe}
        forcedEnemy={forcedEnemy}
        highlight={highlight}
        extraSection={
          <MatchupChampLinks
            lang={lang}
            champs={[
              { id: a, name: lang === "ko" ? champA.ko : champA.en },
              { id: b, name: lang === "ko" ? champB.ko : champB.en },
            ]}
          />
        }
      />
    </Fragment>
  );
}
