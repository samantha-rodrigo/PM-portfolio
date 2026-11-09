import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The homepage is a single scrolling page with its own full About and
  // Contact sections now, so the old standalone pages redirect to those
  // anchors instead of serving separate (now-unmaintained) content.
  async redirects() {
    return [
      { source: "/about", destination: "/#about", permanent: false },
      { source: "/contact", destination: "/#contact", permanent: false },
    ];
  },
};

export default nextConfig;
