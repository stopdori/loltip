import ChampPageClient from "./ChampPageClient";
import { CHAMPIONS } from "@/app/data/champions";
import { CHAMPS } from "@/app/data/champs/_index";
import { getChampClientData } from "@/app/data/champClientData";
import { TAG_LABEL } from "@/app/data/interactions/tags";
import { GIMMICK_TAG_LABEL } from "@/app/data/interactions/tags_gimmick";
import { CHAMP_FORMS } from "@/app/data/interactions/forms";
import { listIndexableMatchupsForChamp } from "@/app/data/matchups/_index";
import ChampMatchupList from "@/app/components/ChampMatchupList";
import { notFound, permanentRedirect } from "next/navigation";
import { Fragment } from "react";

import type { Metadata } from "next";
import type { ChampSkill, SkillKey, SkillSkillData } from "@/app/data/interactions/types";

const SKILL_KEYS: SkillKey[] = ["P", "Q", "W", "E", "R"];

type FormLabel = { ko: string; en: string };
type FormBlock = { form: FormLabel | null; block: Partial<Record<SkillKey, SkillSkillData>> };

const FALLBACK_FORM_LABELS: FormLabel[] = [
  { ko: "기본", en: "Base Form" },
  { ko: "변신폼", en: "Alt Form" },
  { ko: "변신폼2", en: "Alt Form 2" },
  { ko: "변신폼3", en: "Alt Form 3" },
  { ko: "변신폼4", en: "Alt Form 4" },
];

function getFormBlocks(champId: string, skills: ChampSkill): FormBlock[] {
  if (!("base" in skills)) {
    return [{ form: null, block: skills }];
  }
  // CHAMP_FORMS는 배열 기반(순서: base→[0], alt→[1], alt2→[2], alt3→[3],
  // alt4→[4])이지만, 여기서 조립하는 skills는 base/alt/alt2/alt3/alt4
  // 고정 키 구조다(types.ts 참고, 최대 5폼).
  const labels = CHAMP_FORMS[champId];
  const formAt = (i: number): FormLabel => {
    const l = labels?.[i];
    return l ? { ko: l.ko, en: l.en } : FALLBACK_FORM_LABELS[i];
  };
  const blocks: FormBlock[] = [
    { form: formAt(0), block: skills.base },
    { form: formAt(1), block: skills.alt },
  ];
  if (skills.alt2) blocks.push({ form: formAt(2), block: skills.alt2 });
  if (skills.alt3) blocks.push({ form: formAt(3), block: skills.alt3 });
  if (skills.alt4) blocks.push({ form: formAt(4), block: skills.alt4 });
  return blocks;
}

// 화면 배치용 구분 토큰(SEPARATOR "/", SEPARATOR_NEWLINE "↵")은 텍스트 요약에 넣지 않는다.
const LAYOUT_TOKENS = new Set(["SEPARATOR", "SEPARATOR_NEWLINE"]);

function tagLabels(tags: string[], lang: Lang): string {
  return tags
    .filter((t) => !LAYOUT_TOKENS.has(t))
    .map((t) => TAG_LABEL[t as keyof typeof TAG_LABEL]?.[lang] ?? GIMMICK_TAG_LABEL[t as keyof typeof GIMMICK_TAG_LABEL]?.[lang])
    .filter(Boolean)
    .join(", ");
}

// 단계(phases)가 있는 스킬은 "R1 투사체: …; R2 돌진: …"처럼 단계 라벨별로 나눠 쓴다.
function skillSummary(raw: SkillSkillData, lang: Lang): string {
  if (Array.isArray(raw)) return tagLabels(raw, lang);
  return raw.phases
    .flatMap((p) => {
      if (!p) return [];
      const labels = tagLabels(p.tags, lang);
      return labels ? [`${p.label[lang]}: ${labels}`] : [];
    })
    .join("; ");
}

