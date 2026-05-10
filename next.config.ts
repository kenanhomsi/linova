import type { NextConfig } from "next";
import path from "path";
import createNextIntlPlugin from "next-intl/plugin";

import { SITE_CANONICAL_HOST, SITE_CANONICAL_ORIGIN } from "./lib/constants";

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: `www.${SITE_CANONICAL_HOST}` }],
        destination: `${SITE_CANONICAL_ORIGIN}/:path*`,
        permanent: true,
      },
    ];
  },
  turbopack: {
    root: path.resolve(process.cwd()),
  },
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
  experimental: {
    optimizeCss: true,
  },
  compress: true,
};

export default withBundleAnalyzer(withNextIntl(nextConfig));
