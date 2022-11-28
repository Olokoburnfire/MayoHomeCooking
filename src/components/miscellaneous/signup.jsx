import React, { useState } from "react";
import Buttons from "./buttons";
import { Link } from 'react-router-dom';



let linkTwo = { name: 'Already have an Account', href: '/login' };




const Signup = () => {

    const [ShowSignup, setShowSignup] = useState(false);


    return (
        <div className="w-[755PX] h-full">
            <div className="flex items-start justify-start flex-col w-full h-fit bg-white px-7 py-10">
                <div className="flex flex-col items-start gap-20 justify-start w-full h-full bg-transparent">
                    {/* the heading */}
                    <div className="w-full h-fit flex flex-row items-start justify-between">
                        <p className="text-2xl leading-8 font-display font-bold text-lemon-sign-in">
                            CREATE AN ACCOUNT
                        </p>
                        {/* cancel  button */}
                        <Buttons value="x"
                            className={" h-39.75 w-48.58 text-cancel focus:outline-none font-display font-bold text-center text-xl px-1 py-0.5 border-4 border-cancel border-solid"}
                            onClick={
                                () => setShowSignup(!ShowSignup)
                            }
                        />
                    </div>

                    {/* the body */}
                    <div className="flex flex-col gap-7 w-670">
                        <form className="flex flex-col gap-5">
                            {/* Email field */}
                            <div className="Email">
                                <input type="email" name="Email" id="Email" required placeholder="EMAIL ADDRESS" className="sign-in-input bg-gray-input w-full h-20 px-16 py-12 font-display font-normal leading-8 text-2xl text-black" />
                            </div>
                            {/* notification field */}
                            <div className="password flex flex-col gap-5">
                                <p className="w-full flex flex-wrap text-xl font-display font-normal text-black leading-8 ">
                                Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.
                                </p>
                                {/* blog */}
                                <div className="bigcheck">
                                    <label className="flex flex-row gap-7 text-gray-check font-display font-normal text-2xl">
                                        <span>
                                            <input type="checkbox" value="yes" name="blog" id="blog" className=" w-10 h-9 bg-gray-check border-none outline-none checked: accent-check" />
                                        </span>
                                        I want to recieve updates about products and promotions
                                    </label>
                                </div>
                                {/* update */}
                                <div className="bigcheck">
                                    <label className="flex flex-row gap-7 text-gray-check font-display font-normal text-2xl">
                                        <span>
                                            <input type="checkbox" value="yes" name="update" id="update" className=" w-10 h-9 bg-gray-check border-none outline-none checked: accent-check" />
                                        </span>
                                        I want to recieve updates about products and promotions
                                    </label>
                                </div>
                            </div>

                            {/* submit button */}
                            <Buttons value="SIGN UP" className={"  btn-gradient text-center font-medium text-white focus:outline-none w-517 h-20 self-center"} />
                        </form>

                        <div className="w-full flex flex-col items-center justify-center mb-5">

                            {/* login */}
                            <Link
                                key={linkTwo.name}
                                to={linkTwo.href}
                                className=" text-lg leading-8 font-meduim font-display text-center w-fit h-fit text-black border-b-2 border-b-black mt-12"
                            >
                                {linkTwo.name}
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signup;