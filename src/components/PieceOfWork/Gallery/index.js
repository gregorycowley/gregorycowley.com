import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

import GalleryMobile from "./Mobile";
import GalleryDesktop from "./Desktop";
import mq from "common/styles/breakpoints";

const Container = styled.div(({ theme }) => css`
  grid-column: 2 / -2;
  margin-top: ${theme.spacingXL}px;
  margin-bottom: ${theme.spacingXL}px;
  ${mq("small")}{
    margin-top: ${theme.spacingL}px;
    margin-bottom: ${theme.spacingL}px;
  }
`);

const Gallery = ({ pics, isDarkTheme }) => {
	return (
		<Container>
			<GalleryDesktop pics={pics} isDarkTheme={isDarkTheme} />
			<GalleryMobile pics={pics} />
		</Container>
	);
};

// Example for the pics props
// const pics = [
//   {
//     src: pic,
//     maxSize: 500
//   }
// ]

Gallery.propTypes = {
	/** Show a dark overlay when opening a pic */
	isDarkTheme: PropTypes.bool,
	/** Array of pics to show */
	pics: PropTypes.arrayOf(PropTypes.shape({
		// Source of the image
		src: PropTypes.string.isRequired,
		// Max size of the image (if the image to too small to be printed in full screen)
		maxSize: PropTypes.number
	})).isRequired
};

export default Gallery;
