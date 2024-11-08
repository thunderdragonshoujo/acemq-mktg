/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  async redirects() {
    return [
      {
        source: "/our-services/",
        destination: "/mq-services/",
        permanent: true,
      },
      {
        source: "/services-2/",
        destination: "/support/",
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  env: {
    SANITY_STUDIO_DATASET: 'production',
    SANITY_STUDIO_PROJECT_ID: 'hg0tpkdw',
  },
};

export default nextConfig;
