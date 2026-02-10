/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrorsDuringDevelopment: false,
  },
  eslint: {
    dirs: ['app', 'components', 'lib', 'types'],
  },
}

module.exports = nextConfig
