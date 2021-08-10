import {
	Title1 as H1,
	Title2 as H2,
	Title3 as H3,
	Title4 as H4,
} from "components/_ui/Redoute/titles";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import mq from "common/styles/breakpoints";

const TitlePage = styled(H1)`
  font-size: clamp(32px, 5vw, 88px);
  line-height: 120%;
  font-weight: 400;
  ${mq("small")} {
    line-height: 110%;
  }
`;

const Title2 = styled(H2)`
  font-size: 34px;
  font-weight: 400;
  line-height: 120%;
`;

const Title2Styled = styled(Title2)(({ theme }) => css`
  margin-bottom: ${theme.spacingM}px;
  color: ${theme.tonic};
`);

const Title3 = styled(H3)`
  font-size: 21px;
  font-weight: 400;
  line-height: 140%;
`;

const Title4 = styled(H4)`
  font-size: 15px;
  line-height: 160%;
  font-weight: 400;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  /* same size in mobile */
`;

const TitleContact = styled(Title2)(({ theme }) => css`
  grid-column: 2 / -2;
  text-align: center;
  margin-bottom: ${theme.spacingM}px;
  ${mq("small")} {
    margin-bottom: ${theme.spacingS}px;
  }
`);

export { TitlePage, TitleContact, Title2, Title2Styled, Title3, Title4 };
