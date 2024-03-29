import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import { useParams } from 'react-router-dom';
import { GoContainer } from "react-icons/go";
import axios from 'axios';
import CPUutil from '../components/utilisation/CPUutil';

const ContainerDetail = () => {
    const [container, setContainer] = useState({});
    const { id } = useParams();

    useEffect(() => {
        const fetchContainer = async () => {
            try {
                const { data } = await axios.get(`http://localhost:3000/stats/${id}`);
                setContainer(data);
            } catch (error) {
                console.error('Error fetching container data:', error);
            }
        }
        fetchContainer();
    }, [id]);

    const formatBytes = (bytes) => {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    };

    const getMaxCpuUsagePercentage = () => {
        if (!container.cpu_stats || !container.cpu_stats.cpu_usage || !container.cpu_stats.system_cpu_usage || !container.cpu_stats.online_cpus) {
            return 0;
        }
        const totalUsage = container.cpu_stats.cpu_usage.total_usage;
        const systemUsage = container.cpu_stats.system_cpu_usage;
        const onlineCpus = container.cpu_stats.online_cpus;
        return ((totalUsage / systemUsage) * onlineCpus * 100).toFixed(2);
    };

    return (
        <>
            <div className="w-full flex">
                <Sidebar />
                <div className="w-full flex flex-col items-start p-8">
                    <div className="flex  items-center justify-start gap-2">
                        <h1 className="text-2xl font-semibold p-4 flex items-center gap-2"><GoContainer /> Container details </h1>
                        <p className='text-xs'>{id}</p>
                    </div>

                    <div className="flex gap-20 w-full">

                        <div>
                            <h2 className="text-xl font-semibold">CPU Usage:</h2>
                            <p>Total CPU Usage: {container.cpu_stats && container.cpu_stats.cpu_usage && container.cpu_stats.cpu_usage.total_usage}</p>
                            {/* <p>Total CPU Utilization: {getMaxCpuUsagePercentage()}%</p> */}
                            <p>System CPU Usage: {container.cpu_stats && container.cpu_stats.system_cpu_usage}</p>
                            <CPUutil cpuUsage={getMaxCpuUsagePercentage()} />
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold">Memory Usage:</h2>
                            <p>Current Usage: {container.memory_stats && container.memory_stats.usage && formatBytes(container.memory_stats.usage)}</p>
                            <p>Max Usage: {container.memory_stats && container.memory_stats.max_usage && formatBytes(container.memory_stats.max_usage)}</p>
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold">Network:</h2>
                            <p>Rx Bytes: {container.networks && container.networks.eth0 && container.networks.eth0.rx_bytes}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ContainerDetail;
