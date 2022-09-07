
// import axios from "axios";

// // // import { setCookie } from 'nookies'

// // // export default async (req, res) => {
// // //   const { password, identifier } = req.body;

// // //   try {
// // //     const postRes = await axios.post('http://127.0.0.1:8000/portal/api/login/', {
// // //       identifier,
// // //       password,
// // //     })

// // //     setCookie({ res }, 'jwt', postRes.data.jwt, {
// // //       httpOnly: true,
// // //       secure: process.env.NODE_ENV !== 'development',
// // //     //   maxAge: 30 * 24 * 60 * 60,
// // //       path: '/',
// // //     });

// // //     res.status(200).end();
// // //   } catch (e) {
// // //     res.status(400).send(e.response.data.message[0].messages[0]);
// // //   }
// // // }


import React, { useState } from 'react'
import { useRouter } from 'next/router';
import axios from 'axios';

export default function SignupAdmin() {

    const router = useRouter();
  const [userData, setUserData] = useState({
    username: '',
    
    password: '',
    
  })

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/login', userData);
      // router.replace('/admin-portal/Profile');
      router.replace('/admin-portal/');

    } catch (err) {
      console.log(err.response.data);
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({...userData, [name]: value });
  }



  return (
    <div>
      
      



    <div  className='container p-20 mb-10 bg-gray-900 w-[70%] pt-30 justify-items-center rounded-2xl'>

//       <form onSubmit={handleSubmit} action='/' method='post'>
//         <label for="text" class="block mb-10 text-3xl font-medium  text-gray-100 dark:text-gray-300">Hotel Profile</label>
//         <div class="grid md:grid-cols-2 md:gap-6">
//           
//           
//         </div>
//         
//         <div class="relative z-0 mb-6 w-full group">
//           <input type="text" name="floating_first_username" id="floating_username" onChange={e => handleChange(e)} class="block py-2.5 px-0 w-full text-sm text-gray-100 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="" />
//           <label for="floating_username" class="peer-focus:font-medium absolute text-lg text-white dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Username</label>
//         </div>
//         <div class="relative z-0 mb-6 w-full group">
//           <input type="password" name="floating_password" id="floating_password" onChange={e => handleChange(e)} class="block py-2.5 px-0 w-full text-sm text-gray-100 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="" />
//           <label for="floating_password" class="peer-focus:font-medium absolute text-lg text-white dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
//         </div>
//         

//         
//         
//         <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>
//       </form>

//     </div>

    </div>
  )
}








// import axios from "axios";
// import React, { useState } from "react";

// export default function Home() {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   const mainDivStyle = {
//     padding: "1em",
//   };

//   const formStyle = {
//     display: "flex",
//     flexDirection: "column",
//     maxWidth: "560px",
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const credentials = { username, password };

//     const user = await axios.post("/api/Login", credentials);

//     console.log(user);
//   };

//   const handleGetUser = async () => {
//     const user = await axios.get("/api/user");

//     console.log(user);
//   };

//   const handleLogOut = async () => {
//     const user = await axios.get("/api/auth/logout");

//     console.log(user);
//   };

//   return (
//     <div style={mainDivStyle}>
//       <form style={formStyle} onSubmit={(e) => handleSubmit(e)}>
//         <label htmlFor="username"> Username </label>
//         <input
//           type="text"
//           name="username"
//           id="username"
//           onChange={(e) => setUsername(e.target.value)}
//         />

//         <label htmlFor="password"> Password </label>
//         <input
//           type="text"
//           name="password"
//           id="password"
//           onChange={(e) => setPassword(e.target.value)}
//         />

//         <button> Log in </button>
//       </form>

//       <button onClick={() => handleGetUser()}> User </button>

//       <button onClick={() => handleLogOut()}> Logout </button>
//     </div>
//   );
// }






















// // import { useState } from 'react';
// // import { useRouter } from 'next/router';
// // import axios from 'axios';

// // const LoginAdmin = () => {
// //   const router = useRouter();
// //   const [userData, setUserData] = useState({
// //     username: '',
// //     password: '',
// //   });

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     try {
// //       await axios.post('/api/login', { ...userData });
// //       router.push('/admin-portal/profile');
// //     } catch (err) {
// //       console.log(err.response.data);
// //     }
// //   }

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setUserData({...userData, [name]: value })
// //   }

// //   return (
// //     <div>
// //       <form onSubmit={handleSubmit}>
// //         <label>
// //           Username:
// //           <input type="text" name="username" onChange={e => handleChange(e)} />
// //         </label>
// //         <br />
// //         <label>
// //           Password:
// //           <input type="password" name="password" onChange={e => handleChange(e)} />
// //         </label>
// //         <br />
// //         <button>Login</button>
// //       </form>
// //     </div>
// //   )
// // }

// // export default LoginAdmin;






























// import React from 'react'
// import axiosInstance from '../../pages/api/auth/axios'
// export default function LoginAdmin() {




//     return (
//         <div className='container'>


//             <form className='container p-10 mb-10 bg-gray-900 pt-30 w-96 justify-items-center rounded-3xl'>
//                 <div className="mb-6">
//                     <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-100 dark:text-gray-300">Your email</label>
//                     <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" onChange={handleChange} required="" />
//                 </div>
//                 <div className="mb-6">
//                     <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-100 dark:text-gray-300">Your password</label>
//                     <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={handleChange} required="" />
//                 </div>
//                 <div className="flex items-start mb-6">
//                     <div className="flex items-center h-5">
//                         <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required="" />
//                     </div>
//                     <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-100 dark:text-gray-300">Remember me</label>
//                 </div>

                
//                 <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 " onClick={handleSubmit}>Submit</button>
                
                
//                     <a href="#" aria-current="true" className="w-full px-4 py-2 mt-4 ml-20 text-white bg-blue-700 border border-gray-200 cursor-pointer rounded-xl">
//                         New User ?
//                     </a>
                    
                




//             </form>

//         </div>
//     )
// }
