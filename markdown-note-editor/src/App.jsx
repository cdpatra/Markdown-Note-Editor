import { useState } from "react";
import "./App.css";
import "./index.css";
import TextEditor from "./components/TextEditor";
import Navbar from "./components/Navbar";
import MarkdownPreview from "./components/MarkdownPreview";
import { Bounce, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
   const [text, setText] = useState("");
   return (
      <>
         <ToastContainer
            position="bottom-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
            transition={Bounce}
         />
         <Navbar />
         <div className="flex">
            <TextEditor setText={setText} />
            <MarkdownPreview text={text} />
         </div>
      </>
   );
}

export default App;
