import React from 'react';
import Sidebar from '../components/Sidebar';

const PullImage = () => {
    return (
        <>
            <div className="w-full flex">
                <Sidebar />
                <div className="w-full flex flex-col items-center p-8">
                    <h1 className="text-2xl font-semibold p-4">Pull Images</h1>
                    
                </div>
            </div>
        </>
    )
}

export default PullImage