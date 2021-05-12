import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { omit } from 'lodash'

import Link from 'components/Links'
import { headerHeight, headerHeightMobile } from 'components/Header/constants'
import mq from 'common/styles/breakpoints'
import ArrowLeftWithDisc from 'assets/icons/ArrowLeftWithDisc'
import { Title4, TitlePage } from 'components/Titles'
import { Paragraph1 } from 'components/Paragraphs'
import grid, { maxWidth } from 'components/Layout'

const OuterContainer = styled.div(
  ({ theme, isDarkTheme, background }) => css`
    ${grid} /* only for the Border */
    grid-column: 1 / -1;
    color: ${isDarkTheme ? theme.white : theme.main};
    background: ${background || (isDarkTheme ? theme.black : theme.white)};
  `
)

export const headerDistance = 100
const Container = styled.div(({ theme }) => css`
  grid-column: 1 / -1; /* cancel the grid from the parent, only Border needs it */  
  ${grid}
  ${maxWidth}
  width: 100%;
  min-height: calc(100vh - ${headerDistance}px)};
  padding-top: ${headerHeight}px;
  align-content: center;
  padding-bottom: ${theme.spacingM}px;
  ${mq('small')} {
    padding-top: ${headerHeightMobile}px;
  }
`)

const Border = styled.div(
  ({ theme, isDarkTheme }) => {
    const bgColor = isDarkTheme ? theme.separatorLight : theme.separator
    return css`
      grid-column: 2 / -2;
      border-bottom: 1px solid ${bgColor};
      margin-bottom: ${theme.spacingL}px;
    `
  }
)

const LeftCol = styled.div(({ theme }) => css`
  grid-column: 2 / 8;
  ${mq('small')} {
    margin-bottom: ${theme.spacingL}px;
    grid-column: 2 / -2;
  }
`)

const RightCol = styled.div(() => css`
  grid-column: 9 / -2;
  display: flex;
  flex-direction: column;
  ${mq('small')} {
    grid-column: 2 / -2;
    text-align: center;
  }
`)

const TitleCategory = styled((props) => {
  return <Title4 {...omit(props, ['isDarkTheme'])} />
})(({ theme, isDarkTheme }) => css`
  color: ${isDarkTheme ? theme.white : theme.secondary};
  opacity: ${isDarkTheme ? 0.5 : 1};
  margin-bottom: ${theme.spacingS}px;
  height: 30px; /* size of arrow icon */
  display: flex;
  align-items: center;
  ${mq('small')} {
    justify-content: center;
    margin-bottom: 0;
  }
`)

const Chapo = styled.div(({ theme, isDarkTheme }) => css`
  grid-column: 2 / -2;
  display: grid;
  grid-template-columns: 7fr 10fr 1fr;
  color: ${isDarkTheme ? theme.white : theme.secondary};
  opacity: ${isDarkTheme ? 0.5 : 1};
  margin-top: ${theme.spacingM}px;
  ${mq('small')} {
    margin-top: ${theme.spacingL}px;
  }
`)

const ChapoText = styled(Paragraph1)(() => css`
  grid-column: 2;
  ${mq('small')} {
    text-align: center;
    grid-column: 1 / -1;
  }
`)

const LinkBack = styled(Link)(({ theme, isDarkTheme }) => css`
  display: flex;
  color: ${isDarkTheme ? theme.white : theme.secondary};
  opacity: ${isDarkTheme ? 0.5 : 1};
  text-decoration: none; 
  align-items: center;
  :hover {
    text-decoration: none;
    color: ${theme.tonic};
    svg {
      fill: ${theme.tonic};
      opacity: ${isDarkTheme ? 0.6 : 1};
    }
  }
  ${mq('small')} {
    justify-content: center;
  }
`)

const ArrowLeftWithDiscStyled = styled(ArrowLeftWithDisc)`
  margin-right: 15px;
  width: 30px;
  height: 30px;
  flex-shrink: 0;
  ${mq('small')} {
    margin-right: 25px;
  }
`

const ButtonBack = ({ destination, isDarkTheme, backToLabel }) => {
  return (
    <LinkBack
      to={destination}
      title={backToLabel}
      isDarkTheme={isDarkTheme}
    >
      <ArrowLeftWithDiscStyled />
      <Title4>{backToLabel}</Title4>
    </LinkBack>
  )
}

const PageHeader = ({
  isDarkTheme,
  background,
  backTo,
  backToLabel,
  noBorder,
  titleCategory,
  titleMain,
  chapo
}) => {
  return (
    <OuterContainer
      background={background}
      isDarkTheme={isDarkTheme}
    >
      <Container
        background={background}
        isDarkTheme={isDarkTheme}
      >
        {backTo && (
          <LeftCol>
            <ButtonBack
              destination={backTo}
              isDarkTheme={isDarkTheme}
              backToLabel={backToLabel}
            />
          </LeftCol>
        )}
        <RightCol>
          {
            titleCategory && (
              <TitleCategory isDarkTheme={isDarkTheme}>
                {titleCategory}
              </TitleCategory>
            )
          }
          {
            titleMain && (
              <TitlePage chapo={chapo}>
                {titleMain}
              </TitlePage>
            )
          }
        </RightCol>
        {
          chapo && (
            <Chapo isDarkTheme={isDarkTheme}>
              <ChapoText>
                {chapo}
              </ChapoText>
            </Chapo>
          )
        }
      </Container>
      {!noBorder && <Border isDarkTheme={isDarkTheme} />}
    </OuterContainer>
  )
}

export default PageHeader
