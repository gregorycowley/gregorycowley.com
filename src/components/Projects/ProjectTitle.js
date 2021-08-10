import React from "react";

/**
 * ProjectTitle Layout
 * @param {*} props 
 */

export default function ProjectTitle(props) {
	return (
		<div className="project-title">
			<h1>
				{props.title}
			</h1>
			<h2>
				{props.subtitle}
			</h2>
			<p>
				{props.description}
			</p>
		</div>
	);
}
