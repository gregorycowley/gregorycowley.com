import React from "react";
import PropTypes from 'prop-types';

import Card from "./Card";
import Hero from "./Hero";

/**
 * ProjectDetails Layout
 * @param {*} props 
 */

export default function ProjectDetails(props) {

  const { detail_images } = props;
  let keyCount = 0;

  const imageItems = detail_images.map(image => {
    return (
      <li key={`key-${keyCount++}`} className="thumbnail">
        <img src={image.src} />
      </li>
    );
  });

  return (
    <div className="project-details">
      <div className="row">
        <div className="one-third column">
          <ul className="thumbnails">
            {imageItems}
          </ul>
        </div>
        <div className="two-thirds column">
          {props.children}
        </div>
      </div>
    </div>
  );
}

ProjectDetails.propTypes = {
  detail_images: PropTypes.array,
  children: PropTypes.element.isRequired
};

// Specifies the default values for props:
ProjectDetails.defaultProps = {
  detail_images: [],
  children: <div>Empty</div>
};
