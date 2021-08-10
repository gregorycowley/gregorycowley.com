import React from "react";
import matter from "gray-matter";
import { DisciplinePage } from "components";

import config from "common/configs/config";

class Artist extends React.Component {
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

export default Artist;

Artist.getInitialProps = async function() {
	let projects = [];

	projects.push(await import("../content/projects/transcinema.md"));
	projects.push(await import("../content/projects/cca.md"));
	projects.push(await import("../content/projects/chronopolis.md"));
	projects.push(await import("../content/projects/cncmachine.md"));
	projects.push(await import("../content/projects/drtingleton.md"));
	projects.push(await import("../content/projects/mpps.md"));
	projects.push(await import("../content/projects/rxgallery.md"));
	projects.push(await import("../content/projects/thetestproject.md"));
	projects.push(await import("../content/projects/3mps.md"));

	const content = await import("../content/disciplines/artist.md");
	const data = matter(content.default);

  

	return {
		...config,
		projects,
		data
	};
};
