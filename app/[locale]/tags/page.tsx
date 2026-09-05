import type { Metadata } from "next";
import TagsClient from "./TagsClient";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: locale === "ko" ? "태그 레퍼런스 - LOLTIP" : "Tag Reference - LOLTIP",
    description:
      locale === "ko"
        ? "리그 오브 레전드 상호작용에 쓰이는 모든 태그를 검색하고 살펴보세요."
        : "Search and browse every interaction tag used across League of Legends champion interactions.",
    alternates: {
      canonical: `https://loltip.com/${locale}/tags`,
      languages: {
        ko: "https://loltip.com/ko/tags",
        en: "https://loltip.com/en/tags",
        "x-default": "https://loltip.com/ko/tags",
      },
    },
  };
}

export default function Page() {
  return <TagsClient />;
}
