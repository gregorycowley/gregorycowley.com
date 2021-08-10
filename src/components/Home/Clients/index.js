import React from "react";
import styled from "@emotion/styled";
import { withTheme } from "@emotion/react";
import { css } from "@emotion/react";

import { Title2 } from "components/_ui/Titles";
import ContactContainer from "components/Contact/ContactContainer";
import ButtonContact from "components/_ui/Buttons/ButtonContact";
import Link from "components/_ui/Links";

import ROUTES from "common/routes";
import mq from "common/styles/breakpoints";
import { TitleModule } from "components/Home/shared";

import clients from "common/data/clients";



const TitleContact = styled.div`
  grid-column: 2 / -2;
  text-align: center;
  ${mq("small")} {
    grid-column: 2 / -2
  }
`;

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

  ${mq("small")} {
    grid-template-columns: repeat(4, 1fr);
    grid-column: 1 / -1;
    margin-bottom: ${theme.spacingM}px;
  }
`);

const Logo = styled.div(
	({ url }) => css`
    height: 100%;
    width: 100%;
    background: url(${url}) no-repeat;
    background-size: contain;
  `
);

const StyledTitle2 = styled(Title2)(
	({ theme }) => css`
    margin-bottom: ${theme.spacingXS}px;
    ${mq("small")} {
      padding-top: ${theme.spacingXS}px;
    }
  `
);

const GuidelineLink = styled(Link)(
	({ theme }) => css`
    font-size: 13px;
    line-height: 130%;
    font-weight: 400;
    text-align: center;
    margin-bottom: ${theme.spacingXS}px;
    ${mq("small")} {
      font-size: 16px;
      line-height: 150%;
    }   
`);



const Clients = () => {
  
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
				<GuidelineLink to={`/${ROUTES.GUIDELINES.SLUG_INDEX}`}>
          FormattedMessage: home-contact-guideline
				</GuidelineLink>
			</TitleContact>
			<ContactContainer>
				<ButtonContact />
			</ContactContainer>
		</>
	);
};

export default withTheme(Clients);
