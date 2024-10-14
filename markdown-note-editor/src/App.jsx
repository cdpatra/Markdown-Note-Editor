import { useState } from "react";
import "./App.css";
import "./index.css";
import TextEditor from "./components/TextEditor";
import Navbar from "./components/Navbar";
import MarkdownPreview from "./components/MarkdownPreview";

<App className="css"></App>;
function App() {
   const [text, setText] = useState("");
   return (
      <>
         <Navbar />
         <div className="flex">
            <TextEditor setText={setText} />
            <MarkdownPreview text={text} />
         </div>
      </>
   );
}

export default App;
