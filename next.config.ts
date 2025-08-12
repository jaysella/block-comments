import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Basic redirect
      {
        source: "/pages",
        destination: "/",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
