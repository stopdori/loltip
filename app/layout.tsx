import "./globals.css";
import { headers } from "next/headers";
import type { ReactNode } from "react";

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
