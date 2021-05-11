import React from "react";
import PropTypes from 'prop-types';
import { ImageVerticalList } from "../../components/index";

/**
 * ProjectDetails Layout
 * @param {*} props 
 */

export default function ProjectDetails(props) {
  return (
    <div className="project-details">
      <div className="row">
        <div className="one-third column">
            { props.left_images && <ImageVerticalList className="left-images" images={props.left_images} /> }
        </div>
        <div className="two-thirds column">
          {props.children}
          { props.right_images && <ImageVerticalList className="right-images" images={props.right_images} />}
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
  children: <div></div>
};
