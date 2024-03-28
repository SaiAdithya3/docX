import React from 'react';

const ImageTableRow = (props) => {
    const { image } = props;

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

    return (
        <tr>
            <td className="px-12 py-4 text-sm font-medium text-gray-300 whitespace-nowrap">
                {extractTrepoName(image.repoTags[0])}
            </td>
            <td className="px-12 py-4 text-sm font-medium text-gray-300 whitespace-nowrap">
                {extractTagName(image.repoTags[0])}
            </td>
            <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                {image.id}
            </td>
            <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                {(image.size / (1024 * 1024)).toFixed(3)} MB
            </td>
            <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                {getTimeDifference(image.created)}
            </td>
            <td className="pl-4 py-4 text-sm whitespace-nowrap">
                <div className="flex items-center gap-x-2">
                    <p className="px-3 py-1 text-xs text-green-100 rounded-full bg-green-600/80">Run</p>
                    <p className="px-3 py-1 text-xs text-red-100 rounded-full bg-red-600/80">Delete</p>
                </div>
            </td>
        </tr>
    );
};

const extractTagName = (repoTag) => {
    const tagParts = repoTag.split(':');
    return tagParts.length > 1 ? tagParts[1] : repoTag;
};

const extractTrepoName = (repoTag) => {
    const tagParts = repoTag.split(':');
    return tagParts.length > 0 ? tagParts[0] : repoTag;
};

export default ImageTableRow;
