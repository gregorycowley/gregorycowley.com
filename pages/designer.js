import React from "react";
import matter from "gray-matter";
import { DisciplinePage } from "../components/";

class Designer extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <DisciplinePage 
        title={this.props.data.data.title}
        subtitle={this.props.data.data.subtitle}
        description={this.props.data.data.description}
        projects={this.props.projects} />   
    );
  }
}

export default Designer;

Designer.getInitialProps = async function() {
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

  const content = await import("../content/disciplines/designer.md");
  const data = matter(content.default);

  return {
    ...metadata,
    projects,
    data
  };
};
