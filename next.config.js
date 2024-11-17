/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  images: {
    domains: ["files.stripe.com"],
  },
  transpilePackages: ["lucide-react"], // add this
};

module.exports = nextConfig;
