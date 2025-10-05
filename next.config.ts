import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    PRELOADER_ENABLED: process.env.PRELOADER_ENABLED || "true",
  },
  /* config options here */
};

export default nextConfig;
