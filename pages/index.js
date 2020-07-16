import React from "react";
import matter from "gray-matter";
import { Layout, Card } from "../components/";

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    const artistLink = matter(this.props.artist.default).data.category;
    const designerLink = matter(this.props.designer.default).data.category;
    const educatorLink = matter(this.props.educator.default).data.category;
    const engineerLink = matter(this.props.engineer.default).data.category;
    const photographerLink = matter(this.props.photographer.default).data.category;
    const entrepreneurLink = matter(this.props.entrepreneur.default).data.category;
    return (
      <Layout 
       siteTitle={this.props.title}
       siteDescription={this.props.description}
      >
        <div className="home-grid container">
          <Card {...this.props.artist} link={`/${artistLink}`} style="home" />
          <Card {...this.props.designer} link={`/${designerLink}`} style="home" />
          <Card {...this.props.educator} link={`/${educatorLink}`} style="home" />
          <Card {...this.props.engineer} link={`/${engineerLink}`} style="home" />
          <Card {...this.props.photographer} link={`/${photographerLink}`} style="home" />
          <Card {...this.props.entrepreneur} link={`/${entrepreneurLink}`} style="home" />
        </div>
      </Layout>
    );
  }
}

export default Index;

Index.getInitialProps = async function() {
  const metadata = await import(`../data/config.json`)
  const artist = await import(`../content/disciplines/artist.md`);
  const designer = await import(`../content/disciplines/designer.md`);
  const educator = await import(`../content/disciplines/educator.md`);
  const engineer = await import(`../content/disciplines/engineer.md`);
  const photographer = await import(`../content/disciplines/photographer.md`);
  const entrepreneur = await import(`../content/disciplines/entrepreneur.md`);
  return {
    ...metadata,
    artist,
    designer,
    educator,
    engineer,
    photographer,
    entrepreneur
  };
};
