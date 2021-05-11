import matter from 'gray-matter'
import React from "react";
import ReactMarkdown from "react-markdown";
import {Layout, TextContent} from "../components";


const ClientBlocks = (props) => {
  let blockArray = [];
  Object.keys(props.data.clients).forEach( key => {
    blockArray.push(
      <ul className="client-block">
        <ClientBlock name={key} data={props.data.clients[key]} />
      </ul>
    )
  });
  return blockArray;
}

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
}

const ClientBlockItems = (props) => {
  console.log(props.data);
  return props.data.clients.map( item => <li>{item.toString()}</li>);
}

class Clients extends React.Component {
  constructor(props) {
    super(props);
    this.markdownBody = props.content
    this.frontmatter = props.frontmatter
  }

  render() {
    return (
      <Layout {...this.props}>
        <TextContent className="clients">
          <ReactMarkdown source={this.markdownBody} />
          <div className="block-structure">
            <ClientBlocks data={this.frontmatter} />
          </div>
        </TextContent>
      </Layout>
    )
  }
}

export default Clients;

Clients.getInitialProps = async function() {
  const config = await import(`../data/config.json`)
  const content = await import(`../content/sidebars/clients.md`);
  const data = matter(content.default);
  // console.log(matter(data));
  return {
    ...config,
    frontmatter: data.data,
    content: data.content
  }
}




