import React from "react";
import logo from "../assets/navigationPanel/brand_logo.png";
import Navigation from "./navigation";

const Navbar = () => {
    return ( 
        <main className="flex flex-row justify-between items-center pt-4 bg-transparent w-screen px-10 ">
            {/* logo container */}
            <div className="bg-white sm:basis-2/5 basis-2/6 rounded-full">
                <img src={logo} alt="Mayo's logo" className=" sm:w-3/4 md:w-2/5 h-auto"/>
            </div>
            {/* navigation component */}
            <div><Navigation /></div>
            

        </main>
     );
}
 
export default Navbar;