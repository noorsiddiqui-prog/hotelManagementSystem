import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import axios from 'axios';
// import { getCookie } from 'cookies-next';
// const cookie = new Cookies();
import {
  
<<<<<<< HEAD
  getSession,
=======
>>>>>>> 0300a23 (updated)
  useSession
} from 'next-auth/react';

export default function ProfileComp() {
  const { data: session, status } = useSession()
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [ratings ,setRatings] = useState();
  const [city ,setCity] = useState('');

  const [images, setImages] = useState(null);
  const [email ,setEmail] = useState('');
  const [username ,setUsername] = useState('');
  const [password ,setPassword] = useState('');
  const [password2 ,setPassword2] = useState('');


  const onNameChange = e => setName(e.target.value);
  const onLocationChange = e => setLocation(e.target.value);
  const onDescriptionChange = e => setDescription(e.target.value);
  const onRatingsChange = e => setRatings(e.target.value);
  const onCityChange = e => setCity(e.target.value);

  const onImagesChange = e => setImages(e.target.files[0]);
  const onEmailChange = e => setEmail(e.target.value);
  const onUsernameChange = e => setUsername(e.target.value);
  const onPasswordChange = e => setPassword(e.target.value);
  const onPassword2Change = e => setPassword2(e.target.value);
  // const onTextChange = e => setAltText(e.target.value);

    const onSubmit = async e => {
        e.preventDefault();
<<<<<<< HEAD

        const config = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'multipart/form-data',
            }
        };
=======
        
        // const config = {
        //     headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'multipart/form-data',
        //         'Authorization': `Bearer ${token}`
        //     }
        // };
>>>>>>> 0300a23 (updated)

        const formData = new FormData();
        formData.append('name', name);
        formData.append('location', location);
        formData.append('description', description);
        formData.append('ratings', ratings);
        formData.append('city', city);
        formData.append('images', images);
        formData.append('email', email);
        formData.append('username', username);
        formData.append('password', password);
        formData.append('password2', password2);

        const body = formData;
