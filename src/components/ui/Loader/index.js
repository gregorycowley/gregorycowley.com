import React from 'react'
import Icon from 'assets/icons/Loader'

import styled from '@emotion/styled'
import { css } from '@emotion/react'

const Container = styled.div(({ vertical, formatPercent }) => css`
  position: relative;
  height: 100%;
  width: 100%;
  padding-top: ${formatPercent || (!vertical ? (9 / 16) * 100 : (16 / 9) * 100)}%;
`)

const Loading = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%); 
`

const Loader = ({ className, vertical, isDarkTheme, formatPercent }) => {
  return (
    <Container vertical={vertical} className={className} formatPercent={formatPercent}>
      <Loading><Icon isDarkTheme={isDarkTheme} /></Loading>
    </Container>
  )
}

export default Loader
