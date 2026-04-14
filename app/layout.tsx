import "./globals.css";
import { headers } from "next/headers";
import type { ReactNode } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  other: {
    "naver-site-verification": "95b1edaf2835fefe05209dedac2514ba922b01a7",
  },
};

export default async function RootLayout({ children }: { children: ReactNode }) {
  const headersList = await headers();
  const pathname = headersList.get("x-pathname") ?? "/ko";
  const locale = pathname.startsWith("/en") ? "en" : "ko";

  return (
    <html lang={locale}>
      <body className="bg-slate-900">{children}</body>
    </html>
  );
}
