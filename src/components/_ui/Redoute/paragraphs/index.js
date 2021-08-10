import _extends from "@babel/runtime/helpers/esm/extends";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import React from "react";
import styled from "@emotion/styled";
import { isEmpty } from "lodash";

function ownKeys(object, enumerableOnly) {
	var keys = Object.keys(object);
	if (Object.getOwnPropertySymbols) {
		var symbols = Object.getOwnPropertySymbols(object);
		if (enumerableOnly)
			symbols = symbols.filter(function (sym) {
				return Object.getOwnPropertyDescriptor(object, sym).enumerable;
			});
		keys.push.apply(keys, symbols);
	}
	return keys;
}

function _objectSpread(target) {
	for (var i = 1; i < arguments.length; i++) {
		var source = arguments[i] != null ? arguments[i] : {};
		if (i % 2) {
			ownKeys(source, true).forEach(function (key) {
				_defineProperty(target, key, source[key]);
			});
		} else if (Object.getOwnPropertyDescriptors) {
			Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
		} else {
			ownKeys(source).forEach(function (key) {
				Object.defineProperty(
					target,
					key,
					Object.getOwnPropertyDescriptor(source, key)
				);
			});
		}
	}
	return target;
}
var ParagraphStyled = styled("p")(function (_ref) {
	var theme = _ref.theme,
		level = _ref.level;
	var paragraph =
    !isEmpty(theme) && theme.paragraphs["paragraph".concat(level)];
	return _objectSpread(
		{
			margin: 0,
			padding: 0,
		},
		paragraph
	);
});

function ParagraphFactory() {
	var level =
    arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
	return function (props) {
		return React.createElement(
			ParagraphStyled,
			_extends(
				{
					level: level,
				},
				props
			)
		);
	};
}

var Paragraph1 = ParagraphFactory(1);
var Paragraph2 = ParagraphFactory(2);
var Paragraph3 = ParagraphFactory(3);
var Paragraph4 = ParagraphFactory(4);

export { Paragraph1, Paragraph2, Paragraph3, Paragraph4 };
