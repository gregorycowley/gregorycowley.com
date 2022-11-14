/**
 * Photo Gallery
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
    <li key={`key-${keyCount++}`}className="image-gallery-item">
      <img srcSet={src.srcSet} src={src.src} />
    </li>
  );
});

export default function ImageGallery(props) {
  return (
    <div className="image-gallery section-one">
      <ul className="gallery">
        {imageItems}
      </ul>
    </div>
  );
}
