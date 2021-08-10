import React from "react";

const Logo = props => {
	const color1 = props.isDarkTheme ? "#000" : "#fff";
	const color2 = props.isDarkTheme ? "#fff" : "#000";
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			shapeRendering="geometricPrecision"
			textRendering="geometricPrecision"
			width="103.5"
			height="114"
			viewBox="0 0 103.5 114"
		>
			<g>
				<path
					fill={color1}
					d="M56.9,54.1c-2.3,0-4.1,1.8-4.1,4.1c0,2.3,1.8,4.1,4.1,4.1c2.3,0,4.1-1.8,4.1-4.1C61,55.9,59.2,54.1,56.9,54.1z
		"
				/>
				<circle fill={color1} cx="47.5" cy="45.5" r="7.1" />
				<path
					fill={color2}
					d="M52.2,5.9l-43.3,25v50l43.3,25l17.6-10.1V66.3c-4.4,4.6-10.5,7.5-17.4,7.5c-13.3,0-24-10.7-24-24
		s10.7-24,24-24c11.7,0,21.4,8.3,23.6,19.4h-6.5c-2-7.5-8.9-13-17-13c-9.7,0-17.6,7.9-17.6,17.6s7.9,17.6,17.6,17.6
		c7.6,0,14.1-4.9,16.6-11.7h0.7h5.9h0.7V92l19.1-11V31L52.2,5.9z M47.5,52.6c-3.9,0-7.1-3.2-7.1-7.1s3.2-7.1,7.1-7.1
		s7.1,3.2,7.1,7.1S51.4,52.6,47.5,52.6z M56.9,62.3c-2.3,0-4.1-1.8-4.1-4.1c0-2.3,1.8-4.1,4.1-4.1c2.3,0,4.1,1.8,4.1,4.1
		C61,60.5,59.2,62.3,56.9,62.3z"
				/>
			</g>
		</svg>
	);
};

export default Logo;
