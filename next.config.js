const isProd = process.env.NODE_ENV === "production";

module.exports = {
  reactStrictMode: true,
  webpack5: true,

  // Fixes fs issue
  webpack: (config) => {
    config.resolve.fallback = { fs: false };

    return config;
  },

  //! This added clean urls and eliminates the .html extension aswell as linking
  //! CSS and JS with the trailingSlash
  assetPrefix: isProd ? "https://main--glowing-trifle-1a76a8.netlify.app/" : "",
  trailingSlash: true,
};
