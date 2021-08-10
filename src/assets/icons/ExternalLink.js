import React from "react";
import { useTheme, ThemeProvider, withTheme } from "@emotion/react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

const Svg = styled("svg")(({ size }) => css`
  margin-left: ${size > 12 ? 15 : 5}px;
`);

const ExternalLink = ({ isDarkTheme, theme, size }) => {
	return (
		<Svg
			width={size || 12}
			height={size || 12}
			fill={isDarkTheme ? theme.white : theme.mainColor}
			viewBox='0 0 12 12'
			size={size}
		>
			<path
				d='M10.667 10.667H1.333V1.333H4V0H1.333C.593 0 0 .6 0 1.333v9.334C0 11.4.593 12 1.333 12h9.334C11.4 12 12 11.4 12 10.667V8h-1.333v2.667zM7.333 0v1.333h2.394L3.173 7.887l.94.94 6.554-6.554v2.394H12V0H7.333z'
			/>
		</Svg>
	);
};

export default withTheme(ExternalLink);
