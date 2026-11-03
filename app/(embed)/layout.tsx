import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import type { Metadata } from "next";
import { NAVER_SITE_VERIFICATION } from "@/app/data/siteInfo";
import "../globals.css";

export const metadata: Metadata = {
  other: {
    "naver-site-verification": NAVER_SITE_VERIFICATION,
  },
};

export default async function EmbedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // embed는 요청마다 렌더링하는 라우트라(force-dynamic) next-intl 미들웨어 헤더에서 로케일을 읽어도 된다.
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className="bg-slate-900">
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
