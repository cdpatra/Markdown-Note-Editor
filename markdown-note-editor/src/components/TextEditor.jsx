/* eslint-disable react/prop-types */
function TextEditor({ setText }) {
   return (
      <textarea
         className="w-1/2 bg-stone-200 min-h-screen text-lg border-r-2 border-slate-200 p-2"
         style={{ resize: "none", outline: "none" }}
         onChange={(event) => setText(event.target.value)}></textarea>
   );
}

export default TextEditor;
