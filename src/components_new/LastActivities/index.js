import React from 'react'
import { useParams } from 'react-router-dom'

import styled from '@emotion/styled'
import { css } from '@emotion/react'

import ROUTES from 'common/routes'

import { LinkMore } from 'components/Links'
import ListTable, { TitleLeft, ListContainerRight } from 'components/ListTable'

const headers = [
  { id: 'label', isHighlighted: true },
  { id: 'type', isHighlighted: false },
  { id: 'date', dateFormat: 'MMM yyyy', isHighlighted: false }
]

const StyledLinkMore = styled(LinkMore)(({ theme }) => {
  return css`
    padding-top: 0;
    margin-top: ${theme.spacingM}px;
  `
})

const LastActivities = ({ maxItems }) => {
  const { lang } = useParams()
  const sortedActivities = [
    {
      label: {
        fr: 'Que faites-vous ? Que vendez-vous ? Nos rÃ©ponses aux questions les plus frÃ©quentes',
        en: 'What are you doing? What do you sell? Some questions you may have for us'
      },
      type: {
        fr: 'Article',
        en: 'Article'
      },
      url: {
        fr: 'https://medium.com/dataveyes-stories-vf/que-faites-vous-que-vendez-vous-nos-r%C3%A9ponses-aux-questions-les-plus-fr%C3%A9quentes-60e114417c3d?sk=18552c880f2d0f09462d4d0e3f14407b',
        en: 'https://stories.dataveyes.com/what-are-you-doing-what-do-you-sell-some-questions-you-may-have-for-us-df14019352b8?sk=83dd5dd3e994bd38b77d33fa4e1e019c'
      },
      date: new Date('2020-06-29')
    },
    {
      label: {
        fr: 'Data Stories #159',
        en: 'Data Stories #159'
      },
      type: {
        fr: 'Podcast',
        en: 'Podcast'
      },
      url: {
        fr: 'https://datastori.es/159-viz-agencies-dataveyes-and-accurat/',
        en: 'https://datastori.es/159-viz-agencies-dataveyes-and-accurat/'
      },
      date: new Date('2020-04-01')
    },
    {
      label: {
        fr: 'RGPD et visualisation de donnÃ©es : le design au service de la conformitÃ©',
        en: 'GDPR and Data Visualization: When Design Meets Compliance'
      },
      type: {
        fr: 'Article',
        en: 'Article'
      },
      url: {
        fr: 'https://medium.com/dataveyes-stories-vf/rgpd-et-visualisation-de-donn%C3%A9es-le-design-au-service-de-la-conformit%C3%A9-402b8fcdb528?source=friends_link&sk=e01168253e19e50a49d24236d1afaa2c',
        en: 'https://stories.dataveyes.com/gdpr-and-data-visualization-when-design-meets-compliance-a5c5fd981c3e?source=friends_link&sk=7ed0d428ef3a771582036ab5b5928271'
      },
      date: new Date('2019-12-23')
    },
    {
      label: {
        fr: 'Silver award Information is Beautiful - Commute',
        en: 'Silver award Information is Beautiful - Commute'
      },
      url: {
        fr: 'https://www.informationisbeautifulawards.com/showcase/4203',
        en: 'https://www.informationisbeautifulawards.com/showcase/4203'
      },
      type: {
        fr: 'Prix',
        en: 'Award'
      },
      date: new Date('2019-11-01')
    },
    {
      label: {
        fr: 'Encode',
        en: 'Encode'
      },
      url: {
        fr: 'https://www.youtube.com/watch?v=BUg3b9KNTwY',
        en: 'https://www.youtube.com/watch?v=BUg3b9KNTwY'
      },
      type: {
        fr: 'ConfÃ©rence',
        en: 'Talk'
      },
      date: new Date('2019-09-01')
    },
    {
      label: {
        fr: 'Pourquoi les data labs doivent-ils devenir des human-data labs',
        en: 'In need of a human-centric data revolution'
      },
      type: {
        fr: 'Article',
        en: 'Article'
      },
      url: {
        fr:
          'https://medium.com/dataveyes-stories-vf/pourquoi-les-data-labs-doivent-ils-devenir-des-human-data-labs-826da7dc0a1?source=friends_link&sk=7506be533d582209e861a0016b181d72',
        en:
          'https://stories.dataveyes.com/in-need-of-a-human-centric-data-revolution-2ba6cc9889e7?source=friends_link&sk=a4db59727c0af55bfe52b1b039927ff6'
      },
      date: new Date('2019-07-08')
    }

  ]

  const listActivities = sortedActivities

  if (!listActivities.length) return null
  return (
    <>
      <TitleLeft>
        FormattedMessage: last-activities-title
      </TitleLeft>
      <ListContainerRight>
        <ListTable
          list={listActivities}
          headers={headers}
          gridTemplateColumns='8fr 3fr 3fr'
        />
        <StyledLinkMore
          to={`/${lang}/${ROUTES.ABOUT.SLUG_INDEX}#activities`}
        >
          FormattedMessage: last-activities-link-label
        </StyledLinkMore>
      </ListContainerRight>
    </>
  )
}

export default LastActivities
