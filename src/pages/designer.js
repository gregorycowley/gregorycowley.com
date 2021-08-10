import React from "react";
import matter from "gray-matter";
import { DisciplinePage } from "components";

import config from "common/configs/config";

class Designer extends React.Component {
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

export default Designer;

Designer.getInitialProps = async function() {
	let projects = [];

	projects.push(await import("../content/projects/zephyros.md"));
	projects.push(await import("../content/projects/spcontrols.md"));
	projects.push(await import("../content/projects/quicktime.md"));
	projects.push(await import("../content/projects/macromedia.md"));
	projects.push(await import("../content/projects/doceri.md"));
	projects.push(await import("../content/projects/branding.md"));
	projects.push(await import("../content/projects/transcinema.md"));
	projects.push(await import("../content/projects/drtingleton.md"));
	projects.push(await import("../content/projects/3mps.md"));

	const content = await import("../content/disciplines/designer.md");
	const data = matter(content.default);

	return {
		...config,
		projects,
		data
	};
};
