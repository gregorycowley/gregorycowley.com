/**
 * Text Content
 * @param {*} props 
 */

import Link from "next/link";

export default function TextContent(props) {
  return (
    <div className="text-column">
      {props.children}
    </div>
  );
}
