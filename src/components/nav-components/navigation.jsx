import React, {useState} from "react";
import MenuItems from "../nav-components/menu-items";
import {HiMenuAlt1, HiSearch, HiShoppingCart} from "react-icons/hi" ;
import {NavLink, Link} from 'react-router-dom'
import Buttons from "../miscellaneous/buttons";



const Navigation = () => {
    let Links = [
        {name:'Home', href : '/'},
        {name:'Categories', href : '/categories'},
        {name:'FAQ', href : '/faq'},
        {name:'Blog', href : '/blog'},
    ];

    let cart = {name:'Cart', href : '/cart'};
    let search = {name:'Search', href : '/search'};

    let loginBtn = {name:'Login', href : '/login'};  
    
    const [active, setActive] = useState('false');

    const showMenu = () => {
        setActive(!active)
    };
    const [ShowLogin, setShowLogin] = useState(false);


    return ( 
        <main className="flex flex-row justify-between items-center pt-4 bg-transparent w-full px-10 ">
            {/* navigation component */}
            <nav className="flex flex-row bg-transparent">
                <div className="absolute right-6 md:hidden top-6 scale-150">
                    <HiMenuAlt1 onClick={showMenu} className= "scale-150 cursor-pointer" />
                </div>


                <div className=" hidden md:flex flex-row justify-end gap-8 font-display ">
                
                
                    {
                    Links.map((link) =>(
                        <NavLink 
                        key={link.name} 
                        to= {link.href}
                        className= {({isActive}) => { 
                            return( 'text-lg text-black non-italic font-normal cursor-pointer hover' + (isActive ? ' dash' : ' ')
                            );
                        }} >
                            {link.name}
                        </NavLink>
                    ))
                    }
                    
                    {/* cart and search button */}
                    <div className=" text-[#000] flex item-center justify-center w-fit h-fit pt-1.5 gap-8 ">
                        {/* cart button */}
                            <Link 
                            key={cart.name} 
                            to= {cart.href}
                            className= 'hover'
                            >
                                <HiShoppingCart />
                            </Link>

                        {/* search button */}
                        <Link  
                        key={search.name} 
                        to= {search.href}
                        className= 'hover' 
                        >
                            <HiSearch/>
                        </Link>
                    </div>
                    

                    <Buttons className= {'text-lg text-black non-italic font-normal hover:border-b-4 hover:border-b-[#d3060680] mt-[-7px] w-fit'} value= {loginBtn.name} onClick= {
                        () => setShowLogin(!ShowLogin)
                    }
                    >
                        <Link key={loginBtn.name} to= {loginBtn.href}>
                        </Link>
                    </Buttons>
                </div>

                <MenuItems showMenu= {showMenu} active= {active} />
            </nav>
        </main>
     );
}
 
export default Navigation;