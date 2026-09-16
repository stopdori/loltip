import ChampClient from "../ChampClient";
import { CHAMPIONS } from "@/app/data/champions";
import { CHAMPS } from "@/app/data/champs/_index";
import { TAG_LABEL } from "@/app/data/interactions/tags";
import { GIMMICK_TAG_LABEL } from "@/app/data/interactions/tags_gimmick";
import { CHAMP_FORMS } from "@/app/data/interactions/forms";
import { parseTagTokens } from "@/app/data/interactions/parseTagTokens";
import { notFound, permanentRedirect } from "next/navigation";
import { Fragment } from "react";

import type { Metadata } from "next";
import type { ChampSkill, SkillKey, SkillSkillData } from "@/app/data/interactions/types";

const SKILL_KEYS: SkillKey[] = ["P", "Q", "W", "E", "R"];

type FormBlock = { formKo: string; block: Partial<Record<SkillKey, SkillSkillData>> };

function getFormBlocks(champId: string, skills: ChampSkill): FormBlock[] {
  if (!("base" in skills)) {
    return [{ formKo: "", block: skills }];
  }
  // CHAMP_FORMS는 배열 기반(순서: base→[0], alt→[1], alt2→[2], alt3→[3],
  // alt4→[4])이지만, 여기서 조립하는 skills는 base/alt/alt2/alt3/alt4
  // 고정 키 구조다(types.ts 참고, 최대 5폼).
  const labels = CHAMP_FORMS[champId];
  const blocks: FormBlock[] = [
    { formKo: labels?.[0]?.ko ?? "기본", block: skills.base },
    { formKo: labels?.[1]?.ko ?? "변신폼", block: skills.alt },
  ];
  if (skills.alt2) {
    blocks.push({ formKo: labels?.[2]?.ko ?? "변신폼2", block: skills.alt2 });
  }
  if (skills.alt3) {
    blocks.push({ formKo: labels?.[3]?.ko ?? "변신폼3", block: skills.alt3 });
  }
  if (skills.alt4) {
    blocks.push({ formKo: labels?.[4]?.ko ?? "변신폼4", block: skills.alt4 });
  }
  return blocks;
}

