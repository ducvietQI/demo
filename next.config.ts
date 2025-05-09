import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.quanghoanghome.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
  output: "standalone",
  async rewrites() {
    return [
      {
        source: `/public/:path*`,
        destination: `https://wsrv.nl/?url=${process.env.NEXT_PUBLIC_API_URL}/public/:path*`,
      },
    ];
  },
};

export default nextConfig;
