import React from "react";
import Photo from "./Photo";

/**
 * Sitemap 
 * @param {*} props 
 */

export default function Sitemap(props) {

  const siteLinkJson = props.sitemapItems.default;
  const pageData = Object.values(siteLinkJson)
  let keyCount = 0;

  return (
    <div className="sitemap container">
      <ul className="sitemapList">
        <SiteLinks {...pageData} key={keyCount++} />
      </ul>
    </div>
  );
}

const SiteLinks = (props) => {

  const pageObjs = Object.entries(props);
  if (pageObjs.length > 0) {

    return pageObjs.map(([key, value]) => {
      const slug = Object.keys(value)[0];
      const data = value[slug];

      const nextIndex = (Number(key) + 1 < pageObjs.length) ? Number(key) + 1 : pageObjs.length;
      const prevIndex = (Number(key) - 1 >= 0) ? Number(key - 1) : 0;
      let nextLink = '';
      let prevLink = '';

      // localStorage.setItem('project', JSON.stringify(posts));
      // const lastItems = JSON.parse(localStorage.getItem('project')) || []

      if (pageObjs[nextIndex] && pageObjs[nextIndex].length >= 1) {
        const tempKeys = Object.keys(pageObjs[nextIndex][1]);
        nextLink = `/projects/${pageObjs[nextIndex][1][tempKeys[0]].slug}`;
      }
      if (pageObjs[prevIndex] && pageObjs[prevIndex].length >= 1) {
        const tempKeys = Object.keys(pageObjs[prevIndex][1]);
        prevLink = `/projects/${pageObjs[prevIndex][1][tempKeys[0]].slug}`;
      }

      if (data.status === "active") {
        return <SiteLink akey={key}
          slug={slug}
          link={`/projects/${slug}`}
          title={data.title}
          subtitle={data.subtitle}
          description={data.description}
          category={data.category}
          date={data.date}
          hero_image={data.hero_image}
          next_link={nextLink}
          prev_link={prevLink}
        />
      }
    });
  }
  return <div>xxx</div>
};

const SiteLink = (props) => {
  return (
    <li key={`key-${props.akey}`} className="pageLink">
      <p className="overhead"><i>{props.category}</i>{props.date}</p>
      <h3><a href={props.link}>{props.title}</a></h3>
      <Photo img={props.hero_image} />
      <p>{props.subtitle}</p>
    </li>
  )
};


