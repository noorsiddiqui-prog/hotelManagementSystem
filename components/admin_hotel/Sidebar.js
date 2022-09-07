import React from 'react'
import Link from 'next/link'
// import Profile from "../../pages/admin-portal/Profile"

export default function Sidebar() {
    return (
        <>
            <div className='pt-20 '>

                <aside class="w-64 mt-10 mb-20" aria-label="Sidebar">
                    <div class="overflow-y-auto py-4 px-3 h-[100%] bg-gray-50 rounded pt-20 pb-20 dark:bg-gray-800">
                        {/* <div class="flex items-cent-er pl-2.5 mb-5">
                        <Link href="">
                            <img src="https://flowbite.com/docs/images/logo.svg" class="mr-3 h-6 sm:h-7" alt="Flowbite Logo" />
                            <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
                        </Link>
                        </div> */}
                        <ul class="space-y-6">
                            <li>
                                <div class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                    <Link href="/admin-portal/"  >                                    
                                    {/* <svg aria-hidden="true" class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"></path></svg> */}
                                    <span class="ml-3">Profile</span>
                                </Link>
                                </div>
                            </li>
                            <li>
                                <div class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                <Link href="/admin-portal/RoomAdd" >
                                    {/* <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clip-rule="evenodd"></path></svg> */}
                                    <span class="flex-1 ml-3 whitespace-nowrap">Add Rooms</span>                               
                                </Link>
                                </div>
                            </li>
                            <li>
                                <div class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                <Link href="/admin-portal/RoomList" >                        
                                    {/* <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1H3a1 1 0 01-1-1V4zM8 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1H9a1 1 0 01-1-1V4zM15 3a1 1 0 00-1 1v12a1 1 0 001 1h2a1 1 0 001-1V4a1 1 0 00-1-1h-2z"></path></svg> */}
                                    <span class="flex-1 ml-3 whitespace-nowrap">Edit and View Rooms</span>                                  
                                </Link>
                                </div>
                            </li>
                            <li>
                                <div class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                <Link href="/admin-portal/MealAdd" >
                                    {/* <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd"></path></svg> */}
                                    <span class="flex-1 ml-3 whitespace-nowrap">Add Meals</span>
                                </Link>
                                </div>
                            </li>
                            <li>
                                <div class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                <Link href="/admin-portal/MealList" >
                                    {/* <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" clip-rule="evenodd"></path></svg> */}
                                    <span class="flex-1 ml-3 whitespace-nowrap">Edit and View Meals</span>
                                </Link>
                                </div>
                            </li>
                            
                            <li>
                                <div class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                <Link href="/" >
                                    {/* <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clip-rule="evenodd"></path></svg> */}
                                    <span class="flex-1 ml-3 whitespace-nowrap">Log Out</span>
                                </Link>
                                </div>
                            </li>
                        </ul>
                    </div>
                </aside>

            </div>
        </>
    )
}
