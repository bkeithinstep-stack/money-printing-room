/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'financialmodelingprep.com',
      },
      {
        protocol: 'https',
        hostname: 'twelvedata.com',
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: '/api/fmp/:path*',
        destination: 'https://financialmodelingprep.com/api/:path*',
      },
    ];
  },
};

module.exports = nextConfig;























