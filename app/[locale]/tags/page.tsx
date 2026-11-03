import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import TagsClient from "./TagsClient";

// ko/en만 빌드 때 생성. 점(.) 포함 주소(/wp-login.php 등)는 proxy.ts를 건너뛰고 [locale]로 잡히므로 404가 캐시되지 않게 막는다.
export const dynamicParams = false;

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

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <TagsClient />;
}
