import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

// Keeps ratio before image loads.
// It keeps height of the page before load and prevents scrollTo to go to the wrong place
const ImgContainer = styled.div(({ width, height }) => css`
  position: relative;
  padding-top: calc(${height} / ${width} * 100%);
`);

const Img = styled("img")`
  position: absolute;
  left: 0;
  top: 0;
  display: block;
  width: 100%;
  border-radius: 2px;
`;

const ImageRatio = ({ width, height, src, alt }) => (
	<ImgContainer width={width} height={height}>
		<Img src={src} alt={alt} />
	</ImgContainer>
);

export default ImageRatio;
