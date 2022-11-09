/**
 * Hero Image
 * @param {*} props 
 */

import Link from "next/link";

export default function Hero(props) {
  bgImage = props.image;
  return (
    <div
      className="hero-item"
      style={{ backgroundImage: `url('${bgImage}')` }}
    >
      <h3> Here Title </h3>{" "}
      <ul>
        <li> More Here </li> <li> More There </li>{" "}
      </ul>{" "}
      <Link href="/">
        {" "}<a> More to explore > </a>
      </Link>
    </div>
  );
}
