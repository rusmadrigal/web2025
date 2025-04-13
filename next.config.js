// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  async redirects() {
    return [
      {
        source: "/contacto",
        destination: "/",
        permanent: true,
      },
      {
        source: "/acerca",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
