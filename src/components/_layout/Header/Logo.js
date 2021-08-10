import React from "react";
import styled from "@emotion/styled";
import Link from "components/_ui/Links";
import LogoGlyph from "assets/icons/Logo";

const Container = styled.div`
  grid-column-start: 2;
  grid-column-end: 6;
  pointer-events: all; /* to restore click */
`;

const Logo = ({ isDarkTheme }) => {

	return (
		<Container>
			<Link to={"/"} isDarkTheme={isDarkTheme}>
				<LogoGlyph isDarkTheme={isDarkTheme} />
			</Link>
		</Container>
	);
};

export default Logo;
