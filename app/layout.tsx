import "./globals.css";
import AdSlot from "./components/AdSlot";

export const metadata = {
  title: "LOLTIP",
  description: "League of Legends Tips",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="bg-slate-900">
        <div className="min-h-screen overflow-x-auto">
          {/* 본문 기준 레이아웃 */}
          <div className="mx-auto min-w-[960px] w-full px-6 py-10">
            {/* 
              기본: 본문만 중앙
              xl 이상: 좌 / 본문 / 우 (광고 표시)
            */}
            <div className="grid grid-cols-[960px] xl:grid-cols-[240px_960px_240px] gap-6 items-start justify-center">

              {/* LEFT AD (xl 이상만) */}
              <aside className="sticky top-[220px] hidden xl:block">
                <AdSlot side="left" />
              </aside>

              {/* MAIN */}
              <main>{children}</main>

              {/* RIGHT AD (xl 이상만) */}
              <aside className="sticky top-[220px] hidden xl:block justify-self-end">
                <AdSlot side="right" />
              </aside>

            </div>
          </div>
        </div>

        {/* RIOT DISCLAIMER */}
        <footer className="mt-16 pb-10 text-center text-xs text-slate-400/70 leading-relaxed">
          <p>Riot Games is not endorsed by or affiliated with this project.</p>
          <p>League of Legends and Riot Games are trademarks or registered trademarks of Riot Games, Inc.</p>
        </footer>

      </body>
    </html>
  );
}