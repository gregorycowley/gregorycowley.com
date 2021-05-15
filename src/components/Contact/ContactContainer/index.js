import styled from '@emotion/styled'
import { css } from '@emotion/react'

import mq from 'common/styles/breakpoints'

const ContactContainer = styled.div(({ theme }) => css`
  grid-column: 2 / -2;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: ${theme.spacingM}px;
  margin-bottom: ${theme.spacingXL}px;
  ${mq('small')} {
    display: block;
  }
`)

export default ContactContainer
