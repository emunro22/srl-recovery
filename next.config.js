/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      { protocol: 'https', hostname: '*.public.blob.vercel-storage.com' },
    ],
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.srlrecovery.com' }],
        destination: 'https://srlrecovery.com/:path*',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig