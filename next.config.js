const prod = process.env.NODE_ENV === "production";
module.exports = {
  assetPrefix: prod ? `/${process.env.NEXT_PUBLIC_REPO_NAME}/` : "./",
  reactStrictMode: true,
  images: {
    disableStaticImages: true,
  },
  optimizeImagesInDev: true,
};
