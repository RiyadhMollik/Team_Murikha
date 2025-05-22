/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["uuid"],
  images: {
    domains: ["i.ibb.co", "firebasestorage.googleapis.com"], // Add this line to allow images from i.ibb.co
  },
};

export default nextConfig;
