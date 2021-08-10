import React from "react";

import styled from "@emotion/styled";
import { css } from "@emotion/react";

import { Layout3cols } from "components/_layout/Layout/3Cols";
import mq from "common/styles/breakpoints";
import LastActivities from "components/LastActivities";
// import OpenPositions from 'components/OpenPositions'
import { Paragraph2, PSmall } from "components/_ui/Paragraphs";

import { grid, maxWidth } from "components/_layout/Layout";
import GridContainer from "components/GridContainer";

import ProjectsHighlight from "./ProjectsHighlight";
import Clients from "./Clients";
// import Header from './Header'
// import ShowreelButton from './ShowreelButton'

const OuterHeaderContainer = styled.div(({ theme }) => css`
  background: ${theme.black};
  position: relative;
`);

const HeaderContainer = styled(Layout3cols)(({ theme }) => css`
  ${grid}
  ${maxWidth}
  padding-top: calc(100vh - 75px);
  color: ${theme.white};
  padding-bottom: ${theme.spacingXL}px;
  ${mq("small")} {
    padding-top: calc(100vh - 75px);
  }
`);

const Intro = styled.div(({ theme }) => css`
  grid-column: 6 / -6;
  position: relative;
  ${mq("small")} {
    text-align: center;
    grid-column: 2 / -2;
  }
`);

const VizContainer = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
`;

const VizAboutContainer = styled.div(({ theme }) => css`
  grid-column: 1 / -1;
  display: inline-block;
  position: relative;
  z-index: 1;
  margin-bottom: ${theme.spacingXL}px;
  text-align: center;
  ${mq("small")} {
    margin-bottom: ${theme.spacingL}px;
  }
`);

const VizAboutText = styled(PSmall)(({ theme }) => css`
  color: ${theme.secondaryColor};
  opacity: 0.6;
`);

const Home = () => {

	// console.log("ProjectsHighlight :::::::: ", ProjectsHighlight);

	return (
		<>
			<OuterHeaderContainer id="header-container">
				{/* <VizContainer> */}
				{/* {navigator.userAgent !== 'ReactSnap' && <Header />} */}
				{/* </VizContainer> */}
				<HeaderContainer>
					{/* <VizAboutContainer> */}
					{/* <VizAboutText>FormattedMessage: home-chart-legend</VizAboutText> */}
					{/* </VizAboutContainer> */}
					<Intro>
						<Paragraph2>
        We build solutions to address new uses and information problems
              that arise from the massive amount of data in the world around us.
              We design and build tools and interfaces in order to inform,
              communicate, work, and live with data.
							<br />
							<br />
              Our projects make data enlightening and technology useful. They
              embody our vision: putting humans at the heart of the data
              ecosystem.
						</Paragraph2>
						{/* {navigator.userAgent !== 'ReactSnap' && <ShowreelButton />} */}
					</Intro>
				</HeaderContainer>
			</OuterHeaderContainer>
			<GridContainer>
				<ProjectsHighlight />
				<Clients />
			</GridContainer>
		</>
	);
};

export default Home;
