import React from "react";
import { useTheme, ThemeProvider, withTheme } from "@emotion/react";

const Loader = ({ theme, isDarkTheme }) => {
	const color = isDarkTheme ? theme.white : theme.black;

	return (
		<svg width='40' height='45' viewBox='0 0 135 140' fill={color}>
			<rect y='10' width='10' height='120' rx='1'>
				<animate
					attributeName='height'
					begin='0.5s' dur='1s'
					values='120;110;100;90;80;70;60;50;40;140;120' calcMode='linear'
					repeatCount='indefinite'
				/>
				<animate
					attributeName='y'
					begin='0.5s' dur='1s'
					values='10;15;20;25;30;35;40;45;50;0;10' calcMode='linear'
					repeatCount='indefinite'
				/>
			</rect>
			<rect x='30' y='10' width='10' height='120' rx='1'>
				<animate
					attributeName='height'
					begin='0.25s' dur='1s'
					values='120;110;100;90;80;70;60;50;40;140;120' calcMode='linear'
					repeatCount='indefinite'
				/>
				<animate
					attributeName='y'
					begin='0.25s' dur='1s'
					values='10;15;20;25;30;35;40;45;50;0;10' calcMode='linear'
					repeatCount='indefinite'
				/>
			</rect>
			<rect x='60' width='10' height='140' rx='1'>
				<animate
					attributeName='height'
					begin='0s' dur='1s'
					values='120;110;100;90;80;70;60;50;40;140;120' calcMode='linear'
					repeatCount='indefinite'
				/>
				<animate
					attributeName='y'
					begin='0s' dur='1s'
					values='10;15;20;25;30;35;40;45;50;0;10' calcMode='linear'
					repeatCount='indefinite'
				/>
			</rect>
			<rect x='90' y='10' width='10' height='120' rx='1'>
				<animate
					attributeName='height'
					begin='0.25s' dur='1s'
					values='120;110;100;90;80;70;60;50;40;140;120' calcMode='linear'
					repeatCount='indefinite'
				/>
				<animate
					attributeName='y'
					begin='0.25s' dur='1s'
					values='10;15;20;25;30;35;40;45;50;0;10' calcMode='linear'
					repeatCount='indefinite'
				/>
			</rect>
			<rect x='120' y='10' width='10' height='120' rx='1'>
				<animate
					attributeName='height'
					begin='0.5s' dur='1s'
					values='120;110;100;90;80;70;60;50;40;140;120' calcMode='linear'
					repeatCount='indefinite'
				/>
				<animate
					attributeName='y'
					begin='0.5s' dur='1s'
					values='10;15;20;25;30;35;40;45;50;0;10' calcMode='linear'
					repeatCount='indefinite'
				/>
			</rect>
		</svg>

	);
};

export default withTheme(Loader);
