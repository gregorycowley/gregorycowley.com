import React from "react";
import matter from "gray-matter";
import { TextContent, LayoutAlt } from "components";
import ReactMarkdown from "react-markdown";

import config from "common/configs/config";

const Skills = (props) => {
	return (
		<li>
			<Skill data={props.data.data} />
		</li>
	);  
};

const Skill = (props) => {
	// if ( ! props.data.Tools ) return (<div></div>);
	console.log(props);
	let tools = [];
	let count = 0;
	Object.keys(props.data.Tools).forEach(
		(item) => {
			tools.push(
				<ul key={`skill-${count++}`}>
					<li>{item}</li>
					<ul>
						<SkillItems content={props.data.Tools[item]} />
					</ul>
				</ul>
			);
		}
	);
	return tools;
};

const SkillItems = (props) => {
	// console.log(props)
	let count = 0;
	return props.content.map( item => {
		return <li key={`skill-item-${count++}`}>{item}</li>;
	});
};


class Resume extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return <LayoutAlt {...this.props}>
			<TextContent className="resume-page">
				<div className="resume-masthead">
					<ReactMarkdown source={this.props.role.default} />
				</div>
				<ul className={"resume-skills"}>
					<Skills data={this.props.skills} />
				</ul>
				<div className="resume-skills-more">
					<ReactMarkdown source={this.props.skills.content} />
				</div>
				<div className="resume-experience">
					<ReactMarkdown source={this.props.experience.default} />
				</div>
				<div className="resume-education">
					<ReactMarkdown source={this.props.education.default} />
				</div>
			</TextContent>
		</LayoutAlt>;
	}
}

export default Resume;

Resume.getInitialProps = async function () {
	const role = await import("../content/resume/0_role.md");
	const skillsContent = await import("../content/resume/1_skills.md");
	const experience = await import("../content/resume/2_experience.md");
	const education = await import("../content/resume/3_education.md");

	const skills = matter(skillsContent.default);
	return {
		...config,
		role,
		skills,
		experience,
		education
	};
};

