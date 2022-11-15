import React from "react";

import { Layout, ProjectDetails, Hero } from "../../components/index";
import { getMilestoneBySlug, getAllMilestones } from '../../lib/api'
import markdownToHtml from '../../lib/markdownToHtml'

class Milestones extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.milestone = props.milestone;
    this.prevItem = '';
    this.nextItem = '';

    const visibleContent = props.milestone.content.split("%%%% %%%%");
    this.blocks = visibleContent[0].split("---");

    this.images = {
      left_images: props.milestone.left_images,
      right_images: props.milestone.right_images
    };
  }

  // static contextType = MyContext;

  render() {
    const ele = this.milestone.description.split("\n");
    const description = ele.map((text, key) => {
      return (
        <p key={`sp-${key}`}>
          {text}s
        </p>
      );
    });

    return (
      <Layout>
        <div className="project">
          <Hero classname="project-hero" img={this.milestone.hero_image} />
          <div className="project-nav">
            {(this.milestone.prevItem != this.milestone.slug) && <a href={`/projects/${this.milestone.prevItem}`}>Previous</a>}
            {(this.milestone.nextItem != this.milestone.slug) && <a href={`/projects/${this.milestone.nextItem}`}>Next</a>}
          </div>
          <div className="project-header">
            <h1>
              {this.milestone.title}
            </h1>
            <h2>
              {this.milestone.subtitle}
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