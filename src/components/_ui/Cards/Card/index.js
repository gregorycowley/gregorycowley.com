import React from "react";
import Link from "next/link";
import { Image, Transformation } from "cloudinary-react";

/**
 * Text and Image Card
 * @param {*} props
 */

const Card = (props) => {
  
	const style = props.style ? props.style : "";
	const hero_image = props.hero_image;
	const link = props.link;
	const title = props.title;
	const subtitle = props.subtitle;
	const description = props.description;

	return (
		<div className={`card-item ${style}`}>
			<Link href={`${link}`}>
				<div className="card-image-content">
					<Image
						cloudName="dxgzx2apo"
						publicId={`${hero_image.replace(/\.[^/.]+$/, "")}.jpg`}
						dpr="auto"
						responsive
						width="auto"
						crop="scale"
						responsiveUseBreakpoints="true"
					>
						<Transformation aspectRatio="16:9" crop="fill" />
					</Image>
				</div>
			</Link>
			<div className="card-text-content">
				<h3>
					<Link href={`${link}`}>
						<a>{title}</a>
					</Link>
				</h3>
				<h4 className="card-sub-title">{subtitle}</h4>
				<p>{description}</p>
			</div>
		</div>
	);
};

export default Card;
