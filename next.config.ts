import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "hhl5wcanr4.ufs.sh",
        pathname: "/f/*"
      }
    ]
  }
};

export default nextConfig;
