import React, { useRef } from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { flatten } from 'lodash'
import BezierEasing from 'bezier-easing'
import { animated, useTransition, useSpring, useChain } from 'react-spring'

import grid from 'components/Layout'
import useLinksList from './useLinksList'
import { LinkLang } from './NavFullList'
import { LinkNav } from 'components/Links'
import { Title2 } from 'components/Titles'
import { Paragraph1 } from 'components/Paragraphs'

import mq from 'common/styles/breakpoints'
import ExternalLink from 'assets/icons/ExternalLink'
import { headerHeightMobile } from './constants'

const ModalMain = styled(animated.div)(
  ({ theme }) => css`
    background: ${theme.black};
    position: fixed;
    z-index: 2;
    top: 0;
    left: 0;
    right: 0;
    overflow: hidden;
  `
)

const ModalContainer = styled.div`
  ${grid}
  height: 100vh;
  align-items: center;
  ${mq('small')} {
    padding-top: ${headerHeightMobile / 2}px;
  }
`

const GroupsContainer = styled.div`
  grid-column: 5 / span 7;
  ${mq('small')} {
    grid-column: 4 / span 7;
  }
`

const Group = styled.div(({ theme }) => css`
  margin-bottom: ${theme.spacingS}px;
`)

const GroupLangs = styled.div(({ theme }) => css`
  display: flex;
  margin-bottom: ${theme.spacingS}px;
`)

const Item = styled(animated.div)`
  padding-bottom: 1px;
`

const TextItem = styled(Title2)`
  line-height: 140%;
  ${mq('small')} {
    font-size: 28px;
  }
  ${mq('extraSmall')} {
    font-size: 21px;
  }
`

const LangSwitcher = styled(LinkLang)`
  display: flex;
  font-size: 16px;
  line-height: 150%;
  margin-right: 10px;
  &:first-of-type {
    margin-left: 0;
  }
  &:last-of-type {
    margin-right: 0;
  }
`

const LinkNavStyled = styled(LinkNav)`
  align-items: baseline; /* when icons */
`

const Modal = ({ isModalOpen, toggleModal }) => {

  const linksGroups = useLinksList()
  const allLinks = flatten(linksGroups)

  // animation modal container
  const modalRef = useRef()
  const { size, ...rest } = useSpring({
    ref: modalRef,
    config: {
      easing: BezierEasing(0.86, 0, 0.07, 1),
      duration: isModalOpen ? 1000 : 200
    },
    from: {
      size: '0%'
    },
    to: {
      size: isModalOpen ? '100%' : '0%'
    }
  })

  // animation links
  const linksRef1 = useRef()
  const linksRef2 = useRef()

  const linksAnimationProps = {
    config: {
      duration: isModalOpen ? 1000 : 500,
      easing: BezierEasing(0.25, 0.1, 0.25, 1)
    },
    trail: 50,
    from: { opacity: 0, transform: 'translateY(10px)' },
    enter: { opacity: 1, transform: 'translateY(0)' },
    leave: { opacity: 0, transform: 'translateY(10px)' },
    keys: (item) => item.label
  }

  const langs = allLinks.filter(t => t.isLang)

  const transitionsLangs = useTransition(
    isModalOpen ? langs : [],
    {
      ref: linksRef1,
      ...linksAnimationProps
    }
  )

  const withoutLangs = allLinks.filter(t => !t.isLang)

  const transitionsWithoutLangs = useTransition(
    isModalOpen ? withoutLangs : [],
    {
      ref: linksRef2,
      ...linksAnimationProps
    }
  )

  // Sequences order
  const sequenceIn = [modalRef, linksRef1, linksRef2]
  const sequenceOut = [linksRef2, linksRef1, modalRef]
  // delay between panel then links
  const secondStep = isModalOpen ? 0.25 : 0.1

  useChain(
    isModalOpen ? sequenceIn : sequenceOut,
    [0, secondStep, secondStep]
  )

  return (
    <ModalMain style={{ ...rest, height: size }}>
      <ModalContainer>
        <GroupsContainer>
          <Group>
            {transitionsWithoutLangs((props, item) => {
              return (
                <Item style={props}>
                  <LinkNavStyled
                    onClick={toggleModal}
                    title={item.title}
                    nav={!item.isExternal}
                    isDarkTheme
                    href={item.isExternal ? item.to : undefined}
                    to={item.isExternal ? undefined : item.to}
                    target={item.isExternal ? '_blank' : undefined}
                    rel={item.isExternal ? 'noopener noreferrer' : undefined}
                    exact={item.isExact}
                  >
                    <TextItem>{item.label}</TextItem>
                    {item.isExternal && <ExternalLink isDarkTheme size={18} />}
                  </LinkNavStyled>
                </Item>
              )
            })}
          </Group> 
          <GroupLangs>
            {transitionsLangs((props, item) => {
              return (
                <Item style={props}>
                  <LangSwitcher
                    onClick={toggleModal}
                    title={item.title}
                    nav
                    isDarkTheme
                    to={item.to}
                  >
                    <Paragraph1>{item.label}</Paragraph1>
                  </LangSwitcher>
                </Item>
              )
            })}
          </GroupLangs>
        </GroupsContainer>
      </ModalContainer>
    </ModalMain>
  )
}

export default Modal
