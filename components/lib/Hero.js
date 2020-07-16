import React from 'react';
import Link from "next/link";

/**
 * Hero Image
 * @param {*} props 
 */

//style={{ backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundImage: `url('${props.image}')` }}

export default (props) => {
  let imageName = props.image.split(".");
  const extention = imageName.pop();
  imageName = imageName.join(".");

  return (
    <div className="hero-item">
      <picture>
        <source srcset={`${imageName}@0.25x.${extention}`} media="(max-width: 450px)" />
        <source srcset={`${imageName}@0.5x.${extention}`} media="(max-width: 768px)" />
        <source srcset={`${imageName}@0.75x.${extention}`} media="(max-width: 1200px)" />
        <img src={`${imageName}ori.${extention}`} alt="Flowers" />
      </picture>

      <div className="content">
        <h3>Here Title</h3>
        <ul>
          <li>More Here</li>
          <li>More There</li>
        </ul>
        <Link href="/"><a>More to explore ></a></Link>
      </div>
    </div>
  );
}

