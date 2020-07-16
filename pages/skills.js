import matter from 'gray-matter'
import React from "react";
import SummaryPage from "../components/custom/SummaryPage";

class Skills extends React.Component {
  constructor(props) {
    super(props);
    const markdownBody = props.content
    const frontmatter = props.data
  }

  render() {
    return <SummaryPage {...this.props} />;
  }
}

export default Skills;

Skills.getInitialProps = async function (ctx) {
    console.log(ctx);
    const siteConfig = await import(`../data/config.json`);
    const headInfo = await import(`../content/skills/head-info.md`);
    const contactInfo = await import(`../content/skills/contact-info.md`);
    const contentOne = await import(`../content/skills/sp-index-1.md`);
    const contentTwo = await import(`../content/skills/sp-index-2.md`);
    const contentThree = await import(`../content/skills/sp-index-3.md`);
    const metadata = '';//matter(content.default);
    return {
        ...metadata,
        siteConfig,
        headInfo,
        contactInfo,
        contentOne,
        contentTwo,
        contentThree
    };
};

