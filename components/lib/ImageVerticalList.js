/**
 * Small links to projects
 * @param {*} props 
 */

import { Image } from "cloudinary-react";

export default function ImageVerticalList(props) {

  let keyCount = 0; 
  const images = props.images;
  console.log(props);
  const imageItems = images.map(image => {
    if (image.src != null){
      return (
        <li key={`key-${keyCount++}`} className="image-item">
          <Image
            cloudName="dxgzx2apo"
            publicId={`${image.src.replace(/\.[^/.]+$/, "")}.jpg`}
            dpr="auto"
            responsive
            width="auto"
            crop="scale"
            responsiveUseBreakpoints="true"
          />
        </li>
      );
    } else {
      return <div />;
    }
  
  });

  return (
    <section className="section-one">
      <ul className="image-vertical-list">
        {imageItems}
      </ul>
    </section>
  );
}
