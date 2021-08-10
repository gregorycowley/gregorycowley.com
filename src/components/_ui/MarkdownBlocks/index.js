import React from "react";
import ReactMarkdown from "react-markdown";
import { CodeBlock } from "components";

/**
 * Markdown Blocks
 * @param {*} props
 */

const imageRender = (uri) => {
	return uri.replace(/\.\.\/public/, "");
};

const ImageWrapper = (props) => {
	return <img className="wrapped-image" src={props.src} alt={props.alt} />;
};

const MarkdownBlocks = (props) => {
	return props.blocks.map((value, index) => {
		return <MarkdownBlock key={index} id={index} source={value} />;
	});
};

const MarkdownBlock = (props) => {
	return (
		<div>
			<ReactMarkdown
				className={`content-block-${props.id}`}
				source={props.source}
				includeNodeIndex={true}
				transformImageUri={imageRender}
				renderers={({ code: CodeBlock }, { image: ImageWrapper })}
			/>
		</div>
	);
};

export default MarkdownBlocks;
