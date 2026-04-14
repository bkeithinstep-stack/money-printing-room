/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['financialmodelingprep.com', 'twelvedata.com'],
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















