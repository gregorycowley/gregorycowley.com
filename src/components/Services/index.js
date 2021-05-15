import React, { useState, useRef, useEffect } from 'react'

import { Link as ReactScrollLink } from 'react-scroll'
import { map } from 'lodash'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { useParams } from 'react-router-dom'

import { headerHeight, headerHeightMobile } from "layout/Header/constants";
import Metas from 'components/Metas'
import PageHeader from 'components/PageHeader'
import layout from 'common/configs/layout'

import services from 'pages/Services/services'
import mq from 'common/styles/breakpoints'
import Video from 'components/Video'
import useIsSmall from 'common/hooks/useIsSmall'

import Section from './Section'
import GridContainer from 'components/GridContainer'

const LeftCol = styled.div(({ theme }) => css`
  grid-column: 2 / 7;
  padding-bottom: ${theme.spacingXL}px;
  ${mq('small')} {
    grid-column: 2 / -2;
    padding-bottom: ${theme.spacingL}px;
  }
`)

const RightCol = styled.div`
  grid-column: 8 / -1;
  ${mq('small')} {
    grid-column: 1 / -1;
  }
`
const PanelContainer = styled.div(({ theme }) => css`
  position: sticky;
  top: ${headerHeight}px;
  ${mq('small')} {
    position: static;
    margin-bottom: ${theme.spacingL}px;
  }
`)

const PanelItem = styled.div(({ theme }) => css`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-column-gap: 2px;
  border-bottom: 1px solid ${theme.separator};
  padding-top: ${theme.spacingXS}px;
  padding-bottom: ${theme.spacingXS}px;
  cursor: pointer;
  :last-of-type {
    border-bottom: none;    
  }
  ${mq('small')} {
    grid-template-rows: auto 0;
  }
`)

const VideoContainer = styled.div(({ isVisible }) => css`
  overflow: hidden;
  width: 120px;
  height: ${isVisible ? 120 : 0}px;
  transition: height 300ms cubic-bezier(0.86, 0, 0.07, 1);
  grid-column: 1 /  span 2;
  ${mq('small')} {
    display: none;
  }
`)

const ScrollLinkStyled = styled(ReactScrollLink)`
  grid-column: 1 / -1;
  font-size: 16px;
  line-height: 150%;
  transition-property: line-height, font-size;
  transition-duration: 300ms; 
  transition-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
  &.active {
    font-size: 21px;
    line-height: 140%;
  }
  &:not(.active) {
    opacity: ${({ theme }) => theme.opacity};
  }
  ${mq('small')} {
    font-size: 21px;
    line-height: 140%;
    &:not(.active) {
      opacity: 1;
    }
  }
`

const VideoPlayer = ({ src, isPlaying }) => {
  const videoRef = useRef()

  useEffect(() => {
    if (videoRef.current) {
      const videoEl = videoRef.current.querySelector('video')
      // stop
      videoEl.pause()
      videoEl.currentTime = 0

      if (isPlaying) {
        // Avoid the Promise Error
        setTimeout(function () {
          videoEl.play()
        }, 100)
      }
    }
  }, [isPlaying])

  return (
    <Video
      ref={videoRef}
      loop
      muted
      playsInline
      src={src}
    />
  )
}

const Panel = () => {
  const { lang } = useParams()
  const [activeId, setActiveId] = useState(false)
  const isMobile = useIsSmall()

  return (
    <PanelContainer>
      {map(services, s => (
        <PanelItem key={s.id}>
          <ScrollLinkStyled
            to={s.id}
            spy
            smooth // = with animation
            offset={isMobile ? -headerHeightMobile : -headerHeight}
            duration={300}
            activeClass='active'
            onSetActive={() => setActiveId(s.id)}
          >
            {s.label[lang]}
          </ScrollLinkStyled>
          <VideoContainer isVisible={s.id === activeId}>
            <VideoPlayer src={s.video} isPlaying={s.id === activeId} />
          </VideoContainer>
        </PanelItem>
      ))}
    </PanelContainer>
  )
}

const Services = () => {
  return (
    <GridContainer>
      <Metas wording='services' />
      <PageHeader
        isDarkTheme={layout.SERVICES.isHeaderDark}
        titleMain={'FormattedMessage: services-main-title'}
        chapo={'FormattedMessage: services-chapo'}
      />
      <LeftCol>
        <Panel />
      </LeftCol>
      <RightCol>
        {map(services, (service, serviceKey) => (
          <div key={service.id} id={service.id}>
            <Section serviceKey={serviceKey} />
          </div>
        ))}
      </RightCol>
    </GridContainer>
  )
}

export default Services
