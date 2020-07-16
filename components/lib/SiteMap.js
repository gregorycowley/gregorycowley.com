import React from "react";

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
            return <SiteLink akey={key} slug={slug} {...value}/>
        });
    }   
    return <div>xxx</div>

};

const SiteLink = (props) => {
    // {
    //     voicebox: {
    //       title: 'Voicebase',
    //       subtitle: 'A subtitle',
    //       author: 'Gregory Cowley',
    //       date: '2020-04-28T00:00:00.000Z',
    //       hero_image: '/images/1920x1080.jpg',
    //       category: 'design',
    //       slug: 'v  oicebase',
    //       description: ...
    //       detail_images: [ [Object], [Object], [Object] ],
    //       path: '../content/projects/voicebox.md'
    //     }
    //   }
    // console.log("SiteLink", props);
    return(
        <li key={`key-${props.akey}`} className="pageLink">
          <a href={`/projects/${props.slug}`}>{(props && props[props.slug]) && props[props.slug].title}</a>
          <p>{(props && props[props.slug]) && props[props.slug].title}</p>
          <p>{(props && props[props.slug]) && props[props.slug].subtitle}</p>
          <p>{(props && props[props.slug]) && props[props.slug].description}</p>
          <p>{(props && props[props.slug]) && props[props.slug].category}</p>
          <p>{(props && props[props.slug]) && props[props.slug].date}</p>
        </li>
    )
};


