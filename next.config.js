// next.config.js
const withOptimizedImages = require("next-optimized-images");

const prod = process.env.NODE_ENV === "production";
module.exports = withOptimizedImages({
  assetPrefix: prod ? `/${process.env.NEXT_PUBLIC_REPO_NAME}/` : ".",
  reactStrictMode: true,
  images: {
    disableStaticImages: true,
  },
  optimizeImagesInDev: true,
});
