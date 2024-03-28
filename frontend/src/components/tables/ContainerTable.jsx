import React from 'react';
import ContainerTableRow from '../ContainerTableRow';

const ContainerTable = () => {
  return (
    <>
      <div class="container px-4 mx-auto">
        <div className="flex w-full items-center justify-between">
          <div class="flex items-center gap-x-3">
            <h2 class="text-lg font-mediumtext-white">Total Containers</h2>
            <span class="px-3 py-1 text-xs rounded-full bg-gray-800 text-blue-400">100 containers</span>
          </div>
          <input type="text" class="w-72 px-3 py-2 text-sm text-gray-100 bg-gray-800 dark:bg-zinc-800 dark:border-gray-700 border border-zinc-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent" placeholder="Search Containers" />
        </div>

        <div class="flex flex-col mt-6">
          <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div class="overflow-hidden border border-zinc-200 dark:border-gray-700 md:rounded-lg">
                <table class="min-w-full divide-y divide-gray-700">
                  <thead class="bg-gray-50 dark:bg-zinc-700 ">
                    <tr>
                      <th scope="col" class="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-100">Container ID</th>
                      <th scope="col" class="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-100">Image</th>
                      <th scope="col" class="px-6 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-100">Command</th>
                      <th scope="col" class="px-6 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-100">Created</th>
                      <th scope="col" class="px-6 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-100">Status</th>
                      <th scope="col" class="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-100">Ports</th>
                      <th scope="col" class="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-100">Names</th>
                    </tr>
                  </thead>
                  <tbody class="bg-white divide-y divide-gray-200 dark:divide-zinc-700 dark:bg-zinc-800">
                    <ContainerTableRow id={"asdas"} />
                    <ContainerTableRow id={"pavan"} />
                    <ContainerTableRow id={"abdul"} />
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

export default ContainerTable