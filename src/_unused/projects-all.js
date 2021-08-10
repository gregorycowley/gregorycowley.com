import React, { useEffect } from "react";
import { LayoutAlt } from "components"; 
import { SiteMap } from "components";

import config from "common/configs/config";
import allContent from "common/configs/allContent";

class ProjectsAll extends React.Component {
	constructor(props) {
		super(props);
		this.props = props;
		this.storageKey = "project";
	}


	render() {
		return (
			<LayoutAlt
				siteTitle={this.props.title}
				siteDescription={this.props.description}
			>
				<SiteMap className="sitemap container" sitemapItems={this.props.sitemap} />
			</LayoutAlt>
		);
	}
}

export default ProjectsAll;

ProjectsAll.getInitialProps = function() {
	return {
		...config,
		allContent,
	};
};
