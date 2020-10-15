import React from "react";
import TextContent from "./TextContent";
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
    if ( pageObjs.length > 0 ){ 
        return pageObjs.map( ([key, value]) => {
            const slug = Object.keys(value)[0];
            const data = value[slug];
            if (data.status === "active"){
                return <SiteLink akey = {key} 
                                slug = {slug} 
                                link = {`/projects/${slug}`}
                                title = {data.title}
                                subtitle = {data.subtitle}
                                description = {data.description}
                                category = {data.category}
                                date = {data.date}
                                hero_image = {data.hero_image} 
                                />
            }
        });
    }   
    return <div>xxx</div>
};

const SiteLink = (props) => {
    return(
        <li key={`key-${props.akey}`} className="pageLink">
          <p className="overhead"><i>{props.category}</i>{props.date}</p>
          <h3><a href={props.link}>{props.title}</a></h3>
          <Photo img={props.hero_image} />
          <p>{props.subtitle}</p>
        </li>
    )
};


