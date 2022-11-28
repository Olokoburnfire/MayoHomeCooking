import React from 'react';
import DashboardNav from '../components/nav-components/DashboardNav';


const Dashboard = () => {
    return (
        <div className=' w-screen h-full overflow-x-hidden overflow-y-auto '>
            <header className="w-screen">
                <DashboardNav />
            </header>
            <main className="w-screen"></main>
        </div>
    );
}

export default Dashboard;