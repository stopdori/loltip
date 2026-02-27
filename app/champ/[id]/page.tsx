import ChampClient from "../ChampClient";
import { CHAMPIONS } from "@/app/data/champions";
import { notFound } from "next/navigation";

type Props = {
  params: { id: string };
  searchParams?: { enemy?: string };
};

export default async function Page(props: Props) {
  const params = await props.params;
const searchParams = await props.searchParams;

const id = params?.id;
if (!id) notFound();

const champId = id.toLowerCase();

  // 존재하는 챔피언인지 확인
  const champExists = CHAMPIONS.some(c => c.id === champId);
  if (!champExists) notFound();

  // 기존 쿼리 구조로 내부 전달
  const enemy = searchParams?.enemy;

  return (
    <ChampClient
      forcedMe={champId}
      forcedEnemy={enemy ?? null}
    />
  );
}