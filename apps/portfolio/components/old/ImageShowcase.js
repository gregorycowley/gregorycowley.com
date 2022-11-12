/**
 * Small links to projects
 * @param {*} props 
 */

let keyCount = 0;

const images = [
  require(`../../public/images/1920x1080_Art_1.png?resize&sizes[]=300&sizes[]=600&sizes[]=1000`),
  require(`../../public/images/800x1000_Portrait_1.png?resize&sizes[]=300&sizes[]=600&sizes[]=1000`)
];

export default function ImageShowcase(props) {
  return (
    <section className="image-showcase section-one">
      <div className="row image-showcase-item">
        <img srcSet={images[0].srcSet} src={images[0].src} />
      </div>
      <div className="row image-showcase-item">
        <img srcSet={images[1].srcSet} src={images[1].src} />
        <img srcSet={images[1].srcSet} src={images[1].src} />
      </div>
      <div className="row image-showcase-item">
        <img srcSet={images[0].srcSet} src={images[0].src} />
      </div>
    </section>
  );
}
