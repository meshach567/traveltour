/** @type {import('next').NextConfig} */

const nextConfig = {
  // Your Next.js configuration here
  images: { unoptimized: true },
   basePath: "/traveltour",
  output: "export", // <=== enables static exports
  reactStrictMode: true,
};

export default nextConfig;
