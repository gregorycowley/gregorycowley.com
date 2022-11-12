/**
 * Text and Image Card
 * @param {*} props 
 */

const bgImage = require(`../public/images/1920x1080_Art_1.png?resize&sizes[]=300&sizes[]=600&sizes[]=1000`);

export default function Card(props) {
  return (
    <div className="card-item">
      <img
        className="card-image-content"
        srcSet={bgImage.srcSet}
        src={bgImage.src}
        alt=""
      />
      <div className="card-text-content">
        <h3>Card Title</h3>
        <h4 className="card-sub-title">
          Tristique quisque natoque 
        </h4>
        <p>
          Elementum erat vel praesent vulputate viverra metus scelerisque
          vivamus, dis arcu cras purus gravida
        </p>
      </div>
    </div>
  );
}
