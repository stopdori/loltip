/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // vercel 도메인만 본도메인으로 보내기
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