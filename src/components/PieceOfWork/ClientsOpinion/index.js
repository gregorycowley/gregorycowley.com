import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { useParams } from 'react-router-dom'

// components
import { PSmall } from 'components/Paragraphs'
import mq from 'common/styles/breakpoints'

const Container = styled.div(({ theme }) => css`
  display: grid;
  grid-template-columns: repeat(18, 1fr);
  grid-column-gap: 2px;
  background: ${theme.lightGrey};
  grid-column: 2 / -2;
  margin-top: ${theme.spacingM}px;
  margin-bottom: ${theme.spacingXL}px;
  padding: ${theme.spacingM}px;
  ${mq('small')}{
    grid-template-columns: repeat(12, 1fr);
    grid-column: 1 / -1;
    margin-bottom: ${theme.spacingM}px;
  }
`)

const Author = styled.div`
  grid-column: 1 / 6;
  ${mq('small')}{
    order: 2;
    grid-column: 1 / -1;
  }
`

const Content = styled.div`
  grid-column: 8 / -1;
  ${mq('small')}{
    order: 1;
    grid-column: 1 / -1;
  }
`

const Quote = styled.div(({ theme }) => css`
  color: ${theme.main};
  font-size: 21px;
  line-height: 140%;
  font-weight: 400;
  ${mq('small')}{
    font-size: 16px;
    line-height: 150%;
    margin-bottom: ${theme.spacingM}px;
  }
`)

const Name = styled(PSmall)(({ theme }) => css`
  color: ${theme.main};
`)

const Position = styled(PSmall)(({ theme }) => css`
  color: ${theme.secondary};
`)

const ClientsOpinion = ({ quote }) => {
  const { lang } = useParams()

  return (
    <Container>
      <Author>
        <Name>
          {quote.author.name}
        </Name>
        <Position>

          {quote.author.position[lang]}
        </Position>
      </Author>
      <Content>
        <Quote>
          â€œ {quote[lang]} â€
        </Quote>
      </Content>
    </Container>
  )
}

export default ClientsOpinion
