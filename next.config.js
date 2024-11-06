/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  async rewrites() {
      return {
        beforeFiles: [
          {
            source: '/',
            has: [
              {
                type: 'host',
                value: 'words.v0idx.com',
              },
            ],
            destination: 'https://v0idx.com/words',
          },
          {
            source: '/',
            has: [
              {
                type: 'host',
                value: 'words.localhost:3000',
              }
            ],
            destination: 'http://localhost:3000/words',
          },
        ]
      }
  }
}
