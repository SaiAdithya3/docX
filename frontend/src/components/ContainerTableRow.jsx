import React from 'react';
import { GoContainer } from "react-icons/go";
import { useNavigate } from 'react-router-dom';

const ContainerTableRow = (props) => {
    const { id } = props;
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/containers/${id}`);
    }
    return (
        <>
            <tr className='hover:bg-zinc-700/50 transition-all cursor-pointer' onClick={handleClick}>
                <td class="px-12 py-4 flex items-center gap-2 text-sm font-medium text-gray-300 whitespace-nowrap">
                    <GoContainer className='text-blue-500'/>
                    {id}
                </td>
                <td class="px-8 py-4 text-sm font-medium text-gray-300 whitespace-nowrap">
                    iamge-name
                </td>
                <td class="px-12 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">run</td>
                <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">8 minutes ago</td>
                <td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">Exited</td>
                <td class="px-12 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">5173</td>
                <td class="pl-4 py-4 text-sm whitespace-nowrap">
                    <div class="flex items-center gap-x-2">
                        <p class="px-3 py-1 text-xs text-green-100 rounded-full bg-green-600/80">Run</p>
                        <p class="px-3 py-1 text-xs text-red-100 rounded-full  bg-red-600/80">Delete</p>
                    </div>
                </td>

            </tr>
        </>
    )
}

export default ContainerTableRow