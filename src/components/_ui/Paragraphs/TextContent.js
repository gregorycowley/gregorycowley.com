/**
 * Text Content
 * @param {*} props 
 */

import React from "react";

export default function TextContent(props) {
	return (
		<div className={`text-column ${props.className}`}>
			{props.children}
		</div>
	);
}
