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
      // "/"는 최종 목적지(/ko/champ)로 바로 리다이렉트함 - 예전엔 "/ko"를 거쳐서
      // app/[locale]/page.tsx의 permanentRedirect가 다시 "/ko/champ"로 한 번 더
      // 리다이렉트하는 2홉 체인이었음(URL 감사에서 발견). "/ko", "/en" 단독 접속은
      // 여전히 app/[locale]/page.tsx가 처리하므로 그쪽은 건드리지 않음.
      { source: "/",              destination: "/ko/champ",          permanent: true },
      { source: "/quiz",          destination: "/ko/quiz",           permanent: true },
      { source: "/privacy",       destination: "/ko/privacy",        permanent: true },

      // /champ-embed/:id → /ko/champ-embed/:id (기본 locale로 리다이렉트)
      { source: "/champ-embed/:id", destination: "/ko/champ-embed/:id", permanent: true },
    ];
  },
};

module.exports = withNextIntl(nextConfig);