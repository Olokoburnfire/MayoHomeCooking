import React from 'react';

const FooterJoinBlog = () => {
    return ( 
        <div className="bg-transparent w-screen h-auto pt-11 flex flex-col item-center justify-center gap-5">
            <h1 className="text-3xl text-[#fff] font-heading font-medium text-center">JOIN OUR BLOG!</h1>
            <p className="text-xl text-center font-display self-center font-normal text-[#fff] w-560">
            Sign up to Mayo’s home cooked blog today and be the first to hear about exclusive deals and special offers
            </p>
            <form autoComplete="on" className="w-650 h-16 self-center flex flex-row gap-0">
                <input type="email" name="email" id="email"  placeholder="Enter your Email" required className=" w-full h-full justify-items-center pl-5 text-white text-lg leading-6 font-normal font-display mail"/>
                <input type="submit" id="submit" value="JOIN" className=" cursor-pointer w-32 h-full btn-mail text-white leading-6 text-lg font-normal font-display"/>
            </form>
        </div>
     );
}
 
export default FooterJoinBlog;