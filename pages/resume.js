import React from "react";
import matter from "gray-matter";
import { Layout,TextContent } from "../components";
import ReactMarkdown from "react-markdown";

const Skills = (props) => {
  return (
    <li>
      <Skill data={props.data.data} />
    </li>
  )  
}

const Skill = (props) => {
  // if ( ! props.data.Tools ) return (<div></div>);
  console.log(props)
  let tools = [];
  Object.keys(props.data.Tools).forEach(
    (item) => {
      tools.push( <ul><li>{item}</li><ul><SkillItems content={props.data.Tools[item]} /></ul></ul>)
    }
  );
  return tools;
}

const SkillItems = (props) => {
  // console.log(props)
  return props.content.map( item => {
  return  <li>{item}</li>;
  })
}


class Resume extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <Layout {...this.props}>
      <TextContent>
          <ReactMarkdown source={this.props.role.default} />
          <ul>
            <Skills data={this.props.skills} />
          </ul>
          <ReactMarkdown source={this.props.skills.content} />
          <ReactMarkdown source={this.props.experience.default} />
          <ReactMarkdown source={this.props.education.default} />
        </TextContent>
    </Layout>;
  }
}

export default Resume;

Resume.getInitialProps = async function () {
  const siteConfig = await import(`../data/config.json`);
  const role = await import(`../content/resume/0_role.md`);
  const skillsContent = await import(`../content/resume/1_skills.md`);
  const experience = await import(`../content/resume/2_experience.md`);
  const education = await import(`../content/resume/3_education.md`);

  const skills = matter(skillsContent.default);
  return {
      siteConfig,
      role,
      skills,
      experience,
      education
  };
};

