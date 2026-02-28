/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // vercel.app → 본도메인만 처리 (www 건드리지 않음)
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "loltip.vercel.app",
          },
        ],
        destination: "https://loltip.com/:path*",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;