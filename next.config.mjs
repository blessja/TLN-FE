/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: {
    unoptimized: true,
    domains: ["tln-imageuploads-dev.s3.ap-south-1.amazonaws.com"],
  },
};

export default nextConfig;
