import type { Metadata } from "next";
import QuizClient from "./QuizClient";

export const metadata: Metadata = {
  title: "롤 상호작용 퀴즈 - LOLTIP",
  description: "리그 오브 레전드 챔피언 간 상호작용을 맞혀보세요.",
  alternates: {
    canonical: "https://loltip.com/quiz",
  },
  openGraph: {
    title: "롤 상호작용 퀴즈 - LOLTIP",
    description: "리그 오브 레전드 챔피언 간 상호작용을 맞혀보세요.",
    url: "https://loltip.com/quiz",
    type: "website",
    images: [{ url: "https://loltip.com/og-image.png", width: 1200, height: 630 }],
  },
};

export default function Page() {
  return <QuizClient />;
}
