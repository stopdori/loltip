/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // /champ?me=[id]&enemy=[id2] → /matchup/[id]-vs-[id2]
      {
        source: "/champ",
        has: [
          { type: "query", key: "me", value: "(?<me>.+)" },
          { type: "query", key: "enemy", value: "(?<enemy>.+)" },
        ],
        destination: "/matchup/:me-vs-:enemy",
        permanent: true,
      },
      // /champ?me=[id] → /champ/[id]
      {
        source: "/champ",
        has: [
          { type: "query", key: "me", value: "(?<me>.+)" },
        ],
        missing: [
          { type: "query", key: "enemy" },
        ],
        destination: "/champ/:me",
        permanent: true,
      },

      // vercel.app → www 본도메인
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "loltip.vercel.app",
          },
        ],
        destination: "https://www.loltip.com/:path*",
        permanent: true,
      },

    ];
  },
};

module.exports = nextConfig;