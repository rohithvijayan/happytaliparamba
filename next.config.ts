import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Remove X-Powered-By header (minor security + bandwidth saving)
  poweredByHeader: false,

  images: {
    // Serve AVIF first (50% smaller than WebP), fall back to WebP
    formats: ["image/avif", "image/webp"],
    // Cache optimized images for 30 days (default is 60s)
    minimumCacheTTL: 60 * 60 * 24 * 30,
    // Limit device sizes to common breakpoints — reduces number of generated variants
    deviceSizes: [390, 640, 768, 1024, 1280, 1920],
    imageSizes: [16, 32, 64, 128, 256],
  },
};

export default nextConfig;
