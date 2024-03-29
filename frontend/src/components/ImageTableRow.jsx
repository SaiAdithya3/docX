import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'sonner';

const ImageTableRow = (props) => {
    const { image } = props;
    const [isLoading, setIsLoading] = useState(false);

    const convertUnixTimestamp = (timestamp) => {
        const date = new Date(timestamp);
        return date;
    };

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

    const startContainer = async (imagename) => {
        setIsLoading(true);
        try {
            const response = await axios.post('http://localhost:3000/createContainer', { imagename: imagename });
            if (response.status === 200) {
                console.log('Container started successfully');
                toast.success('Container started successfully');
                setTimeout(() => {
                    window.location.reload();
                }, 1000);
            } else {
                console.error('Failed to start container');
                toast.error('Failed to start container');
            }
        } catch (error) {
            console.error('Failed to start container:', error);
            toast.error('Failed to start container');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <tr>
            <td className="px-12 py-4 text-sm font-medium text-gray-300 whitespace-nowrap">
                {extractTrepoName(image.repoTags[0])}
            </td>
            <td className="px-12 py-4 text-sm font-medium text-gray-300 whitespace-nowrap">
                {extractTagName(image.repoTags[0])}
            </td>
            <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                {image && image.id}
            </td>
            <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                {image && (image.size / (1024 * 1024)).toFixed(3)} MB
            </td>
            <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                { image.created && getTimeDifference(image.created)}
            </td>
            <td className="pl-4 py-4 text-sm whitespace-nowrap">
                <div className="flex items-center gap-x-2">
                    <button
                        onClick={() => startContainer(extractTrepoName(image.repoTags[0]))}
                        disabled={isLoading}
                        className="px-3 py-1 text-xs text-green-100 rounded-full bg-green-600/80"
                    >
                        {isLoading ? 'Starting...' : 'Run'}
                    </button>
                    <p className="px-3 py-1 text-xs text-red-100 rounded-full bg-red-600/80">Delete</p>
                </div>
            </td>
        </tr>
    );
};

const extractTagName = (repoTag) => {
    const tagParts = repoTag && repoTag.split(':');
    return tagParts && tagParts.length > 1 ? tagParts[1] : repoTag;
};

const extractTrepoName = (repoTag) => {
    const tagParts = repoTag && repoTag.split(':');
    return tagParts && tagParts.length > 0 ? tagParts[0] : repoTag;
};

export default ImageTableRow;
