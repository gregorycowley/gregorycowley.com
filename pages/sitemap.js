import React from "react";
import matter from "gray-matter";
import { Layout, SiteMap } from "../components/";

class Sitemap extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <Layout 
       siteTitle={this.props.title}
       siteDescription={this.props.description}
      >
        <SiteMap className="sitemap container" sitemapItems={this.props.sitemap} />
      </Layout>
    );
  }
}

export default Sitemap;

Sitemap.getInitialProps = async function() {
  const metadata = await import(`../data/config.json`)
  const sitemap = await import(`../data/all-content.json`);
  return {
    ...metadata,
    sitemap
  };
};
