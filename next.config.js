/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
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