import React from 'react';
import RequestPageNav from '../components/nav-components/RequestNav';


const RequestPage = () => {
    return (
        <div className=' w-screen h-full overflow-x-hidden overflow-y-auto '>
            <header className="w-screen">
                <RequestPageNav />
            </header>
            <main className="w-screen"></main>
        </div>
    );
}

export default RequestPage;