// app/[locale]/about/page.tsx

import type { Metadata } from "next";
import SiteHeader from "@/app/components/SiteHeader";
import { CONTACT_EMAIL, OPERATOR_NAME } from "@/app/data/siteInfo";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const title = locale === "ko" ? "사이트 소개 - LOLTIP" : "About - LOLTIP";
  const description =
    locale === "ko"
      ? "LOLTIP은 리그 오브 레전드 챔피언 스킬 간 상호작용과 판정을 직접 검증해 정리하는 사이트입니다."
      : "LOLTIP is a site that verifies and organizes skill interactions between League of Legends champions.";
  return {
    title,
    description,
    alternates: {
      canonical: `https://loltip.com/${locale}/about`,
      languages: {
        ko: "https://loltip.com/ko/about",
        en: "https://loltip.com/en/about",
        "x-default": "https://loltip.com/ko/about",
      },
    },
    openGraph: {
      title,
      description,
      url: `https://loltip.com/${locale}/about`,
      type: "website",
      images: [{ url: "https://loltip.com/og-image.png", width: 1200, height: 630 }],
    },
  };
}

const h2Class = "text-xl font-bold text-slate-100";
const pClass = "text-slate-300 text-sm leading-relaxed";
const listClass = "list-disc pl-6 text-slate-300 text-sm space-y-1 leading-relaxed";
const linkClass = "text-sky-400 underline break-all";

function EmailLink() {
  return (
    <a href={`mailto:${CONTACT_EMAIL}`} className={linkClass}>
      {CONTACT_EMAIL}
    </a>
  );
}

function AboutKo() {
  return (
    <>
      <h1 className="text-3xl font-extrabold text-yellow-400">LOLTIP 소개</h1>

      <p className={pClass}>
        LOLTIP은 리그 오브 레전드 챔피언들의 스킬이 서로 만났을 때 실제로 어떻게 판정되는지를 정리하는
        사이트입니다. 스킬 설명만으로는 알기 어려운 상호작용(끊기는지, 막히는지, 통과하는지 등)을 챔피언
        조합별로 찾아볼 수 있습니다.
      </p>

      <section className="space-y-2">
        <h2 className={h2Class}>제공하는 내용</h2>
        <ul className={listClass}>
          <li>챔피언별 스킬 정보와 기믹·시야 등 핵심 특성 요약</li>
          <li>두 챔피언의 매치업 페이지에서 스킬 간 상호작용 판정 정리</li>
          <li>상호작용에 쓰이는 개념을 모아둔 태그 레퍼런스</li>
          <li>배운 내용을 확인해볼 수 있는 상호작용 퀴즈</li>
        </ul>
      </section>

      <section className="space-y-2">
        <h2 className={h2Class}>데이터 출처와 검증</h2>
        <p className={pClass}>
          판정 내용은 운영자가 게임 안에서 직접 확인한 결과를 바탕으로 작성합니다. 스킬 설명과 수치는 Riot
          Games의 Data Dragon, 리그 오브 레전드 공식 위키, 공식 패치 노트를 참고하며, 패치에 따라 달라진
          내용은 확인되는 대로 갱신합니다.
        </p>
        <p className={pClass}>
          잘못된 내용을 발견하셨다면 챔피언·매치업 화면 오른쪽 아래의 &quot;문의 / 제보&quot; 버튼이나 아래 이메일로 알려주세요.
          영상이나 리플레이 정보를 함께 보내주시면 더 빠르게 확인할 수 있습니다.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className={h2Class}>운영자 및 연락처</h2>
        <ul className={listClass}>
          <li>운영자: {OPERATOR_NAME.ko}</li>
          <li>
            이메일: <EmailLink />
          </li>
        </ul>
      </section>

      <section className="space-y-2">
        <h2 className={h2Class}>고지</h2>
        <p className={pClass}>
          LOLTIP은 Riot Games와 무관한 비공식 팬 사이트이며, Riot Games의 보증을 받지 않았습니다. League of
          Legends 및 Riot Games는 Riot Games, Inc.의 상표 또는 등록상표입니다.
        </p>
      </section>
    </>
  );
}

function AboutEn() {
  return (
    <>
      <h1 className="text-3xl font-extrabold text-yellow-400">About LOLTIP</h1>

      <p className={pClass}>
        LOLTIP documents how League of Legends champion abilities actually interact when they meet. You can look up,
        champion by champion, the interactions that skill descriptions alone don&apos;t make clear — whether an ability
        gets interrupted, blocked, or passes through.
      </p>

      <section className="space-y-2">
        <h2 className={h2Class}>What You&apos;ll Find</h2>
        <ul className={listClass}>
          <li>Per-champion skill info with key traits such as gimmicks and vision</li>
          <li>Matchup pages summarizing ability interactions between two champions</li>
          <li>A tag reference that collects the concepts used across interactions</li>
          <li>An interaction quiz to test what you&apos;ve learned</li>
        </ul>
      </section>

      <section className="space-y-2">
        <h2 className={h2Class}>Data Sources &amp; Verification</h2>
        <p className={pClass}>
          Interaction details are written based on in-game testing by the operator. Ability descriptions and numbers
          reference Riot Games&apos; Data Dragon, the official League of Legends Wiki, and official patch notes, and
          are updated as patch changes are confirmed.
        </p>
        <p className={pClass}>
          If you spot something incorrect, please let us know via the &quot;Feedback&quot; button at the bottom right of any champion
          or matchup page, or by email below. Including a video or replay details helps us verify it faster.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className={h2Class}>Operator &amp; Contact</h2>
        <ul className={listClass}>
          <li>Operator: {OPERATOR_NAME.en}</li>
          <li>
            Email: <EmailLink />
          </li>
        </ul>
      </section>

      <section className="space-y-2">
        <h2 className={h2Class}>Disclaimer</h2>
        <p className={pClass}>
          LOLTIP is an unofficial fan site and is not endorsed by or affiliated with Riot Games. League of Legends and
          Riot Games are trademarks or registered trademarks of Riot Games, Inc.
        </p>
      </section>
    </>
  );
}

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return (
    <div className="space-y-6">
      <SiteHeader subtitle={locale === "ko" ? "사이트 소개" : "About"} />
      <div className="mx-auto w-full max-w-[960px] px-4 sm:px-6 py-6 space-y-8">
        {locale === "ko" ? <AboutKo /> : <AboutEn />}
      </div>
    </div>
  );
}
