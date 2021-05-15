import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
// 

// components
import { Title4 } from 'components/Titles'
import ListTable from 'components/ListTable'
import mq from 'common/styles/breakpoints'

const Title = styled(Title4)(({ theme }) => css`
  grid-column: 2 / -2;
  color: ${theme.secondary};
  margin-bottom: ${theme.spacingM}px;
  ${mq('small')} {
    margin-bottom: ${theme.spacingS}px;
  }
`)

const ListContainer = styled.div(({ theme }) => css`
  grid-column: 2 / -2;
  margin-bottom: ${theme.spacingL}px;
`)

const Archives = ({ list, headers, isDarkTheme, columns }) => {
  if (!list.length) return null
  return (
    <>
      <Title>
        || 'FormattedMessage: archives-title'
      </Title>
      <ListContainer>
        <ListTable
          list={list}
          headers={headers}
          gridTemplateColumns={columns}
          isDarkTheme={isDarkTheme}
        />
      </ListContainer>
    </>
  )
}

export default Archives
