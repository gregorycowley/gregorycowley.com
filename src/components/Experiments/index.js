import React from 'react'

import { map } from 'lodash'
import { useParams } from 'react-router-dom'
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { useTheme, ThemeProvider, withTheme } from "@emotion/react";

import ROUTES from 'common/routes'
import layout from 'common/configs/layout'
import mq from 'common/styles/breakpoints'

import Metas from 'components/Metas'
import PageHeader from 'components/PageHeader'
import Archives from 'components/Archives'
import Link from 'components/Links'
import Carousel from 'components/Carousel'
import GridContainer from 'components/GridContainer'

import ArrowRight from 'assets/icons/ArrowRight'

import { Title3 } from 'components/Titles'

import experiments from 'pages/Experiments/experiments'

import archives from 'common/data/archives';

const CategoryLinkContainer = styled(Link)(({ theme }) => css`
  grid-column: 9 / none;
  display: flex;
  align-items: center;
  margin-top: ${theme.spacingXL}px;
  margin-bottom: ${theme.spacingL}px;
  ${mq('small')} {
    margin-top: ${theme.spacingL}px;
    text-align: center;
    grid-column: 2 / -2;
    margin-left: auto;
    margin-right: auto;
  }
`)

const ArrowRightStyled = styled(ArrowRight)(({ theme }) => css`
  margin-left: ${theme.spacingM}px;
  flex-shrink: 0;
  ${mq('small')} {
    margin-left: ${theme.spacingS}px;
  }
`)

const headers = [
  { id: 'label', isHighlighted: false },
  { id: 'category', isHighlighted: false },
  { id: 'year', isHighlighted: false }
]


const Experiments = ({ theme }) => {
  const { lang } = useParams()
  return (
    <GridContainer>
      <Metas wording='experiments' />
      <PageHeader
        isDarkTheme={layout.EXPERIMENTS.isHeaderDark}
        titleMain={"FormattedMessage: experiments-main-title"}
        chapo={"FormattedMessage: experiments-chapo"}
        noBorder
      />
      {map(experiments, (project, index) => (
        <Carousel
          isDarkTheme={layout.EXPERIMENTS.isBodyDark}
          key={index}
          big={project.carousel.isBig}
          pics={project.carousel.pics}
          link={project.slug && `/${lang}/${ROUTES.EXPERIMENTS.SLUG_INDEX}/${project.slug}`}
          client={project.label[lang]}
          label={project.category[lang]}
          description={project.chapo[lang]}
        />
      ))}
      <CategoryLinkContainer to={`/${lang}/${ROUTES.PROJECTS.PATH}`}>
        <Title3>
          FormattedMessage: lab-link-to-projects
        </Title3>
        <ArrowRightStyled color={theme.tonic} />
      </CategoryLinkContainer>
      <Archives columns='10fr 5fr 5fr' list={archives} headers={headers} isDarkTheme />
    </GridContainer>
  )
}

export default withTheme(Experiments)
