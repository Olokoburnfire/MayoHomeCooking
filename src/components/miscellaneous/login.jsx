import React, { useState } from "react";
import Buttons from "./buttons";
import {Link} from 'react-router-dom';


let linkOne = {name:'CREATE AN ACCOUNT', href : '/signup'};
let linkTwo = {name:'Forgot Your Password', href : '/forgot-password'};



const Login = () => {
    const [ShowLogin, setShowLogin] = useState(false);
    
    return ( 
        <div className="flex items-start justify-start flex-col w-full h-fit bg-white px-7 py-10 absolute ">
            <div className="flex flex-col items-start gap-20 justify-start w-full h-full bg-transparent">
                {/* the heading */}
                <div className="w-full h-fit flex flex-row items-start justify-between">
                    <p className="text-2xl leading-8 font-display font-bold text-lemon-sign-in">
                        SIGN IN
                    </p>
                    {/* cancel  button */}
                    <Buttons  value="x" 
                    className={" h-39.75 w-48.58 text-cancel focus:outline-none font-display font-bold text-center text-xl px-1 py-0.5 border-4 border-cancel border-solid"}
                    onClick= {
                        () => setShowLogin(!ShowLogin)
                    } 
                    />
                </div>

                {/* the body */}
                <div className="flex flex-col gap-7 w-670">
                    <form className="flex flex-col gap-5">
                        {/* username field */}
                        <div className="username">
                            <input type="text" name="username" id="username" required placeholder="Username" className="sign-in-input bg-gray-input w-full h-20 px-16 py-12 font-display font-normal leading-8 text-2xl text-black"/>
                        </div>
                        {/* password field */}
                        <div className="password flex flex-col gap-5">
                            <input type="password" name="password" id="password" required placeholder="Pasword" className="sign-in-input bg-gray-input w-full h-20 px-16 py-12 font-display font-normal leading-8 text-2xl text-black"/>

                            {/* remember passkey field */}
                            <div className="bigcheck">
                                <label className="flex flex-row gap-7 text-gray-check font-display font-normal text-2xl">
                                    <span>
                                        <input type="checkbox" value="yes" name="remember" id="remember" className=" w-10 h-9 bg-gray-check border-none outline-none checked: accent-check"/>
                                    </span>
                                Remember My Password
                                </label>
                            </div>
                        </div>

                        {/* submit button */}
                        <Buttons  value="SIGN IN" className={"  btn-gradient text-center font-medium text-white focus:outline-none w-517 h-20 self-center"} />
                    </form>

                    <div className="w-full flex flex-col items-center justify-center mb-5">
                        {/* create account */}
                        <Link 
                                key={linkOne.name} 
                                to= {linkOne.href}
                                className = " w-517 h-20 text-xl text-center font-display font-bold border-2 bg-white btn-gradient-hover hover:text-white flex items-center justify-center"
                                >
                                    {linkOne.name}
                        </Link>
                        {/* forgot password */}
                        <Link 
                                key={linkTwo.name} 
                                to= {linkTwo.href}
                                className = " text-lg leading-8 font-meduim font-display text-center w-fit h-fit text-black border-b-2 border-b-black mt-12"
                                >
                                    {linkTwo.name}
                        </Link>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Login;