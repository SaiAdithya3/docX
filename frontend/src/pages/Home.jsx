import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import Speedometer from '../components/utilisation/Speedometer';
import CPUutil from '../components/utilisation/CPUutil';
import Memoryutil from '../components/utilisation/Memoryutil';
import { PieChart } from '@mui/x-charts/PieChart';
import axios from 'axios';

const Home = () => {
  const [machineInfo, setMachineInfo] = useState({});
  const [dockerInfo, setDockerInfo] = useState({});

  useEffect(() => {
    axios.get('http://localhost:3000/dockerInfo')
      .then((response) => {
        setDockerInfo(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    console.log(dockerInfo);
  }, []);

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
            <div className="w-1/4 flex flex-col border border-zinc-600 bg-zinc-800 rounded-xl p-2 gap-4 items-start justify-center ">
              <h1 className="text-xl px-4 py-1">Insights</h1>
              <div className="w-full bg-zinc-300 rounded-lg text-zinc-800 py-1 px-3 font-semibold">Total Containers: {dockerInfo.Containers}</div>
              <div className="w-full bg-zinc-300 rounded-lg text-zinc-800 py-1 px-3 font-semibold">Running: {dockerInfo.ContainersRunning}</div>
              <div className="w-full bg-zinc-300 rounded-lg text-zinc-800 py-1 px-3 font-semibold">Stopped: {dockerInfo.ContainersStopped}</div>
              <div className="w-full bg-zinc-300 rounded-lg text-zinc-800 py-1 px-3 font-semibold">Images: {dockerInfo.Images}</div>
            </div>
          </div>


          <div className="w-full flex gap-5 items-center py-8">
            <div className="w-1/2 rounded-2xl border p-32 bg-zinc-300">a</div>
            <div className="w-1/2 rounded-2xl border p-32 bg-zinc-300">b</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
