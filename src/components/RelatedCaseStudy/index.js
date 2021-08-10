import React from "react";
import { useParams } from "react-router-dom";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import hexToRgba from "hex-to-rgba";
import PropTypes from "prop-types";
import Vimeo from "@u-wave/react-vimeo";
import { useTheme, ThemeProvider, withTheme } from "@emotion/react";

import projects from "pages/Projects/projects";
import { PSmall, Paragraph1 } from "components/_ui/Paragraphs";
import { Title4 } from "components/_ui/Titles";

import mq from "common/styles/breakpoints";
import Link from "components/_ui/Links";
import ROUTES from "common/routes";
import ArrowRight from "assets/icons/ArrowRight";
import Loader from "components/_ui/Loader";

const MainContainer = styled.div(({ theme }) => css`
  grid-column: 2 / -1;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-column-gap: 2px;
  ${mq("small")} {
    grid-column: 1 / -1;
  }
`);

const Title = styled(Title4)(({ theme }) => css`
  margin-bottom: ${theme.spacingM}px;
  color: ${theme.secondaryColor};
  grid-column: 1 / -2;
  ${mq("small")} {
    grid-column: 2 / -2;
  }
`);

// We don't use the standard margin because
// We want the video to have the space to be in
// full width/height in a 16/9 container
const specialMargin = 40 - 7.5;
const Container = styled.div(({ theme }) => css`
  position: relative;
  background-color: ${hexToRgba(theme.lightGrey, 1)};
  grid-column: 1 / -1;
  display: grid;
  grid-template-columns: repeat(24, 1fr);
  grid-column-gap: 1px;
  grid-template-rows: ${specialMargin}px 1fr ${specialMargin}px;
  transition: background-color 150ms cubic-bezier(0.86, 0, 0.07, 1);
  ${mq("medium")} {
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: auto;
    padding-top: ${theme.spacingM}px;
  }
`);

const TextZone = styled.div(({ theme }) => css`
  grid-column: 2 / 12;
  grid-row: 2;
  padding-right: ${theme.spacingS}px;
  ${mq("medium")} {
    order: 2;
    grid-column: 2 / -2;
    padding-bottom: ${theme.spacingM}px;
    grid-row: auto;
  }
`);

const ProjectTitle = styled(PSmall)(({ theme }) => css`
  color: ${theme.secondaryColor};
  margin-bottom: ${theme.spacingXS}px;
`);

const VideoLoader = styled(Loader)(({ theme }) => css`
  width: 100%;
  border-radius: 2px;
  position: relative;
  padding-top: calc(9 / 16 * 100%);
  grid-column: 7 / -1;
  grid-row-start: 1;
  grid-row-end: -1;
  ${mq("medium")} {
    grid-column: 2 / -2;
    margin-bottom: ${theme.spacingM}px;
  }
`);

const VimeoContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0px;
`;

const VideoBlock = styled.div`  
  grid-column: 12 / -1;
  grid-row: 1 / -1;
  position: relative;
  ${mq("medium")} {
    order: 1;
    grid-column: 2 / -2;
    grid-row: auto;
  }
`;

const Video = withTheme(({ video, theme }) => {
	if (navigator.userAgent === "ReactSnap") return null;

	return (
		<VideoBlock>
			<VideoLoader />
			<VimeoContainer>
				<Vimeo
					autoplay
					loop
					muted
					background
					responsive
					video={video}
				/>
			</VimeoContainer>
		</VideoBlock>
	);
});

const Chapo = styled(Paragraph1)(({ theme }) => css`
  margin-bottom: ${theme.spacingS}px;
`);

const LinkStyled = styled(Link)`
  display: inline-flex;
  align-items: center;
`;

const ArrowRightStyled = styled(ArrowRight)(() => css`
  flex-shrink: 0;
  margin-left: 18px;
  ${mq("small")}{
    margin-right: 0;
  }
`);

const RelatedCaseStudy = ({ slug, theme }) => {
	const project = projects.find((project) => project.slug === slug);
  
	return (
		<MainContainer>
			<Title>
        FormattedMessage: related-case-study-title
			</Title>
			<Container>
				<TextZone>
					<ProjectTitle>
						{project.category[lang]} - {project.client[[lang]]}
					</ProjectTitle>
					<Chapo>
						{project.chapo[lang]}
					</Chapo>
					<LinkStyled to={`/${lang}/${ROUTES.PROJECTS.PATH}/${project.slug}`}>
						<Paragraph1>
              FormattedMessage: related-case-study-link
						</Paragraph1>
						<ArrowRightStyled color={theme.tonic} />
					</LinkStyled>
				</TextZone>
				<Video video={project.video} />
			</Container>
		</MainContainer>
	);
};

RelatedCaseStudy.propTypes = {
	/** project slug */
	slug: PropTypes.string.isRequired
};

export default withTheme(RelatedCaseStudy);
