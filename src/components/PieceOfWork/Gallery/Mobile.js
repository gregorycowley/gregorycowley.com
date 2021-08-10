import React from "react";
import styled from "@emotion/styled";
import mq from "common/styles/breakpoints";

const ContainerMobile = styled.div`
  display: none;
  ${mq("small")} {
    display: block;
  }
`;
const Img = styled.img`
  width: 100%;
  margin-bottom: 2px;
`;

const GalleryMobile = ({ pics }) => {
	return (
		<ContainerMobile>
			{
				pics.map((pic, i) => {
					return <Img alt='' key={i} src={pic.src} />;
				})
			}
		</ContainerMobile>
	);
};

export default GalleryMobile;
