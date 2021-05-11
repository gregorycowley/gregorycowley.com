const path = require("path");
const webpack = require("webpack");
// const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// const NpmInstallPlugin = require("npm-install-webpack-plugin");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");

const ASSET_PATH = process.env.ASSET_PATH || "/";

module.exports = {
  mode: "development",
  entry: {
    main: "./src/index.js",
  },
  // devtool: "inline-source-map",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index_bundle.js",
    publicPath: ASSET_PATH,
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    open: true,
    publicPath: "/",
    hot: true,
  },

  module: {
    rules: [
      {
        test: /\.json5$/i,
        loader: "json5-loader",
        type: "javascript/auto",
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset",
        // type: "asset/resource",
        // generator: {
        //   filename: "static/[name].[hash][ext]",
        // },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"],
    alias: {
      assets: path.resolve(__dirname, "src/assets/"),
      common: path.resolve(__dirname, "src/common/"),
      hooks: path.resolve(__dirname, "src/hooks/"),
      components: path.resolve(__dirname, "src/components/"),
      pages: path.resolve(__dirname, "src/pages/"),
    },
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: "Gregory Cowley",
      template: "./src/index.ejs",
      inject: "body",
      filename: "index.html",
    }),
    new webpack.DefinePlugin({
      "process.env.ASSET_PATH": JSON.stringify(ASSET_PATH),
    }),
    new ImageMinimizerPlugin({
      deleteOriginalAssets: true,
      filename: "static/media/[name].webp",
      minimizerOptions: {
        plugins: ["imagemin-webp"],
      },
    }),
  ],
  optimization: {
    usedExports: true,
  },
};
