const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

module.exports = {
  // webpack function is executed twice, once for the server and once for the client
  webpack(config, { isServer }/* options */) {
    // only analyze client bundles
    // `.next/dist/bundles` is for server bundles
    if (!isServer && process.env.ANALYZE) {
      config.plugins.push(
        new BundleAnalyzerPlugin({
          analyzerMode: "static",
          reportFilename: "./bundles/client.html",
          openAnalyzer: true
        })
      );
    }
    return config;
  },

  exportPathMap() {
    return {
      "/": { page: "/" },
      "/about": { page: "/about" }
    };
  }
};
