/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
    domains: ["api.uifaces.co", "randomuser.me", "images.unsplash.com"],
  },
};

module.exports = nextConfig;
