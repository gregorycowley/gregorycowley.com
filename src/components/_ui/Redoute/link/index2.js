import React, { useMemo } from "react";
import styled from "@emotion/styled";
import { isEmpty, omit } from "lodash";
// import { Link, NavLink } from "react-router-dom";

import PropTypes from "prop-types";

const LinkRedoute = (props) => {
	const LinkComponent = props.disabled
		? "span"
		: !isEmpty(props.to)
			? props.nav
				? "a"
				: "span"
			: !isEmpty(props.href)
				? "a"
				: "span";

	const LinkStyled = useMemo(
		() =>
			styled(LinkComponent)(
				({ theme, disabled, hover, visited, active, focus }) => {
					const themeLink = (!isEmpty(theme) && theme.link) || {};
					return {
						...themeLink,
						...((disabled && themeLink[":disabled"]) || {}),
						...((hover && themeLink[":hover"]) || {}),
						...((visited && themeLink[":visited"]) || {}),
						...((active && themeLink[":active"]) || {}),
						...((focus && themeLink[":focus"]) || {}),
					};
				}
			),
		[LinkComponent]
	);

	const filteredProps = props.disabled
		? omit(props, ["nav", "onClick", "href", "to"])
		: omit(props, ["nav"]);
	return <LinkStyled {...filteredProps} />;
};

LinkRedoute.propTypes = {
	/** Internal url. When used, the component returned is a Link from react-router-dom */
	to: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
	/** If the link is a Internal url, the nav props will load a NavLink instead of a Link */
	nav: PropTypes.bool,
	/** External url. When used, the component returned is a <a href> */
	href: PropTypes.string,
	/** To disable actions (href, to or onClick) on the link. Changes the visual state. */
	disabled: PropTypes.bool,
	/** Force hover state */
	hover: PropTypes.bool,
	/** Force visited state */
	visited: PropTypes.bool,
	/** Force active state */
	active: PropTypes.bool,
	/** Force focus state */
	focus: PropTypes.bool,
};

export default LinkRedoute;
