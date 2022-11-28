import React from 'react';
import PaymentNav from '../components/nav-components/PaymentNav';


const Payment = () => {
    return (
        <div className=' w-screen h-full overflow-x-hidden overflow-y-auto '>
            <header className="w-screen">
                <PaymentNav />
            </header>
            <main className="w-screen"></main>
        </div>
    );
}

export default Payment;