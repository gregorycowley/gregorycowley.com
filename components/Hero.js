/**
 * Hero Image
 * @param {*} props 
 */

import Link from "next/link";

const bgImage = require(`../../public/images/1920x1080_Art_1.png?resize&sizes[]=300&sizes[]=600&sizes[]=1000`);

export default function Hero(props) {
  return (
    <div
      className="hero-item"
      style={{ backgroundImage: `url('${bgImage.src}')` }}
    >
      <h3>Here Title</h3>
      <ul>
        <li>More Here</li>
        <li>More There</li>
      </ul>
      <Link href="/"><a>More to explore ></a></Link>
    </div>
  );
}
