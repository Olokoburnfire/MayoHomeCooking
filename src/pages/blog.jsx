import React from "react";
import BlogNav from "../components/nav-components/blogNav";
import SecondFooter from "../components/footer-components/second_footer";


const Blogs = () => {
    return ( 
        <div className=" w-screen min-h-screen h-screen flex flex-col">
            <header className=" w-screen h-fit mb-16 ">
                <BlogNav />
            </header>
            <main className=" w-screen h-screen bg-[#fff] ">
                <div className="w-screen h-screen">

                </div>
            </main>
            <footer className="  w-screen h-fit mt-[101px]">
                <SecondFooter />
            </footer>
        </div>
     );
}
 
export default Blogs;