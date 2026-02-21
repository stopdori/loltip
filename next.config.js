/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // www → non-www
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.loltip.com',
          },
        ],
        destination: 'https://loltip.com/:path*',
        permanent: true,
      },

      // vercel 도메인 → 본도메인
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'loltip.vercel.app',
          },
        ],
        destination: 'https://loltip.com/:path*',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;