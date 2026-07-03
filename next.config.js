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

      // /champ?me=[id]&enemy=[id2] → /ko/matchup/[id]-vs-[id2]
      {
        source: "/champ",
        has: [
          { type: "query", key: "me", value: "(?<me>.+)" },
          { type: "query", key: "enemy", value: "(?<enemy>.+)" },
        ],
        destination: "/ko/matchup/:me-vs-:enemy",
        permanent: true,
      },
      // /champ?me=[id] → /ko/champ/[id]
      {
        source: "/champ",
        has: [{ type: "query", key: "me", value: "(?<me>.+)" }],
        missing: [{ type: "query", key: "enemy" }],
        destination: "/ko/champ/:me",
        permanent: true,
      },

      // 기존 경로 → /ko/ 리다이렉트 (302)
      { source: "/",              destination: "/ko",                permanent: false },
      { source: "/champ",         destination: "/ko/champ",          permanent: false },
      { source: "/champ/:id",     destination: "/ko/champ/:id",      permanent: false },
      { source: "/matchup/:pair", destination: "/ko/matchup/:pair",  permanent: false },
      { source: "/quiz",          destination: "/ko/quiz",           permanent: false },
      { source: "/privacy",       destination: "/ko/privacy",        permanent: false },

      // /champ-embed/:id → /ko/champ-embed/:id (기본 locale로 리다이렉트)
      { source: "/champ-embed/:id", destination: "/ko/champ-embed/:id", permanent: false },
    ];
  },
};

module.exports = withNextIntl(nextConfig);