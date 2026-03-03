import { notFound, redirect } from "next/navigation";
import { Fragment } from "react";
import type { Metadata } from "next";

import { CHAMPIONS } from "@/app/data/champions";
import { getMatchupSummary } from "@/app/data/matchups/_index";
import { TAG_LABEL } from "@/app/data/interactions/tags";
import type { TagId } from "@/app/data/interactions/tags";
import ChampClient from "@/app/champ/ChampClient";

type Props = {
  params: Promise<{ pair: string }>;
  searchParams: Promise<{ first?: string }>;
};

function stripTags(text: string): string {
  return text.replace(/\[\[([^\]]+)\]\]/g, (_, tagId) => {
    return TAG_LABEL[tagId as TagId]?.ko ?? tagId;
  });
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { pair } = await params;
  const parts = pair.split("-vs-");
  if (parts.length !== 2) return {};

  const [a, b] = [parts[0].toLowerCase(), parts[1].toLowerCase()];
  const champA = CHAMPIONS.find((c) => c.id === a);
  const champB = CHAMPIONS.find((c) => c.id === b);

  const canonical = [a, b].sort().join("-vs-");
  const title = champA && champB
    ? `${champA.ko} vs ${champB.ko} 매치업 - LOLTIP`
    : "매치업 | LOLTIP";
  const description = champA && champB
    ? `${champA.ko}와 ${champB.ko}의 스킬 상성, CC 판정, 저지불가 상호작용 정리`
    : undefined;

  return {
    title,
    ...(description && { description }),
    alternates: {
      canonical: `https://www.loltip.com/matchup/${canonical}`,
    },
    openGraph: {
      title,
      ...(description && { description }),
      url: `https://www.loltip.com/matchup/${canonical}`,
      type: "website",
      images: [{ url: "https://www.loltip.com/og-image.png", width: 1200, height: 630 }],
    },
  };
}

export default async function Page({ params, searchParams }: Props) {
  const { pair } = await params;
  const { first } = await searchParams;

  const parts = pair.split("-vs-");
  if (parts.length !== 2) notFound();

  const [a, b] = [parts[0].toLowerCase(), parts[1].toLowerCase()];
  const champA = CHAMPIONS.find((c) => c.id === a);
  const champB = CHAMPIONS.find((c) => c.id === b);
  if (!champA || !champB) notFound();

  // canonical 주소로 정규화
  const canonical = [a, b].sort().join("-vs-");
  if (pair !== canonical) {
    redirect(`/matchup/${canonical}?first=${first ?? a}`);
  }

  // first 파라미터로 나/상대 결정
  const forcedMe = first === b ? b : a;
  const forcedEnemy = first === b ? a : b;

  // 매치업 데이터 로딩
  const matchup = await getMatchupSummary(a, b);

  // 판정 세부사항 수집 (SSR + JSON-LD용)
  const highlights: { champId: string; champKo: string; items: string[] }[] = [];
  if (matchup?.status === "ok") {
    for (const champId of [forcedMe, forcedEnemy]) {
      const items = matchup.data.highlightsByChamp?.[champId]?.ko ?? [];
      if (items.length > 0) {
        const info = CHAMPIONS.find((c) => c.id === champId);
        highlights.push({ champId, champKo: info?.ko ?? champId, items });
      }
    }
  }

  // JSON-LD BreadcrumbList
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "홈", item: "https://www.loltip.com" },
      { "@type": "ListItem", position: 2, name: "챔피언 목록", item: "https://www.loltip.com/champ" },
      {
        "@type": "ListItem",
        position: 3,
        name: `${champA.ko} vs ${champB.ko} 매치업`,
        item: `https://www.loltip.com/matchup/${canonical}`,
      },
    ],
  };

  // JSON-LD FAQPage (판정 세부사항)
  const faqEntities = highlights.flatMap(({ champKo, items }) =>
    items.map((text, i) => ({
      "@type": "Question",
      name: `${champKo} 판정 ${i + 1}번`,
      acceptedAnswer: { "@type": "Answer", text: stripTags(text) },
    }))
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
        <h1>{champA.ko} vs {champB.ko} 매치업</h1>

        {matchup?.status === "ok" && (matchup.data.summary?.ko.length ?? 0) > 0 && (
          <>
            <h2>대표 판정 요약</h2>
            <ul>
              {matchup.data.summary!.ko.map((text, i) => (
                <li key={i}>{stripTags(text)}</li>
              ))}
            </ul>
          </>
        )}

        {highlights.map(({ champId, champKo, items }) => (
          <div key={champId}>
            <h2>{champKo} 판정</h2>
            <ul>
              {items.map((text, i) => (
                <li key={i}>{stripTags(text)}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <ChampClient
        key={`${forcedMe}-vs-${forcedEnemy}`}
        forcedMe={forcedMe}
        forcedEnemy={forcedEnemy}
      />
    </Fragment>
  );
}
