/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  }
};

// const nextConfig = {
//   output: 'export',
//   basePath: '/Lipice-AICG',
//   assetPrefix: '/Lipice-AICG/',
//   trailingSlash: true, 
// };


module.exports = nextConfig;