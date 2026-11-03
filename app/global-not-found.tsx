// 어떤 라우트에도 맞지 않는 주소의 404. 루트 레이아웃이 없는 위치라 <html>을 직접 렌더링한다.
// 잘못된 챔피언/상호작용 슬러그도 proxy.ts가 여기로 보낸다(ISR 캐시에 쌓이지 않도록 라우트에 닿기 전에 처리).
import "./globals.css";
import { headers } from "next/headers";
import type { Metadata } from "next";
import NotFoundBody from "@/app/components/NotFoundBody";
import { NAVER_SITE_VERIFICATION } from "@/app/data/siteInfo";

export const metadata: Metadata = {
  robots: { index: false },
  other: {
    "naver-site-verification": NAVER_SITE_VERIFICATION,
  },
};

export default async function GlobalNotFound() {
  // next-intl 미들웨어가 넣은 로케일 헤더. /api처럼 미들웨어를 거치지 않는 경로는 헤더가 없어 ko로 둔다.
  const headersList = await headers();
  const lang = headersList.get("x-next-intl-locale") === "en" ? "en" : "ko";

  return (
    <html lang={lang}>
      <body className="bg-slate-900">
        <NotFoundBody />
      </body>
    </html>
  );
}
