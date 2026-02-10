/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  experimental: {
    inlineCss: true,
  },
  images: { unoptimized: true },
};

module.exports = nextConfig;
