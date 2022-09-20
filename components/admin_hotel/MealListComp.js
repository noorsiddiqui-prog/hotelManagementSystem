
import axios from 'axios'
import React, { useEffect, useState } from 'react'



const token= "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjYzNzAzNjA0LCJpYXQiOjE2NjM2OTI4MDQsImp0aSI6ImUzY2YxZjY1OWQwMDQ3OGI5NjJkNzJkMjAyZTNjYzk4IiwidXNlcl9pZCI6M30.WWAx9hhhmq0qk4WLZWJB24byeZLMDJSJil4DSy9qGXg"
export default function MealListComp() {

    const [loading, setLoading] = useState(true);
    // const [chars, setChars] = useState([]);
    const [data, setData] = useState([])


    useEffect(() => {
        const fetchData = async () =>{
          setLoading(true);
          try {
            const {data: response} = await axios({
                            method: "get",
                            url: 'http://127.0.0.1:8000/portal/food/list/',
                            headers: {
                              Authorization: `Bearer ${token}`,
                            },
                        });
            setData(response);
            console.log(response)
          } catch (error) {
            console.error(error.message);
          }
          setLoading(false);
        }
    
        fetchData();
      }, []);

  return (
    <div>
      
<div class="overflow-x-auto relative shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="py-3 px-6">
                    Image
                </th>
                <th scope="col" class="py-3 px-6">
                    Meal Type
                </th>
                <th scope="col" class="py-3 px-6">
                    Meal Name
                </th>
                <th scope="col" class="py-3 px-6">
                    Hotel No
                </th>
                <th scope="col" class="py-3 px-6">
                    Meal per Price
                </th>
                <th scope="col" class="py-3 px-6">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
        {data.map(x => (
            <div key={x.id}>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="p-4 w-32" key={x.food_image}>
                    <img src={x.food_image} />
                </td>
                <td class="py-4 px-6 font-semibold text-gray-900 dark:text-white" key={x.food_type}>
                    {x.food_type}
                </td>
                <td class="py-4 px-6 font-semibold text-gray-900 dark:text-white" key={x.food_name}>
                    {x.food_name}
                </td>
                <td class="py-4 px-6" key={x.hotel_no}>
                    {/* <div class="flex items-center space-x-3">
                    <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your message..."></textarea>
                    </div> */}
                    {x.hotel_no}
                </td>
                <td class="py-4 px-6 font-semibold text-gray-900 dark:text-white" key={x.food_price}>
                    {x.food_price}
                </td>
                <td class="py-4 px-6">
                <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                    <a href="#" class="font-medium text-red-600 dark:text-red-500 hover:underline">Remove</a>
                </td>
            </tr>
            
            </div>
            ))}
        </tbody>
    </table>
</div>

    </div>
  )
}
