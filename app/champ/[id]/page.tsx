import ChampClient from "../ChampClient";
import { CHAMPIONS } from "@/app/data/champions";
import { CHAMPS } from "@/app/data/champs/_index";
import { TAG_LABEL } from "@/app/data/interactions/tags";
import { CHAMP_FORMS } from "@/app/data/interactions/forms";
import { notFound, redirect } from "next/navigation";
import { Fragment } from "react";

import type { Metadata } from "next";
import type { ChampSkillTags, SkillKey } from "@/app/data/interactions/types";

const SKILL_KEYS: SkillKey[] = ["P", "Q", "W", "E", "R"];

type FormBlock = { formKo: string; block: Partial<Record<SkillKey, readonly string[]>> };

function getFormBlocks(champId: string, skills: ChampSkillTags): FormBlock[] {
  if (!("base" in skills)) {
    return [{ formKo: "", block: skills as Partial<Record<SkillKey, readonly string[]>> }];
  }
  const labels = CHAMP_FORMS[champId];
  const blocks: FormBlock[] = [
    { formKo: labels?.base.ko ?? "기본", block: skills.base },
    { formKo: labels?.alt.ko ?? "변신폼", block: skills.alt },
  ];
  if (skills.alt2) {
    blocks.push({ formKo: labels?.alt2?.ko ?? "변신폼2", block: skills.alt2 });
  }
  return blocks;
}

function buildSkillFaqJsonLd(champNameKo: string, champId: string, skills: ChampSkillTags) {
  const forms = getFormBlocks(champId, skills);

  const entities = forms.flatMap(({ formKo, block }) =>
    SKILL_KEYS.flatMap((key) => {
      const tags = block[key];
      if (!tags || tags.length === 0) return [];

      const labels = tags
        .map((t) => TAG_LABEL[t as keyof typeof TAG_LABEL]?.ko)
        .filter(Boolean)
        .join(", ");
      if (!labels) return [];

      const name = formKo
        ? `${champNameKo} ${formKo} ${key}스킬의 특징은 무엇인가요?`
        : `${champNameKo} ${key}스킬의 특징은 무엇인가요?`;

      return [{
        "@type": "Question",
        name,
        acceptedAnswer: {
          "@type": "Answer",
          text: `${key}스킬: ${labels}`,
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

type Props = {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ side?: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const champId = id.toLowerCase();

  const champ = CHAMPIONS.find(c => c.id === champId);

  if (!champ) {
    return {
      title: "Champion Guide | LOLTIP",
    };
  }

  return {
    title: `${champ.en} Champion Guide – Skills, Mechanics & Matchups | LOLTIP`,
    description: `${champ.en} skill mechanics, CC interactions, and matchup tips for League of Legends. Learn what abilities ${champ.en} can interrupt, block, or counter.`,
    alternates: {
      canonical: `https://www.loltip.com/champ/${champId}`,
    },
    openGraph: {
      title: `${champ.en} Champion Guide | LOLTIP`,
      description: `${champ.en} champion mechanics and matchup breakdown.`,
      url: `https://www.loltip.com/champ/${champId}`,
      type: "website",
      images: [{ url: "https://www.loltip.com/og-image.png", width: 1200, height: 630 }],
    },
  };
}

export default async function Page(props: Props) {
  const params = await props.params;
  const searchParams = await props.searchParams;

  const id = params?.id;
  if (!id) notFound();

  const champId = id.toLowerCase();

  // URL이 소문자가 아니면 canonical URL로 리다이렉트
  if (id !== champId) {
    redirect(`/champ/${champId}`);
  }

  const champData = CHAMPS[champId as keyof typeof CHAMPS];
  if (!champData) notFound();

  const champInfo = CHAMPIONS.find(c => c.id === champId);
  if (!champInfo) notFound();

  const notesKo =
    Array.isArray(champData.notes)
      ? champData.notes
      : champData.notes?.ko ?? [];

  const side = searchParams?.side ?? "my";

  const forcedMe = side === "my" ? champId : null;
  const forcedEnemy = side === "enemy" ? champId : null;
  const renderKey = `${forcedMe ?? "none"}-${forcedEnemy ?? "none"}`;

  const skillFaqJsonLd = buildSkillFaqJsonLd(champInfo.ko, champId, champData.skills);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "홈",
        item: "https://www.loltip.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "챔피언 목록",
        item: "https://www.loltip.com/champ",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: `${champInfo.en} Champion Guide`,
        item: `https://www.loltip.com/champ/${champId}`,
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
                const tags = block[key];
                if (!tags || tags.length === 0) return null;
                return (
                  <li key={key}>
                    {formKo ? `${formKo} ${key}` : key}: {tags.join(", ")}
                  </li>
                );
              })}
            </ul>
          </div>
        ))}

        <h2>Champion Notes</h2>
        <ul>
          {notesKo.slice(0, 3).map((note, i) => (
            <li key={i}>{note}</li>
          ))}
        </ul>
      </div>

      <ChampClient
        key={renderKey}
        forcedMe={forcedMe}
        forcedEnemy={forcedEnemy}
      />
    </Fragment>
  );
}