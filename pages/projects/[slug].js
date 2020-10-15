import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import { Layout, ProjectDetails, Hero } from "../../components/index";
import CodeBlock from "../../components/code-block";

const ProjectOne = props => {
  const frontmatter = props.data;
  const visibleCOntent = props.content.split("%%%% %%%%");
  const blocks = visibleCOntent[0].split("---");

  const imageRender = uri => {
    return uri.replace(/\.\.\/public/, "");
  };

  const ImageWrapper = props => {
    return <img className="wrapped-image" src={props.src} alt={props.alt} />;
  };

  const MarkdownBlocks = props => {
    return props.blocks.map((value, index) => {
      return <MarkdownBlock key={index} id={index} source={value} />;
    })
  };

  const projectData = {
    left_images: frontmatter.left_images,
    right_images: frontmatter.right_images,
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

  const ele = frontmatter.description.split("\n");
  const description = ele.map( text => {
      return <p>{text}</p>;
    });

  return (
    <Layout>
      <div className="project">

        <Hero classname="project-hero" img={frontmatter.hero_image} />

        <div className="project-header">
          <h1>{frontmatter.title}</h1>
          <h2>{frontmatter.subtitle}</h2>
          {description}
        </div>

        <ProjectDetails {...projectData}>
          <MarkdownBlocks blocks={blocks} />
        </ProjectDetails>
      </div>
    </Layout>
  );
};

export default ProjectOne;

ProjectOne.getInitialProps = async function(ctx) {
  console.log("CTX Query :: ", ctx.query)
  const { slug, projectCategory } = ctx.query;
  const siteConfig = await import(`../../data/config.json`);

  const category  = ( projectCategory === "none" || projectCategory === undefined ) ? '' : projectCategory;

  const content = await import(`../../content/projects${category}/${slug}.md`);
  const metadata = matter(content.default);

  return {
    fileRelativePath: `content/${slug}.md`,
    ...metadata,
    ...siteConfig
  };
};


// Also load Projects.JSON to get list of images to show. Some m
// may be referenced in the MD itself.

// Generate image sizes.
// pathname: '/projects/[slug]',
// query: { slug: 'cks-appledesignportfolio' },
// asPath: '/projects/cks-appledesignportfolio',
// {
//   req: IncomingMessage {
//     url: '/projects/cks-appledesignportfolio'
//   }
// }
