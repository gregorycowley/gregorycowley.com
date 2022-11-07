import React from "react";
import matter from "gray-matter";
import { Layout, Card, TextContent } from "../";

class DisciplinePage extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  makeCards(projects) {
    return projects.map(
      (item, key) => {
        const data = matter(item.default)
          const {
            slug,
            hero_image,
            title,
            subtitle,
            description,
            category
          } = data.data;

        const link = `/projects/${slug}`;
        const style = "project";
    
        return (
          <Card key={key} 
                style={style}
                hero_image={hero_image} 
                link={link} 
                title={title}
                subtitle={subtitle} 
                description="" />
        )
      });
  }

  render() {
    return (
      <Layout
        siteTitle={this.props.title}
        siteDescription={this.props.description}
      >
        <TextContent className="discipline">
          <h1>{this.props.title}</h1>
          <h3>{this.props.subtitle}</h3>
          <p>{this.props.description}</p>
        </TextContent>
        <div className="discipline-grid container">
          {this.makeCards(this.props.projects)}
        </div>
      </Layout>
    );
  }
}

export default DisciplinePage;

