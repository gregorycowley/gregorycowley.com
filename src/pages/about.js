import matter from 'gray-matter'
import React from "react";
import ReactMarkdown from "react-markdown";
import { Layout, TextContent, Photo } from "../components";

class About extends React.Component {
	constructor(props) {
		super(props);
		this.markdownBody = props.content;
		this.frontmatter = props.frontmatter;
	}

	render() {
		return (
			<Layout {...this.props}>
				<TextContent className="about-page">
					<Photo img={this.frontmatter.hero_image} style="about-photo" />
					<h1>{this.frontmatter.title}</h1>
					<h2>{this.frontmatter.subtitle}</h2>
					<p>{this.frontmatter.description}</p>
					<p><i>{this.frontmatter.author}</i></p>
					<ReactMarkdown source={this.markdownBody} />
				</TextContent>
			</Layout>
		)
	}
}

export default About;

About.getInitialProps = async function () {
	const config = await import(`../data/config.json`)
	const content = await import(`../content/about.md`);
	const data = matter(content.default);
	return {
		...config,
		frontmatter: data.data,
		content: data.content
	}
}