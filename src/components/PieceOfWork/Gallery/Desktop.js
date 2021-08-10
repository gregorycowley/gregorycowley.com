import React, { useState } from "react";
import styled from "@emotion/styled";
import { isNumber } from "lodash";
// import { Controlled as ControlledZoom } from 'react-medium-image-zoom'
import { useHotkeys } from "react-hotkeys-hook";

import mq from "common/styles/breakpoints";
import theme from "common/styles/theme";

const ContainerDesktop = styled.div`
  display: flex;
  ${mq("small")} {
    display: none;
  }
`;

const Img = styled.div`
  width: 100%;
  height: 100%;
  background-size: ${({ iZoomed }) => iZoomed ? "contain" : "cover"};
  background-image: url(${({ src }) => src});
  background-repeat: no-repeat;
  background-position: 50%;
  margin-right: 2px;
`;

const GalleryDesktop = ({ pics, isDarkTheme }) => {
	const [active, setActive] = useState({
		index: null,
		withAnim: true
	});

	useHotkeys("right", () => {
		if (isNumber(active.index)) {
			setActive({
				index: Math.min(active.index + 1, pics.length - 1),
				withAnim: false
			});
		}
	}, [active]);

	useHotkeys("left", () => {
		if (isNumber(active.index)) {
			setActive({
				index: Math.max(active.index - 1, 0),
				withAnim: false
			});
		}
	}, [active]);

	return (
		<ContainerDesktop>
			{
				pics.map((pic, i) => {
					const size = Math.min(window.innerHeight, window.innerWidth);
					const margin = ((size - pic.maxSize) / 2) || window.innerHeight * 0.1;
					const iZoomed = active.index === i;
					let count = 0;
					return (
						// <div></div>
						// <ControlledZoom
						//   key={i}
						//   zoomMargin={margin}
						//   overlayBgColorEnd={theme.black}
						//   wrapStyle={{
						//     width: iZoomed ? '100%' : `${100 / pics.length}%`,
						//     height: 450
						//   }}
						//   transitionDuration={active.withAnim ? 300 : 0}
						//   isZoomed={iZoomed}
						//   onZoomChange={(isZoomed) => {
						//     if (isZoomed) {
						//       setActive({
						//         index: i,
						//         withAnim: true
						//       })
						//       return
						//     }
						//     setActive({
						//       index: null,
						//       withAnim: true
						//     })
						//   }}
						// >
						<Img
							key={`desktop-image-${count++}`}
							src={pic.src}
							iZoomed={iZoomed}
						/>
						// </ControlledZoom>
					);
				})
			}
		</ContainerDesktop>
	);
};

export default GalleryDesktop;
