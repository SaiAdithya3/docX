import React from 'react'
import Sidebar from '../components/Sidebar'
import Speedometer from '../components/utilisation/Speedometer'
import CPUutil from '../components/utilisation/CPUutil'
import Memoryutil from '../components/utilisation/Memoryutil'

const Home = () => {
  return (
    <>
      <div className="w-full flex">
        <Sidebar />
        <div className="w-full flex flex-col p-10 items-center">
          <h1 className="text-xl text-start w-full pb-12">Hi There,</h1>
          <div className="flex w-full gap-3">
            <CPUutil />
            <Memoryutil />
            <Speedometer />
            <div className="w-1/4 flex flex-col bg-zinc-800 rounded-xl py-5 items-start justify-center px-4 gap-4">
              <h1 className="text-xl">Insights</h1>
              <div className="w-full bg-zinc-300 rounded-lg text-zinc-800 py-1 px-3 font-semibold">Total Containers: 56</div>
              <div className="w-full bg-zinc-300 rounded-lg text-zinc-800 py-1 px-3 font-semibold">Running : 12</div>
              <div className="w-full bg-zinc-300 rounded-lg text-zinc-800 py-1 px-3 font-semibold">Paused: 8</div>
              <div className="w-full bg-zinc-300 rounded-lg text-zinc-800 py-1 px-3 font-semibold">Stopped: 8</div>
              </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home