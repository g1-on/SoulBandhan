import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // If deploying to https://g1-on.github.io/SoulBandhan/
  // basePath: '/SoulBandhan',
};

export default nextConfig;
