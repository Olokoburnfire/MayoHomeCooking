import React from 'react';
import OrderNav from '../components/nav-components/OrderNav';


const Order = () => {
    return (
        <div className=' w-screen h-full overflow-x-hidden overflow-y-auto '>
            <header className="w-screen">
                <OrderNav />
            </header>
            <main className="w-screen"></main>
        </div>
    );
}

export default Order;