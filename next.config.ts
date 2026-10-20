import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Genera HTML estático en `out/` para servirlo con nginx en el VPS.
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
