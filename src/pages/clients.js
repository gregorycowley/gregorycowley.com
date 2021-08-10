import matter from "gray-matter";
import React from "react";
import ReactMarkdown from "react-markdown";

import { LayoutAlt, TextContent } from "components";

import config from "common/configs/config";


const ClientBlocks = (props) => {
	let blockArray = [];
	let count = 0;
	Object.keys(props.data.clients).forEach( key => {
		blockArray.push(
			<ul key={`client-block-${count++}`} className="client-block">
				<ClientBlock name={key} data={props.data.clients[key]} />
			</ul>
		);
	});
	return blockArray;
};

const ClientBlock = (props) => {
	if ( ! props.data ) return <div></div>;
	return (
		<li className="client">
			{props.name}
			<ul>
				<ClientBlockItems data={props.data} />
			</ul>
		</li>
	);
};

const ClientBlockItems = (props) => {
	console.log(props.data);
	let count = 0;
	return props.data.clients.map((item) => (
		<li key={`client-block-item-${count++}`}>{item.toString()}</li>
	));
};

class Clients extends React.Component {
	constructor(props) {
		super(props);
		this.markdownBody = props.content;
		this.frontmatter = props.frontmatter;
	}

	render() {
		return (
			<LayoutAlt {...this.props}>
				<TextContent className="clients">
					<ReactMarkdown source={this.markdownBody} />
					<div className="block-structure">
						<ClientBlocks data={this.frontmatter} />
					</div>
				</TextContent>
			</LayoutAlt>
		);
	}
}

export default Clients;

Clients.getInitialProps = async function() {
	const content = await import("../content/sidebars/clients.md");
	const data = matter(content.default);
	// console.log(matter(data));
	return {
		...config,
		frontmatter: data.data,
		content: data.content
	};
};




