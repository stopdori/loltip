import ChampClient from "@/app/[locale]/champ/ChampClient";
import { CHAMPIONS } from "@/app/data/champions";
import { CHAMPS } from "@/app/data/champs/_index";
import { notFound, redirect } from "next/navigation";
import { Fragment } from "react";

import type { Metadata } from "next";

export const dynamic = "force-dynamic";

type Props = {
  params: Promise<{ locale: string; id: string }>;
  searchParams: Promise<{ side?: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const champId = id.toLowerCase();

  const champ = CHAMPIONS.find(c => c.id === champId);

  if (!champ) {
    return {
      title: "Champion Guide | LOLTIP",
      robots: "noindex",
    };
  }

  return {
    title: `${champ.en} Champion Guide | LOLTIP`,
    robots: "noindex",
  };
}

export default async function Page(props: Props) {
  const params = await props.params;
  const searchParams = await props.searchParams;

  const { locale, id } = params;
  if (!id) notFound();

  const champId = id.toLowerCase();

  if (id !== champId) {
    redirect(`/${locale}/champ-embed/${champId}`);
  }

  const champData = CHAMPS[champId as keyof typeof CHAMPS];
  if (!champData) notFound();

  const champInfo = CHAMPIONS.find(c => c.id === champId);
  if (!champInfo) notFound();

  const side = searchParams?.side ?? "my";

  const forcedMe = side === "my" ? champId : null;
  const forcedEnemy = side === "enemy" ? champId : null;
  const renderKey = `${forcedMe ?? "none"}-${forcedEnemy ?? "none"}`;

  return (
    <Fragment>
      <ChampClient
        key={renderKey}
        forcedMe={forcedMe}
        forcedEnemy={forcedEnemy}
        hideHeader={true}
        embedMode={true}
      />
      <script dangerouslySetInnerHTML={{ __html: `
  function sendHeight() {
    var h = document.body.scrollHeight;
    window.parent.postMessage({ type: 'champEmbedHeight', id: '${champId}', height: h }, '*');
  }
  window.addEventListener('load', sendHeight);
  new ResizeObserver(sendHeight).observe(document.body);
`}} />
    </Fragment>
  );
}
