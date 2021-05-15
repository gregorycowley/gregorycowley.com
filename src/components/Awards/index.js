import React from 'react'

import ListTable, { TitleLeft, ListContainerRight } from 'components/ListTable'
import awards from 'common/data/awards';

const headers = [
  { id: 'label', isHighlighted: true },
  { id: 'category', isHighlighted: false },
  { id: 'date', dateFormat: 'yyyy', isHighlighted: false }
]


const Awards = ({ isDarkTheme }) => {
  if (!awards.length) return null
  return (
    <>
      <TitleLeft>
        FormattedMessage: awards-title
      </TitleLeft>
      <ListContainerRight id='award'>
        <ListTable
          list={awards}
          headers={headers}
          gridTemplateColumns='6fr 4fr 4fr'
          isDarkTheme={isDarkTheme}
        />
      </ListContainerRight>
    </>
  )
}

export default Awards
export { awards }
