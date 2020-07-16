import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";

import { Layout, ProjectDetails } from "../../components/index";
import CodeBlock from "../../components/code-block";

const ContainerRow = styled.div`
  width: 800px;
  margin: 0 auto;
`;

const ProjectOne = props => {
  const frontmatter = props.data;
  const blocks = props.content.split("---");

  const imageRender = uri => {
    return uri.replace(/\.\.\/public/, "");
  };

  const ImageWrapper = props => {
    return <img className="wrapped-image" src={props.src} alt={props.alt} />;
  };

  const MarkdownBlock = props => {
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

  return (
    <Layout>
        <div className="">
          <div className="hero-container">
            <div className="project-header">
              <h1>{frontmatter.title}</h1>
              <h2>{frontmatter.subtitle}</h2>
              <p>{frontmatter.description}</p>
            </div>
          </div>
          <div className="hero-container">
            <ProjectDetails {...frontmatter}>
              <div>
                {blocks.map((value, index) => {
                  return <MarkdownBlock key={index} id={index} source={value} />;
                })}
              </div>
            </ProjectDetails>
          </div>
        </div>
    </Layout>
  );
};

export default ProjectOne;

ProjectOne.getInitialProps = async function(ctx) {
  const { slug, projectCategory } = ctx.query;
  const siteConfig = await import(`../../data/config.json`);
  const content = await import(`../../content/projects${projectCategory}/${slug}.md`);
  const metadata = matter(content.default);
  return {
    fileRelativePath: `content/${slug}.md`,
    ...metadata,
    ...siteConfig
  };
};


// pathname: '/projects/[slug]',
// query: { slug: 'cks-appledesignportfolio' },
// asPath: '/projects/cks-appledesignportfolio',

// {
//   req: IncomingMessage {
//     url: '/projects/cks-appledesignportfolio'
//   }
// }
