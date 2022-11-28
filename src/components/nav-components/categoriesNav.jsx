import React from 'react';
import Navigation from "../nav-components/secondNavigation";
import WhiteLogo from "../assets/navigationPanel/white-logo.png";

const CategoryNavigation = () => {
    return ( 
        <div className='bg-texture-four bg-no-repeat flex flex-col relative w-[100%] h-[487px] mt-[-10px]'>
            <div className="w-full h-full flex flex-row justify-between ">
                <div className=" mt-[-37px] left-[-6px]">
                    <img src={ WhiteLogo} alt="MHC logo" />
                </div>
                <div className="pt-[10px]">
                    <Navigation />
                </div>
            </div>
            <div className=" w-fit h-fit bg-transparent text-white leading-[104px] text-6xl font-bold font-display absolute bottom-[150px] left-[100px]">
                <p>Categories</p>
            </div>
        </div>
     );
}
 
export default CategoryNavigation;