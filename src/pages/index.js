import React from "react";
import matter from "gray-matter";

import styled from "@emotion/styled";
import { css } from "@emotion/react";

import grid, { maxWidth } from "layout/Layout";
import { Layout3cols } from "layout/Layout/3Cols";
import GridContainer from "components/GridContainer";

import CardItem from "components/Cards/CardItem"

import { Layout } from "layout";


const OuterHeaderContainer = styled.div(
  ({ theme }) => css`
    background: ${theme.black};
    position: relative;
  `
);

const HeaderContainer = styled(Layout3cols)(
  ({ theme }) => css`
    ${grid}
    ${maxWidth}
  padding-top: calc(100vh - 75px);
    color: ${theme.white};
    padding-bottom: ${theme.spacingXL}px;
    ${mq("small")} {
      padding-top: calc(100vh - 75px);
    }
  `
);

const isDevMode = process.env.NODE_ENV === "development";

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
    const link= `/${this.props.artistData.category}`
    const style = "home" 

    return (
      <>
        <OuterHeaderContainer></OuterHeaderContainer>
        <GridContainer
          siteTitle={this.props.title}
          siteDescription={this.props.description}
        >
          {/* <div className="home-grid container">
            <CardItem {...this.props.artistData} />
            <CardItem {...this.props.designerData} />
            <CardItem {...this.props.educatorData} />
            <CardItem {...this.props.engineerData} />
            <CardItem {...this.props.photographerData} />
            <CardItem {...this.props.entrepreneurData} />
          </div> */}
        </GridContainer>
      </>
    );

  }
}

export default Index;

Index.getInitialProps = async function() {
  const metadata = await import(`data/config.json`)
  const artist = await import(`content/disciplines/artist.md`);
  const designer = await import(`content/disciplines/designer.md`);
  const educator = await import(`content/disciplines/educator.md`);
  const engineer = await import(`content/disciplines/engineer.md`);
  const photographer = await import(`content/disciplines/photographer.md`);
  const entrepreneur = await import(`content/disciplines/entrepreneur.md`);
  
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
