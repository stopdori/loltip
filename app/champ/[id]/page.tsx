import ChampClient from "../ChampClient";
import { CHAMPIONS } from "@/app/data/champions";
import { CHAMPS } from "@/app/data/champs/_index";
import { notFound } from "next/navigation";
import { Fragment } from "react";

import type { Metadata } from "next";

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
    description: `${champ.en} (${champ.ko}) abilities, crowd control interactions, unstoppable mechanics, vision interactions and matchup knowledge.`,
    alternates: {
      canonical: `https://www.loltip.com/champ/${champId}`,
    },
    openGraph: {
      title: `${champ.en} Champion Guide | LOLTIP`,
      description: `${champ.en} champion mechanics and matchup breakdown.`,
      url: `https://www.loltip.com/champ/${champId}`,
      type: "website",
    },
  };
}

export default async function Page(props: Props) {
  const params = await props.params;
  const searchParams = await props.searchParams;

  const id = params?.id;
  if (!id) notFound();

  const champId = id.toLowerCase();

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

  return (
    <Fragment>
      <div className="hidden">
        <h1>{champInfo.en} Champion Guide</h1>

        <h2>Ultimate Cooldown</h2>
        <p>
          Level 6: {champData.ultCooldown?.[6]}s,
          Level 11: {champData.ultCooldown?.[11]}s,
          Level 16: {champData.ultCooldown?.[16]}s
        </p>

        <h2>Skill Mechanics</h2>
        <ul>
          {Object.entries(champData.skills ?? {}).map(([key, value]) => (
            <li key={key}>
              {key}: {value.join(", ")}
            </li>
          ))}
        </ul>

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