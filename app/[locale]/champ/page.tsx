export const dynamic = "force-dynamic";

import type { Metadata } from "next";
import ChampClient from "./ChampClient";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: "챔피언 목록 - LOLTIP",
    description: "리그 오브 레전드 모든 챔피언의 상성과 공략을 확인하세요.",
    alternates: {
      canonical: `https://loltip.com/${locale}/champ`,
    },
    openGraph: {
      title: "챔피언 목록 - LOLTIP",
      description: "리그 오브 레전드 모든 챔피언의 상성과 공략을 확인하세요.",
      url: `https://loltip.com/${locale}/champ`,
      type: "website",
      images: [{ url: "https://loltip.com/og-image.png", width: 1200, height: 630 }],
    },
  };
}

export default function Page() {
  return <ChampClient />;
}