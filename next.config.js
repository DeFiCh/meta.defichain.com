/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    deviceSizes: [360, 768, 1440, 1920, 2048, 3840],
  },
}

module.exports = nextConfig
