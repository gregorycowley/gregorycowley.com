import React from "react";

import { LayoutAlt } from "components";
import { ProjectDetails, Hero } from "components";
import { getPostBySlug, getAllPosts } from "lib/api";
import markdownToHtml from "lib/markdownToHtml";
import Project from "components/Project";

class ProjectOne extends React.Component {
	constructor(props) {
		super(props);

		// console.log(props.content)
		this.props = props;
		this.post = props.post;
		this.prevItem = "";
		this.nextItem = "";

		this.state = {
			children: null,
		};

		if (props.post.content != undefined) {
			const visibleContent = props.post.content.split("%%%% %%%%");
			this.blocks = visibleContent[0].split("---");
		}

		this.images = {
			left_images: props.post.left_images,
			right_images: props.post.right_images,
		};

	}

	componentDidMount() {
		const self = this;
		// console.log("Component mounted");
		const content = markdownToHtml(this.props.post.content || "").then(
			(data) => {
				// console.log("Component mounted");
				self.setState({ children: data });
			}
		);
	}

	// static contextType = MyContext;

	render() {
		const ele = this.post.description.split("\n");
		const description = ele.map((text, key) => {
			return (
				<p key={`sp-${key}`}>
					{text}
				</p>
			);
		});

		return (
			<Project {...this.props} post={this.post} images={this.images}>
				{this.state.children}
			</Project>
		);
	}
}

export default ProjectOne;

export async function getStaticProps({ params }) {

	const posts = getAllPosts(["slug"]);

	const values = posts.map((item, key) => {
		return (item ? item.slug : "");
	});

	const currentIndex = values.indexOf(params.slug);
	const prevItem = values[Math.max(0, currentIndex - 1)];
	const nextItem = values[Math.min(values.length - 1, currentIndex + 1)];

	const post = getPostBySlug(params.slug, [
		"title",
		"subtitle",
		"description",
		"date",
		"slug",
		"author",
		"content",
		"firm",
		"client",
		"status",
		"hero_image",
		"left_images",
		"right_images",
	]);



	// console.log(post);

	return {
		props: {
			post: {
				...post,
				prevItem,
				nextItem,
			},
		},
	};
}

export async function getStaticPaths() {
	const posts = getAllPosts(["slug"]);
	// console.log(posts);
	return {
		paths: posts.map((post) => {
			return {
				params: {
					slug: (post ? post.slug : ""),
				},
			};
		}),
		fallback: false,
	};
}

/*

<Chapo>
<GIFVideo hasBorder uri='429912531' />
<GIFVideo hasBorder uri='429919299' />
<GIFVideo uri='429910647' formatPercent={37.5} />
<GIFVideo uri='429911565' />
<GIFVideo uri='429912816' />
<GIFVideo uri='429913403' />
<GIFVideo uri='429913437' />
<GIFVideo uri='429915452' />
<GIFVideo uri='429915476' />
<GIFVideo uri='429915490' />
<GIFVideo uri='429915513' />
<GIFVideo uri='429919325' formatPercent={89.44} />
<Img hasBorder src={imgBody1} />
<Img hasBorder src={imgBody2} />
<Img hasBorder src={imgBody3} />
<Img hasBorder src={imgBody4} />
<Img hasBorder src={imgBody5} />
<Img src={imgBody1} />
<Img src={imgBody2} />
<Img src={imgBody3} />
<Img src={imgBody4} />
<Img src={imgBody5} />
<ImgLegend>
<Link target='_blank' href='https://explorabl.es/all/'>
<Link target='_blank' href='https://github.com/romi/3d-plantviewer'>
<LongVideo uri='428060882' />
<LongVideo uri='428062158' />
<LongVideo uri='428062710' />
<LongVideo uri='428062900' />
<LongVideo uri='428063580' />
<LongVideo uri='428064443' />
<LongVideo uri='428084394' />
<LongVideo uri='428084690' />
<LongVideo uri='428085646' />
<LongVideo uri='428090155' />
<LongVideo uri='428091019' />
<LongVideo uri='429914498' />
<Paragraph1>
<Section marginBottom='spacingL'>
<Section marginBottom='spacingXL'>
<Section>
<SectionImage marginBottom='spacingM'>
<SectionImage marginBottom='spacingXL'>
<SectionImage>
<SectionTitle>

*/