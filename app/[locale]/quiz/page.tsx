import type { Metadata } from "next";
import QuizClient from "./QuizClient";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const title = locale === "ko" ? "롤 상호작용 퀴즈 - LOLTIP" : "LoL Interaction Quiz - LOLTIP";
  const description =
    locale === "ko"
      ? "리그 오브 레전드 챔피언 간 상호작용을 맞혀보세요."
      : "Test your knowledge of League of Legends champion interactions.";
  return {
    title,
    description,
    alternates: {
      canonical: `https://loltip.com/${locale}/quiz`,
      languages: {
        ko: "https://loltip.com/ko/quiz",
        en: "https://loltip.com/en/quiz",
        "x-default": "https://loltip.com/ko/quiz",
      },
    },
    openGraph: {
      title,
      description,
      url: `https://loltip.com/${locale}/quiz`,
      type: "website",
      images: [{ url: "https://loltip.com/og-image.png", width: 1200, height: 630 }],
    },
  };
}

export default function Page() {
  return <QuizClient />;
}
