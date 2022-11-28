import React from 'react';
import FooterLogo from "../assets/footer-logo.png";
import SocialMedia from '../miscellaneous/social-media';
import {Link} from 'react-router-dom';




let links = [
    {name:'> Home', href : '/'},
    {name:'> Category', href : '/categories'},
    {name:'> FAQs', href : '/faq'},
    {name:'> Blog', href : '/blog'},
]


const Footer = () => {
    return ( 
        <div className="w-full flex flex-col gap-0">
            <div className=" bg-gradient-to-r from-[#ffffff00] via-[#d71818] via-[#d30606] via-[#d71818] to-[#ffffff00] w-screen h-full pt-px">
                <div className="w-screen h-56 bg-gray-bg flex flex-row items-center justify-between pr-16 relative">
                    {/* left side of footer section */}
                    <div className="flex flex-col items-start justify-start ">
                        <div className=' w-full -mt-16'>
                        <img src={FooterLogo} alt="MHC logo" className='w-5/6 h-auto'/>
                        </div>
                        <p className="w-full h-auto text-black leading-3 text-xs font-display font-normal absolute bottom-4 left-4">
                            &copy; 2022 Mayo’s home cooked meal | Developed by <span className='stars text-end'>
                            ************
                            </span>
                        </p>
                    </div>

                    {/* right side of the footer section */}
                    <div className="flex flex-row gap-16">
                        {/* Site map */}
                        <div className="links w-fit flex flex-col gap-4 mt-8">
                            <h1 className='social-heading font-display'>Our Useful Links</h1>
                            <div className='nav-links'>
                                {
                                links.map((link) =>(
                                    <Link 
                                    key={link.name} 
                                    to= {link.href}
                                    className = " flex flex-col text-sm font-display font-normal w-fit mb-2"
                                    >
                                        {link.name}
                                    </Link>

                                ))
                                }

                            </div>
                        </div>
                        {/* social media link */}
                        <div className="social-media flex flex-col items-start justify-start gap-4 mt-8 w-72">
                            <h1 className='social-heading font-display'>Our Social Networks</h1>
                            <p className=' font-display font-normal text-base leading-5 text-black'>
                            We’ll love to keep in touch with you! Follow us across our social media platforms and let’s keep you updated on our latest offers and promotions.
                            </p>
                            <div>
                                <SocialMedia />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Footer;