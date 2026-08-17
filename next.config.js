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

      // 기존 경로 → /ko/ 리다이렉트
      // 주의: /champ, /champ/:id, /matchup/:pair, /champ?me=&enemy= 는
      // 삭제된 구주소이므로 리다이렉트하지 않고 proxy.ts에서 410 Gone으로 응답함
      // "/"는 구글이 표준 URL을 /ko로 명확히 인식하도록 301(permanent)로 설정
      { source: "/",              destination: "/ko",                permanent: true },
      { source: "/quiz",          destination: "/ko/quiz",           permanent: true },
      { source: "/privacy",       destination: "/ko/privacy",        permanent: true },

      // /champ-embed/:id → /ko/champ-embed/:id (기본 locale로 리다이렉트)
      { source: "/champ-embed/:id", destination: "/ko/champ-embed/:id", permanent: true },
    ];
  },
};

module.exports = withNextIntl(nextConfig);