<<<<<<< HEAD
        const token = getSession('token');
        try {
            const res = await axios.post('http://localhost:8000/portal/hotelprofile/', body, config,
            {headers: {'Authorization': `Bearer ${token}`} }
=======
        // const token = getCookie('token');
        let token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjYzMTQ3MzA5LCJpYXQiOjE2NjMxMzY1MDksImp0aSI6IjQxZDllYzFlZjc1ZjRmZWU4YjFhYjgxN2MzZDA1Y2Y1IiwidXNlcl9pZCI6NX0.1mR4nRyQiVQKpSlphxL-1A0gSkj_zo8NCOn8p8kvAcQ'
        
       try {
            const res = await axios.post('http://localhost:8000/portal/hotelprofile/', body, {headers: {
              'Accept': 'application/json',
              'Content-Type': 'multipart/form-data',
              'Authorization': `Bearer ${token}`
          }}
            // {headers: {'Authorization': `Bearer ${token}`} }
>>>>>>> 0300a23 (updated)
            );

            // if (res.status === 201) {
            //     setUpdated(!updated);
            // }
        } catch(err) {

        }
    };


  // const [images, setImages] = useState(null);
  // const [updated, setUpdated] = useState(false);

  // const [characters, setCharacters] = useState([])

  // const URL = "http://127.0.0.1:8000/";

  // useEffect(() => {
  //   fetch(URL + "hotelprofile/").then(response => response.json().then(data => {
  //     setCharacters(data.results)
  //   }))
  // }, []
  // );

  // useEffect(() => {
  //   fetch(URL + "portal/hotelprofile/").then(response => response.json().then(data => {
  //     // setCharacters(data.results)
  //     console.log(data);
  //   }))
  // }, []
  // );



  const router = useRouter();

  // const [userData, setUserData] = useState({
  //   name: '',
  //   location: '',
  //   description: '',
  //   ratings: '',
  //   city: '',
  //   images: '',
  //   email: '',
  //   username: '',
  //   password:'',
  //   password2: ''
    
  // })

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     await axios.post('/api/hotelprofile', userData);
  //     // router.replace('/admin-portal/Profile');
  //     router.replace('/admin-portal/Roomadd');

  //   } catch (err) {
  //     console.log(err.response.data);
  //   }
  // }

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setUserData({...userData, [name]: value });
  // }








  return (
    
    <div className='container p-20 mb-10 bg-gray-900 w-[70%] pt-30 justify-items-center rounded-2xl'>
{session && <>
      <form onSubmit={onSubmit} action='/' method='post'>
      
      <label for="text" class="block mb-10 text-3xl font-medium  text-gray-100 dark:text-gray-300">Hotel Profile</label>

      <div class="grid md:grid-cols-2 md:gap-6">
          <div class="relative z-0 mb-6 w-full group">
            <input type="name" name="floating_name" onChange={onNameChange} value={name} id="floating_name" class="block py-2.5 px-0 w-full text-sm text-gray-100 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="" />
            <label for="floating_name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Hotel name</label>
          </div>
          <div class="relative z-0 mb-6 w-full group">
            <input type="text" name="floating_location" onChange={onLocationChange} value={location} id="floating_location" class="block py-2.5 px-0 w-full text-sm text-gray-100 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="" />
            <label for="floating_location" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Hotel Location</label>
          </div>
        </div>
        <div class="relative z-0 mb-6 w-full group">
            <input type="text"  onChange={onDescriptionChange} value={description} name="floating_description" id="floating_description" class="block py-2.5 px-0 w-full text-sm text-gray-100 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="" />
            <label for="floating_description" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Description</label>
          </div>
        <div class="grid md:grid-cols-2 md:gap-6">
          
          <div class="relative z-0 mb-6 w-full group">
            <input type="number" name="floating_ratings" value={ratings} id="floating_ratings" onChange={onRatingsChange} class="block py-2.5 px-0 w-full text-sm text-gray-100 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="" />
            <label for="floating_ratings" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Hotel Rating Stars </label>
          </div>
          <div class="relative z-0 mb-6 w-full group">
            <input type="text"  onChange={onCityChange} value={city} name="floating_city" id="floating_city" class="block py-2.5 px-0 w-full text-sm text-gray-100 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="" />
            <label for="floating_city" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">City</label>
          </div>
        </div>

        

        <div class="relative z-0 mb-6 w-full group">
          <input type="email" name="floating_email" onChange={onEmailChange} value={email} id="floating_email" class="block py-2.5 px-0 w-full text-sm text-gray-100 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="" />
          <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
        </div>
        <div class="relative z-0 mb-6 w-full group">
            <input type="text" name="floating_username" onChange={onUsernameChange} value={username} id="floating_username" class="block py-2.5 px-0 w-full text-sm text-gray-100 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="" />
            <label for="floating_username" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Username</label>
          </div>
        <div class="relative z-0 mb-6 w-full group">
          <input type="password" name="floating_password" onChange={onPasswordChange} value={password} id="floating_password" class="block py-2.5 px-0 w-full text-sm text-gray-100 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="" />
          <label for="floating_password" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
        </div>
        <div class="relative z-0 mb-6 w-full group">
          <input type="password" name="repeat_password" onChange={onPassword2Change} value={password2} id="floating_repeat_password" class="block py-2.5 px-0 w-full text-sm text-gray-100 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="" />
          <label for="floating_repeat_password" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Confirm password</label>
        </div>
        
        
        <div class="grid md:grid-cols-2 md:gap-6">
          <div class=" flex relative z-0 mb-8 w-full group">
            <label class="block mt-2 text-sm w-36 font-medium text-gray-100 dark:text-gray-300" for="user_avatar">Upload file</label>
            <input onChange={onImagesChange} class="block w-full text-sm text-gray-100 bg-gray-50  rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="multiple_files" type="file" multiple />
          </div>
          {/* <div class="relative z-0 mb-8 w-full group">
            <button onChange={e => handleChange(e)} type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Upload</button>
          </div> */}
        </div>
        <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
      </form>
    </>}
    </div>
    
  )
}
