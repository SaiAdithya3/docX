import React from 'react';
import Sidebar from '../components/Sidebar';
import { useParams } from 'react-router-dom';
import { GoContainer } from "react-icons/go";


const ContainerDetail = () => {
    const { id } = useParams();
    return (
        <>
            <div className="w-full flex">
                <Sidebar />
                <div className="w-full flex flex-col items-center p-8">
                    <h1 className="text-2xl font-semibold p-4 flex items-center gap-2"><GoContainer /> Container details - {id}</h1>
                    
                </div>
            </div>
        </>
    )
}

export default ContainerDetail