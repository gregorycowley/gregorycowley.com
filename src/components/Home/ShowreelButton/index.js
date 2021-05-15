import React, { useState, useRef, useEffect } from 'react'
import styled from '@emotion/styled'
import BezierEasing from 'bezier-easing'

import { useSpring, animated } from 'react-spring'
import { useHotkeys } from 'react-hotkeys-hook'
import { css } from '@emotion/react'
import Vimeo from '@u-wave/react-vimeo'
import { detect } from 'detect-browser'

import mq from 'common/styles/breakpoints'
import { withMouseStates } from 'common/hooks/withMouseStates'

import bg from './image.jpg'
import Play from 'assets/icons/Play'
import Close from 'assets/icons/Close'

import { PSmall } from 'components/Paragraphs'

const browser = detect()
const isMobile = browser && (browser.os === 'iOS' || browser.os === 'Android')

const Container = styled.div(({ theme }) => css`
  padding-top: ${theme.spacingL}px;
  grid-column: 9 / span 4;
  ${mq('small')} {
    grid-column: 2 / -2;
  }
`)

const OuterContainer = styled.div`
  position: relative;
`

const ButtonContainer = styled.div`
  background-size: cover;
  cursor: pointer;
  ${mq('small')} {
    grid-column: 1 / -1;
  }
`

const Button = styled.div(({ theme }) => css`
  position: relative;
  height: 100%;
  width: 100%;
  margin-bottom: ${theme.spacingXS}px;
`)

const Legend = styled(PSmall)`
  color: ${({ theme }) => theme.secondary};
  display: flex;
  justify-content: center;
`

const VideoContainer = styled.div(
  ({ isShowed }) => css`
    width: 100%;
    opacity: ${isShowed ? 1 : 0};
`)

const CloseContainer = styled.div`
  position: absolute;
  right: 30px;
  top: 30px;
  cursor: pointer;
  transition: opacity 100ms ease;
  z-index: 1;
`

const PlayContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Img = styled.img`
  width: 100%;
`

const Layer = styled(animated.div)`
  position: absolute;
  background-color: #000;
  background-size: cover;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ButtonWithStates = withMouseStates((props) => {
  return (
    <Button>
      <Img src={bg} />
      <PlayContainer>
        <Play isHovered={props.isHovered} />
      </PlayContainer>
    </Button>
  )
})

const ShowreelButton = () => {
  const ref = useRef()
  const [isOpen, setIsOpen] = useState()
  const [isPaused, setOnPause] = useState(true)

  const [buttonPosition, setButtonPosition] = useState({
    top: 0,
    left: 0,
    width: 0,
    height: 0
  })

  const toggle = () => {
    setButtonPosition(ref.current.getBoundingClientRect())
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    const onClose = () => setIsOpen(false)
    if (isOpen) window.addEventListener('scroll', onClose)
    return () => window.removeEventListener('scroll', onClose)
  }, [isOpen])

  useHotkeys('esc', () => {
    if (isOpen) {
      toggle()
    }
  }, [isOpen])

  useEffect(() => {
    if (ref.current) {
      setButtonPosition(ref.current.getBoundingClientRect())
    }
  }, [ref])

  const closeConfig = {
    opacity: 0,
    top: 0,
    left: 0,
    width: buttonPosition.width,
    height: buttonPosition.height,
    pointerEvents: 'none'
  }

  const openConfig = {
    opacity: 1,
    top: buttonPosition.top * -1,
    left: buttonPosition.left * -1,
    width: document.body.clientWidth,
    height: window.innerHeight,
    pointerEvents: 'all'
  }

  const mySpring = useSpring({
    config: {
      easing: BezierEasing(0.96, 0, 0.02, 1)
    },
    to: isOpen ? openConfig : closeConfig,
    onRest: config => {
      if (config.value.opacity === 1) {
        setOnPause(false)
      } else {
        setOnPause(true)
      }
    }
  })

  return (
    <Container>
      <OuterContainer>
        <ButtonContainer onClick={toggle} ref={ref}>
          <ButtonWithStates />
          <Legend>FormattedMessage: home-watch-showreel</Legend>
        </ButtonContainer>

        <Layer
          onClick={toggle}
          style={mySpring}
        >
          <VideoContainer isShowed={!isPaused}>
            <CloseContainer>
              <Close />
            </CloseContainer>
            {
              !isPaused && (
                <Vimeo
                  video='495546114'
                  autoplay
                  muted={isMobile}
                  responsive
                  controls={isMobile}
                  showTitle={isMobile}
                />
              )
            }

          </VideoContainer>
        </Layer>
      </OuterContainer>
    </Container>
  )
}

export default ShowreelButton
