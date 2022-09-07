import React from 'react'
import FareDetails from "../../components/cus_hotel/FareDetails"
import HeaderItem from '../../components/cus_hotel/HeaderItem'
import Footer from '../../components/cus_hotel/Footer'

export default function Payment_Methods() {
    return (
        <>
            <HeaderItem />

            <div class="  flex columns-1 h-24 mb-10 text-white  bg-gray-900">
                <div ><h1 className="pt-5 text-3xl font-bold pl-96 ml-36">Payment Method and Fare Details</h1></div>

            </div>

            <div className='flex flex-wrap gap-20 mb-10 columns-2 pl-96'>

                <div class="p-4 w-full max-w-sm bg-white rounded-lg border shadow-md sm:p-6 dark:bg-gray-800 dark:border-gray-700">
                    <h5 class="mb-3 text-base font-semibold text-gray-900 md:text-xl dark:text-white">
                        Connect wallet
                    </h5>
                    <p class="text-sm font-normal text-gray-500 dark:text-gray-400">Connect with one of our available wallet providers or create a new one.</p>
                    <ul class="my-4 space-y-3">
                        <li>
                            <a href="#" class="flex items-center p-3 text-base font-bold text-gray-900 bg-gray-50 rounded-lg hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                                <span class="flex-1 ml-3 whitespace-nowrap">JazzCash</span>
                                <span class="inline-flex items-center justify-center px-2 py-0.5 ml-3 text-xs font-medium text-gray-500 bg-gray-200 rounded dark:bg-gray-700 dark:text-gray-400">Popular</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="flex items-center p-3 text-base font-bold text-gray-900 bg-gray-50 rounded-lg hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                                <span class="flex-1 ml-3 whitespace-nowrap">EasyPaisa</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="flex items-center p-3 text-base font-bold text-gray-900 bg-gray-50 rounded-lg hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                                <span class="flex-1 ml-3 whitespace-nowrap">Debit Card</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="flex items-center p-3 text-base font-bold text-gray-900 bg-gray-50 rounded-lg hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                                <span class="flex-1 ml-3 whitespace-nowrap">WalletConnect</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="flex items-center p-3 text-base font-bold text-gray-900 bg-gray-50 rounded-lg hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                                <span class="flex-1 ml-3 whitespace-nowrap">Fortmatic</span>
                            </a>
                        </li>
                    </ul>
                    <div>
                        <a href="#" class="inline-flex items-center text-xs font-normal text-gray-500 hover:underline dark:text-gray-400">

                            Why do I need to connect with my wallet?</a>
                    </div>
                </div>




                <div>
                    <FareDetails />
                </div>

            </div>
            <Footer />
        </>

    )
}
