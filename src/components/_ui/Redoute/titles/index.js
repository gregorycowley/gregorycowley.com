import React from "react";

import _extends from "@babel/runtime/helpers/esm/extends";
import styled from "@emotion/styled";

var TitleStyled = styled(function (_ref) {
	var level = _ref.level,
		children = _ref.children,
		className = _ref.className;
	var HTag = level ? "h".concat(level) : "div";
	return React.createElement(
		HTag,
		{
			className: className,
		},
		children
	);
})(function (_ref2) {
	var theme = _ref2.theme,
		level = _ref2.level;
	var title = theme.titles["title".concat(level)];
	return {
		margin: 0,
		padding: 0,
		// fontSize: title.fontSize,
		// lineHeight: title.lineHeight,
	};
});

function TitleFactory() {
	var level =
    arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
	return function (props) {
		return React.createElement(
			TitleStyled,
			_extends(
				{
					level: level,
				},
				props
			)
		);
	};
}

var Title1 = TitleFactory(1);
var Title2 = TitleFactory(2);
var Title3 = TitleFactory(3);
var Title4 = TitleFactory(4);
var Title5 = TitleFactory(5);
var Title6 = TitleFactory(6);

export { Title1, Title2, Title3, Title4, Title5, Title6 };
