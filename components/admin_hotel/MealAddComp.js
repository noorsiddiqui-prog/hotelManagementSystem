
import { useRouter } from 'next/router';
import axios from 'axios';
// import { getCookie } from 'cookies-next';
// const cookie = new Cookies();
import {

    useSession
} from 'next-auth/react';
import React, { useEffect, useState } from 'react'

export default function MealAddComp() {

    const { data: session, status } = useSession()

    // const items = ['Breakfast', 'Lunch', 'Dinner', 'Refreshment', 'Beverages', 'Desserts']

    const [food_name, setFood_name] = useState('');
    const [food_type, setFood_type] = useState('');
    const [food_price, setFood_price] = useState('');
    const [hotel_no, setHotel_no] = useState('');

    const [food_image, setFood_image] = useState(null);

    // const food = food_type.map(food => food)

    const onFood_nameChange = e => setFood_name(e.target.value);
    const onFood_typeChange = e => setFood_type(e.target.value);
    const onFood_priceChange = e => setFood_price(e.target.value);
    const onHotel_noChange = e => setHotel_no(e.target.value);

    const onFood_imageChange = e => setFood_image(e.target.files[0]);


    const onSubmit = async e => {
        e.preventDefault();


        const formData = new FormData();
        formData.append('food_name', food_name);
        formData.append('food_type', food_type);
        formData.append('food_price', food_price);
        formData.append('hotel_no', hotel_no);
        formData.append('food_image', food_image);



        const body = formData;
        // const token = getCookie('token');
        let token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjY0MzExNTAwLCJpYXQiOjE2NjQzMDA3MDAsImp0aSI6ImM2N2U2NGIxNmEzNTQ4YTliMGFhY2RkYWE2ODQ0MmU0IiwidXNlcl9pZCI6NX0.KjCJVDf-w6I2ncnhLlkXGw_TjMRu1iRDoVpLflvaCPc'

        try {
            const res = await axios.post('http://localhost:8000/portal/food/', body, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${token}`
                }
            }
                // {headers: {'Authorization': `Bearer ${token}`} }
            );

            // if (res.status === 201) {
            //     setUpdated(!updated);
            // }
        } catch (err) {

        }
    };
    const router = useRouter();






    return (
        <div className='container p-20  mt-20 mb-10 bg-gray-900 w-[70%] pt-30 justify-items-center rounded-2xl'>
            {session && <>
                <form onSubmit={onSubmit} action='/' method='post'>
                    <label for="email" class="block mb-10 text-3xl font-medium  text-gray-100 dark:text-gray-300">Add Hotel Meal</label>
                    <div class="relative z-0 mb-8 w-full group">
                        <input type="text" name="floating_meal" id="floating_number" onChange={onFood_nameChange} value={food_name} class="block py-2.5 px-0 w-full text-sm text-gray-100 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="" />
                        <label for="floating_meal" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Meal Name</label>
                    </div>



                    <div class="relative z-0 mb-8 w-full group">

                        <label for="underline_select" class="sr-only">Select Food Types</label>
                        {/* <select id="underline_select" class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                        <option selected="">Choose a Meal type</option>
                        <option value="breakfast">breakfast</option>
                        <option value="brunch">brunch</option>
                        <option value="elevenses">elevenses</option>
                        <option value="lunch">lunch</option>
                        <option value="tea">tea</option>
                        <option value="supper">supper</option>
                        <option value="dinner">dinner</option>
                        

                    </select> */}

                        {/* < select
                        onChange={onFood_typeChange}
                        class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer" >
                        {
                            food.map((address, key) => <option key={key} value={key}>{address}
                            </option>)
                        }
                    </select > */}

                        <div class="relative z-0 mb-8 w-full group">
                            <input type="text" name="floating_meal_type" id="floating_meal_type" onChange={onFood_typeChange} value={food_type} class="block py-2.5 px-0 w-full text-sm text-gray-100 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="" />
                            <label for="floating_meal_type" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Meal Type</label>
                        </div>

                    </div>


                    <div class="relative z-0 mb-8 w-full group">
                        <input type="number" name="floating_meal" id="floating_meal" onChange={onFood_priceChange} value={food_price} class="block py-2.5 px-0 w-full text-sm text-gray-100 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="" />
                        <label for="floating_meal" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Meal Price Per Person</label>
                    </div>

                    <div class="relative z-0 mb-12 w-full group">
                        <input type="number" name="floating_phone" id="floating_price" onChange={onHotel_noChange} value={hotel_no} class="block py-2.5 px-0 w-full text-sm text-gray-100 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="" />
                        <label for="floating_number" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Hotel No</label>
                    </div>



                    <div class="grid md:grid-cols-2 md:gap-6">
                        <div class=" flex relative z-0 mb-4 w-full group">
                            <label class="block mt-2 text-sm w-36 font-medium text-gray-100 dark:text-gray-300" for="user_avatar">Upload file</label>
                            <input onChange={onFood_imageChange} class="block w-full text-sm text-gray-100 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="multiple_files" type="file" multiple />
                    </div>

                    </div>
                    <button type="submit" class="text-white mt-20 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                </form>
                </>}
            </div>
    )
}
