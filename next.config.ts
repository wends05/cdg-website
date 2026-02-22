import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
      {
        protocol: "https",
        hostname: "hhl5wcanr4.ufs.sh",
        pathname: "/f/*",
      },
    ],
  },
  turbopack: {},
};

export default nextConfig;
