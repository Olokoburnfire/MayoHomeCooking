import React from 'react';
import AccountNav from '../components/nav-components/AccountNav';


const AccountDetails = () => {
    return (
        <div className=' w-screen h-full overflow-x-hidden overflow-y-auto '>
            <header className="w-screen">
                <AccountNav />
            </header>
            <main className="w-screen">
            </main>
        </div>
    );
}

export default AccountDetails;