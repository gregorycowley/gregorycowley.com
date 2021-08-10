import React from "react";
import { indexOf, last } from "lodash";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { useParams } from "react-router-dom";

import Link from "components/_ui/Links";
import ArrowLeft from "assets/icons/ArrowLeft";
import ArrowRight from "assets/icons/ArrowRight";
import mq from "common/styles/breakpoints";
import { Paragraph1, PSmall } from "components/_ui/Paragraphs";
import { useTheme, ThemeProvider, withTheme } from "@emotion/react";

const ProjectsNavContainer = styled.div(({ theme, isDarkTheme }) => css`
  grid-column: 2 / -2;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 2px;
  border-top: 1px solid ${isDarkTheme ? theme.separatorLightColor : theme.separatorColor};
  margin-bottom: ${theme.spacingL}px;
  ${mq("small")}{
    padding-bottom: 0;
    padding-top: ${theme.spacingS}px;
    display: block;
    border-bottom: none;
  }
`);

const Separator = styled.div(
	({ theme, isDarkTheme }) => css`
    width: 1px;
    justify-self: center;
    background: ${isDarkTheme ? theme.separatorLightColor : theme.separatorColor};
`);

const LinkTo = styled(Link)(({ theme }) => css`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-column-gap: 2px;
  align-items: center;
  text-decoration: none;
  margin-top: ${theme.spacingM}px;
  margin-bottom: ${theme.spacingM}px;
  :hover {
    text-decoration: none;
    .ProjectNavTitle {
      text-decoration: underline;
    }
  }
  ${mq("small")}{
    grid-template-columns: repeat(10, 1fr);
    padding-bottom: ${theme.spacingS}px;
  }
`);
const PrevLink = styled(LinkTo)`
  grid-column-start: 1;
`;
const NextLink = styled(LinkTo)`
  grid-column-start: 3;
`;
const ArrowLeftStyled = styled(ArrowLeft)`
  flex-shrink: 0;
`;
const ArrowRightStyled = styled(ArrowRight)`
  flex-shrink: 0;
  justify-self: end;
  ${mq("small")}{
    justify-self: start;
    order: -1;
  }
`;
const Text = styled.div`
  grid-column: span 5;
  ${mq("small")}{
    grid-column: 3 / span 8;
  }
`;
const Category = styled(PSmall)(({ theme }) => css`
  color: ${theme.secondaryColor};
  ${mq("small")}{
    padding-bottom: 0;
    font-size: 16px;
    line-height: 150%;
  }
`);
const ProjectNavTitle = styled(Paragraph1)(({ theme, isDarkTheme }) => css`
  color: ${theme.tonic};
`);

const ProjectsNav = ({ baseUrl, current, list, isDarkTheme, theme }) => {
  
	const index = indexOf(list, current);
	const prevProject = list[index - 1] || last(list);
	const nextProject = list[index + 1] || list[0];

	return (
		<ProjectsNavContainer isDarkTheme={isDarkTheme}>
			<PrevLink to={`/${baseUrl}/${prevProject.slug}`}>
				<ArrowLeftStyled color={theme.tonic} />
				<Text>
					<Category>{prevProject.category}</Category>
					<ProjectNavTitle className='ProjectNavTitle'>{prevProject.label}</ProjectNavTitle>
				</Text>
			</PrevLink>
			<Separator isDarkTheme={isDarkTheme} />
			<NextLink to={`/${baseUrl}/${nextProject.slug}`}>
				<Text>
					<Category>{nextProject.category}</Category>
					<ProjectNavTitle className='ProjectNavTitle'>{nextProject.label}</ProjectNavTitle>
				</Text>
				<ArrowRightStyled color={theme.tonic} />
			</NextLink>
		</ProjectsNavContainer>
	);
};

export default withTheme(ProjectsNav);
