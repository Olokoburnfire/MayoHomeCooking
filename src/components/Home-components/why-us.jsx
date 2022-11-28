import React from 'react';
import Headset from '../assets/Vector-why-headset.png';
import SafePayment from '../assets/Vector-why-payment.png';
import Van from '../assets/vector-why-delivery.png'; 


const OurQualities = () => {
    return ( 
        <div className=" w-screen h-fit flex items-center justify-center">
            <div className="w-full h-full flex flex-row items-center justify-around px-10">
                {/* column 1 */}
                <div className="flex flex-col  items-center justify-center px-4 py-6 why-card w-80 h-96">
                    <img src={Van} alt="Delivery van" className="vector mb-14 w-24 h-auto" />
                    <h1 className="why-heading w-full text-2xl font-display mb-4">Delivery</h1>
                    <p className="why-words text-base text-center">
                    We currently offer delivery to western states of Nigeria. Delivery time are on the payment date and availability of ingredients
                    </p>
                </div>
                {/* column 2 */}
                <div className="flex flex-col  items-center justify-center px-4 py-6 why-card w-80 h-96">
                    <img src={Headset} alt="Headset" className="vector mb-14" />
                    <h1 className="why-heading w-full text-2xl font-display mb-4">Customer Service</h1>
                    <p className="why-words text-base text-center ">
                    We are available for all  inquiries - <br /> Contact us through our mediums on our contact page.
                    </p>
                </div>
                {/* column 3 */}
                <div className="flex flex-col  items-center justify-center px-4 py-6 why-card w-80 h-96">
                    <img src={SafePayment} alt="safe payment" className="vector mb-14" />
                    <h1 className="why-heading w-full text-2xl font-display mb-4">Multi Payment Options</h1>
                    <p className="why-words text-base text-center">
                    We accept Bank Transfers, Card - Payments and Cash APP.
                    </p>
                </div>
            </div>
        </div>
     );
}
 
export default OurQualities;