import React from 'react';
import Link from "next/link";
import { Image, Transformation } from 'cloudinary-react';

/**
 * Hero Image
 * @param {*} props 
 */

//style={{ backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundImage: `url('${props.image}')` }}

/* <picture>
  <source srcset={`${imageName}@0.25x.${extention}`} media="(max-width: 450px)" />
  <source srcset={`${imageName}@0.5x.${extention}`} media="(max-width: 768px)" />
  <source srcset={`${imageName}@0.75x.${extention}`} media="(max-width: 1200px)" />
  <img src={`${imageName}ori.${extention}`} alt="Flowers" />
</picture> */

export default (props) => {
  // let imageName = props.image.split(".");
  // const extention = imageName.pop();
  // imageName = imageName.join(".");
  // console.log(props)
//   <div className="content">
//   <h3>Here Title</h3>
//   <ul>
//     <li>More Here</li>
//     <li>More There</li>
//   </ul>
//   <Link href="/"><a>More to explore ></a></Link>
// </div>


  return (
    <div className="hero-item">
      <Image cloudName="dxgzx2apo" 
              publicId={`${props.img.replace(/\.[^/.]+$/, "")}.jpg`} 
              dpr="auto"
              responsive
              width="auto"
              crop="scale"
              responsiveUseBreakpoints="true">
      </Image>
    </div>
  );
}

