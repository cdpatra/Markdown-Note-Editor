import "../styles/markdown.css";
/* eslint-disable react/prop-types */
import Markdown from "react-markdown";
function MarkdownPreview({ text }) {
   return (
      <div className="markdown-notes w-1/2 bg-orange-50 min-h-[760px] border-l-2 border-slate-300 p-2">
         <Markdown>{text}</Markdown>
      </div>
   );
}

export default MarkdownPreview;
