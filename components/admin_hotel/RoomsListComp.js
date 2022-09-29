import axios from 'axios'
import React, { useEffect, useState } from 'react'



// export const getStaticProps = async () => {
    const token="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjY0MzEwMTQwLCJpYXQiOjE2NjQyOTkzNDAsImp0aSI6ImNiNzAyOTJhNGI4ZTQwZjliNDE4MTc0ODNmYjA0NWVkIiwidXNlcl9pZCI6NX0.EWnFv7juYO61QlmgnY1cU1qhOKm5FcfrhO_BR3xzj9A"

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


const deleteData = (id, e) => {
    // e.preventDefault();
    axios({
        method: "delete",
        url: `http://127.0.0.1:8000/portal/room/${id}/`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
    })
    // axios.delete(`http://127.0.0.1:8000/portal/room/${id}/`)
    .then(res => {
        console.log('deleted!!', res)
    }).catch(err => console.log(err))
}


    
  return (
    <div>
      
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
{/* <div className="overflow-x-auto relative shadow-md sm:rounded-lg"> */}
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                
                <th scope="col" className="py-3 px-6">
                    Image
                </th>
                <th scope="col" className="py-3 px-6">
                    Room Type
                </th>
                <th scope="col" className="py-3 px-6">
                    Room Number
                </th>
                <th scope="col" className="py-3 px-6">
                    Beds
                </th>
                <th scope="col" className="py-3 px-6">
                    Price
                </th>
                <th scope="col" className="py-3 px-6">
                    Available
                </th>
                <th scope="col" className="py-3 px-6">
                    Hotel No
                </th>
                <th scope="col" className="py-3 px-6">
                    Description
                </th>
                <th scope="col" className="py-3 px-6">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>

        {/* <div>
    {loading && <div>Loading</div>}
    {!loading && (
      <div>
        
        {data.map(item => (<tr classNameName='bg-sky-500/50 mb-20'><td>{item.beds}</td>
        <td>{item.room}</td></tr>))}
      </div>
    )}
    </div> */}

            {/* {
            dataFetch && dataFetch.map((x) => { 
                 
                 return(  */}
                
                {data.map(x => (
                  
                 <tr  key={x.id}  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                {/* <td className="p-4 w-4">
                    <div className="flex items-center">
                        <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label for="checkbox-table-search-1" className="sr-only">checkbox</label>
                    </div>
                </td> */}
                <th className=" w-4 h-4" key={x.room_images}>
                    <img src={x.room_images} width="500" height="600"/>
                </th>
                <td scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white" key={x.room_type}>
                    {x.room_type}
                </td>
                <td className="py-4 px-6" key={x.room}>
                    {x.room}
                </td>
                <td className="py-4 px-6" key={x.beds}>
                    {x.beds}
                </td>
                <td className="py-4 px-6" key={x.room_price}>
                    {x.room_price}
                </td>
                <td className="py-4 px-6" key={x.is_available}>
                    {x.is_available }
                </td>
                <td className="py-4 px-6" key={x.hotel}>
                    {x.hotel}
                </td>
                <td className="py-4 px-6" key={x.room_description}>
                {/* <textarea id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your message..."></textarea>
                     */}
                     {x.room_description}
                </td>
                <td className="flex items-center py-4 px-6 space-x-3">
                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                    <a href="#" className="font-medium text-red-600 dark:text-red-500 hover:underline" onClick={(e) => deleteData(x.id ,e)}>Remove</a>
                </td>
            
            
            </tr>
          
))}
            {/* <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="p-4 w-4">
                    <div className="flex items-center">
                        <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label for="checkbox-table-search-1" className="sr-only">checkbox</label>
                    </div>
                </td>
                <th className=" w-4 h-4">
                    <img src="https://images.unsplash.com/photo-1606471191009-63994c53433b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bXV0dG9uJTIwY3Vycnl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" />
                </th>
                <td scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Apple MacBook Pro 17"
                </td>
                <td className="py-4 px-6">
                    Sliver
                </td>
                <td className="py-4 px-6">
                    Laptop
                </td>
                <td className="py-4 px-6">
                    Yes
                </td>
                <td className="py-4 px-6">
                    Yes
                </td>
                <td className="py-4 px-6">
                    $2999
                </td>
                <td className="py-4 px-6">
                <textarea id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your message..."></textarea>
                    
                </td>
                <td className="flex items-center py-4 px-6 space-x-3">
                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                    <a href="#" className="font-medium text-red-600 dark:text-red-500 hover:underline">Remove</a>
                </td>
            
            
            </tr> */}
        </tbody>
{/* </div> */}
    </table>

    </div>   
    
  )
  
}

