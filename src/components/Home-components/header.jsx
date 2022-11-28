import React from "react";
import Navbar from "../nav-components/navbar";
// eslint-disable-next-line
import SubSliderComponent from "../Home-components/title_Carousel";
import FixedHeading from "../Home-components/fixed_heading";
import ImageCarousel from "./image_carousel";

const HeroSection = () => {
    return (
        <div className="bg-texture-one w-screen h-full bg-cover bg-no-repeat">
            <div className="bg-hero-board w-full h-full bg-contain bg-left-top bg-no-repeat">
                <Navbar />
                {/* hero section, this is where the food slider is located */}
                <div className="bg-transparent flex flex-row  w-full px-4">
                    {/* First column of the header component */}
                    <div className="col-1 w-2/3">
                        <ImageCarousel />
                    </div>
                    {/* second column of the Header component */}
                    <div className="col-2 flex flex-col gap-6 w-1/3">

                        {/* the title of the image slider */}
                        <div className="row-1">
                            <FixedHeading />
                        </div>

                        {/* subtitle for the image slider */}
                        <div className="row-2">
                            <SubSliderComponent />
                        </div>
                    </div>
                    
                </div>

            </div>
        </div>
    );
}

export default HeroSection;