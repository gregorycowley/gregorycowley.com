import styled from "@emotion/styled";
import { css } from "@emotion/react";
import mq from "common/styles/breakpoints";

const BlockContainer = styled.div(({ theme }) => css`
  display: grid;
  grid-template-columns: repeat(13, 1fr);
  grid-column-gap: 2px;
  padding-bottom: ${theme.spacingXL}px;
`);

const About = styled.div(({ theme }) => css`
  margin-bottom: ${theme.spacingL}px;
  padding-top: ${theme.spacingXS}px;
  grid-column: 2 / -2;
`);

const List1 = styled.div(({ theme }) => css`
  padding-bottom: ${theme.spacingM}px;
  grid-column: 2 / 7;
  ${mq("small")} {
    grid-column: 2 / -2;
  }
`);

const List2 = styled.div(({ theme }) => css`
padding-bottom: ${theme.spacingM}px;
  grid-column: 8 / -2;
  ${mq("small")} {
    grid-column: 2 / -2;
  }
`);

export {
	BlockContainer,
	About,
	List1,
	List2
};
