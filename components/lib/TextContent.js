/**
 * Text Content
 * @param {*} props 
 */

export default function TextContent(props) {
  return (
    <div className={`text-column ${props.style}`}>
      {props.children}
    </div>
  );
}
