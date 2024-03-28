import React from 'react'

const ImageTableRow = (props) => {
    return (
        <>
            <tr>
                <td class="px-12 py-4 text-sm font-medium text-gray-300 whitespace-nowrap">
                    image-name
                </td>
                <td class="px-12 py-4 text-sm font-medium text-gray-300 whitespace-nowrap">
                    latest
                </td>
                <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">9adbscuasdb</td>
                <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">48.0 MB</td>
                <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">8 minutes ago</td>
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

export default ImageTableRow