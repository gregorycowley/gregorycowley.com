import React from "react";
import Vimeo from "@u-wave/react-vimeo";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

// common
import mq from "common/styles/breakpoints";

// components
import Loader from "components/_ui/Loader";
import { grid, maxWidth } from "components/_layout/Layout";

const OuterContainer = styled.div(
	({ theme, background, marginBottom, hasBorder = false }) => css`
		background-color: ${background};
		padding-bottom: ${marginBottom ? theme[marginBottom] : 0}px;
		border: ${hasBorder ? `1px solid ${theme.separatorColor}` : "none"};
		${mq("small")} {
			padding-bottom: 0;
		}
	`
);

const Container = styled.div`
	${maxWidth}
	${grid}
`;

const VimeoContainer = styled.div`
	position: absolute;
	width: 100%;
	top: 0;
`;

const VideoContainer = styled.div(
	({ theme, isReady, isDarkTheme }) => css`
		position: relative;
		grid-column: 1 / -1;
		background-color: ${isReady
		? "transparent"
		: isDarkTheme
			? theme.whiteLight
			: theme.blackOpacity};
	`
);

const GIFVideo = ({
	uri,
	background,
	vertical,
	marginBottom,
	isDarkTheme,
	hasBorder,
	formatPercent,
}) => {
	return (
		<OuterContainer
			background={background}
			marginBottom={marginBottom}
			hasBorder={hasBorder}
		>
			<Container>
				<VideoContainer isDarkTheme={isDarkTheme}>
					{navigator.userAgent !== "ReactSnap" && (
						<>
							<Loader
								vertical={vertical}
								isDarkTheme={isDarkTheme}
								formatPercent={formatPercent}
							/>
							<VimeoContainer>
								<Vimeo autoplay loop background muted responsive video={uri} />
							</VimeoContainer>
						</>
					)}
				</VideoContainer>
			</Container>
		</OuterContainer>
	);
};

export default GIFVideo;
