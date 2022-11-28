import React from "react";
import HeroSection from "../components/Home-components/header";
import Banner from "../components/Home-components/banner";
import MiniCategories from "../components/Home-components/Home-Section_Three";
import OurQualities from "../components/Home-components/why-us";
import Testimoies from "../components/Home-components/customer-statement";
import JoinBlog from "../components/miscellaneous/joinBlog";
import Footer from "../components/footer-components/footer";
// eslint-disable-next-line
import Login from "../components/miscellaneous/login";

const Homepage = () => {
    return ( 
        <div className="flex fel-row w-screen h-full ">
            <div className="flex flex-col gap-0 items-start w-full justify-start bg-home-texture bg-no-repeat bg-cover" >
                {/* the header and nav bar */}
                <div className="col-one">
                <HeroSection/>
                </div>

                {/* the banner */}
                <div className="col-two">
                <Banner />
                </div>

                {/* the category */}
                <div className="col-three mt-14 mb-20">
                <MiniCategories />
                </div>

                {/* the why us section */}
                <div className="col-four mb-20">
                    <OurQualities />
                </div>

                {/* the customers testimony */}
                <div className="col-five ">
                    <Testimoies />
                </div>

                {/* the blog subscribtion */}
                <div className="col-six ">
                    <JoinBlog/>
                </div>

                {/* the footer */}
                <div className="col-seven">
                    <Footer/>
                </div>
            </div>
        </div>
        
     );
}
 
export default Homepage;