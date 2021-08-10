import styled from "@emotion/styled";
import { css } from "@emotion/react";
import hexToRgba from "hex-to-rgba";

import mq from "common/styles/breakpoints";
import Link from "components/_ui/Links";

const ButtonLabel = styled(Link)(
	({ theme, large }) => css`
    padding: ${
	large
		? `${theme.spacingS}px`
		: `12px ${theme.spacingS}px`
};
    font-weight: 500;
    font-size: 11px;
    align-items: center;
    line-height: 120%;
    text-align: center;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: ${theme.white};
    background: ${hexToRgba(theme.tonic, 1)};
    border-radius: 2px;
    text-decoration: none;
    transition: background 150ms cubic-bezier(0.86, 0, 0.07, 1);
    display: inline-block;
    :hover {
      background: ${hexToRgba(theme.tonic, 0.6)};
      text-decoration: none;
    }

    ${mq("small")} {
      display: block;
      padding: ${theme.spacingS}px;
    }
  `
);

export default ButtonLabel;
