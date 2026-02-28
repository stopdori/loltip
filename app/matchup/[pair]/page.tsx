import ChampClient from "@/app/champ/ChampClient";
import { notFound, redirect } from "next/navigation";
import type { Metadata } from "next";

type Props = {
  params: Promise<{ pair: string }>;
  searchParams: Promise<{ first?: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {

  const { pair } = await params;
  const parts = pair.split("-vs-");
  if (parts.length !== 2) return {};

  let [a, b] = parts;
  a = a.toLowerCase();
  b = b.toLowerCase();

  const canonical = [a, b].sort().join("-vs-");

  return {
    alternates: {
      canonical: `https://www.loltip.com/matchup/${canonical}`,
    },
  };
}

export default async function Page({ params, searchParams }: Props) {

  const { pair } = await params;
  const { first } = await searchParams;

  const parts = pair.split("-vs-");
  if (parts.length !== 2) notFound();

  let [a, b] = parts;
  a = a.toLowerCase();
  b = b.toLowerCase();

  // canonical 주소로 정규화
  const canonical = [a, b].sort().join("-vs-");
  if (pair !== canonical) {
    redirect(`/matchup/${canonical}?first=${first ?? a}`);
  }

  // ⭐ 핵심: 사용자가 선택한 챔피언을 왼쪽으로 강제 배치
  let forcedMe: string;
  let forcedEnemy: string;

  if (first === a) {
    forcedMe = a;
    forcedEnemy = b;
  } else if (first === b) {
    forcedMe = b;
    forcedEnemy = a;
  } else {
    // 외부 유입 (검색엔진 등)
    forcedMe = a;
    forcedEnemy = b;
  }

  const renderKey = `${forcedMe}-vs-${forcedEnemy}`;

return (
  <ChampClient
    key={renderKey}
    forcedMe={forcedMe}
    forcedEnemy={forcedEnemy}
  />
);
}