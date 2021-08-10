import React from "react";
import { map } from "lodash";

import { css } from "@emotion/react";
import styled from "@emotion/styled";

import { Title3 } from "components/_ui/Titles";
import Metas from "components/Metas";
import PageHeader from "components/PageHeader";
import Archives from "components/Archives";
import Carousel from "components/Carousel";
import Link from "components/_ui/Links";
import GridContainer from "components/GridContainer";

import mq from "common/styles/breakpoints";
import ROUTES from "common/routes";
import layout from "common/configs/layout";
import ExperimentIcon from "assets/icons/Experiment";

import projects from "pages/Projects/projects";
import archives from "pages/Projects/archives";

const Container = styled(GridContainer)(({ theme }) => css`
  padding-bottom: ${theme.spacingL}px;
`);

const CategoryLinkContainer = styled(Link)(({ theme }) => css`
  grid-column: 9 / none;
  display: flex;
  align-items: center;
  margin-top: ${theme.spacingXL}px;
  margin-bottom: ${theme.spacingL}px;
  ${mq("small")} {
    flex-direction: column-reverse;
    grid-column: 2 / -2;
    text-align: center;
  }
`);

const ExperimentIconContainer = styled.span(({ theme }) => css`
  margin-left: ${theme.spacingXS}px;
  ${mq("small")} {
    margin-bottom: ${theme.spacingM}px;
    margin-left: 0;
  }
`);

const headers = [
	{ id: "label", isHighlighted: true },
	{ id: "category", isHighlighted: false },
	{ id: "client", isHighlighted: false },
	{ id: "year", isHighlighted: false }
];

const Projects = () => {
  
	return (
		<Container>
			<Metas wording='projects' />
			<PageHeader
				isDarkTheme={layout.PROJECTS.isHeaderDark}
				titleMain={"FormattedMessage: projects-main-title"}
				chapo={"FormattedMessage: projects-chapo"}
				noBorder
			/>
			{map(projects, (project, index) => (
				<Carousel
					isDarkTheme={layout.PROJECTS.isBodyDark}
					key={index}
					big={project.carousel.isBig}
					pics={project.carousel.pics}
					link={project.slug && `/${ROUTES.PROJECTS.SLUG_INDEX}/${project.slug}`}
					client={project.client}
					label={project.category}
					description={project.chapo}
				/>
			))}
			<CategoryLinkContainer to={`/${ROUTES.EXPERIMENTS.PATH}`}>
				<Title3>
          FormattedMessage: projects-link-to-lab
				</Title3>
				<ExperimentIconContainer>
					<ExperimentIcon />
				</ExperimentIconContainer>
			</CategoryLinkContainer>
			<Archives columns='6fr 4fr 3fr 5fr' list={archives} headers={headers} />
		</Container>
	);
};

export default Projects;
