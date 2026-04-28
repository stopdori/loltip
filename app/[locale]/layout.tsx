import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { headers } from "next/headers";
import { routing } from "@/i18n/routing";
import { getMessages } from "next-intl/server";
import AdSlot from "@/app/components/AdSlot";
import Script from "next/script";

import type { Metadata } from "next";

const BASE_URL = "https://loltip.com";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const headersList = await headers();
  const fullPathname = headersList.get("x-pathname") ?? `/${locale}`;
  const pathWithoutLocale = fullPathname.replace(new RegExp(`^/${locale}`), "") || "/";

  return {
    alternates: {
      languages: {
        ko: `${BASE_URL}/ko${pathWithoutLocale}`,
        en: `${BASE_URL}/en${pathWithoutLocale}`,
        "x-default": `${BASE_URL}/ko${pathWithoutLocale}`,
      },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>

      {/* Google Analytics */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-RM86YD8RCM"
        strategy="afterInteractive"
      />
      <Script id="ga-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-RM86YD8RCM', {
page_path: window.location.pathname,
});
        `}
      </Script>

      <div className="min-h-screen overflow-x-hidden">
        <div className="mx-auto w-full max-w-screen-lg px-4 py-6 lg:px-6 lg:py-10">
          <div className="grid grid-cols-1 lg:grid-cols-[960px] xl:grid-cols-[240px_960px_240px] gap-4 lg:gap-6 items-start justify-center">

            <aside className="sticky top-[220px] hidden xl:block">
              <AdSlot side="left" />
            </aside>

            <main>{children}</main>

            <aside className="sticky top-[220px] hidden xl:block justify-self-end">
              <AdSlot side="right" />
            </aside>

          </div>
        </div>
      </div>

      <footer className="mt-16 pb-10 text-center text-xs text-slate-400/70 leading-relaxed">
        <p>Riot Games is not endorsed by or affiliated with this project.</p>
        <p>League of Legends and Riot Games are trademarks or registered trademarks of Riot Games, Inc.</p>
      </footer>

    </NextIntlClientProvider>
  );
}
