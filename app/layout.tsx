import "./globals.css";
import AdSlot from "./components/AdSlot";
import Script from "next/script";

export const metadata = {
  title: "LOLTIP - League of Legends Mechanic Guide",
  description:
    "Champion interactions, mechanics, unstoppable, vision, skill timing and matchup knowledge for League of Legends.",
  openGraph: {
    title: "LOLTIP",
    description: "League of Legends champion interaction & mechanic guide",
    url: "https://loltip.com",
    siteName: "LOLTIP",
    locale: "ko_KR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="bg-slate-900">

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
          <div className="mx-auto min-w-[960px] w-full px-6 py-10">
            <div className="grid grid-cols-[960px] xl:grid-cols-[240px_960px_240px] gap-6 items-start justify-center">

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

      </body>
    </html>
  );
}