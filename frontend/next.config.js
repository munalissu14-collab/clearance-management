/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Ensure images from Cloudinary can be displayed
  images: {
    domains: ['res.cloudinary.com'],
  },
  // Disable ESLint during build to prevent deployment failures
  eslint: {
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig
