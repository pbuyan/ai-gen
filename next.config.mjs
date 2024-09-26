/** @type {import('next').NextConfig} */
// const removeImports = require("next-remove-imports")();
import removeImports from "next-remove-imports";
removeImports({})();

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn-icons-png.flaticon.com",
      },
    ],
  },
};

export default nextConfig;
