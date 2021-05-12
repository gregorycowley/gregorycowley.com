import React from 'react'
import { useParams } from 'react-router-dom'

import { LinkMore } from 'components/Links'
import ListTable, { TitleLeft, ListContainerRight } from 'components/ListTable'
import { FormattedMessage, useIntl } from 'react-intl'

const headers = [{ id: 'label', isHighlighted: true }, { id: 'date', dateFormat: 'MMM yyyy', isHighlighted: false }]
const publications = [
  {
    label: {
      fr: 'Que faites-vous ? Que vendez-vous ? Nos rÃ©ponses aux questions les plus frÃ©quentes',
      en: 'What are you doing? What do you sell? Some questions you may have for us'
    },
    url: {
      fr: 'https://medium.com/dataveyes-stories-vf/que-faites-vous-que-vendez-vous-nos-r%C3%A9ponses-aux-questions-les-plus-fr%C3%A9quentes-60e114417c3d?sk=18552c880f2d0f09462d4d0e3f14407b',
      en: 'https://stories.dataveyes.com/what-are-you-doing-what-do-you-sell-some-questions-you-may-have-for-us-df14019352b8?sk=83dd5dd3e994bd38b77d33fa4e1e019c'
    },
    date: new Date('2020-06-29')
  },
  {
    label: {
      fr: 'RGPD et visualisation de donnÃ©es : le design au service de la conformitÃ©',
      en: 'GDPR and Data Visualization: When Design Meets Compliance'
    },
    url: {
      fr: 'https://medium.com/dataveyes-stories-vf/rgpd-et-visualisation-de-donn%C3%A9es-le-design-au-service-de-la-conformit%C3%A9-402b8fcdb528?source=friends_link&sk=e01168253e19e50a49d24236d1afaa2c',
      en: 'https://stories.dataveyes.com/gdpr-and-data-visualization-when-design-meets-compliance-a5c5fd981c3e?source=friends_link&sk=7ed0d428ef3a771582036ab5b5928271'
    },
    date: new Date('2019-12-23')
  },
  {
    label: {
      fr: 'Pourquoi les data labs doivent-ils devenir des human-data labs',
      en: 'In need of a human-centric data revolution'
    },
    url: {
      fr:
        'https://medium.com/dataveyes-stories-vf/pourquoi-les-data-labs-doivent-ils-devenir-des-human-data-labs-826da7dc0a1?source=friends_link&sk=7506be533d582209e861a0016b181d72',
      en:
        'https://stories.dataveyes.com/in-need-of-a-human-centric-data-revolution-2ba6cc9889e7?source=friends_link&sk=a4db59727c0af55bfe52b1b039927ff6'
    },
    date: new Date('2019-07-08')
  },
  {
    label: {
      fr: 'Pour une intelligence artificielle Ã©clairÃ©e par le design',
      en: 'Design is the keystone to reveal the potential of AI'
    },
    url: {
      fr:
        'https://medium.com/dataveyes-stories-vf/pour-une-intelligence-artificielle-%C3%A9clair%C3%A9e-par-le-design-c0ef529e8cd9?source=friends_link&sk=a16d60c682dbfd8a8bc100937267858d',
      en:
        'https://stories.dataveyes.com/design-is-the-keystone-to-reveal-the-potential-of-ai-8351ea5fe9d3?source=friends_link&sk=33893b738b371a9ec502ee3225ebfcc8'
    },
    date: new Date('2017-10-03')
  },
  {
    label: {
      fr: null,
      en: 'What makes data visualization so effective?'
    },
    url: {
      fr: null,
      en:
        'https://stories.dataveyes.com/what-makes-data-visualization-so-effective-d0cf412e072d?source=friends_link&sk=1399ba8bce7724119df9e95a54528bd1'
    },
    date: new Date('2017-06-17')
  },
  {
    label: {
      fr: 'Tests Utilisateurs & Visualisation de donnÃ©es',
      en: 'User Testing in Data Visualisation'
    },
    url: {
      fr:
        'https://medium.com/dataveyes-stories-vf/tests-utilisateurs-visualisation-de-donn%C3%A9es-afb395494453?source=friends_link&sk=d1b2ae76d36467221e40ed2d74877a44',
      en:
        'https://stories.dataveyes.com/user-testing-in-data-visualisation-1-3-d426ed4ca2d2?source=friends_link&sk=5769acc576273a438e0e169feda56ed8'
    },
    date: new Date('2016-03-11')
  },
  {
    label: {
      fr: 'Interactions humains-donnÃ©es',
      en: 'Human-Data Interactions'
    },
    url: {
      fr:
        'https://medium.com/dataveyes-stories-vf/interactions-humains-donn%C3%A9es-d2e2b86bb56d?source=friends_link&sk=89af09271e06b849dee2e4adf3585886',
      en:
        'https://stories.dataveyes.com/human-data-interactions-ecd080d8c343?source=friends_link&sk=f8eb7d63af43397a6b6d8f51da313a6d'
    },
    date: new Date('2015-03-11')
  }
]

const Publications = ({ maxItems, isDarkTheme }) => {
  const intl = useIntl()
  const { lang } = useParams()
  const filteredPublications = publications.filter((d) => d.label[lang])
  const listPublications = maxItems
    ? filteredPublications.slice(0, maxItems)
    : filteredPublications
  if (!listPublications.length) return null
  return (
    <>
      <TitleLeft>
        FormattedMessage: last-publications-title
      </TitleLeft>
      <ListContainerRight>
        <ListTable
          list={listPublications}
          headers={headers}
          gridTemplateColumns='8fr 3fr'
          isDarkTheme={isDarkTheme}
        />
        {maxItems && listPublications.length > maxItems && (
          <LinkMore
            href={intl.messages['last-publications-link-url']}
            target='_blank'
          >
            FormattedMessage: last-publications-link-label
          </LinkMore>
        )}
      </ListContainerRight>
    </>
  )
}

export default Publications
export { publications }
