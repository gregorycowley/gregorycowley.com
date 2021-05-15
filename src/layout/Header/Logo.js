import React from 'react'
import { useParams } from 'react-router-dom'
import styled from '@emotion/styled'

import Link from 'components/Links'
import LogoGlyph from 'assets/icons/LogoGlyphAnimated'

const Container = styled.div`
  grid-column-start: 2;
  grid-column-end: 6;
  pointer-events: all; /* to restore click */
`

const Logo = ({ isDarkTheme }) => {
  const params = useParams()

  return (
    <Container>
      <Link to={`/${params.lang}`} isDarkTheme={isDarkTheme}>
        <LogoGlyph isDarkTheme={isDarkTheme} />
      </Link>
    </Container>
  )
}

export default Logo
