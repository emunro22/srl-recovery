/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // 👈 THIS creates the /out folder
  images: {
    formats: ['image/avif', 'image/webp'],
    unoptimized: true, // 👈 required for static export
  },
}

module.exports = nextConfig