import React from "react";

import { Layout, ProjectDetails, Hero, MarkdownBlocks } from "../../components/index";
import { getMilestoneBySlug, getAllPosts } from '../../lib/api'
import markdownToHtml from '../../lib/markdownToHtml'

class Milestones extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.post = props.post;
    this.prevItem = '';
    this.nextItem = '';

    const visibleContent = props.post.content.split("%%%% %%%%");
    this.blocks = visibleContent[0].split("---");

    this.images = {
      left_images: props.post.left_images,
      right_images: props.post.right_images
    };
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
      <Layout>
        <div className="project">
          <Hero classname="project-hero" img={this.post.hero_image} />
          <div className="project-nav">
            {(this.post.prevItem != this.post.slug) && <a href={`/projects/${this.post.prevItem}`}>Previous</a>}
            {(this.post.nextItem != this.post.slug) && <a href={`/projects/${this.post.nextItem}`}>Next</a>}
          </div>
          <div className="project-header">
            <h1>
              {this.post.title}
            </h1>
            <h2>
              {this.post.subtitle}
            </h2>
            {description}
          </div>

          <ProjectDetails {...this.images}>
            {/* <MarkdownBlocks blocks={this.blocks} /> */}
          </ProjectDetails>
        </div>
      </Layout>
    );
  }
}

export default Milestones;

export async function getStaticProps({ params }) {

  const milestones = getAllMilestones(['slug'])
  const values = milestones.map((item, key) => {
    return item.slug;
  });

  const currentIndex = values.indexOf(params.slug);
  const prevItem = values[Math.max(0, currentIndex - 1)];
  const nextItem = values[Math.min(values.length - 1, currentIndex + 1)];

  const milestone = getMilestoneBySlug(params.slug, [
    'title',
    'subtitle',
    'description',
    'date',
    'slug',
    'author',
    'content',
    'firm',
    'client',
    'status',
    'hero_image',
    'left_images',
    'right_images',
  ])
  const content = await markdownToHtml(milestone.content || '')

  return {
    props: {
      milestone: {
        ...milestone,
        content,
        prevItem,
        nextItem,
      },
    },
  }
}

export async function getStaticPaths() {
  const milestones = getAllMilestones(['slug'])

  return {
    paths: milestones.map((milestone) => {
      return {
        params: {
          slug: milestone.slug,
        },
      }
    }),
    fallback: false,
  }
}