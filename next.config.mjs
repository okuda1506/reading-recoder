/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    domains: ['books.google.com'], // 許可するホスト名
  },
};

export default nextConfig;