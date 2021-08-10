import React from "react";
import { map } from "lodash";

import styled from "@emotion/styled";
import { css } from "@emotion/react";

import layout from "common/configs/layout";
import Carousel from "components/_ui/Carousel";
// import { TitleModule } from 'pages/Home/shared'
import projects from "common/data/projects";
import ROUTES from "common/routes";
import { grid } from "components/_layout/Layout";

const projectsHighlighted = projects.filter((p) => p.isOnHome);

const Container = styled.div(({ theme }) => css`
  ${grid}
  grid-column: 1 / -1;
  padding-top: ${theme.spacingL}px;
  padding-bottom: ${theme.spacingXL}px;
`);

const ProjectsHighlight = () => {

	return (
		<Container>
			{/* <TitleModule>
        FormattedMessage: home-projects-title
      </TitleModule> */}
			{map(projectsHighlighted, (project, index) => (
				<Carousel
					isDarkTheme={layout.HOME.isBodyDark}
					key={index}
					big={index === 0}
					pics={project.carousel.pics}
					link={project.slug && `/${ROUTES.PROJECTS.SLUG_INDEX}/${project.slug}`}
					client={project.client}
					label={project.category}
					description={project.chapo}
				/>
			))}
		</Container>
	);
};

export default ProjectsHighlight;
