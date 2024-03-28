import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import Speedometer from '../components/utilisation/Speedometer';
import CPUutil from '../components/utilisation/CPUutil';
import Memoryutil from '../components/utilisation/Memoryutil';
import axios from 'axios';

const Home = () => {
  const [machineInfo, setMachineInfo] = useState({});

  useEffect(() => {
    const interval = setInterval(() => {
      axios.get('http://localhost:3000/machineInfo')
        .then((response) => {
          setMachineInfo(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }, 1200);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="w-full flex">
        <Sidebar />
        <div className="w-full flex flex-col p-10 items-center">
          <h1 className="text-xl text-start w-full pb-12">Hi There,</h1>
          <div className="flex w-full gap-3">
            <CPUutil cpuUsage={machineInfo.cpuUsage} />
            <Memoryutil totalRam={machineInfo.ram} freeRam={machineInfo.freeRam} />
            <Speedometer cpuSpeed={machineInfo.cpu && machineInfo.cpu[0].speed} />
            <div className="w-1/4 flex flex-col bg-zinc-800 rounded-xl py-5 items-start justify-center px-4 gap-4">
              <h1 className="text-xl">Insights</h1>
              <div className="w-full bg-zinc-300 rounded-lg text-zinc-800 py-1 px-3 font-semibold">Total Containers: 56</div>
              <div className="w-full bg-zinc-300 rounded-lg text-zinc-800 py-1 px-3 font-semibold">Running: {machineInfo.runningContainers ? machineInfo.runningContainers.length : 0}</div>
              <div className="w-full bg-zinc-300 rounded-lg text-zinc-800 py-1 px-3 font-semibold">Paused: {machineInfo.pausedContainers ? machineInfo.pausedContainers.length : 0}</div>
              <div className="w-full bg-zinc-300 rounded-lg text-zinc-800 py-1 px-3 font-semibold">Stopped: {machineInfo.stoppedContainers ? machineInfo.stoppedContainers.length : 0}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
