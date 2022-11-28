import React from "react";
import {HiX} from "react-icons/hi"
import {NavLink} from 'react-router-dom';


const MenuItems = ({showMenu, active}) => {
    let Links = [
        {name:'Home', href : '/', current: true},
        {name:'Categories', href : '/categories', current: false},
        {name:'FAQ', href : '/faq', current: false},
        {name:'Blog', href : '/blog', current: false},
        {name:'Cart', href : '/cart', current: false},
        {name:'Search', href : '/search', current: false},
        {name:'Login', href : '/login', current: false},
    ]

    return ( 
        <div>
            <ul className= {active ? 'md:hidden flex-col flex  items-center fixed inset-0 justify-center left-1/4 bg-black/40 backdrop-blur-lg gap-8 p-8' : 'hidden'}>

                <HiX onClick={showMenu} className=" cursor-pointer" />
                {
                    Links.map((link) =>(
                        <NavLink 
                        key={link.name} 
                        to= {link.href}
                        className= {({isActive}) => { 
                            return( 'text-lg  antialiased non-italic font-normal' + (isActive ? ' bg-red-700 w-full  font-semibold text-center' : ' ')
                            );
                        }} >
                            {link.name}
                        </NavLink>

                    ))
                    }
            </ul>
        </div>
     );
}
 
export default MenuItems;