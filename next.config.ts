import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['placeholders.co', 'img.clerk.com', 'paths.tinkerhub.org'],
  },
  eslint:{
    ignoreDuringBuilds: true,
  }
};

export default nextConfig;
