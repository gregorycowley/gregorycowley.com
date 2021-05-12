import React from 'react'
import Vimeo from '@u-wave/react-vimeo'
import styled from '@emotion/styled'
import { css } from '@emotion/react'

// common
import mq from 'common/styles/breakpoints'

// components
import Loader from 'components/Loader'
import grid, { maxWidth } from 'components/Layout'

const OuterContainer = styled.div(({ theme, background }) => css`
  background-color: ${background};
  ${mq('small')} {
    padding-bottom: 0;
  }
`)

const Container = styled.div`
  ${maxWidth}
  ${grid}
`

const VideoContainer = styled.div(({ theme, isReady }) => css`
  position: relative;
  grid-column: 2 / -2;
  background-color: ${theme.whiteLight};
  ${mq('small')} {
    grid-column: 1 / -1;
  }
`)

const VimeoContainer = styled.div`
  position: absolute;
  width: 100%;
  z-index: 1;
  top: 0;
  bottom: 0;
`

const ShortVideo = ({ uri, background }) => {
  return (
    <OuterContainer background={background}>
      <Container>
        <VideoContainer>
          {
            navigator.userAgent !== 'ReactSnap' &&
            (
              <>
                <Loader isDarkTheme />
                <VimeoContainer>
                  <Vimeo
                    autoplay
                    loop
                    background
                    muted
                    responsive
                    video={uri}
                  />
                </VimeoContainer>
              </>
            )
          }

        </VideoContainer>
      </Container>
    </OuterContainer>
  )
}

export default ShortVideo
