import React from 'react';
import AddressNav from '../components/nav-components/AddressNav';


const AddressPage = () => {
    return (
        <div className=' w-screen h-full overflow-x-hidden overflow-y-auto '>
            <header className="w-screen">
                <AddressNav />
            </header>
            <main className="w-screen">
            </main>
        </div>
    );
}

export default AddressPage;