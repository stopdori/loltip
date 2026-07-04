const createNextIntlPlugin = require("next-intl/plugin");
const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  outputFileTracingExcludes: {
    "/sitemap": ["./app/data/matchups/**/*"],
  },
  async redirects() {
    return [
      // vercel.app → www 본도메인
      {
        source: "/:path*",
        has: [{ type: "host", value: "loltip.vercel.app" }],
        destination: "https://loltip.com/:path*",
        permanent: true,
      },

      // 기존 경로 → /ko/ 리다이렉트 (302)
      // 주의: /champ, /champ/:id, /matchup/:pair, /champ?me=&enemy= 는
      // 삭제된 구주소이므로 리다이렉트하지 않고 proxy.ts에서 410 Gone으로 응답함
      { source: "/",              destination: "/ko",                permanent: false },
      { source: "/quiz",          destination: "/ko/quiz",           permanent: false },
      { source: "/privacy",       destination: "/ko/privacy",        permanent: false },

      // /champ-embed/:id → /ko/champ-embed/:id (기본 locale로 리다이렉트)
      { source: "/champ-embed/:id", destination: "/ko/champ-embed/:id", permanent: false },
    ];
  },
};

module.exports = withNextIntl(nextConfig);