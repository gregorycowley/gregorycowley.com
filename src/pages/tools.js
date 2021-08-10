import matter from "gray-matter";
import React from "react";
import ReactMarkdown from "react-markdown";

import { LayoutAlt } from "components";
import { TextContent} from "components";

import config from "common/configs/config";

const ToolBlocks = (props) => {
	let blockArray = [];
	Object.keys(props.data).forEach( key => {
		blockArray.push(
			<ul className="tool-block">
				<ToolBlock name={key} data={props.data[key]} />
			</ul>
		);
	});
	return blockArray;
};

const ToolBlock = (props) => {
	return (
		<li className="tool">
			{props.name}
			<ul>
				<ToolBlockItems data={props.data} />
			</ul>
		</li>
	);
};

const ToolBlockItems = (props) => {
	console.log(props.data);
	let count = 0;
	return props.data.map((item) => (
		<li key={`tool-item-${count++}`}>{item.toString()}</li>
	));
};

class Tools extends React.Component {
	constructor(props) {
		super(props);
		this.markdownBody = props.content;
		this.frontmatter = props.frontmatter;
	}

	render() {
		return (
			<LayoutAlt {...this.props}>
				<TextContent className="tools">
					<ReactMarkdown source={this.markdownBody} />
					<div className="block-structure">
						<ToolBlocks data={this.frontmatter.tools} />
					</div>
				</TextContent>
          
			</LayoutAlt>
		);
	}
}

export default Tools;

Tools.getInitialProps = async function() {
	const content = await import("../content/sidebars/tools.md");
	const data = matter(content.default);
	return {
		...config,
		frontmatter: data.data,
		content: data.content
	};
};




