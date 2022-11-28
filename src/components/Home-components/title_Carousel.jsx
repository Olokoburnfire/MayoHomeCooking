/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";


//import button 
import Buttons from "../miscellaneous/buttons";

export default function SubSliderComponent() {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={false}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {/* slide one */}
                <SwiperSlide>
                        <div className="text-sm h-auto text-black bg-texture-three bg-75% w-11/12 bg-no-repeat flex flex-col">
                            <h1 className=" cat text-xl font-medium">Categories</h1>
                            <h1 className="heading-two">Soup</h1>
                            <p className=" text-lg font-display font-normal leading-snug text-black">
                                Ever seen a Nigerian who doesn't like soups? Take your pick of over 30 indigenous soups from all over Nigeria, and give your taste buds a treat.
                            </p>
                            <Buttons  value="Order Now" className={" mt-2 h-auto w-fit rounded-md border border-transparent btn-normal text-center font-medium text-white focus:outline-none   py-3 px-6"} />
                        </div>
                </SwiperSlide>
                
                {/* slide two */}
                <SwiperSlide>
                        <div className=" w-11/12 text-sm h-auto text-black bg-texture-three bg-75% bg-no-repeat flex flex-col">
                            <h1 className=" cat text-xl font-medium">Categories</h1>
                            <h1 className="heading-two">Protein</h1>
                            <p className=" text-lg font-display font-normal leading-snug text-black">
                                A fantastic combo: FInger-licking meats and fishes which also contains essential vitamins and minerals and a great source of protein
                            </p>
                            <Buttons  value="Order Now" className={" mt-2 h-auto w-fit rounded-md border border-transparent btn-normal text-center font-medium text-white focus:outline-none   py-3 px-6"} />
                        </div>
                </SwiperSlide>
                {/* slide 3 */}
                <SwiperSlide>
                        <div className=" w-11/12 text-sm h-auto text-black bg-texture-three bg-75% bg-no-repeat flex flex-col">
                            <h1 className=" cat text-xl font-medium">Categories</h1>
                            <h1 className="heading-two">Pepper Soup</h1>
                            <p className=" text-lg font-display font-normal leading-snug text-black">
                                A well prepared bowl of pepper soup is medicine both to the soul and body. Click to enjoy a tantalizing bowl of assorted chicken, cow tail, fish, goat meat and turkey pepper soup.
                            </p>
                            <Buttons  value="Order Now" className={" mt-2 h-auto w-fit rounded-md border border-transparent btn-normal text-center font-medium text-white focus:outline-none   py-3 px-6"} />
                        </div>
                </SwiperSlide>
                
                {/* slide four */}
                <SwiperSlide>
                        <div className=" w-11/12 text-sm h-auto text-black bg-texture-three bg-75% bg-no-repeat flex flex-col ">
                            <h1 className=" cat text-xl font-medium">Categories</h1>
                            <h1 className="heading-two">Starchy</h1>
                            <p className=" text-lg font-display font-normal leading-snug text-black">
                                Check out our variety of swallows designed to be the perfect partner to our soup, stew, and pepper soup.
                            </p>
                            <Buttons  value="Order Now" className={" mt-2 h-auto w-fit rounded-md border border-transparent btn-normal text-center font-medium text-white focus:outline-none   py-3 px-6"} />
                        </div>
                </SwiperSlide>
                
            </Swiper>
        </>
    );
            }