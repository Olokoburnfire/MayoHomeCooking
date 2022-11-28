import React from "react";
import Buttons from "../miscellaneous/buttons";

const Banner = () => {

    return ( 
        
        <div className="w-screen flex flex-col gap-2 bg-texture-two bg-no-repeat bg-cover p-10 text-white items-center justify-center">
            <p className="font-display text-center font-medium text-xl leading-normal " >
                Want your favourite soup tailoured to your taste? -Let's Have the details
            </p>

            {/* Start your order button */}
            <Buttons className={"w-fit h-auto font-meduim text-center text-lg text-white font-display border-b-4 border-b-white bg-transparent"} value="START YOUR ORDER" />
        </div>
     );
}
 
export default Banner;