import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/kanban-demo",
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
