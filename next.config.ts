import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The old static site served images from /public/...; keep those URLs working
  // (social previews and any existing links point at them).
  async redirects() {
    return [{ source: "/public/:path*", destination: "/:path*", permanent: true }];
  },
};

export default nextConfig;
