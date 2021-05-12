import React from 'react'
import { useParams } from 'react-router-dom'
import styled from '@emotion/styled'
import { css } from '@emotion/react'


import { Title3 } from 'components/Titles'
import { Paragraph1 } from 'components/Paragraphs'
import Link from 'components/Links'
import Video from 'components/Video'
import ROUTES from 'common/routes'
import ArrowRight from 'assets/icons/ArrowRight'
import mq from 'common/styles/breakpoints'
import { withTheme } from "@emotion/react";

const ToServiceContainer = styled.div(({ theme }) => css`
  display: grid;
  grid-template-columns: repeat(11, 1fr);
  grid-column-gap: 2px;
  grid-column: 9 / -2;
  align-items: flex-start;
  margin-bottom: ${theme.spacingXL}px;
  ${mq('small')}{
    grid-template-columns: repeat(12, 1fr);
    grid-column: 2 / -2;
    margin-bottom: ${theme.spacingL}px;
  }
`)

const OurServices = styled(Title3)(({ theme }) => css`
  color: ${theme.secondary};
`)

const Title3Styled = styled(Title3)(({ theme }) => css`
  margin-bottom: ${theme.spacingM}px;
  ${mq('small')}{
    margin-bottom: ${theme.spacingS}px;
  }
`)

const ArrowRightStyled = styled(ArrowRight)(() => css`
  flex-shrink: 0;
  margin-left: 18px;
  ${mq('small')}{
    margin-right: 0;
  }
`)

const LinkStyled = styled(Link)`
  margin-top: 3px;
  display: flex;
  align-items: center;
`
const VideoContainer = styled.div`
  grid-column: 1 / span 2;
  padding-right: 25%;
  ${mq('small')}{
    padding-right: 0;
    grid-column: 4 / -4;
  }
`
const Content = styled.div(({ theme }) => css`
  grid-column: 3 / -1;
  padding-top: ${theme.spacingXS}px;
  ${mq('small')}{
    padding-top: 0;
    grid-column: 1 / -1;
  }
`)

const LinkToService = ({ service, theme }) => {
  const { lang } = useParams()
  return (
    <ToServiceContainer>
      <VideoContainer>
        <Video autoPlay loop muted playsInline src={service.video} />
      </VideoContainer>
      <Content>
        <OurServices>
          FormattedMessage: project-service-related
        </OurServices>
        <Title3Styled>
          {service.label[lang]}
        </Title3Styled>
        <LinkStyled to={`/${lang}/${ROUTES.SERVICES.SLUG_INDEX}#${service.id}`}>
          <Paragraph1>
            FormattedMessage: project-more-about-services
          </Paragraph1>
          <ArrowRightStyled color={theme.tonic} />
        </LinkStyled>
      </Content>
    </ToServiceContainer>
  )
}

export default withTheme(LinkToService)
