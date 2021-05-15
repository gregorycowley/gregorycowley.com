import styled from '@emotion/styled'
import mq from 'common/styles/breakpoints'
import { css } from '@emotion/react'

const maxWidth = `
  max-width: 1600px;
  margin: 0 auto;
`;

const grid = `
  display: grid;
  grid-template-columns: repeat(20, 1fr);
  grid-column-gap: 2px;
  ${mq('small')} {
    grid-template-columns: repeat(12, 1fr);
  }
`

const ContainerWithGutters = styled.div(({ theme }) => css`
  grid-column: 2 / -2;
  padding-bottom: ${theme.spacingXL}px;
  ${mq('small')}{
    padding-bottom: ${theme.spacingS}px;
  }
`)

export default grid
export { ContainerWithGutters, maxWidth }
