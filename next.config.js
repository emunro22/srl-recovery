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
      // Scrap car collection was retired: the enquiries it brought in were people
      // wanting to sell scrap vehicles, not recovery work. Point the indexed URL
      // at the closest real service rather than letting it 404.
      {
        source: '/services/scrap-car-collection-glasgow',
        destination: '/services/vehicle-transport-glasgow',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