function buildSkillFaqJsonLd(champName: string, champId: string, skills: ChampSkill, lang: Lang) {
  const forms = getFormBlocks(champId, skills);

  const entities = forms.flatMap(({ form, block }) =>
    SKILL_KEYS.flatMap((key) => {
      const raw = block[key];
      if (!raw) return [];
      const summary = skillSummary(raw, lang);
      if (!summary) return [];

      const formName = form?.[lang];
      const name = lang === "ko"
        ? (formName ? `${champName} ${formName} ${key}스킬의 특징은 무엇인가요?` : `${champName} ${key}스킬의 특징은 무엇인가요?`)
        : (formName ? `What are the features of ${champName} ${formName} ${key} skill?` : `What are the features of ${champName}'s ${key} skill?`);

      const prefix = formName ? `${formName} ` : "";
      return [{
        "@type": "Question",
        name,
        acceptedAnswer: {
          "@type": "Answer",
          text: lang === "ko" ? `${prefix}${key}스킬: ${summary}` : `${prefix}${key} skill: ${summary}`,
        },
      }];
    })
  );

  if (entities.length === 0) return null;

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: entities,
  };
}

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
    ? `${champ.ko} 챔피언 공략 - 스킬 상성 및 매치업 | LOLTIP`
    : `${champ.en} Champion Guide – Skills, Mechanics & Matchups | LOLTIP`;
  const description = locale === "ko"
    ? `${champ.ko} 스킬 상성, CC 상호작용, 매치업 정보를 확인하세요.`
    : `${champ.en} skill mechanics, CC interactions, and matchup tips for League of Legends. Learn what abilities ${champ.en} can interrupt, block, or counter.`;
  // og/twitter 설명도 로케일에 맞게 — 예전엔 KO 페이지에도 영문이 고정으로 나갔다.
  const socialDescription = locale === "ko"
    ? `${champ.ko} 챔피언 메커니즘과 매치업 정리.`
    : `${champ.en} champion mechanics and matchup breakdown.`;


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
      title: `${champ.en} Champion Guide | LOLTIP`,
      description: socialDescription,
      url: `https://loltip.com/${locale}/champ/${champId}`,
      type: "website",
      images: [{ url: "https://loltip.com/og-image.png", width: 1200, height: 630 }],
    },
    twitter: {
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

  const skillFaqJsonLd = buildSkillFaqJsonLd(
    lang === "ko" ? champInfo.ko : champInfo.en,
    champId,
    champData.skills,
    lang
  );

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
      {skillFaqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(skillFaqJsonLd) }}
        />
      )}
      <ChampPageClient
        key={renderKey}
        forcedMe={forcedMe}
        forcedEnemy={forcedEnemy}
        // 스킬 패널에 쓸 이 챔피언 데이터만 클라이언트로 넘긴다(전체 CHAMPS는 서버에만 둠)
        champData={{ [champId]: getChampClientData(champId) }}
        // 화면에 보이는 h1 — generateMetadata의 title 패턴("{챔피언} 챔피언 공략 …" / "{Champion} Champion Guide …")과 일치.
        // 매치업 페이지 h1과 같은 자리·스타일(ChampClient의 summaryHeading 슬롯)로 렌더링된다.
        summaryHeading={
          <h1 className="mb-3 text-lg sm:text-xl font-bold text-slate-100">
            {lang === "ko" ? `${champInfo.ko} 챔피언 공략` : `${champInfo.en} Champion Guide`}
          </h1>
        }
        extraSection={
          // 이 챔피언이 등장하는 매치업 중 "현재 로케일에서 색인 대상인 것만" 링크(noindex 페이지로 링크 금지).
          // 판정은 generateMetadata/sitemap과 같은 공용 함수, 데이터는 매치업 페이지와 같은 _compiled.json.
          <ChampMatchupList
            lang={lang === "en" ? "en" : "ko"}
            champName={lang === "ko" ? champInfo.ko : champInfo.en}
            entries={listIndexableMatchupsForChamp(champId, lang === "en" ? "en" : "ko")}
          />
        }
      />
    </Fragment>
  );
}