// colors
const black = "#050505";
const blackOpacity = "rgba(0, 0, 0, 0.05)";
const blackHalfOpacity = "rgba(0, 0, 0, 0.5)";
const white = "#ffffff";
const whiteLight = "rgba(255, 255, 255, 0.05)";
const mainColor = "#3D3D3D";
const secondaryColor = "#878787";
const separatorColor = "#DDDDDD";
const separatorLightColor = "rgba(221, 221, 221, 0.2)";
const lightGrey = "#F5F5F5";
const blue = "#4d90fe";
const green = "#103537";
const tonic = "#2FA36B";
const fontBodyColor = "#555";
const fontTitleColor = "#cc2b08";

// Opacity
const opacity = 0.5;

export default {
	// colors
	black,
	green,
	tonic,
	blackOpacity,
	blackHalfOpacity,
	white,
	whiteLight,
	lightGrey,
	mainColor,
	secondaryColor,
	separatorColor,
	separatorLightColor,
	fontBodyColor,
	fontTitleColor,
	bgHome: "linear-gradient(180deg, #000826 0%, #00172C 100%)",

	// Opacity
	opacity,

	fontTitle: "'Roboto', sans-serif",
	fontMono: "'Roboto Mono', monospace",
	fontBody: "'Open Sans', sans-serif",

	/* font-family: "Roboto", monospace; */
	/* font-family: "Open Sans", sans-serif; */
	/* font-family: "Roboto", sans-serif; */
	/* font-family: "Roboto Condensed", sans-serif; */
	/* font-family: "Roboto Mono", monospace; */

	// vertical spacings
	spacingXS: 10,
	spacingS: 20,
	spacingM: 40,
	spacingL: 80,
	spacingXL: 140,

	// elements
	body: {
		background: "#eee",
		foreground: "#333",
	},
	focus: {
		outlineColor: blue,
		outlineStyle: "auto",
		outlineWidth: "5px",
	},
	titles: {},
	paragraphs: {},
	labels: {},
	links: {
		color: mainColor,
	},
	buttonLabel: {
		color: mainColor,
		background: white,
		colorDarkTheme: white,
		backgroundDarkTheme: mainColor,
		hover: {
			color: mainColor,
			background: secondaryColor,
		},
		active: {
			color: mainColor,
			background: secondaryColor,
		},
	},
	scrollbar: {
		thumb: secondaryColor,
		track: mainColor,
	},
};
