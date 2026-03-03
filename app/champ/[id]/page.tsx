import ChampClient from "../ChampClient";
import { CHAMPIONS } from "@/app/data/champions";
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
  <Fragment>
    {/* SEO용 서버 렌더링 본문 (크롤러가 읽는 실제 페이지 내용) */}
    {(() => {
  const champ = CHAMPIONS.find(c => c.id === champId);
  const champName = champ?.ko ?? champId;

  return (
    <div className="hidden">
      <h1>{champName} 공략</h1>
      <p>
        {champName} 스킬 상호작용, CC 메커니즘,
        시야 상호작용 및 상성 정보 정리.
      </p>
    </div>
  );
})()}

    <ChampClient
      key={renderKey}
      forcedMe={forcedMe}
      forcedEnemy={forcedEnemy}
    />
  </Fragment>
);
}