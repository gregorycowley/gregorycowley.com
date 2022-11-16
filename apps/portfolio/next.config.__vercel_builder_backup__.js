const withCSS = require("@zeit/next-css");
const glob = require('glob');

/**
 * next.config.js
 */

module.exports = withCSS({
  // cssModules: false,
  // basePath: '/portfolio',
  /**
   * Options for using legacy version of webpack:
   * webpack5: false,
   * 
   * and/or
   * 
   * future: {
   *  webpack5: true,
   * },
   * 
   */
  // webpack5: false,
  // future: {
  //   webpack5: true,
  // },
  webpack: (config) => {
    // console.log(config);
    /** Option Env constants
     * 
     * WEBPACK_BUILD
     * WEBPACK_SERVE
     * WEBPACK_WATCH
     * 
     */

    /**
     * Note: https://www.linkedin.com/pulse/how-upgrade-react-17-webpack-5-step-rany-elhousieny-phd%E1%B4%AC%E1%B4%AE%E1%B4%B0
     * Question: Cannot read property 'tap' of undefined   at ...\node_modules\@pmmmwh\react-refresh-webpack-plugin\lib\index.js:236:65
     * Answer: This can happen in case if you have npm deps conflict. Check if react-refresh-webpack-plugin has a proper version (compatible with webpack 5).
     * 
     * Another Fix:
     * npm install --save-dev webpack@4.44.0
     */
    config.mode = process.env.WEBPACK_SERVE ? 'development' : 'production';
    config.module.rules.push({
      test: /\.md$/,
      use: "raw-loader"
    });
    return config;
  },
  exportPathMap: async function () {
    const routes = {
      '/': { page: '/' },
      '/about': { page: '/about' },
      '/resume': { page: '/resume' },
      '/skills': { page: '/skills' },
      '/tools': { page: '/tools' },
      '/artist': { page: '/artist' },
      '/clients': { page: '/clients' },
      '/designer': { page: '/designer' },
      '/educator': { page: '/educator' },
      '/engineer': { page: '/engineer' },
      '/entrepreneur': { page: '/entrepreneur' },
      '/photographer': { page: '/photographer' },
      '/projects-all': { page: '/projects-all' },
      '/showcase': { page: '/showcase' },
      '/milestones': { page: '/milestones' },
      '/cca-application': { page: '/cca-application' }
    }
    return routes
  }
});