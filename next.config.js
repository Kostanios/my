/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.resolve.alias.canvas = false;

    return config;
  },
  env: {
    CONTENTFUL_SECRET: process.env.CONTENTFUL_SECRET,
    CONTENTFUL_SPACE: process.env.CONTENTFUL_SPACE
  }
}

module.exports = nextConfig
