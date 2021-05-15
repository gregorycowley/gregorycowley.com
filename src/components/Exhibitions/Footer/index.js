import React from 'react'

import { map, upperCase } from 'lodash'
import { useParams } from 'react-router-dom'
import styled from '@emotion/styled'
import { css } from '@emotion/react'

import ROUTES from 'common/routes'
import SOCIAL from 'common/social'
import mq from 'common/styles/breakpoints'
import LogoSvg from 'assets/icons/Logo'
import ExternalLink from 'assets/icons/ExternalLink'
import { PSmall } from 'components/Paragraphs'
import { LinkNav } from 'components/Links'
// import SignUp from './Signup'
import LAYOUTS from 'common/configs/layout'
import grid, { maxWidth } from "layout/Layout";

const FooterContainer = styled.div(({ theme, isDarkTheme }) => css`
  background: ${isDarkTheme ? theme.black : theme.white};
`)

const FooterInnerContainer = styled.div(({ theme, isDarkTheme }) => css`
  ${grid}
  ${maxWidth}
  grid-template-rows: ${theme.spacingL}px auto ${theme.spacingM}px auto auto ${theme.spacingL}px auto;
  color: ${isDarkTheme ? theme.white : theme.secondary};
  ${mq('small')} {
    text-align: center;
    grid-template-rows: auto; /* too many lines on mobile we stick to regular padding to space elements */
    padding-top: ${theme.spacingL}px;
  }
`)

const Logo = styled(LogoSvg)(({ theme }) => css`
  grid-column: 2 / -1;
  grid-row: 2;
  align-self: center;
  ${mq('small')} {
    grid-column: 1 / -1;
    justify-self: center;
    grid-row: auto;
    margin-bottom: ${theme.spacingM}px;
  }
`)

const List = styled('ul')(({ theme }) => css`
  margin: 0;
  padding: 0;
  list-style: none;
  ${mq('small')} {
    padding-bottom: ${theme.spacingM}px;
    text-align: left;
  }
`)
const TitleList = styled(PSmall)(({ theme }) => css`
  padding-bottom: ${theme.spacingS}px;
  color: ${theme.secondary};
  ${mq('small')} {
    padding-bottom: ${theme.spacingS}px;
    text-align: left;
  }
`)
const Sitemap = styled.div`
  grid-row: 5;
  grid-column: 9 / span 4;
  ${mq('small')} {
    grid-row: auto;
    grid-column: 2 / -2;
  }
`
const FollowUs = styled.div(({ theme }) => css`
  grid-row: 5;
  grid-column: 13 / span 4;
  padding-bottom: ${theme.spacingS}px;
  ${mq('small')} {
    grid-row: auto;
    grid-column: 2 / -2;
  }
`)
const SayHi = styled.div`
  grid-row: 5;
  grid-column: 16 / -2;
  ${mq('small')} {
    grid-column: 2 / -2;
    text-align: left;
  }
`
const Email = styled.div(({ theme }) => css`
  padding-bottom: ${theme.spacingXS}px;
`)

const Address = styled.div(({ theme }) => css`
  ${mq('small')} {
    padding-bottom: ${theme.spacingM}px;
  }
`)

const Mentions = styled.div(
  ({ theme }) => css`
    display: flex;
    justify-content: space-between;
    grid-row: -1;
    grid-column: 2 / -2;
    font-size: 13px;
    line-height: 130%;
    padding-top: ${theme.spacingS}px;
    padding-bottom: ${theme.spacingS}px;
    ${mq('small')} {
      grid-row: auto;
    }
  `
)
const Copyright = styled.div`
  opacity: 0.5;
`
const LinkTerms = styled(LinkNav)`
  font-size: 13px;
`

const links = Object.keys(ROUTES)
  .filter(k => LAYOUTS[k] && LAYOUTS[k].footerOrder)
  .sort((a, b) => LAYOUTS[a].footerOrder - LAYOUTS[b].footerOrder)
  .map(k => ROUTES[k])

const Footer = ({ isDarkTheme }) => {
  const { lang } = useParams()
  const currentLang = upperCase(lang)
  const d = new Date()
  const currentYear = d.getFullYear()
  return (
    <FooterContainer isDarkTheme={isDarkTheme}>
      <FooterInnerContainer>

        <Logo isDarkTheme={isDarkTheme} />
        {/* <SignUp isDarkTheme={isDarkTheme} /> */}
        <Sitemap>
          <TitleList>
            FormattedMessage: footer-sitemap
          </TitleList>
          <List>
            {map(links, (link, key) => (
              <li key={key}>
                <LinkNav
                  nav={!link.IS_EXTERNAL}
                  href={link.IS_EXTERNAL ? link.SLUG_INDEX[currentLang] || link.SLUG_INDEX : undefined}
                  to={link.IS_EXTERNAL ? undefined : `/${lang}/${link.SLUG_INDEX}`}
                  target={link.IS_EXTERNAL ? '_blank' : undefined}
                  isDarkTheme
                  rel={link.IS_EXTERNAL ? 'noopener noreferrer' : undefined}
                  exact={link.IS_EXACT}
                >
                  {link.LABEL[currentLang]}
                  {link.IS_EXTERNAL && <ExternalLink isDarkTheme={isDarkTheme} />}
                </LinkNav>
              </li>
            ))}
          </List>
        </Sitemap>
        <FollowUs>
          <TitleList>
            FormattedMessage: footer-followus
          </TitleList>
          <List>
            {map(SOCIAL, (social, key) => (
              <li key={key}>
                <LinkNav
                  href={
                    social.URLS
                      ? social.URLS[lang]
                      : social.URL
                  }
                  target='_blank'
                  rel='noopener noreferrer'
                  isDarkTheme
                >
                  {social.LABEL}
                </LinkNav>
              </li>
            ))}
          </List>
        </FollowUs>
        <SayHi>
          <Email>
            FormattedMessage: contact-email
          </Email>
          <Address>
            FormattedMessage: contact-address-1
            <br />
            FormattedMessage: contact-address-2
            <br />
            FormattedMessage: contact-address-3
          </Address>
        </SayHi>
        <Mentions>
          <Copyright>
            FormattedMessage: copyright
          </Copyright>
          <LinkTerms
            to={`/${lang}/${ROUTES.TERMS.SLUG_INDEX}`}
          >
            {ROUTES.TERMS.LABEL[currentLang]}
          </LinkTerms>
        </Mentions>
      </FooterInnerContainer>
    </FooterContainer>
  )
}

export default Footer
