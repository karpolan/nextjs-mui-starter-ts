/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export', // Use this if you want to create "static generated website" (SSG), result in "/out" folder
  trailingSlash: true,
  images: { unoptimized: true },

  env: {
    // TODO: You can add custom env variables here, also check .env.xxx file
    AUTHOR: 'KARPOLAN',
    // npm_package_name: process.env.npm_package_name,
    // npm_package_version: process.env.npm_package_version,
  },

  reactStrictMode: true,
  // reactStrictMode: false,
};

export default nextConfig;
