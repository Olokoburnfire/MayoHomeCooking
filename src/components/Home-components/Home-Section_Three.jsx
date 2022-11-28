import React from 'react';
import Buttons from '../miscellaneous/buttons';
import food from "../assets/food_one.png"

const MiniCategories = () => {
    return ( 
        <div className="w-screen h-96">
            <div className="flex flex-row flex-wrap w-full items-center justify-center gap-10">
                <div className="col-1 bg-transparent flex flex-col gap-7 w-72 h-80">
                    <p className="text-4xl font-medium leading-9 text-black font-display">
                        Do you desire another type of stew?
                    </p>
                    <p className="font-display font-normal text-base">
                    Choose the tasty stew or sauce that complements your side dishes from our extensive variety.
                    </p>
                    <Buttons className={"w-full btn-soup h-24 text-center leading-6 text-lg text-white font-display"} value="SEE OTHER SOUPS" />
                </div>
                <div className="col-2 w-72 flex flex-col items-center justify-center h-80 hover:bg-gray-custom ">
                    <div className="img -mb-8 flex items-center z-0 ">
                        <img src={food} alt="A plate of food" className='h-auto w-56
                        '/>
                    </div>
                    <div className="px-2 pt-12 pb-3 text-start w-full h-full bg-gray-custom">
                        <h1 className="text-xl leading-snug font-display text-black"> Stew/Sauce</h1>
                        <p className="text-start text-base font-display leading-5 ">
                            Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed do eiusmod tempor incididunt ut la bore et dolore magna aliqua.
                        </p>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default MiniCategories;
