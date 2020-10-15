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
          <Card style={style} 
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
        <div className="showcase-grid container">
          <TextContent>
            {this.makeCards(this.props.projects)}
          </TextContent>
        </div>
      </Layout>
    );
  }
}

export default Showcase;

Showcase.getInitialProps = async function() {
  const metadata = await import(`../data/config.json`);
  let projects = [];

  projects.push(await import("../content/projects/transcinema.md"));
  projects.push(await import("../content/projects/cca.md"));
  projects.push(await import("../content/projects/chronopolis.md"));
  projects.push(await import("../content/projects/cncmachine.md"));
  projects.push(await import("../content/projects/drtingleton.md"));
  projects.push(await import("../content/projects/mpps.md"));
  projects.push(await import("../content/projects/rxgallery.md"));
  projects.push(await import("../content/projects/thetestproject.md"));
  projects.push(await import("../content/projects/3mps.md"));

  return {
    ...metadata,
    projects
  };
};

