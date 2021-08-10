import React from "react";
import LinkRedoute from "components/_ui/Redoute/link";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { omit, pick } from "lodash";
import { withTheme } from "@emotion/react";

import mq from "common/styles/breakpoints";

import ArrowRight from "assets/icons/ArrowRight";

const Link = styled((props) =>
	props.href ? (
		<a {...pick(props, ["href", "target", "className"])}>{props.children}</a>
	) : (
		<LinkRedoute
			{...omit(props, [
				"isDarkTheme",
				"large",
				"isActive",
				"isHovered",
				"isDisabled",
			])}
		/>
	)
)(
	({ theme }) => css`
    cursor: pointer;
    color: ${theme.tonic};
    font-size: 16px;
    text-decoration: none;
    &.active {
      opacity: 0.5;
    }
    :hover {
      text-decoration: underline;
    }
    :focus {
      outline-color: ${theme.focus.outlineColor};
      outline-style: ${theme.focus.outlineStyle};
      outline-width: ${theme.focus.outlineWidth};
    }
  `
);

// Will correctly align an icon on the right
const LinkWithIconContainer = styled(Link)(({ theme }) => css`
  display: inline-flex;
  align-items: center;
  margin-bottom: ${theme.spacingXS}px;
`);

// specific for header and footer
const LinkNav = styled(
	props => (
		props.href
			? <a {...omit(props, ["isDarkTheme", "nav", "children"])}>{props.children}</a>
			: <Link {...props} />)
)(({ theme, isDarkTheme }) => css`
  display: inline-flex;
  align-items: center; /* when icons */
  color: ${isDarkTheme ? theme.white : theme.mainColor};
  text-decoration: none;
  :hover {
    text-decoration: none;
    color: ${theme.tonic};
    svg {
      fill: ${theme.tonic};
    }
  }
`);

const ArrowRightStyled = styled(ArrowRight)`
  margin-left: 14px;
  flex-shrink: 0;
`;

const LinkMoreContainer = styled.span(({ theme }) => css`
  display: inline-block;
  padding-top: ${theme.spacingS}px;
  text-align: left;
  ${mq("small")} {
    text-align: center;
  }
`);

const LinkMore = withTheme(props => (
	<LinkMoreContainer className={props.className}>
		<LinkWithIconContainer {...omit(props, ["noArrow"])}>
			{props.children}
			{!props.noArrow && <ArrowRightStyled color={props.theme.tonic} />}
		</LinkWithIconContainer>
	</LinkMoreContainer>
));

export default Link;
export { LinkMore, ArrowRightStyled, LinkNav };
