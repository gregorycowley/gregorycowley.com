import React from 'react'
import { useParams } from 'react-router-dom'

import styled from '@emotion/styled'
import { css } from '@emotion/react'

import ROUTES from 'common/routes'

import { LinkMore } from 'components/Links'
import ListTable, { TitleLeft, ListContainerRight } from 'components/ListTable'

import sortedActivitied from 'common/data/latest'

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
