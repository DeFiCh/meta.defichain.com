/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    forceSwcTransforms: true,
  },
  swcMinify: true,
  reactStrictMode: true,
  images: {
    deviceSizes: [360, 768, 1440, 1920, 2048, 3840],
  },
};

module.exports = nextConfig;
