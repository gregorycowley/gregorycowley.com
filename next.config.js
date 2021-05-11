const withCSS = require("@zeit/next-css");
const glob = require('glob');

/**
 * next.config.js
 */

module.exports = withCSS({
  cssModules: false,
  webpack: config => {
    config.module.rules.push({
      test: /\.md$/,
      use: "raw-loader"
    });
    return config;
  }
  ,
  exportPathMap: async function() {
    const routes = {
      '/': { page: '/' },
      '/about': { page: '/about' },
      '/resume': { page: '/resume' },
      '/skills': { page: '/skills' },
      '/tools': { page: '/tools' },
      '/sitemap': { page: '/sitemap' },
    }
    return routes
  }
});