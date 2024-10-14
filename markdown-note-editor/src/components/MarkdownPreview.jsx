import "../styles/markdown.css";
/* eslint-disable react/prop-types */
import Markdown from "react-markdown";
function MarkdownPreview({ text }) {
   return (
      <div className="w-1/2 bg-orange-50 min-h-screen border-l-2 border-slate-300 p-2">
         <Markdown>{text}</Markdown>
      </div>
   );
}

export default MarkdownPreview;
