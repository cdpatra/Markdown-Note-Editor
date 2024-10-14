import { Bounce, toast } from "react-toastify";

function Navbar() {
   const downloadHandler = () => {
      window.print();
      toast.success("Notes downloaded successfully !", {
         position: "bottom-center",
         autoClose: 5000,
         hideProgressBar: false,
         closeOnClick: true,
         pauseOnHover: true,
         draggable: true,
         progress: undefined,
         theme: "colored",
         transition: Bounce,
      });
   };
   return (
      <nav className="flex justify-between px-8 py-4 items-center bg-gray-700 sticky top-0">
         <div className="flex items-center">
            <span className="uppercase font-semibold tracking-widest text-gray-300">markdown</span>
            <div className="h-10 bg-gray-500 w-0.5 mx-4 rounded-lg"></div>
         </div>

         <button
            type="button"
            className="focus:outline-none text-white bg-orange-600 hover:bg-orange-700 focus:ring-4 focus:ring-orange-200 font-medium rounded-md text-sm px-5 py-2.5 dark:bg-orange-500 dark:hover:bg-orange-600 dark:focus:ring-orange-800"
            onClick={downloadHandler}>
            Download
         </button>
      </nav>
   );
}

export default Navbar;
