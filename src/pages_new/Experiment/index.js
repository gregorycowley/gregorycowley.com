import React from 'react'
import { find, isEmpty } from 'lodash'
import { useParams } from 'react-router-dom'
import { useIntl } from 'react-intl'

import experiments from 'pages/Experiments/experiments'

import Metas from 'components/Metas'
import PageHeader from 'components/PageHeader'

import ShortVideo from 'components/PieceOfWork/ShortVideo'
import Infos from 'components/PieceOfWork/Infos'
import ProjectsNav from 'components/PieceOfWork/ProjectsNav'
import GridContainer from 'components/GridContainer'
import { RightColWithGutter } from 'components/Layout/3Cols'

import layout from 'common/configs/layout'
import ROUTES from 'common/routes'
import Gallery from 'components/PieceOfWork/Gallery'

const Experiment = () => {
  const { experimentSlug, lang } = useParams()
  const { formatMessage } = useIntl()
  const experiment = find(experiments, p => p.slug === experimentSlug)
  const isDarkTheme = experiment.theme ? experiment.theme.isDark : layout.PROJECT.isHeaderDark
  return (
    <>
      <Metas
        wording='experiment'
        values={{
          LABEL: experiment.label[lang]
        }}
      />
      <PageHeader
        isDarkTheme={isDarkTheme}
        background={experiment.theme.background}
        noBottom
        noBorder
        backTo={`/${lang}/${ROUTES.EXPERIMENTS.SLUG_INDEX}`}
        backToLabel={formatMessage({ id: 'experiment-back-link' })}
        titleMain={experiment.label[lang]}
        chapo={experiment.chapo[lang]}
      />
      <ShortVideo background={experiment.theme.background} uri={experiment.video} />
      <GridContainer>
        <Infos project={experiment} isDark />
        <RightColWithGutter>
          <experiment.component isDarkTheme={isDarkTheme} />
        </RightColWithGutter>
        {!isEmpty(experiment.galleryPics) && <Gallery pics={experiment.galleryPics} />}
        <ProjectsNav
          baseUrl={`${lang}/${ROUTES.EXPERIMENTS.SLUG_INDEX}`}
          isDarkTheme
          current={experiment}
          list={experiments}
        />
      </GridContainer>
    </>
  )
}
export default Experiment
