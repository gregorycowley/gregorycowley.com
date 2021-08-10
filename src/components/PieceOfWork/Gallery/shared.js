import styled from "@emotion/styled";
import { css } from "@emotion/react";

import { Paragraph2, Paragraph1, PSmall } from "components/_ui/Paragraphs";
import mq from "common/styles/breakpoints";
import { Title3 } from "components/_ui/Titles";

const Chapo = styled(Paragraph2)`
  padding-top: ${({ theme, marginBottom }) => marginBottom ? theme[marginBottom] : theme.spacingXL}px;
  margin-bottom: ${({ theme }) => theme.spacingXL}px;
  ${mq("small")} {
    padding-top: ${({ theme, marginBottom }) => marginBottom ? theme[marginBottom] : theme.spacingL}px;
    margin-bottom: ${({ theme }) => theme.spacingL}px;
  }
`;

const SectionTitle = styled(Title3)(({ theme, marginBottom }) => css`
  color: ${theme.secondaryColor};
  margin-bottom: ${marginBottom ? theme[marginBottom] : theme.spacingS}px;
  margin-top: ${theme.spacingXL}px;
  ${mq("small")} {
    margin-top: ${theme.spacingL}px;
  }
`);

const Section = styled.div`
  margin-bottom: ${({ theme, marginBottom }) => marginBottom ? theme[marginBottom] : theme.spacingM}px;
`;

const SectionImage = styled.div`
  margin-bottom: ${({ theme, marginBottom }) => marginBottom ? theme[marginBottom] : theme.spacingXS}px;
`;

const Img = styled.img(({ theme, hasBorder = false }) => css`
  width: 100%;
  border: ${hasBorder ? `1px solid ${theme.separatorColor}` : "none"};
`);

const ImgLegend = styled(PSmall)(({ theme }) => css`
  color: ${theme.secondaryColor};
  margin-top: ${theme.spacingS}px;
`);

const Quote = styled(Title3)(({ theme, marginBottom }) => css`
  margin-bottom: ${marginBottom ? theme[marginBottom] : theme.spacingM}px;
`);

const QuoteAuthor = styled(Paragraph1)(({ theme }) => css`
  color: ${theme.secondaryColor};
`);

export {
	Chapo,
	SectionTitle,
	Section,
	SectionImage,
	Img,
	ImgLegend,
	Quote,
	QuoteAuthor
};
