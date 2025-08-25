/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Allow deployment even if ESLint errors exist
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Allow deployment even if type errors exist
    ignoreBuildErrors: true,
  },
  experimental: {
    optimizeCss: true,
  },
};

module.exports = nextConfig;


