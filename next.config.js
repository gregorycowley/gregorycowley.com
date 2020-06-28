// const withCSS = require("@zeit/next-css");

// module.exports = withCSS({
//   cssModules: true,
//   webpack: config => {
//     config.module.rules.push({
//       test: /\.md$/,
//       use: "raw-loader"
//     });
//     return config;
//   }
// });

module.exports = {
  webpack: config => {
    config.module.rules.push({
      test: /\.md$/,
      use: "raw-loader"
    });
    return config;
  }
};