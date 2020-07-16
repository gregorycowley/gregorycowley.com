import matter from "gray-matter";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";

/**
 * Text and Image Card
 * @param {*} props 
 */

export default props => {
  const data = matter(props.default);
  return (
    <div className={`card-item ${props.style}`}>
      <Link href={`${props.link}`}>
        <img className="card-image-content" src={data.data.hero_image} alt="" />
      </Link>
      <div className="card-text-content">
        <h3>
          <Link href={`${props.link}`}>
              <a>{data.data.title}</a>
          </Link>
        </h3>
        <h4 className="card-sub-title">
          {data.data.subtitle}
        </h4>
        <p>
          {data.data.description}
        </p>
      </div>
    </div>
  );
};
