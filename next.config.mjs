/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // allow preview/proxy origins (e.g. Builder preview on fly.dev) to request dev assets
  allowedDevOrigins: [
    'http://localhost:3000',
    'http://127.0.0.1:3000',
    'https://7c524f1012104d9a8217bac3c0bec4e6-5c1818718f6c4bd683cddc9b6.fly.dev',
    'https://c31c9b7b575a4d08aa54317d6c895461-ad02a8ffea124cf883d6d4ead.fly.dev',
    'https://*.fly.dev',
    'https://*.vercel.app'
  ],
}

export default nextConfig
