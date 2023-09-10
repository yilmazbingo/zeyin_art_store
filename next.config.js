/** @type {import('next').NextConfig} */
const path = require("path");
const nextConfig = {
  sassOptions: { includePaths: [path.join(__dirname, "src", "styles")] },

  images: {
    // remotePatterns: [
    //   {
    //     protocol: "https",
    //     hostname: "res.cloudinary.com",
    //     port: "",
    //     // pathname: "/account123/**",
    //   },
    // ],"res.cloudinary.com"
    domains: ["res.cloudinary.com"],
  },
};

module.exports = nextConfig;
