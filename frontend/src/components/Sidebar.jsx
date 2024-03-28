import React from 'react';
import { FiHome } from "react-icons/fi";
import { useLocation } from 'react-router-dom';
import { FaAngleRight } from "react-icons/fa6";



const Sidebar = () => {
    const location = useLocation();
    return (
        <div className="flex flex-col w-64 h-screen px-5 py-8 overflow-y-auto bg-zinc-400/10 backdrop-blur-lg border-r rtl:border-r-0 rtl:border-l border-zinc-700 ">
            <a href="#">
                <h1 className='text-2xl font-semibold px-8'>DocX</h1>
            </a>

            <div className="flex flex-col justify-between flex-1 mt-6">
                <nav className="-mx-3 space-y-3 ">
                    <a className={`flex items-center px-3 py-2 text-gray-300 transition-colors duration-300 transform rounded-lg hover:bg-gray-300 hover:text-gray-800 ${location.pathname==='/' ? 'bg-zinc-300 text-zinc-800' : ''}`} href="/">
                        <FiHome />
                        <span className="mx-2 text-sm font-medium">Dashboard</span>
                    </a>
                    <a className={`flex items-center px-3 py-2 text-gray-300 transition-colors duration-300 transform rounded-lg hover:bg-gray-300 hover:text-gray-800 ${location.pathname==='/images' ? 'bg-zinc-300 text-zinc-800' : ''}`} href="/images">
                        <FiHome />
                        <span className="mx-2 text-sm font-medium">Images</span>
                    </a>
                    <a className={`flex items-center px-3 py-2 text-gray-300 transition-colors duration-300 transform rounded-lg hover:bg-gray-300 hover:text-gray-800 ${location.pathname==='/containers' ? 'bg-zinc-300 text-zinc-800' : ''}`} href="/containers">
                        <FiHome />
                        <span className="mx-2 text-sm font-medium">Containers</span>
                    </a>
                    <a className={`flex items-center px-3 py-2 text-gray-300 transition-colors duration-300 transform rounded-lg hover:bg-gray-300 hover:text-gray-800 ${location.pathname==='/pull' ? 'bg-zinc-300 text-zinc-800' : ''}`} href="#">
                        <FiHome />
                        <span className="mx-2 text-sm font-medium">Pull Image</span>
                    </a>
                    <a className={`flex items-center px-3 py-2 text-gray-300 transition-colors duration-300 transform rounded-lg hover:bg-gray-300 hover:text-gray-800 ${location.pathname==='/push' ? 'bg-zinc-300 text-zinc-800' : ''}`} href="#">
                        <FiHome />
                        <span className="mx-2 text-sm font-medium">Manage</span>
                    </a>
                    <a className={`flex items-center px-3 py-2 text-gray-300 transition-colors duration-300 transform rounded-lg hover:bg-gray-300 hover:text-gray-800 ${location.pathname==='/docker' ? 'bg-zinc-300 text-zinc-800' : ''}`} href="#">
                        <FiHome />
                        <span className="mx-2 text-sm font-medium">Docker Compose</span>
                    </a>

                </nav>


                <div>
                    <div className="flex items-center justify-between">
                        <h2 className="text-base font-semibold text-gray-800 dark:text-white">Ask DocX !</h2>
                        <button className="p-0.5 hover:bg-gray-100 duration-200 transition-colors text-gray-200  border rounded-lg">
                        <FaAngleRight />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
