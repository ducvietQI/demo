import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'sbshouse.vn',
                port: '',
                pathname: '/**',
            },
        ],
    },
};

export default nextConfig;
