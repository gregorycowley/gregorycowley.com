import React, { useState } from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { useTheme, ThemeProvider, withTheme } from "@emotion/react";
import { useWindowSize } from 'react-recipes'

// hooks
import useScrollDistance from 'common/hooks/useScrollDistance'

// assets
import OpenMenu from 'assets/icons/OpenMenu'

// components
import Modal from './Modal'
import grid, { maxWidth } from 'components/Layout'
import Logo from './Logo'
import NavFullList from './NavFullList'

// constants
import { paddingTop, headerHeight, headerHeightMobile } from './constants'

import mq from 'common/styles/breakpoints'
import { headerDistance } from 'components/PageHeader'

const Container = styled.div`
  position: relative;
`

const FixedLogo = styled.div`
  ${grid}
  ${maxWidth}
  position: fixed;
  z-index: 3;
  top: 0;
  left: 0;
  right: 0;
  grid-template-rows: min-content;
  padding-top: ${paddingTop}px;
  pointer-events: none;
`

const ContainerNavFull = styled.div`
  position: absolute;
  z-index: 3;
  top: 0;
  left: 0;
  right: 0;
  ${grid}
  ${maxWidth}
  grid-template-rows: min-content;
  padding-top: ${paddingTop}px;
  pointer-events: none;
  ${mq('small')} {
    /* fix obscur bug with logo gradient gone in mobile */
    opacity: 0;
    pointer-events: none;
  }
`

const OuterContainerNavMinified = styled.div(({ isModalOpen, isLimitReached }) => css`
  position: fixed;
  z-index: 3;
  top: 0;
  left: 0;
  right: 0;
  will-change: transform;
  transition: transform ${isModalOpen ? 200 : 700}ms cubic-bezier(0.86, 0, 0.07, 1);
  transform: translateY(${isModalOpen || isLimitReached ? '0%' : '-100%'});
  min-height: ${headerHeight}px;
  pointer-events: none;
  grid-template-rows: min-content;
  padding-top: ${paddingTop}px;

  ${mq('small')} {
    min-height: ${headerHeightMobile}px;
    transition: none;
    transform: translateY(0);
  }
`)

const ContainerNavMinified = styled.div(() => css`
  ${grid}
`)

const OpenMenuStyled = styled(OpenMenu)(({ theme, isModalOpen, isBodyDark, isDarkTheme }) => css`
  position: relative;
  fill: ${isModalOpen ? 'transparent' : isBodyDark ? theme.white : theme.black};
  ${mq('small')} {
    fill: ${isDarkTheme ? theme.white : theme.black};
  }
`)

const ButtonModal = styled.div(
  ({ theme, isModalOpen }) => css`
    pointer-events: all; /* to restore click */
    grid-column: -3 / -2;
    justify-self: right;
    align-self: center;
    position: relative;
    cursor: pointer;
    background: ${isModalOpen ? 'transparent' : theme.blackHalfOpacity};
    transition: background 1000ms cubic-bezier(0.86, 0, 0.07, 1);
    width: 48px;
    height: 48px;
    border-radius: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    
    ${mq('small')} {
      grid-column: -3 / -2;
    }
`
)

const NavMinified = ({
  children,
  isModalOpen,
  isLimitReached
}) => {
  return (
    <OuterContainerNavMinified
      isModalOpen={isModalOpen}
      isLimitReached={isLimitReached}
    >
      <ContainerNavMinified>
        {children}
      </ContainerNavMinified>
    </OuterContainerNavMinified>
  )
}

const addBodyClass = className => document.body.classList.add(className)
const removeBodyClass = className => document.body.classList.remove(className)
let scrollPosition = 0
const Header = withTheme(({ isHeaderDark, isBodyDark, isHome }) => {
  const [isModalOpen, setModalOpen] = useState(false)
  const { height } = useWindowSize() // updates on resize ðŸ‘

  let specialMargin = 0

  if (isHome) {
    const el = document.getElementById('header-container')
    if (el) {
      specialMargin = el.getBoundingClientRect().height
    }
  }

  // @TODO get pageHeader height as limit
  // 45px
  const isLimitReached = useScrollDistance((specialMargin || height + headerDistance) - paddingTop)

  const isDarkTheme = isModalOpen || (isLimitReached ? isBodyDark : isHeaderDark)

  const toggleModal = () => {
    // keep scrollbar but prevent user to scroll when modal is open
    if (!isModalOpen) {
      scrollPosition = window.scrollY
      addBodyClass('no-scroll')
      document.body.style.top = `${-1 * scrollPosition}px`
    } else {
      removeBodyClass('no-scroll')
      window.scrollTo(0, scrollPosition)
    }

    setModalOpen(!isModalOpen)
  }

  return (
    <>
      <FixedLogo>
        {/* <Logo
          isDarkTheme={isModalOpen || isDarkTheme}
        /> */}
      </FixedLogo>

      {/* nav full */}
      <Container>
        <ContainerNavFull>
          <NavFullList isDarkTheme={isDarkTheme} />
        </ContainerNavFull>
      </Container>

      <NavMinified
        isLimitReached={isLimitReached}
        isModalOpen={isModalOpen}
      >
        <ButtonModal
          onClick={toggleModal}
          isModalOpen={isModalOpen}
        >
          <OpenMenuStyled
            isModalOpen={isModalOpen}
            isBodyDark={isBodyDark}
            isDarkTheme={isDarkTheme}
          />
        </ButtonModal>
      </NavMinified>

      {/* <Modal isModalOpen={isModalOpen} toggleModal={toggleModal} /> */}
    </>
  );
})

export default Header
