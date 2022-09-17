import axios from 'axios'
import React, { useEffect, useState } from 'react'



// export const getStaticProps = async () => {
    const token="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjYzNDA5NDk2LCJpYXQiOjE2NjMzOTg2OTYsImp0aSI6ImUzZWU2NjBhYjJkYzQ4M2Y5MDhmMjZkNTQ4NjU1ZTAzIiwidXNlcl9pZCI6M30.S2-RWyJMZzW8htHOqvrqQ6IrcKuA_oJOSYNBi4P_7Ec"

//     const res = await fetch("http://127.0.0.1:8000/portal/room/", {
//         headers: {
//             // 'Accept': 'application/json',
//             // 'Content-Type': 'multipart/form-data',
//             'Authorization': `Bearer ${token}`
//         }
//     });
//     const dataFetch = await res.json();
    
//     return {
//         props:{
//             dataFetch,
//         }
//     }
// }







export default function RoomsListComp() {
    const [loading, setLoading] = useState(true);
    // const [chars, setChars] = useState([]);
    const [data, setData] = useState([])

// useEffect(() => {
//     (async () => {
//         const todos = await axios.get('http://127.0.0.1:8000/portal/room/', {
//                     headers: {
//                         // 'Accept': 'application/json',
//                         // 'Content-Type': 'multipart/form-data',
//                         'Authorization': `Bearer ${token}`
//     }})

//     const todosData = todos.data;
//     setTodos(todosData)

//     })();
// }, [])


// useEffect(() => {
//     (async () => {
//         const todos = await  axios({
//             method: "get",
//             url: 'http://127.0.0.1:8000/portal/room/list/',
//             headers: {
//               Authorization: `Bearer ${token}`,
//             },
//         }).then((response) => {
//             console.log(response.data);
//             const todosData = response.data
//             setTodos(todosData)
//           });



//     })();
// }, [])



// useEffect(() => {
//     (async () => {
//         const todos = await  axios({
//             method: "get",
//             url: 'http://127.0.0.1:8000/portal/room/list/',
//             headers: {
//               Authorization: `Bearer ${token}`,
//             },
//         }).then((response) => {
//             console.log(response.data);
//             const todosData = response.data
//             setChars(todosData)
//           });



//     })();
// }, [])

useEffect(() => {
    const fetchData = async () =>{
      setLoading(true);
      try {
        const {data: response} = await axios({
                        method: "get",
                        url: 'http://127.0.0.1:8000/portal/room/list/',
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
                <th scope="col" class="p-4">
                    <div class="flex items-center">
                        <input id="checkbox-all-search" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label for="checkbox-all-search" class="sr-only">checkbox</label>
                    </div>
                </th>
                <th scope="col" class="py-3 px-6">
                    Image
                </th>
                <th scope="col" class="py-3 px-6">
                    Room Type
                </th>
                <th scope="col" class="py-3 px-6">
                    Room Number
                </th>
                <th scope="col" class="py-3 px-6">
                    Beds
                </th>
                <th scope="col" class="py-3 px-6">
                    Price
                </th>
                <th scope="col" class="py-3 px-6">
                    Available
                </th>
                <th scope="col" class="py-3 px-6">
                    Hotel No
                </th>
                <th scope="col" class="py-3 px-6">
                    Description
                </th>
                <th scope="col" class="py-3 px-6">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
            {/* {
            dataFetch && dataFetch.map((x) => { 
                 
                 return(  */}
                
                {data && data.map((x) => {
                    <div >
                 <tr  class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="p-4 w-4">
                    <div class="flex items-center">
                        <input id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                    </div>
                </td>
                <th class=" w-4 h-4">
                    <img src={x.room_images} />
                </th>
                <td scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {x.room_type}
                </td>
                <td class="py-4 px-6">
                    {x.room}
                </td>
                <td class="py-4 px-6">
                    {x.beds}
                </td>
                <td class="py-4 px-6">
                    {x.room_price}
                </td>
                <td class="py-4 px-6">
                    {x.is_available}
                </td>
                <td class="py-4 px-6">
                    {x.hotel}
                </td>
                <td class="py-4 px-6">
                {/* <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your message..."></textarea>
                     */}
                     {x.room_description}
                </td>
                <td class="flex items-center py-4 px-6 space-x-3">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                    <a href="#" class="font-medium text-red-600 dark:text-red-500 hover:underline">Remove</a>
                </td>
            
            
            </tr>
            </div>
})}
            {/* <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="p-4 w-4">
                    <div class="flex items-center">
                        <input id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                    </div>
                </td>
                <th class=" w-4 h-4">
                    <img src="https://images.unsplash.com/photo-1606471191009-63994c53433b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bXV0dG9uJTIwY3Vycnl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" />
                </th>
                <td scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Apple MacBook Pro 17"
                </td>
                <td class="py-4 px-6">
                    Sliver
                </td>
                <td class="py-4 px-6">
                    Laptop
                </td>
                <td class="py-4 px-6">
                    Yes
                </td>
                <td class="py-4 px-6">
                    Yes
                </td>
                <td class="py-4 px-6">
                    $2999
                </td>
                <td class="py-4 px-6">
                <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your message..."></textarea>
                    
                </td>
                <td class="flex items-center py-4 px-6 space-x-3">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                    <a href="#" class="font-medium text-red-600 dark:text-red-500 hover:underline">Remove</a>
                </td>
            
            
            </tr> */}
        </tbody>
    </table>
</div>

    </div>
    
  )
  
}

