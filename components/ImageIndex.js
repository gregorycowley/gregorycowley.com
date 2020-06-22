/**
 * Small links to projects
 * @param {*} props 
 */

let keyCount = 0; 

const images = [
  require(`../../public/images/1920x1080_Art_1.png?resize&sizes[]=300&sizes[]=600&sizes[]=1000`),
  require(`../../public/images/1920x1080_Art_1.png?resize&sizes[]=300&sizes[]=600&sizes[]=1000`),
  require(`../../public/images/1920x1080_Art_1.png?resize&sizes[]=300&sizes[]=600&sizes[]=1000`),
  require(`../../public/images/1920x1080_Art_1.png?resize&sizes[]=300&sizes[]=600&sizes[]=1000`),
  require(`../../public/images/1920x1080_Art_1.png?resize&sizes[]=300&sizes[]=600&sizes[]=1000`)
];

const imageItems = images.map(src => {
  return (
    <li key={`key-${keyCount++}`} className="image-index-item">
      <img srcSet={src.srcSet} src={src.src} />
    </li>
  );
});

export default function ImageIndex(props) {
  return (
    <section className="section-one">
      <ul className="image-index">
        {imageItems}
      </ul>
    </section>
  );
}
