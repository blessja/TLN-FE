/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    domains: ["tln-imageuploads-dev.s3.ap-south-1.amazonaws.com"],
  },
};

export default nextConfig;