function buildSkillFaqJsonLd(champName: string, champId: string, skills: ChampSkill, lang: Lang) {
  const forms = getFormBlocks(champId, skills);

  const entities = forms.flatMap(({ formKo, block }) =>
    SKILL_KEYS.flatMap((key) => {
      const raw = block[key];
      if (!raw) return [];
      const tags = Array.isArray(raw)
        ? raw
        : raw.phases.flatMap((p) => (p ? p.tags : []));
      if (tags.length === 0) return [];

      const labels = tags
        .map((t) => TAG_LABEL[t as keyof typeof TAG_LABEL]?.[lang] ?? GIMMICK_TAG_LABEL[t as keyof typeof GIMMICK_TAG_LABEL]?.[lang])
        .filter(Boolean)
        .join(", ");
      if (!labels) return [];

      const name = lang === "ko"
        ? (formKo ? `${champName} ${formKo} ${key}스킬의 특징은 무엇인가요?` : `${champName} ${key}스킬의 특징은 무엇인가요?`)
        : (formKo ? `What are the features of ${champName} ${formKo} ${key} skill?` : `What are the features of ${champName}'s ${key} skill?`);

      return [{
        "@type": "Question",
        name,
        acceptedAnswer: {
          "@type": "Answer",
          text: lang === "ko" ? `${key}스킬: ${labels}` : `${key} skill: ${labels}`,
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

// SSR hidden div(구글용 콘텐츠)에서 [[TAG]] 토큰을 화면(TokenText.tsx)과
// 동일한 라벨로 치환한다. parseTagTokens는 NOTE_LABEL을 GIMMICK_TAG_LABEL/
// TAG_LABEL보다 우선 조회하므로(예: DURATION_RESET이 노트 문장에선 "지속시간
// 초기화", pill에선 "지속초기"로 다름), matchup 페이지의 stripTags()를 그대로
// 재사용하지 않고 이 함수를 감싼다 — 그쪽은 NOTE_LABEL을 조회하지 않아서
// 화면과 다른(축약된) 문구가 나가는 회귀가 생긴다.
function stripTags(text: string, lang: Lang): string {
  return parseTagTokens(text, lang).map((seg) => seg.text).join("");
}

type Props = {
  params: Promise<{ locale: string; id: string }>;
  searchParams: Promise<{ side?: string }>;
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
      description: `${champ.en} champion mechanics and matchup breakdown.`,
      url: `https://loltip.com/${locale}/champ/${champId}`,
      type: "website",
      images: [{ url: "https://loltip.com/og-image.png", width: 1200, height: 630 }],
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

  // 화면(SkillTagsPanel.tsx)의 "대충 한타 운용법/스킬 요약/TMI" 3개 섹션
  // 구조를 그대로 SSR에 반영한다 — 절삭 없이 섹션별 전체 항목 포함.
  const noteSections: { title: string; items: string[] }[] = (() => {
    if (!champData.notes) return [];
    if ('ko' in champData.notes) {
      const items = (champData.notes as { ko: string[]; en: string[] })[lang] ?? [];
      return items.length > 0 ? [{ title: lang === "ko" ? "노트" : "Notes", items }] : [];
    }
    const cn = champData.notes;
    return [
      { title: lang === "ko" ? "대충 한타 운용법" : "Rough Teamfight Guide", items: cn.skill?.note3?.[lang] ?? [] },
      { title: lang === "ko" ? "스킬 요약" : "Overview", items: cn.skill?.note1?.[lang] ?? [] },
      { title: lang === "ko" ? "TMI" : "TMI", items: cn.skill?.note2?.[lang] ?? [] },
    ].filter((section) => section.items.length > 0);
  })();

  const side = searchParams?.side ?? "my";

  const forcedMe = side === "my" ? champId : null;
  const forcedEnemy = side === "enemy" ? champId : null;
  const renderKey = `${forcedMe ?? "none"}-${forcedEnemy ?? "none"}`;

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
      <div className="hidden">
        <h1>{champInfo.en} Champion Guide</h1>

        <h2>Ultimate Cooldown</h2>
        <p>
          Level 6: {champData.ultCooldown?.[6]}s,
          Level 11: {champData.ultCooldown?.[11]}s,
          Level 16: {champData.ultCooldown?.[16]}s
        </p>

        <h2>Skill Mechanics</h2>
        {getFormBlocks(champId, champData.skills).map(({ formKo, block }) => (
          <div key={formKo || "flat"}>
            {formKo && <h3>{formKo}</h3>}
            <ul>
              {SKILL_KEYS.map((key) => {
                const raw = block[key];
                if (!raw) return null;
                const tags = Array.isArray(raw)
                  ? raw
                  : raw.phases.flatMap((p) => (p ? p.tags : []));
                if (tags.length === 0) return null;
                const labelStr = tags
                  .map((t) => TAG_LABEL[t as keyof typeof TAG_LABEL]?.[lang] ?? GIMMICK_TAG_LABEL[t as keyof typeof GIMMICK_TAG_LABEL]?.[lang] ?? t)
                  .join(", ");
                return (
                  <li key={key}>
                    {formKo ? `${formKo} ${key}` : key}: {labelStr}
                  </li>
                );
              })}
            </ul>
          </div>
        ))}

        {noteSections.map(({ title, items }) => (
          <div key={title}>
            <h2>{title}</h2>
            <ul>
              {items.map((note, i) => (
                <li key={i}>{stripTags(note, lang)}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <ChampClient
        key={renderKey}
        forcedMe={forcedMe}
        forcedEnemy={forcedEnemy}
      />
    </Fragment>
  );
}