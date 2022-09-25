/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['avatars.dicebear.com', 'localhost'],
  },
  swcMinify: true,
}

module.exports = nextConfig
