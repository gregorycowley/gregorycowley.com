import matter from "gray-matter";
import React from "react";
import { SummaryPage } from "components";

import config from "common/configs/config";

class Skills extends React.Component {
	constructor(props) {
		super(props);
		const markdownBody = props.content;
		const frontmatter = props.data;
	}

	render() {
		return <SummaryPage {...this.props} />;
	}
}

export default Skills;

Skills.getInitialProps = async function (ctx) {
	const headInfo = await import("../content/skills/head-info.md");
	const contactInfo = await import("../content/skills/contact-info.md");
	const contentOne = await import("../content/skills/sp-index-1.md");
	const contentTwo = await import("../content/skills/sp-index-2.md");
	const contentThree = await import("../content/skills/sp-index-3.md");
	return {
		...config,
		headInfo,
		contactInfo,
		contentOne,
		contentTwo,
		contentThree
	};
};

