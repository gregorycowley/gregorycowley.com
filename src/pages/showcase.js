import React from "react";
import matter from "gray-matter";
import { Layout, Card, TextContent } from "../components/";

class Showcase extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  makeCards(projects) {
    return projects.map(
      (item, key) => {
        const data = matter (item.default);
        const {
          hero_image,
          title,
          subtitle,
          description,
          category,
          slug
        } = data.data;
        const link= `/projects/${slug}`
        const style = "project" 
        return (
          <Card key={key} 
            style={style}
            hero_image={hero_image} 
            link={link} 
            title={title}
            subtitle={subtitle} 
            description="" />
        )
      }
    );
  }

  render() {
    return (
      <Layout
        siteTitle={this.props.title}
        siteDescription={this.props.description}
      >
        <TextContent className="showcase">
          <h1>Showcase of Key Projects</h1>
        </TextContent>
        <div className="showcase-grid container">
          {this.makeCards(this.props.projects)}
        </div>
      </Layout>
    );
  }
}

export default Showcase;

Showcase.getInitialProps = async function() {
  const metadata = await import(`../data/config.json`);
  let projects = [];

  projects.push(await import("../content/projects/voicebase.md"));
  projects.push(await import("../content/projects/hondansx.md"));
  projects.push(await import("../content/projects/branding.md"));
  projects.push(await import("../content/projects/briggo.md"));
  projects.push(await import("../content/projects/blurbbookify.md"));
  projects.push(await import("../content/projects/drpepper.md"));
  projects.push(await import("../content/projects/ideo-newyears.md"));
  projects.push(await import("../content/projects/nikeskateboarding.md"));
  projects.push(await import("../content/projects/opesadvisors.md"));
  projects.push(await import("../content/projects/cms.md"));
  projects.push(await import("../content/projects/zephyros.md"));
  projects.push(await import("../content/projects/photoworks.md"));

  return {
    ...metadata,
    projects
  };
};

