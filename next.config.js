const withMDX = require('@next/mdx')()

/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
    reactStrictMode: true,
    swcMinify: true,
    compiler: {
      removeConsole: process.env.NODE_ENV !== "development",
    },
  };
  
  const withPWA = require("next-pwa")({
    dest: "public",
    disable: process.env.NODE_ENV === "development",
    register: true,
    skipWaiting: true,
  });
  
  module.exports = withPWA(nextConfig);
  module.exports = withMDX(nextConfig);
