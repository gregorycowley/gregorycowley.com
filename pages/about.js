import matter from 'gray-matter'
import React from "react";
import ReactMarkdown from "react-markdown";
import {Layout, TextContent} from "../components";

class About extends React.Component {
  constructor(props) {
    super(props);
    const markdownBody = props.content
    const frontmatter = props.data
    console.log(props);
  }

  render() {
    return (
      <Layout {...this.props}>
        <TextContent>
          <ReactMarkdown source={this.props.about.default} />
        </TextContent>
      </Layout>
    )
  }
}

export default About;

About.getInitialProps = async function() {
  const content = await import(`../data/config.json`)
  const about = await import(`../content/about.md`);
  return {
    about
  }
}




