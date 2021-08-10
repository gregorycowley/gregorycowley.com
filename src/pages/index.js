import React from "react";
import matter from "gray-matter";

import styled from "@emotion/styled";
import { css } from "@emotion/react";

import { grid, maxWidth } from "components";
import { Layout3cols } from "components/_layout/Layout/3Cols";

import Home from "components/Home";


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
		return (
			<Home />
		);
	}
}

export default Index;

Index.getInitialProps = async function() {
	const artist = await import("content/disciplines/artist.md");
	const designer = await import("content/disciplines/designer.md");
	const educator = await import("content/disciplines/educator.md");
	const engineer = await import("content/disciplines/engineer.md");
	const photographer = await import("content/disciplines/photographer.md");
	const entrepreneur = await import("content/disciplines/entrepreneur.md");
  
	const artistData = matter(artist.default).data;
	const designerData = matter(designer.default).data;
	const educatorData = matter(educator.default).data;
	const engineerData = matter(engineer.default).data;
	const photographerData = matter(photographer.default).data;
	const entrepreneurData = matter(entrepreneur.default).data;

	return {
		artistData,
		designerData,
		educatorData,
		engineerData,
		photographerData,
		entrepreneurData
	};
};
