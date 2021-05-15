const glob = require("glob");
const path = require("path");

// const HtmlWebpackPlugin = require("html-webpack-plugin");
// const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");
const ASSET_PATH = process.env.ASSET_PATH || "/";

/**
 * next.config.js
 */

module.exports = {
  basePath: "",
  cssModules: false,
  future: {
    webpack5: true,
  },
  env: {
    ASSET_PATH: ASSET_PATH,
  },
  // webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {

  webpack: (config) => {
    config.module.rules.push({
      test: /\.md$/,
      use: "raw-loader",
    });
    config.module.rules.push({
      test: /\.json5$/i,
      loader: "json5-loader",
      type: "javascript/auto",
    });
    config.module.rules.push({
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: ["babel-loader"],
    });

    // config.module.rules.push({
    //   test: /\.css$/i,
    //   use: ["style-loader", "css-loader"],
    // });

    config.module.rules.push({
      test: /\.(png|svg|jpg|jpeg|gif)$/i,
      type: "asset",
    });

    config.resolve.extensions.concat(["*", ".js", ".jsx"]);

    config.resolve.alias = {
      ...config.resolve.alias,
      assets: path.resolve(__dirname, "src/assets/"),
      common: path.resolve(__dirname, "src/common/"),
      components: path.resolve(__dirname, "src/components/"),
      content: path.resolve(__dirname, "src/content/"),
      data: path.resolve(__dirname, "src/data/"),
      hooks: path.resolve(__dirname, "src/hooks/"),
      layout: path.resolve(__dirname, "src/layout/"),
      pages: path.resolve(__dirname, "src/components/page-components/"),
      styles: path.resolve(__dirname, "src/styles/"),
    };

    // config.plugins.push(new HotModuleReplacementPlugin());

    // config.plugins.push(
    //   new HtmlWebpackPlugin({
    //     title: "Gregory Cowley",
    //     template: "./src/index.ejs",
    //     inject: "body",
    //     filename: "index.html",
    //   })
    // );

    // config.plugins.push(
    //   new ImageMinimizerPlugin({
    //     deleteOriginalAssets: true,
    //     filename: "static/media/[name].webp",
    //     minimizerOptions: {
    //       plugins: ["imagemin-webp"],
    //     },
    //   })
    // );

    // console.log(config);

    return config;
  },
  pageExtensions: ["mdx", "jsx", "js", "ts", "tsx"],
  exportPathMap: async function () {
    const routes = {
      "/": { page: "/" },
      "/about": { page: "/about" },
      "/resume": { page: "/resume" },
      "/skills": { page: "/skills" },
      "/tools": { page: "/tools" },
      "/sitemap": { page: "/sitemap" },
    };
    return routes;
  },
};
