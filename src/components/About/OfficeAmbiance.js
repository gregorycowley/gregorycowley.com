import React from "react";
import styled from "@emotion/styled";


// photos
import galleryImg1 from "./assets/gallery_img1.jpg";
import galleryImg2 from "./assets/gallery_img2.jpg";
import galleryImg3 from "./assets/gallery_img3.jpg";
import galleryImg4 from "./assets/gallery_img4.jpg";
import galleryImg5 from "./assets/gallery_img5.jpg";
import galleryImg6 from "./assets/gallery_img6.jpg";
import galleryImg7 from "./assets/gallery_img7.jpg";
import galleryImg8 from "./assets/gallery_img8.jpg";
import galleryImg9 from "./assets/gallery_img9.jpg";
import galleryImg10 from "./assets/gallery_img10.jpg";
import galleryImg11 from "./assets/gallery_img11.jpg";
import galleryImg12 from "./assets/gallery_img12.jpg";
import galleryImg13 from "./assets/gallery_img13.jpg";
import galleryImg14 from "./assets/gallery_img14.jpg";

// components
import mq from "common/styles/breakpoints";
import ImageRatio from "components/ImageRatio";
import { css } from "@emotion/react";

const Container = styled.div(({ theme }) => css`
  grid-column: 2 / -2;
  display: grid;
  grid-template-columns: repeat(18, 1fr);
  grid-template-rows: auto auto auto auto;
  grid-column-gap: 2px;
  grid-row-gap: 2px;
  padding-bottom: ${theme.spacingXL}px;
  ${mq("small")} {
    display: block;
  }
`);

const Cell = styled.div`
  ${mq("small")} {
    margin-bottom: 2px;
  }
`;
const CellText = styled(Cell)(({ theme }) => css`
  display: flex;
  align-items: center;
  ${mq("small")} {
    padding-top: ${theme.spacingM}px;
    padding-bottom: ${theme.spacingM}px;
  }
`);

const Cell1 = styled(CellText)`
  grid-column: 2 / 6;
`;
const Cell2 = styled(Cell)`
  grid-column: 7 / 10;
`;
const Cell3 = styled(Cell)`
  grid-column: 10 / 13;
`;
const Cell4 = styled(Cell)`
  grid-column: 13 / 16;
`;
const Cell5 = styled(Cell)`
  grid-column: 16 / 19;
`;
const Cell6 = styled(Cell)`
  grid-column: 1 / 4;
`;
const Cell7 = styled(Cell)`
  grid-column: 4 / 10;
`;
const Cell9 = styled(CellText)`
  grid-column: 14 / 19;
`;
const Cell10 = styled(Cell)`
  grid-column: 1 / 7;
`;
const Cell11 = styled(Cell)`
  grid-column: 7 / 13;
`;
const Cell12 = styled(Cell)`
  grid-column: 13 / 19;
`;

const Portraits = () => {
	return (
		<Container>
			{/* line 1 */}
			<Cell1>
        FormattedMessage: about-legend-gallery1
			</Cell1>
			<Cell2>
				<ImageRatio width={338} height={400} src={galleryImg1} />
			</Cell2>
			<Cell3>
				<ImageRatio width={338} height={400} src={galleryImg2} />
			</Cell3>
			<Cell4>
				<ImageRatio width={338} height={400} src={galleryImg3} />
			</Cell4>
			<Cell5>
				<ImageRatio width={338} height={400} src={galleryImg4} />
			</Cell5>

			{/* line 2 */}
			<Cell6>
				<ImageRatio width={338} height={400} src={galleryImg5} />
			</Cell6>
			<Cell7>
				<ImageRatio width={680} height={400} src={galleryImg6} />
			</Cell7>
			<Cell3>
				<ImageRatio width={338} height={400} src={galleryImg7} />
			</Cell3>
			<Cell9>
        FormattedMessage: about-legend-gallery2
			</Cell9>

			{/* line 3 */}
			<Cell10>
				<ImageRatio width={680} height={400} src={galleryImg8} />
			</Cell10>
			<Cell2>
				<ImageRatio width={338} height={400} src={galleryImg9} />
			</Cell2>
			<Cell3>
				<ImageRatio width={338} height={400} src={galleryImg10} />
			</Cell3>
			<Cell4>
				<ImageRatio width={338} height={400} src={galleryImg11} />
			</Cell4>
			<Cell5>
				<ImageRatio width={338} height={400} src={galleryImg12} />
			</Cell5>

			{/* line 4 */}
			<Cell1>
        FormattedMessage: about-legend-gallery3
			</Cell1>
			<Cell11>
				<ImageRatio width={680} height={400} src={galleryImg13} />
			</Cell11>
			<Cell12>
				<ImageRatio width={680} height={400} src={galleryImg14} />
			</Cell12>
		</Container>
	);
};

export default Portraits;
