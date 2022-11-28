import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";


// import required modules
import { Autoplay, Navigation} from "swiper";

//import images required
import Slide_1 from '../assets/slides/slide 1.png';
import Slide_2 from '../assets/slides/slide 2.png';
import Slide_3 from '../assets/slides/slide 3.png';
import Slide_4 from '../assets/slides/slide 4.png';


const ImageCarousel = () => {
    return (
        <div className=''>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: false,
                }}
                navigation={false}
                modules={[Autoplay, Navigation]}
                className="mySwiper "
            >
                {/* slide one */}
                <SwiperSlide className="bg-transparent w-full">
                <img
                        className="  w-2/6 h-auto"
                        src= {Slide_1}
                        alt="A plate of food"
                    />
                </SwiperSlide>
                
                {/* slide two */}
                <SwiperSlide className="bg-transparent">
                <img
                        className="  w-2/6 h-auto"
                        src= {Slide_2}
                        alt="A plate of food"
                    />
                </SwiperSlide>
                
                {/* slide three */}
                <SwiperSlide className="bg-transparent">
                <img
                        className="  w-2/6 h-auto"
                        src= {Slide_3}
                        alt="A plate of food"
                    />     
                </SwiperSlide>
                
                {/* slide four */}
                <SwiperSlide className="bg-transparent">
                <img
                        className="  w-2/6 h-auto"
                        src= {Slide_4}
                        alt="A plate food"
                    />
                </SwiperSlide>
                
            </Swiper>
        </div>
            





















                                
    );
}
 
export default ImageCarousel;