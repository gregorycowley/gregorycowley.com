import React, { useEffect } from "react";
import { Layout, SiteMap } from "../components/";

class ProjectsAll extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.storageKey = 'project';
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

export default ProjectsAll;

ProjectsAll.getInitialProps = async function() {
  const metadata = await import(`../data/config.json`)
  const sitemap = await import(`../data/all-content.json`);
  return {
    ...metadata,
    sitemap
  };
};
