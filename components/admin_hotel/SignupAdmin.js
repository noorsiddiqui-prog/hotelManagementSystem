import React, { useState } from 'react'
import { useRouter } from 'next/router';
import axios from 'axios';

export default function SignupAdmin() {

    const router = useRouter();
  const [userData, setUserData] = useState({
    username: '',
    email: '',
    password: '',
    password2: '',
  })

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/register', userData);
      // router.replace('/admin-portal/Profile');
      router.replace('/admin-portal/Login');

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
      
      {/* <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input type="text" name="username" onChange={e => handleChange(e)} />
      </label>
      <br />
      <label>
        Email:
        <input type="text" name="email" onChange={e => handleChange(e)} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" name="password" onChange={e => handleChange(e)} />
      </label>
      <br />
      <label>
        Password2:
        <input type="password2" name="password2" onChange={e => handleChange(e)} />
      </label>
      <br/>
      <button>Register</button>
    </form> */}
  



    <div  className='container p-20 mb-10 bg-gray-900 w-[70%] pt-30 justify-items-center rounded-2xl'>

//       <form onSubmit={handleSubmit} action='/' method='post'>
//         <label for="email" class="block mb-10 text-3xl font-medium  text-gray-100 dark:text-gray-300">Hotel Profile</label>
//         <div class="grid md:grid-cols-2 md:gap-6">
//           
//           
//         </div>
//         <div class="relative z-0 mb-6 w-full group">
//           <input type="email" name="floating_email" id="floating_email" onChange={e => handleChange(e)} class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="" />
//           <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
//         </div>
//         <div class="relative z-0 mb-6 w-full group">
//           <input type="text" name="floating_first_username" id="floating_username" onChange={e => handleChange(e)} class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="" />
//           <label for="floating_username" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Username</label>
//         </div>
//         <div class="relative z-0 mb-6 w-full group">
//           <input type="password" name="floating_password" id="floating_password" onChange={e => handleChange(e)} class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="" />
//           <label for="floating_password" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
//         </div>
//         <div class="relative z-0 mb-6 w-full group">
//           <input type="password" name="repeat_password" id="floating_repeat_password" onChange={e => handleChange(e)} class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="" />
//           <label for="floating_repeat_password" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Confirm password</label>
//         </div>

//         
//         
//         <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
//       </form>

//     </div>

    </div>
  )
}

















































// import React from 'react'
// import { useForm } from 'react-hook-form'
// // import axiosInstance from '../../pages/api/auth/axios'
// // import { useHistory } from 'react'
// export default function SignupAdmin() {
//   // const {register, handleSubmit, formState: {errors}} = useForm()
//   // const onSubmit = data => console.log(data);





//   return (
//     <div className='container p-20 mb-10 bg-gray-900 w-[70%] pt-30 justify-items-center rounded-2xl'>

//       <form onSubmit={handleSubmit(onSubmit)} action='/' method='post'>
//         <label for="email" class="block mb-10 text-3xl font-medium  text-gray-100 dark:text-gray-300">Hotel Profile</label>
//         <div class="grid md:grid-cols-2 md:gap-6">
//           
//           
//         </div>
//         <div class="relative z-0 mb-6 w-full group">
//           <input type="email" name="floating_email" id="floating_email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="" />
//           <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
//         </div>
//         <div class="relative z-0 mb-6 w-full group">
//           <input type="text" name="floating_first_username" id="floating_username" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="" />
//           <label for="floating_username" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Username</label>
//         </div>
//         <div class="relative z-0 mb-6 w-full group">
//           <input type="password" name="floating_password" id="floating_password" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="" />
//           <label for="floating_password" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
//         </div>
//         <div class="relative z-0 mb-6 w-full group">
//           <input type="password" name="repeat_password" id="floating_repeat_password" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="" />
//           <label for="floating_repeat_password" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Confirm password</label>
//         </div>

//         
//         
//         <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
//       </form>

//     </div>
//   )
// }
