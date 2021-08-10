import React, { useRef } from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { useDimensions } from "react-recipes";
import hexToRgba from "hex-to-rgba";

// common
import mq from "common/styles/breakpoints";

// hooks
import useIsSmall from "common/hooks/useIsSmall";

// components
import { grid } from "components/_layout/Layout";
import { Paragraph1, PSmall } from "components/_ui/Paragraphs";
import { Title3 } from "components/_ui/Titles";
import { LinkMore } from "components/_ui/Links";

import PicsContainer from "./PicsContainer";

const MasterContainer = styled("div")(
	({ theme }) => css`
		width: 100%;
		grid-column: 1 / -1;
		padding-top: ${theme.spacingM}px;
		${mq("small")} {
			padding-top: ${theme.spacingL}px;
		}
	`
);

const Container = styled.div`
	${grid}
`;

const getSeparatorColor = (color, isDarkTheme) => {
	return hexToRgba(color, isDarkTheme ? 0.2 : 1);
};

const DescriptionContainer = styled.div(
	({ theme, isDarkTheme }) => css`
		background-color: ${isDarkTheme ? theme.black : theme.white};
		height: calc(100% + 1px);
		grid-column: 2 / 9;
		padding-right: ${theme.spacingL}px;
		position: relative;
		z-index: 1;
		&:after {
			content: "";
			background-color: ${isDarkTheme ? theme.black : theme.white};
			position: absolute;
			z-index: 1;
			top: 0;
			left: -50vw;
			right: 100%;
			bottom: 0;
		}
		${mq("small")} {
			height: 100%;
			grid-column: 2 / -2;
			margin-bottom: ${theme.spacingS}px;
			padding-right: 0;
		}
	`
);

const Description = styled.div(
	({ theme, isDarkTheme }) => css`
		border-top: 1px solid ${getSeparatorColor(theme.separatorColor, isDarkTheme)};
		padding-top: ${theme.spacingXS}px;
	`
);

const Tags = styled(PSmall)(
	({ theme }) => css`
		color: ${theme.secondaryColor};
		margin-bottom: ${theme.spacingXS}px;
		${mq("small")} {
			font-size: 13px;
			line-height: 130%;
		}
	`
);

const rightGrid = `
  grid-column: 9 / -1;
  ${mq("small")} {
    grid-column: 2 / -2;
  }
`;

const PicsInner = styled.div`
	position: absolute;
	display: flex;
`;

const MesureContainer = styled.div`
	${rightGrid}
`;

const imageRatio = 1.8;
const margin = 2;

const Pic = styled.div(
	({ pic, size }) => css`
		background-image: url(${pic});
		background-size: cover;
		background-position: center center;
		min-width: ${size}px;
		min-height: ${size / imageRatio}px;
		width: ${size}px;
		height: ${size / imageRatio}px;
		margin-right: ${margin}px;
		-webkit-user-drag: none;
		user-select: none;
	`
);
// const Placeholder = styled(Pic)(({ width }) => css`
//   width: ${width};
// `)

const getImageSize = ({ isMobile, contrainerSize, bigImage }) => {
	const windowWidth = contrainerSize || 0;
	// In mobile we want the pic to take all the screen width
	if (isMobile) {
		return windowWidth;
	}
	return bigImage ? windowWidth / 1.1 : windowWidth / 1.8;
};

const Carousel = ({
	client,
	label,
	description,
	pics,
	big,
	link,
	isDarkTheme,
}) => {
	const [picsRef, dimensionsPics] = useDimensions();

	const isMobile = useIsSmall();
	const picWitdh = getImageSize({
		isMobile,
		contrainerSize: dimensionsPics.width,
		bigImage: big,
	});
	const isLinkDisplay = !!link;
	const maxScroll = useRef();
	const nbBlocks = pics.length;
	maxScroll.current = picWitdh
		? (picWitdh + margin) * nbBlocks - dimensionsPics.width
		: 0;

	const TitleComponent = big ? Title3 : Paragraph1;
	return (
		<MasterContainer>
			<Container>
				<DescriptionContainer isDarkTheme={isDarkTheme}>
					<Description isDarkTheme={isDarkTheme}>
						<Tags>
							{client} â— {label}
						</Tags>
						<div>
							<TitleComponent>{description}</TitleComponent>
						</div>
						{isLinkDisplay && (
							<LinkMore to={link}>FormattedMessage: carousel-link</LinkMore>
						)}
					</Description>
				</DescriptionContainer>
				<PicsContainer
					size={picWitdh}
					itemsLength={pics.length}
					onWheel={(e) => {
						e.preventDefault();
					}}
				>
					<PicsInner>
						{picWitdh > 0 &&
							pics.map((pic, i) => {
								return (
									<Pic key={i} pic={pic} size={picWitdh} draggable="false" />
								);
							})}
						{/* <Placeholder
              key='placeholder'
              size={picWitdh}
              width='100vw'
              draggable='false'
            /> */}
					</PicsInner>
				</PicsContainer>
				{/** This component is only use to compute the size of the right column */}
				<MesureContainer ref={picsRef} />
			</Container>
		</MasterContainer>
	);
};

Carousel.propTypes = {
	/** Name of the client */
	client: PropTypes.string.isRequired,
	/** label of project */
	label: PropTypes.string.isRequired,
	/** Short description of the project */
	description: PropTypes.string.isRequired,
	/** Array of pic to display */
	pics: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
	/** If true, the pic take nearly all width */
	big: PropTypes.bool,
	/** Link to the project */
	link: PropTypes.string,
};

export default Carousel;
