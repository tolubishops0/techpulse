import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  // experimental: {
  //   cacheComponents: true,
  // },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "zlrahwwnlblsdyvdoaoy.supabase.co",
      },
      {
        protocol: "https",
        hostname: "pixabay.com",
      },
      {
        protocol: "https",
        hostname: "unsplash.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
