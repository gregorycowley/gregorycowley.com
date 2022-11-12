import React from "react";
import matter from "gray-matter";
import { Layout, Card } from "../components/";

const debug = require('debug')('http')
  , http = require('http')
  , name = 'My App';

debug('booting %o', name);

const CardItem = (props) => {
  const {
    hero_image,
    title,
    subtitle,
    description,
  } = props;
  const link = `/${props.category}`
  const style = "home"

  return (
    <Card style={style}
      hero_image={hero_image}
      link={link}
      title={title}
      subtitle={subtitle}
      description="" />
  )
};

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    const {
      hero_image,
      title,
      subtitle,
      description,
    } = this.props.artistData;
    const link = `/${this.props.artistData.category}`
    const style = "home"

    return (
      <Layout
        siteTitle={this.props.title}
        siteDescription={this.props.description}
      >
        <div className="home-grid container">
          <CardItem {...this.props.artistData} />
          <CardItem {...this.props.designerData} />
          <CardItem {...this.props.educatorData} />
          <CardItem {...this.props.engineerData} />
          <CardItem {...this.props.photographerData} />
          <CardItem {...this.props.entrepreneurData} />
        </div>
      </Layout>
    );
  }
}

export default Index;

Index.getInitialProps = async function () {
  const metadata = await import(`../data/config.json`)
  const artist = await import(`../content/disciplines/artist.md`);
  const designer = await import(`../content/disciplines/designer.md`);
  const educator = await import(`../content/disciplines/educator.md`);
  const engineer = await import(`../content/disciplines/engineer.md`);
  const photographer = await import(`../content/disciplines/photographer.md`);
  const entrepreneur = await import(`../content/disciplines/entrepreneur.md`);

  const artistData = matter(artist.default).data;
  const designerData = matter(designer.default).data;
  const educatorData = matter(educator.default).data;
  const engineerData = matter(engineer.default).data;
  const photographerData = matter(photographer.default).data;
  const entrepreneurData = matter(entrepreneur.default).data;

  return {
    ...metadata,
    artistData,
    designerData,
    educatorData,
    engineerData,
    photographerData,
    entrepreneurData
  };
};
