import React from 'react';
import WhiteLogo from "../assets/navigationPanel/white-logo.png";
import Navigation from './secondNavigation';


const PaymentNav = () => {
   
    return ( 
        <div className=" bg-white h-[487px] w-screen max-w-screen px-10 flex">
            <div className="bg-[#d30606] w-full h-full flex relative second-nav">
                {/* navigation center */}
                <div className="flex flex-row justify-between z-20 ">
                    <div className="absolute top-[-47px] left-[-6px]">
                        <img src={ WhiteLogo} alt="MHC logo" />
                    </div>
                    {/* navigation component */}
                    <div className=' absolute top-[55px] right-[0px]'> <Navigation /> </div>
                    
                </div>
                <div className=" relative flex w-[90%] gap-40 h-fit font-display font-bold text-[130px] leading-[208px] bg-gradient-to-b from-[#ffffff18] via-[#ffffff] to-[#ffffff00] bg-clip-text text-transparent ml-[92px] mt-[120px]">
                   <span>Payment Method</span>
                   <div className="w-full h-full absolute top-0 bg-gradient-to-b from-[#ffffff00]  via-[#d30606e0] via-[#d30606] via-[#ffffff] to-[#d30606] z-[2] ">
                        <p className=' font-display font-bold leading-[104.16px] text-[80px] text-white absolute bottom-[0] left-7 '>Payment Method</p>
                    </div>
                </div>
                
            </div>
        </div>
     );
}
 
export default PaymentNav;