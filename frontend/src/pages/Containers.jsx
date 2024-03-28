import React from 'react';
import Sidebar from '../components/Sidebar';
import ContainerTable from '../components/ContainerTable';

const Containers = () => {
  return (
    <>
      <div className="w-full flex">
        <Sidebar />
        <div className="w-full flex flex-col items-center p-8">
          <h1 className="text-2xl font-semibold p-4">Containers</h1>
          <ContainerTable />
        </div>
      </div>
    </>
  )
}

export default Containers