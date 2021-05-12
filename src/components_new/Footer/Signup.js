import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'


import { Title3 } from 'components/Titles'
import ButtonLabel from 'components/Buttons/ButtonLabel'
import mq from 'common/styles/breakpoints'

const Container = styled.div(({ theme }) => css`
  grid-row: 4;
  grid-column: 9 / -2;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-bottom: ${theme.spacingL}px;
  ${mq('small')} {
    grid-row: auto;
    display: block;
    grid-column: 2 / -2;
    border-bottom: none;
    margin-bottom: ${theme.spacingS}px;
  }
`)

const Title = styled(Title3)(({ theme }) => css`
  grid-row: 2;
  grid-column: 9 / -1;
  ${mq('small')} {
    grid-row: auto;
    grid-column: 2 / -2;
    padding-bottom: ${theme.spacingM}px;
  }
`)

const SignUp = ({ isDarkTheme }) => {
  return (
    <>
      <Title>
        FormattedMessage: signup-form-title
      </Title>
      <Container isDarkTheme={isDarkTheme}>
        <ButtonLabel
          large
          href='http://eepurl.com/gKm5YT'
          target='_blank'
          isDarkTheme={isDarkTheme}
        >
          FormattedMessage: signup-form-submit
        </ButtonLabel>
      </Container>
    </>
  )
}

export default SignUp
