/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'd3nn873nee648n.cloudfront.net',
        port: '',
        pathname: '/**',
      },
    ],
  }
}

module.exports = nextConfig
