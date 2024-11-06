/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  async rewrites() {
      return {
        beforeFiles: [
          {
            source: '/:path*',
            has: [
              {
                type: 'host',
                value: 'words.v0idx.com',
              },
            ],
            destination: '/words',
          },
        ]
      }
  }
}
