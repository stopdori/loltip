import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import ChampClient from "./ChampClient";
import ChampGrid from "@/app/components/ChampGrid";
import HomeIntro from "@/app/components/HomeIntro";
import { listTopIndexableMatchups } from "@/app/data/matchups/_index";

// ko/en만 빌드 때 생성. 점(.) 포함 주소(/wp-login.php 등)는 proxy.ts를 건너뛰고 [locale]로 잡히므로 404가 캐시되지 않게 막는다.
export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const title = locale === "ko" ? "챔피언 목록 - LOLTIP" : "Champion List - LOLTIP";
  const description =
    locale === "ko"
      ? "리그 오브 레전드 모든 챔피언의 상성과 공략을 확인하세요."
      : "Check interaction guides for every League of Legends champion.";
  return {
    title,
    description,
    alternates: {
      canonical: `https://loltip.com/${locale}/champ`,
      languages: {
        ko: "https://loltip.com/ko/champ",
        en: "https://loltip.com/en/champ",
        "x-default": "https://loltip.com/ko/champ",
      },
    },
    openGraph: {
      title,
      description,
      url: `https://loltip.com/${locale}/champ`,
      type: "website",
      images: [{ url: "https://loltip.com/og-image.png", width: 1200, height: 630 }],
    },
  };
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const lang = locale === "en" ? "en" : "ko";
  // 소개 문단·"판정이 많은 상호작용" 20개·전체 챔피언 링크 그리드 모두 서버 컴포넌트라 정적 HTML에 항상 포함된다.
  // 상위 20개는 빌드 시점의 _compiled.json에서 계산한다.
  return (
    <ChampClient
      extraSection={
        <div className="space-y-4">
          <HomeIntro lang={lang} entries={listTopIndexableMatchups(lang, 20)} />
          <ChampGrid lang={lang} />
        </div>
      }
    />
  );
}
