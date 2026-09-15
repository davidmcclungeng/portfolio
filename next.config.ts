import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static HTML export for Cloudflare: every page is prerendered, so no server is needed
  output: "export",
  // The default image optimizer needs a server; serve images as-is instead
  images: { unoptimized: true },
};

export default nextConfig;
