/* eslint-disable react/prop-types */
function TextEditor({ setText }) {
   return (
      <textarea
         className="text-editor w-1/2 bg-stone-200 min-h-[760px] text-lg border-r-2 border-slate-200 p-2"
         style={{ resize: "none", outline: "none" }}
         onChange={(event) => setText(event.target.value)}></textarea>
   );
}

export default TextEditor;
