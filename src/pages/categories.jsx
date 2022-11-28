import React from "react";
import SecondFooter from "../components/footer-components/second_footer";
import CategoryNavigation from "../components/nav-components/categoriesNav";
import CatBanner from "../components/category-component/cat-banner";


const Categories = () => {
    return ( 
        <div className=" max-w-screen w-screen h-full relative flex flex-col gap-16 ">
            <header className="w-screen h-full flex flex-col gap-[64px]">
                <section className="w-full h-full flex px-10 ">
                    <div className="w-full h-full pr-5 ">
                        <CategoryNavigation />
                    </div>
                </section>
                <section className=" w-full h-full flex px-10 ">
                    <div className="w-full h-full pr-5">
                        <CatBanner />
                    </div>
                </section>
            </header>
            <main className=" w-screen h-screen bg-[#fff] ">
                <div className="w-screen h-screen">

                </div>
            </main>
            <footer className="  w-screen h-fit ">
                <SecondFooter />
            </footer>
        </div>
     );
}
 
export default Categories;