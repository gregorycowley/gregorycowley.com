import React from "react";
import { Layout,TextContent } from "../components";
import ReactMarkdown from "react-markdown";

class Resume extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <Layout {...this.props}>
      <TextContent>
          <ReactMarkdown source={this.props.role.default} />
          <ReactMarkdown source={this.props.skills.default} />
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
  const skills = await import(`../content/resume/1_skills.md`);
  const experience = await import(`../content/resume/2_experience.md`);
  const education = await import(`../content/resume/3_education.md`);

  const metadata = '';//matter(content.default);
  return {
      ...metadata,
      siteConfig,
      role,
      skills,
      experience,
      education
  };
};

