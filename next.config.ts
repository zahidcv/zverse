import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: "/zverse",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
