import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */


    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'https://i.imgur.com/',
          port: '',
          pathname: 'https://i.imgur.com/**',
        },
      ],
    },
  
};

export default nextConfig;
