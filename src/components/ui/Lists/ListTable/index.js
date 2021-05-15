import React from 'react'
import { map } from 'lodash'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { useParams } from 'react-router-dom'

import useFormatDate from 'common/hooks/useFormatDate'
import { Title4 } from 'components/Titles'
import Link from 'components/Links'
import { Paragraph1 } from 'components/Paragraphs'
import mq from 'common/styles/breakpoints'

const Tr = styled('tr')(
  ({ gridTemplateColumns, theme, isDarkTheme }) => css`
    display: grid;
    grid-template-columns: ${gridTemplateColumns};
    grid-column-gap: 2px;
    border-top: 1px solid
      ${isDarkTheme ? theme.separatorLight : theme.separator};
    ${mq('small')} {
      display: block;
    }
  `
)

const Td = styled('td')(({ theme }) => css`
  text-align: left;
  padding-top: ${theme.spacingXS}px;
  padding-bottom: ${theme.spacingXS}px;
  :first-of-type {
    padding-right: ${theme.spacingL}px;
  }
  :last-of-type {
    text-align: right;
  }
  ${mq('small')} {
    display: block;
    padding-top: 0;
    padding-bottom: 0;
    :first-of-type {
      padding-top: ${theme.spacingXS}px;
      padding-right: 0;
    }
    :last-of-type {
      padding-top: ${theme.spacingXS}px;
      padding-bottom: ${theme.spacingXS}px;
      text-align: left;
    }
  }
`)

const Text = styled(Paragraph1)(({ isHighlighted, isDarkTheme, theme }) => {
  const colorDark = isHighlighted ? theme.white : theme.secondary
  const colorLight = isHighlighted ? theme.black : theme.secondary
  return css`
    color: ${isDarkTheme ? colorDark : colorLight};
  `
})

const ListTable = ({ list, headers, gridTemplateColumns, isDarkTheme }) => {
  const { lang } = useParams()
  const formatDate = useFormatDate()
  return (
    <table>
      <tbody>
        {map(list, (element, index) => (
          <Tr
            key={index}
            gridTemplateColumns={gridTemplateColumns}
            isDarkTheme={isDarkTheme}
          >
            {map(headers, header => {
              const cellValue = element[header.id][lang] || element[header.id]
              const isDate = header.id === 'date' && element[header.id]
              return (
                <Td key={header.id}>
                  {
                    element.url && header.id === 'label'
                      ? (
                        <Link
                          href={element.url[lang]}
                          isHighlighted={header.isHighlighted}
                          target='_blank'
                        >
                          {cellValue}
                        </Link>
                      )
                      : (
                        <Text
                          isHighlighted={header.isHighlighted}
                          isDarkTheme={isDarkTheme}
                        >
                          {
                            isDate
                              ? formatDate(element[header.id], header.dateFormat)
                              : cellValue
                          }
                        </Text>
                      )
                  }
                </Td>
              )
            })}
          </Tr>
        ))}
      </tbody>
    </table>
  )
}

// when the title and the list are two columns (Talks, Publications, Awards)
const TitleLeft = styled(Title4)(({ theme }) => css`
  grid-column: 2 / 9;
  margin-bottom: ${theme.spacingL}px;
  color: ${theme.secondary};
  ${mq('small')} {
    grid-column: 2 / -2;
    margin-bottom: ${theme.spacingM}px;
  }
`)

// when the title and the list are two columns (Talks, Publications, Awards)
const ListContainerRight = styled.div(({ theme }) => css`
  grid-column: 9 / -2;
  padding-bottom: ${theme.spacingXL}px;
  ${mq('small')} {
    grid-column: 2 / -2;
    padding-bottom: ${theme.spacingL}px;
  }
`)

export default ListTable
export { TitleLeft, ListContainerRight, Text }
