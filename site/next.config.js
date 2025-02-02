/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Equis Repository',
    description: 'The official Equis store for Kasm supported workspaces.',
    icon: '/img/logo.svg',
    listUrl: 'https://github.com/alanlee-equis/kasm-registry/',
    contactUrl: 'https://github.com/alanlee-equis/kasm-registry/issues',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
