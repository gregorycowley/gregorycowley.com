import React from "react";
import matter from "gray-matter";
import { DisciplinePage } from "components";

import config from "common/configs/config";

class Educator extends React.Component {
	constructor(props) {
		super(props);
		this.props = props;
	}

	render() {
		return (
			<DisciplinePage 
				title={this.props.data.data.title}
				subtitle={this.props.data.data.subtitle}
				description={this.props.data.data.description}
				projects={this.props.projects} />   
		);
	}
}

export default Educator;

Educator.getInitialProps = async function() {
	let projects = [];

	projects.push(await import("../content/projects/cca.md"));

	const content = await import("../content/disciplines/educator.md");
	const data = matter(content.default);

	return {
		...config,
		projects,
		data
	};
};
