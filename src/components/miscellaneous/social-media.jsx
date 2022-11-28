import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faTwitter,
    faInstagram,
    faTiktok
  } from "@fortawesome/free-brands-svg-icons";


const SocialMedia = () => {
    return ( 
        <div className="social-container flex flex-row gap-5">
            {/* the social media links needs to be updated */}
            <a href="https://www.facebook.com/learnbuildteach/"
                className="facebook social" rel='noreferrer' target= "_blank">
                <FontAwesomeIcon icon={faFacebook} size="2x" className=' w-7 h-7'/>
            </a>
            <a href="https://www.twitter.com/jamesqquick" className="twitter social" rel='noreferrer' target= "_blank">
                <FontAwesomeIcon icon={faTwitter} size="2x" className=' w-7 h-7'/>
            </a>
            <a href="https://www.tiktok.com/c/jamesqquick"
                className="youtube social" rel='noreferrer' target= "_blank">
                <FontAwesomeIcon icon={faTiktok} size="2x" className=' w-7 h-7' />
            </a>
            <a href="https://www.instagram.com/learnbuildteach"
                className="instagram social" rel='noreferrer' target= "_blank">
                <FontAwesomeIcon icon={faInstagram} size="2x" className=' w-7 h-7' />
            </a>
        </div>
     );
}
 
export default SocialMedia;