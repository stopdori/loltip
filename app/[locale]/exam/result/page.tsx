import type { Metadata } from "next";
import { headers } from "next/headers";
import ResultClient from "./ResultClient";
import { computeExamResult } from "../data/result";

type Props = {
  params: Promise<{ locale: string }>;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export async function generateMetadata({ params, searchParams }: Props): Promise<Metadata> {
  const { locale } = await params;
  const sp = await searchParams;
  const lang = locale === "en" ? "en" : "ko";
  const v = typeof sp.v === "string" ? sp.v : null;
  const a = typeof sp.a === "string" ? sp.a : null;
  const result = computeExamResult(v, a);

  const title = result
    ? lang === "ko"
      ? `롤 능력고사 결과: ${result.tier.label.ko} (${result.score}점)`
      : `LoL Matchup Exam Result: ${result.tier.label.en} (${result.score} pts)`
    : lang === "ko"
      ? "롤 능력고사"
      : "LoL Matchup Exam";
  const description =
    lang === "ko"
      ? "챔피언 상호작용 지식 테스트 · 나도 도전해보세요"
      : "Champion interaction knowledge test · Take the challenge yourself";

  const query = new URLSearchParams({ locale: lang });
  if (v) query.set("v", v);
  if (a) query.set("a", a);

  // og:image는 절대 주소여야 한다. 사이트에 metadataBase가 없어서 요청 호스트로 만든다(로컬은 localhost, 라이브는 loltip.com).
  const h = await headers();
  const host = h.get("x-forwarded-host") ?? h.get("host") ?? "loltip.com";
  const proto = h.get("x-forwarded-proto") ?? (host.startsWith("localhost") ? "http" : "https");
  const imageUrl = `${proto}://${host}/api/exam-og?${query.toString()}`;

  return {
    title,
    description,
    robots: { index: false, follow: false },
    openGraph: {
      title,
      description,
      type: "website",
      images: [{ url: imageUrl, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}

export default function Page() {
  return <ResultClient />;
}
