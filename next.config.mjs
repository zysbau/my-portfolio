/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/my-portfolio',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
