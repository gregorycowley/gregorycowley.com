import React from 'react'
import styled from '@emotion/styled'
import { useTheme, ThemeProvider, withTheme } from "@emotion/react";
import { css } from '@emotion/react'

import { useParams } from 'react-router-dom'

import { Title2 } from 'components/Titles'
import ContactContainer from 'components/ContactContainer'
import ButtonContact from 'components/Buttons/ButtonContact'
import Link from 'components/Links'

import ROUTES from 'common/routes'
import mq from 'common/styles/breakpoints'
import { TitleModule } from 'pages/Home/shared'

import ratpdevLogo from './logos/Logo-ratpdev.svg'
import airLiquideLogo from './logos/logo-air_liquide.svg'
import arteLogo from './logos/logo-arte.svg'
import canalplusLogo from './logos/logo-canalplus.svg'
import carrefourLogo from './logos/logo-carrefour.svg'
import citeDesSciencesLogo from './logos/logo-cite_des_sciences.svg'
import edfLogo from './logos/logo-edf.svg'
import engieLogo from './logos/logo-engie.svg'
import googleLogo from './logos/logo-google.svg'
import hasLogo from './logos/logo-has.svg'
import havasLogo from './logos/logo-havas.svg'
import leboncoinLogo from './logos/logo-leboncoin.svg'
import michelinLogo from './logos/logo-michelin.svg'
import orangeLogo from './logos/logo-orange.svg'
import saintGobainLogo from './logos/logo-saint_gobain.svg'
import sncfReseauLogo from './logos/logo-sncf_reseau.svg'
import societeGeneraleLogo from './logos/logo-societe_generale.svg'
import twitterLogo from './logos/logo-twitter.svg'

const TitleContact = styled.div`
  grid-column: 2 / -2;
  text-align: center;
  ${mq('small')} {
    grid-column: 2 / -2
  }
`

const Logos = styled.div(({ theme }) => css`
  grid-column: 2 / -2;
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  grid-column-gap: 2px;
  grid-row-gap: 2px;
  grid-auto-rows: 1fr;
  padding-top: ${theme.spacingM}px;
  padding-bottom: ${theme.spacingL}px;
  /* creates a fake first square to make all squares responsive */
  :before {
    content: '';
    width: 0;
    padding-bottom: 100%;
    grid-row: 1 / 1;
    grid-column: 1 / 1;
  }
  > *:first-of-type {
    grid-row: 1 / 1;
    grid-column: 1 / 1;
  }

  ${mq('small')} {
    grid-template-columns: repeat(4, 1fr);
    grid-column: 1 / -1;
    margin-bottom: ${theme.spacingM}px;
  }
`)

const Logo = styled.div(
  ({ url }) => css`
    height: 100%;
    width: 100%;
    background: url(${url}) no-repeat;
    background-size: contain;
  `
)

const StyledTitle2 = styled(Title2)(
  ({ theme }) => css`
    margin-bottom: ${theme.spacingXS}px;
    ${mq('small')} {
      padding-top: ${theme.spacingXS}px;
    }
  `
)

const GuidelineLink = styled(Link)(
  ({ theme }) => css`
    font-size: 13px;
    line-height: 130%;
    font-weight: 400;
    text-align: center;
    margin-bottom: ${theme.spacingXS}px;
    ${mq('small')} {
      font-size: 16px;
      line-height: 150%;
    }   
`)

const clients = [
  {
    label: 'Engie',
    logo: engieLogo
  },
  {
    label: 'EDF',
    logo: edfLogo
  },
  {
    label: 'Orange',
    logo: orangeLogo
  },
  {
    label: 'SNCF RÃ©seau',
    logo: sncfReseauLogo
  },
  {
    label: 'RATP Dev',
    logo: ratpdevLogo
  },
  {
    label: 'Michelin',
    logo: michelinLogo
  },
  {
    label: 'SociÃ©tÃ© GÃ©nÃ©rale',
    logo: societeGeneraleLogo
  },
  {
    label: 'Saint-Gobain',
    logo: saintGobainLogo
  },
  {
    label: 'Air Liquide',
    logo: airLiquideLogo
  },
  {
    label: 'Havas',
    logo: havasLogo
  },
  {
    label: 'Google',
    logo: googleLogo
  },
  {
    label: 'Twitter',
    logo: twitterLogo
  },
  {
    label: 'Leboncoin',
    logo: leboncoinLogo
  },
  {
    label: 'Arte',
    logo: arteLogo
  },
  {
    label: 'Canal+',
    logo: canalplusLogo
  },
  {
    label: 'CitÃ© des sciences et de l\'industrie',
    logo: citeDesSciencesLogo
  },
  {
    label: 'Haute AutoritÃ© de SantÃ©',
    logo: hasLogo
  },

  {
    label: 'Carrefour',
    logo: carrefourLogo
  }
]

const Clients = () => {
  const { lang } = useParams()
  return (
    <>
      <TitleModule>
        FormattedMessage: home-clients-title
      </TitleModule>
      <Logos>
        {
          clients.map((client, index) => (
            <Logo
              key={index}
              url={client.logo}
            />
          ))
        }
      </Logos>
      <TitleContact>
        <StyledTitle2>
          FormattedMessage: home-contact-title
        </StyledTitle2>
        <GuidelineLink to={`/${lang}/${ROUTES.GUIDELINES.SLUG_INDEX}`}>
          FormattedMessage: home-contact-guideline
        </GuidelineLink>
      </TitleContact>
      <ContactContainer>
        <ButtonContact />
      </ContactContainer>
    </>
  )
}

export default withTheme(Clients)
