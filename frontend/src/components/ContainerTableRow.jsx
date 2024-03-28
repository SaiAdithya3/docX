import React from 'react';
import { GoContainer } from "react-icons/go";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'sonner';

const ContainerTableRow = (props) => {
    const { container } = props;
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/containers/${container.ID}`);
    };

    // Function to convert Unix timestamp to a human-readable format
    const getTimeDifference = (timestamp) => {
        const currentTime = new Date();
        const postTime = new Date(timestamp);
        const difference = currentTime - postTime;
        const seconds = Math.floor(difference / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);
        const months = Math.floor(days / 30);

        if (months > 0) {
            return `${months} months ago`;
        } else if (days > 0) {
            return `${days} days ago`;
        } else if (hours > 0) {
            return `${hours} hours ago`;
        } else if (minutes > 0) {
            return `${minutes} minutes ago`;
        } else {
            return `${seconds} seconds ago`;
        }
    };

    const startContainer = async (id) => {
        const response = await axios.get(`http://localhost:3000/start/${id}/`);
        if (response.ok) {
            console.log('Container started successfully');
            toast.success('Container started successfully');
        } else {
            console.error('Failed to start container');
            toast.error('Failed to start container');
        }

    }

    const stopContainer = async (id) => {
        const response = axios.get(`http://localhost:3000/stop/${id}/`, {});
        if (response.ok) {
            console.log('Container stopped successfully');
            toast.success('Container stopped successfully');
        } else {
            console.error('Failed to stop container');
            toast.error('Failed to stop container');
        }
    }

    return (
        <tr className='hover:bg-zinc-700/50 transition-all cursor-pointer'>
            <td className="px-12 py-4 flex items-center gap-2 text-sm font-medium text-gray-300 whitespace-nowrap" onClick={handleClick}>
                <GoContainer className='text-blue-500' />
                {container.ID && container.ID}
            </td>
            <td className="px-8 py-4 text-sm font-medium text-gray-300 whitespace-nowrap">
                {container.Image}
            </td>
            <td className="px-12 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">{container.Command}</td>
            <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                {/* {getTimeDifference(container.created)} */}
                {container.RunningFor}
            </td>
            <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                {container.State === 'running' ? 'Running' : 'Exited'}
            </td>
            <td className="px-8 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">{container.Names}</td>
            <td className="pl-4 py-4 text-sm whitespace-nowrap">
                <div className="flex items-center gap-x-2">
                    <p className="px-3 py-1 text-xs text-green-100 rounded-full bg-green-600/80" onClick={() => startContainer(container.ID)}>Run</p>
                    <p className="px-3 py-1 text-xs text-red-100 rounded-full bg-red-600/80" onClick={() => stopContainer(container.ID)}>Delete</p>
                </div>
            </td>
        </tr>
    );
};

export default ContainerTableRow;
