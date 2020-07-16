const withCSS = require("@zeit/next-css");
const glob = require('glob');

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
    //get all .md files in the posts dir
    const blogs = glob.sync('content/**/*.md')

    const cleanFilename = ( filename ) => {
      return filename.replace(/ /g, '-').slice(0, -3).trim();
    }

    //remove path and extension to leave filename only
    const blogSlugs = blogs.map(file => {
        let fileElements = file.split("/");
        return {
          filename: cleanFilename( fileElements.pop() ),
          projectCategory: (fileElements.length == 3) ? `/${fileElements.pop()}` : "",
          projects: (fileElements.length == 2) ? `/${fileElements.pop()}` : "",
          root: (fileElements.length == 1) ? fileElements.pop() : "",
        }
      }
    )

    //add each blog to the routes obj
    blogSlugs.forEach(blog => {
      if ( blog.projectCategory != "" ){
        routes[`/projects${blog.projectCategory}/${blog.filename}`] = { page: '/projects/[slug]', query: { slug: blog.filename, projectCategory: blog.projectCategory } }
      } else {
        routes[`/projects/${blog.filename}`] = { page: '/projects/[slug]', query: { slug: blog.filename, projectCategory: '' } }
      }
    })

    return routes
  }
});

// module.exports = {
//   webpack: config => {
//     config.module.rules.push({
//       test: /\.md$/,
//       use: "raw-loader"
//     });
//     return config;
//   }
// };