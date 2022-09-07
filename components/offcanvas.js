import { useState } from "react";
const App = () => {
    const [open, setOpen] = useState(true);
    

    return (
        <div className="flex">
            <div
                className={` ${open ? "w-72" : "w-0 "
                    } bg-black h-screen   pt-8 relative duration-300`}
            >
                {/* <button className={`absolute cursor-pointer -right-5 top-9 w-7 h-4 border-red
           border-2 rounded-full  ${!open && "rotate-180"}`}
                    onClick={() => setOpen(!open)}></button> */}

                
      </div> 
            </div>
            );
};
            export default App;