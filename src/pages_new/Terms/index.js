import React from 'react'

import styled from '@emotion/styled'
import { css } from '@emotion/react'

import PageHeader from 'components/PageHeader'
import { Title2, Title3 } from 'components/Titles'
import GridContainer from 'components/GridContainer'

import {
  RightCol,
  Layout3cols
} from 'components/Layout/3Cols'
import layout from 'common/configs/layout'

const Container = styled(Layout3cols)(({ theme }) => css`
  padding: ${theme.spacingM}px 0;
`)

const Block = styled.div(({ theme }) => css`
  padding-bottom: ${theme.spacingM}px;
`)

const Title2Styled = styled(Title2)(({ theme }) => css`
  padding-bottom: ${theme.spacingM}px;
`)

const Title3Styled = styled(Title3)(({ theme }) => css`
  padding-bottom: ${theme.spacingS}px;
`)

const Terms = () => {
  return (
    <GridContainer>
      <PageHeader
        isDarkTheme={layout.TERMS.isHeaderDark}
        titleMain={"FormattedMessage: terms-main-title"}
      />
      <Container>
        <RightCol>
          <Block>
            FormattedMessage: terms-intro
          </Block>
          <Title2Styled>
            FormattedMessage: terms-title-1
          </Title2Styled>
          <Title3Styled>
            FormattedMessage: terms-title-1-1
          </Title3Styled>
          <Block>
            FormattedMessage: terms-content-1-1
          </Block>
          <Title3Styled>
            FormattedMessage: terms-title-1-2
          </Title3Styled>
          <Block>
            FormattedMessage: terms-content-1-2
          </Block>
          <Title3Styled>
            FormattedMessage: terms-title-1-3
          </Title3Styled>
          <Block>
            FormattedMessage: terms-content-1-3
          </Block>
          <Title2Styled>
            FormattedMessage: terms-title-2
          </Title2Styled>
          <Title3Styled>
            FormattedMessage: terms-title-2-1
          </Title3Styled>
          <Block>
            FormattedMessage: terms-content-2-1
          </Block>
          <Title3Styled>
            FormattedMessage: terms-title-2-2
          </Title3Styled>
          <Block>
            FormattedMessage: terms-content-2-2-1
          </Block>
          <Block>
            FormattedMessage: terms-content-2-2-2
          </Block>
          <Title3Styled>
            FormattedMessage: terms-title-2-3
          </Title3Styled>
          <Block>
            FormattedMessage: terms-content-2-3
          </Block>
          <Title3Styled>
            FormattedMessage: terms-title-2-4
          </Title3Styled>
          <Block>
            FormattedMessage: terms-content-2-4
          </Block>
          <Title3Styled>
            FormattedMessage: terms-title-2-5
          </Title3Styled>
          <Block>
            FormattedMessage: terms-content-2-5
          </Block>
        </RightCol>
      </Container>
    </GridContainer>
  )
}

export default Terms
