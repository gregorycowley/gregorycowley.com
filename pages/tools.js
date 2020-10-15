import matter from 'gray-matter'
import React from "react";
import ReactMarkdown from "react-markdown";
import {Layout, TextContent} from "../components";

const ToolBlocks = (props) => {
  let blockArray = [];
  Object.keys(props.data).forEach( key => {
    blockArray.push(
      <ul className="tool-block">
        <ToolBlock name={key} data={props.data[key]} />
      </ul>
    )
  });
  return blockArray;
}

const ToolBlock = (props) => {
  return (
      <li className="tool">
        {props.name}
        <ul>
          <ToolBlockItems data={props.data} />
        </ul>
      </li>
  );
}

const ToolBlockItems = (props) => {
  console.log(props.data);
  return props.data.map( item => <li>{item.toString()}</li>);
}

class Tools extends React.Component {
  constructor(props) {
    super(props);
    this.markdownBody = props.content;
    this.frontmatter = props.frontmatter;
  }

  render() {
    return (
      <Layout {...this.props}>
        <TextContent>
          <ReactMarkdown source={this.markdownBody} />
          <div className="block-structure">
            <ToolBlocks data={this.frontmatter.tools} />
          </div>
        </TextContent>
      </Layout>
    )
  }
}

export default Tools;

Tools.getInitialProps = async function() {
  const config = await import(`../data/config.json`)
  const content = await import(`../content/sidebars/tools.md`);
  const data = matter(content.default);
  return {
    ...config,
    frontmatter: data.data,
    content: data.content
  }
}




