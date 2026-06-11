import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_PAGES === "true";
const basePath = isGithubPages ? "/a-navi-agency" : "";

const nextConfig: NextConfig = {
  ...(isGithubPages
    ? {
        output: "export",
        trailingSlash: true,
      }
    : {}),
  basePath,
  assetPrefix: basePath,
  images: {
    unoptimized: isGithubPages,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
