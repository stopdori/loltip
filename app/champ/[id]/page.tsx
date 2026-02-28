import ChampClient from "../ChampClient";
import { CHAMPIONS } from "@/app/data/champions";
import { notFound } from "next/navigation";

import type { Metadata } from "next";

type Props = {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ side?: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {

  const { id } = await params;
  const champId = id.toLowerCase();

  return {
    alternates: {
      canonical: `https://www.loltip.com/champ/${champId}`,
    },
  };
}

export default async function Page(props: Props) {
  const params = await props.params;
const searchParams = await props.searchParams;

const id = params?.id;
if (!id) notFound();

const champId = id.toLowerCase();

  // 존재하는 챔피언인지 확인
  const champExists = CHAMPIONS.some(c => c.id === champId);
  if (!champExists) notFound();


  const side = searchParams?.side ?? "my";

const forcedMe = side === "my" ? champId : null;
const forcedEnemy = side === "enemy" ? champId : null;
const renderKey = `${forcedMe ?? "none"}-${forcedEnemy ?? "none"}`;

return (
  <ChampClient
    key={renderKey}
    forcedMe={forcedMe}
    forcedEnemy={forcedEnemy}
  />
);
}