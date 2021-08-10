/**
 * PortfolioItem Layout
 * @param {*} props 
 */

import React from "react";

export default function PortfolioItem(props) {
	return (
		<div className="portfolio-item">
			{/* <img src={oneSize} /> */}
			<img srcSet={props.props.srcSet} src={props.props.src} />
		</div>
	);
}
