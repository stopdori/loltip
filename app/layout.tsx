import "./globals.css";

export const metadata = {
  title: "LOLTIP",
  description: "League of Legends Tips",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="bg-slate-900">
        <div className="min-h-screen">
          <main className="max-w-7xl mx-auto px-6 py-10">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}