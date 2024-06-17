/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
        port: "",
        pathname: "/**",
      },
    ],
  },
  async redirects() {
    return [
      // Basic redirect
      {
        source: "/about",
        destination: "/posts",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
