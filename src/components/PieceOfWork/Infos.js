import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";


import { Paragraph1, PSmall } from "components/_ui/Paragraphs";
import Link from "components/_ui/Links";
import mq from "common/styles/breakpoints";

const Container = styled.div(({ theme, isDarkTheme }) => css`
  margin-top: ${theme.spacingXL}px;
  grid-column: 2 / 7;
  color: ${isDarkTheme ? theme.white : theme.mainColor};
  ${mq("small")} {
    margin-top: ${theme.spacingL}px;
    padding-top: ${theme.spacingXS}px;
    grid-column: 2 / -2;
    margin-bottom: ${theme.spacingS}px;
  }
`);

const Title = styled(PSmall)(({ theme }) => css`
  color: ${theme.secondaryColor};
  padding-bottom: ${theme.spacingXS}px;
`);

const ProjectLink = styled(Link)`
  max-width: 100%;
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const Meta = styled.div(({ theme }) => css`
  margin-bottom: ${theme.spacingM}px;
  ${mq("small")} {
    grid-column: 2 / -2;
    margin-bottom: ${theme.spacingM}px;
    &:last-child {
      margin-bottom: 0;
    }
  }
`);

const Infos = ({ project, isDark }) => {
  

	return (
		<Container isDarkTheme={isDark}>
			{
				project.client && (
					<Meta>
						<Title>
							Date
						</Title>
						<Paragraph1>
							{project.client}
						</Paragraph1>
					</Meta>
				)
			}
			{
				project.date && (
					<Meta>
						<Title>
							Date
						</Title>
						<Paragraph1>
							{project.date}
						</Paragraph1>
					</Meta>
				)
			}
			{
				project.results && (
					<Meta>
						<Title>
							Summary
						</Title>
						<Paragraph1>{project.results}</Paragraph1>
					</Meta>
				)
			}
			{
				project.src && (
					<Meta>
						<Title>
              FormattedMessage: project-meta-launch
						</Title>
						<Paragraph1>
							<ProjectLink target='_blank' href={project.src.url}>
								{project.src.label}
							</ProjectLink>
						</Paragraph1>
					</Meta>
				)
			}
			{
				project.caseStudy && project.caseStudy && (
					<Meta>
						<Title>
							Case Study
						</Title>
						<Paragraph1>
							<Link target='_blank' href={project.caseStudy.url}>
								{project.caseStudy.label}
							</Link>
						</Paragraph1>
					</Meta>
				)
			}
		</Container>
	);
};

export default Infos;
