/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'flowbite.s3.amazonaws.com',
          
            pathname: '/blocks/marketing-ui/**',
          },
          {
            protocol: 'https',
            hostname: 'fakestoreapi.com',
            pathname: '/img/**',
          },
          {
            protocol: 'https',
            hostname: 'tailwindui.com',
            pathname: '/img/ecommerce-images/**',
          },
        ],
      },
}

module.exports = nextConfig
