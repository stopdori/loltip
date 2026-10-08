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
  // 롤 능력고사 공유 카드 라우트는 폰트·엠블럼을 fs로 읽으므로 배포 번들에 명시적으로 포함
  outputFileTracingIncludes: {
    "/api/exam-og": ["./assets/exam-og/**/*"],
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
      // 주의: /champ, /champ/:id, /matchup/:pair, /champ?me=&enemy= 는 여기서 처리하지 않음 —
      // proxy.ts가 챔피언 id 검증·pair 정렬 후 /ko/ 새 주소로 308 리다이렉트(유효하지 않으면 410)
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