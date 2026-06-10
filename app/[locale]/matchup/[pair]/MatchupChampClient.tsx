"use client";
import dynamic from "next/dynamic";
const ChampClient = dynamic(() => import("@/app/[locale]/champ/ChampClient"), { ssr: false });
export default function MatchupChampClient(props: React.ComponentProps<typeof ChampClient>) {
  return <ChampClient {...props} />;
}
