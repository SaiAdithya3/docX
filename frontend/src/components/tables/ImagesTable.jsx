import React from 'react';
import ImageTableRow from '../ImageTableRow';

const ImagesTable = () => {
  return (
    <>
      <div class="container px-4 mx-auto">
      <div className="flex w-full items-center justify-between">
          <div class="flex items-center gap-x-3">
            <h2 class="text-lg font-mediumtext-white">Total Images</h2>
            <span class="px-3 py-1 text-xs rounded-full bg-gray-800 text-blue-400">100 images</span>
          </div>
          <input type="text" class="w-72 px-3 py-2 text-sm text-gray-100 bg-gray-800 dark:bg-zinc-800 dark:border-gray-700 border border-zinc-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent" placeholder="Search Images" />
        </div>

        <div class="flex flex-col mt-6">
          <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div class="overflow-hidden border border-zinc-200 dark:border-gray-700 md:rounded-lg">
                <table class="min-w-full divide-y divide-gray-700">
                  <thead class="bg-gray-50 dark:bg-zinc-700 ">
                    <tr>
                      <th scope="col" class="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-100">Repository</th>
                      <th scope="col" class="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-100">Tag</th>
                      <th scope="col" class="px-6 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-100">Image ID</th>
                      <th scope="col" class="px-6 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-100">Size</th>
                      <th scope="col" class="px-6 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-100">Created ago</th>
                      <th scope="col" class="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-100">Actions</th>
                    </tr>
                  </thead>
                  <tbody class="bg-white divide-y divide-gray-200 dark:divide-zinc-700 dark:bg-zinc-800">
                    <ImageTableRow />
                    <ImageTableRow />
                    <ImageTableRow />
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>


      </div>
    </>
  )
}

export default ImagesTable