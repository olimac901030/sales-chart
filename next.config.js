/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
    typedRoutes: true
  },
  compiler: { removeConsole: process.env.NODE_ENV === 'production' },
  modularizeImports: {
    '@mui/material': {
      transform: '@mui/material/{{member}}',
      preventFullImport: true
    },
    '@mui/icons-material': {
      transform: '@mui/icons-material/{{member}}',
      preventFullImport: true
    }
  },
  output: 'standalone',
  async redirects() {
    return [];
  }
};
module.exports = nextConfig;
