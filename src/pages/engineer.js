import React from "react";
import matter from "gray-matter";
import { DisciplinePage } from "components";

import config from "common/configs/config";

class Engineer extends React.Component {
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

export default Engineer;

Engineer.getInitialProps = async function() {
	let projects = [];

	projects.push(await import("../content/projects/voicebase.md"));
	projects.push(await import("../content/projects/rocketlawyer.md"));
	projects.push(await import("../content/projects/4by6.md"));
	projects.push(await import("../content/projects/blurbbookify.md"));
	projects.push(await import("../content/projects/hondansx.md"));
	projects.push(await import("../content/projects/nikeskateboarding.md"));
	projects.push(await import("../content/projects/cms.md"));
	projects.push(await import("../content/projects/disneyvmk.md"));
	projects.push(await import("../content/projects/ouya.md"));

	const content = await import("../content/disciplines/engineer.md");
	const data = matter(content.default);

	return {
		...config,
		projects,
		data
	};
};
