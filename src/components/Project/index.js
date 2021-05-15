import React from 'react'
import { find, isEmpty } from 'lodash'
import { useParams } from 'react-router-dom'
import { useIntl } from 'react-intl'

import Metas from 'components/Metas'
import PageHeader from 'components/PageHeader'
import projects from 'pages/Projects/projects'

import services from 'pages/Services/services'
import LinkToService from 'components/LinkToService'

import layout from 'common/configs/layout'
import ROUTES from 'common/routes'

import Infos from 'components/PieceOfWork/Infos'
import ShortVideo from 'components/PieceOfWork/ShortVideo'
import ProjectsNav from 'components/PieceOfWork/ProjectsNav'
import ClientsOpinion from 'components/PieceOfWork/ClientsOpinion'
import Gallery from 'components/PieceOfWork/Gallery'
import GridContainer from 'components/GridContainer'
import { RightColWithGutter } from "layout/Layout/3Cols";

// Common template for a single project page
const Project = () => {
  const { projectSlug, lang } = useParams()
  const { messages } = useIntl()

  const project = find(projects, p => p.slug === projectSlug)
  const isDarkTheme = project.theme ? project.theme.isDark : layout.PROJECT.isHeaderDark
  const service = find(services, s => s.id === project.serviceId)


  console.log("MichProjectelinDDI", project);


  return (
    <>
      <Metas
        wording='project'
        values={{
          LABEL: project.label[lang]
        }}
      />
      <PageHeader
        isDarkTheme={isDarkTheme}
        background={project.theme.background}
        backTo={`/${lang}/${ROUTES.PROJECTS.SLUG_INDEX}`}
        backToLabel={messages['project-back-link']}
        titleCategory={project.category[lang]}
        titleMain={`${project.label[lang]}`}
        chapo={project.chapo[lang]}
        noBorder
      />
      <ShortVideo background={project.theme.background} uri={project.video} />
      <GridContainer>
        <Infos project={project} />
        <RightColWithGutter>
          <project.component />
        </RightColWithGutter>
        {project.quote && (
          <ClientsOpinion
            quote={project.quote}
          />
        )}
        {!isEmpty(project.galleryPics) && <Gallery pics={project.galleryPics} />}
        <LinkToService service={service} />
        <ProjectsNav
          baseUrl={`${lang}/${ROUTES.PROJECTS.SLUG_INDEX}`}
          current={project}
          list={projects}
        />
      </GridContainer>
    </>
  )
}

export default Project
