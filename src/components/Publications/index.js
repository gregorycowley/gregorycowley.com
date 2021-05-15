import React from 'react'
import { useParams } from 'react-router-dom'

import { LinkMore } from 'components/Links'
import ListTable, { TitleLeft, ListContainerRight } from 'components/ListTable'
import { FormattedMessage, useIntl } from 'react-intl'

import publications from 'common/data/publications'

const headers = [{ id: 'label', isHighlighted: true }, { id: 'date', dateFormat: 'MMM yyyy', isHighlighted: false }]


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
