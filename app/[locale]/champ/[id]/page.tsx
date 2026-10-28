import ChampPageClient from "./ChampPageClient";
import { CHAMPIONS } from "@/app/data/champions";
import { CHAMPS } from "@/app/data/champs/_index";
import { getChampPageClientData } from "@/app/data/champPageClientData";
import { listLinkableMatchupsForChamp } from "@/app/data/matchups/_index";
import ChampMatchupList from "@/app/components/ChampMatchupList";
import { notFound, permanentRedirect } from "next/navigation";
import { Fragment } from "react";

import type { Metadata } from "next";

type Lang = "ko" | "en";

type Props = {
  params: Promise<{ locale: string; id: string }>;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, id } = await params;
  const champId = id.toLowerCase();

  const champ = CHAMPIONS.find(c => c.id === champId);

  if (!champ) {
    return {
      title: "Champion Guide | LOLTIP",
    };
  }

  const title = locale === "ko"
    ? `${champ.ko} 챔피언 공략 - 스킬 상성 및 상호작용 | LOLTIP`
    : `${champ.en} Champion Guide – Skills, Mechanics & Interactions | LOLTIP`;
  const description = locale === "ko"
    ? `${champ.ko}의 스킬 효과, CC 판정, 상대 챔피언별 상호작용을 확인하세요.`
    : `${champ.en} skill effects, CC rules, and interactions with every opponent in League of Legends.`;
  // og/twitter 설명도 로케일에 맞게 — 예전엔 KO 페이지에도 영문이 고정으로 나갔다.
  // og/twitter 제목: 로케일별 짧은 형식("{챔피언} 챔피언 공략 | LOLTIP" / "{Champion} Champion Guide | LOLTIP")
  const socialTitle = locale === "ko" ? `${champ.ko} 챔피언 공략 | LOLTIP` : `${champ.en} Champion Guide | LOLTIP`;
  const socialDescription = locale === "ko"
    ? `${champ.ko} 챔피언 메커니즘과 상호작용 정리.`
    : `${champ.en} champion mechanics and interactions breakdown.`;


  return {
    title,
    description,
    alternates: {
      canonical: `https://loltip.com/${locale}/champ/${champId}`,
      languages: {
        ko: `https://loltip.com/ko/champ/${champId}`,
        en: `https://loltip.com/en/champ/${champId}`,
        "x-default": `https://loltip.com/ko/champ/${champId}`,
      },
    },
    openGraph: {
      title: socialTitle,
      description: socialDescription,
      url: `https://loltip.com/${locale}/champ/${champId}`,
      type: "website",
      images: [{ url: "https://loltip.com/og-image.png", width: 1200, height: 630 }],
    },
    twitter: {
      title: socialTitle,
      description: socialDescription,
    },
  };
}

export default async function Page(props: Props) {
  const params = await props.params;
  const searchParams = await props.searchParams;

  const lang = (params?.locale ?? "ko") as Lang;
  const id = params?.id;
  if (!id) notFound();

  const champId = id.toLowerCase();

  // URL이 소문자가 아니면 canonical URL로 리다이렉트
  if (id !== champId) {
    permanentRedirect(`/${params.locale}/champ/${champId}`);
  }

  const champData = CHAMPS[champId as keyof typeof CHAMPS];
  if (!champData) notFound();

  const champInfo = CHAMPIONS.find(c => c.id === champId);
  if (!champInfo) notFound();

  // 서버는 항상 기본(왼쪽)으로만 렌더링한다. 예전에 공유된 ?side=enemy 링크가 들어와도
  // 이 파라미터는 더 이상 쓰지 않고 무시한다(에러 없이 왼쪽 표시). 픽커에서 정해진 좌/우 위치는
  // 클라이언트 세션 메모리 힌트로 ChampPageClient가 마운트 시 반영한다(app/utils/champSideHint.ts).
  // searchParams는 값을 쓰지 않지만, 이 페이지의 렌더링 모드(동적)가 바뀌지 않도록 읽기만 유지한다.
  void searchParams;
  const forcedMe = champId;
  const forcedEnemy = null;
  const renderKey = champId;

  // 스킬 패널에 쓸 이 챔피언 데이터만, 현재 언어로·원문 [[TAG]] 토큰 없이 만든다(말풍선 문장 포함 —
  // app/data/champPageClientData.ts). 전체 CHAMPS는 서버에만 둔다.
  const clientData = await getChampPageClientData(champId, lang === "en" ? "en" : "ko");

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: lang === "ko" ? "홈" : "Home",
        item: "https://loltip.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: lang === "ko" ? "챔피언 목록" : "Champion List",
        item: `https://loltip.com/${lang}/champ`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: lang === "ko" ? `${champInfo.ko} 챔피언 공략` : `${champInfo.en} Champion Guide`,
        item: `https://loltip.com/${lang}/champ/${champId}`,
      },
    ],
  };

  return (
    <Fragment>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ChampPageClient
        key={renderKey}
        forcedMe={forcedMe}
        forcedEnemy={forcedEnemy}
        champData={{ [champId]: clientData }}
        // 화면에 보이는 h1 — generateMetadata의 title 패턴("{챔피언} 챔피언 공략 …" / "{Champion} Champion Guide …")과 일치.
        // 매치업 페이지 h1과 같은 자리·스타일(ChampClient의 summaryHeading 슬롯)로 렌더링된다.
        summaryHeading={
          <h1 className="mb-3 text-lg sm:text-xl font-bold text-slate-100">
            {lang === "ko" ? `${champInfo.ko} 챔피언 공략` : `${champInfo.en} Champion Guide`}
          </h1>
        }
        extraSection={
          // 이 챔피언이 등장하는 매치업 중 "현재 로케일에 판정 문장이 하나라도 있는 것"을 링크.
          // 색인 기준(문장 3개 이상)보다 넓다 — 사용자 접근 경로라 noindex(follow) 페이지도 링크한다.
          <ChampMatchupList
            lang={lang === "en" ? "en" : "ko"}
            champName={lang === "ko" ? champInfo.ko : champInfo.en}
            entries={listLinkableMatchupsForChamp(champId, lang === "en" ? "en" : "ko")}
          />
        }
      />
    </Fragment>
  );
}