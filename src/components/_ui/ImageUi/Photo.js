import React from "react";
import { Image, Transformation } from "cloudinary-react";

/**
 * Photo
 * @param {*} props 
 */

const Photo = props => {
	const public_id = props.img;//`${props.img.replace(/\.[^/.]+$/, "")}.jpg`;
	const width = props.width;
	const additionalClass = props.additionalClass;
	const style = props.style;
	const myClass = `photo-item ${additionalClass} ${style}`;
	return (
		<div className={myClass}>
			<Image
				cloudName="dxgzx2apo"
				publicId={public_id}
				dpr="auto"
				responsive
				width="auto"
				crop="scale"
				responsiveUseBreakpoints="true"
			/>
		</div>
	);
};

export default Photo;
