/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['neweraeducation.com.au'],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
          {
            key: 'Content-Security-Policy',
            value: "frame-src 'self' https://www.google.com https://maps.google.com https://maps.googleapis.com https://*.google.com https://*.googleapis.com; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://maps.googleapis.com https://maps.gstatic.com; object-src 'none';",
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig 