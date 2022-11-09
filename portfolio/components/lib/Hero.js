import React from 'react';
import { Image } from 'cloudinary-react';

/**
 * Hero Image
 * @param {*} props 
 */


const Hero = (props) => {
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
export default Hero;

