import React from 'react'
import { map } from 'lodash'

import { useParams } from 'react-router-dom'
import styled from '@emotion/styled'
import { css } from '@emotion/react'

import layout from 'common/configs/layout'
import Carousel from 'components/Carousel'
// import { TitleModule } from 'pages/Home/shared'
import projects from 'pages/Projects/projects'
import ROUTES from 'common/routes'
import grid from 'components/Layout'

const projectsHighlighted = projects.filter((p) => p.isOnHome)

const Container = styled.div(({ theme }) => css`
  ${grid}
  grid-column: 1 / -1;
  padding-top: ${theme.spacingL}px;
  padding-bottom: ${theme.spacingXL}px;
`)

const ProjectsHighlight = () => {

  console.log("ProjectsHighlight :: ", projectsHighlighted);
  // console.log("projects :: ", projects);

  const { lang } = useParams()
  // const lang = "en";
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
          link={project.slug && `/${lang}/${ROUTES.PROJECTS.SLUG_INDEX}/${project.slug}`}
          client={project.client[lang]}
          label={project.category[lang]}
          description={project.chapo[lang]}
        />
      ))}
    </Container>
  )
}

export default ProjectsHighlight
