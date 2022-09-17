
import { useRouter } from 'next/router';
import axios from 'axios';
// import { getCookie } from 'cookies-next';
// const cookie = new Cookies();
import {

    useSession
} from 'next-auth/react';
import React, { useEffect, useState } from 'react'



export default function RoomAddComp() {

    const { data: session, status } = useSession()

    const items = ['Single', 'Double', 'Triple', 'quad', 'queen']

    const [hotel, setHotel] = useState('');
    const [room, setRoom] = useState('');
    const [room_type, setRoom_type] = useState(items);
    const [beds, setBeds] = useState('');
    const [room_description, setRoom_description] = useState();
    const [is_available, setIs_available] = useState(1);

    const [room_price, setRoom_price] = useState('');
    const [room_images, setRoom_images] = useState(null);

    const Add = room_type.map(Add => Add)

    const onHotelChange = e => setHotel(e.target.value);
    const onRoomChange = e => setRoom(e.target.value);
    const onRoom_typeChange = e => setRoom_type(e.target.value);
    const onBedsChange = e => setBeds(e.target.value);
    const onRoom_descriptionChange = e => setRoom_description(e.target.value);

    const onIs_availableChange = e => setIs_available(e.target.value);
    const onRoom_priceChange = e => setRoom_price(e.target.value);
    const onRoom_imagesChange = e => setRoom_images(e.target.files[0]);


    const onSubmit = async e => {
        e.preventDefault();


        const formData = new FormData();
        formData.append('hotel', hotel);
        formData.append('room', room);
        formData.append('room_type', room_type);
        formData.append('beds', beds);
        formData.append('room_description', room_description);
        formData.append('is_available', is_available);
        formData.append('room_price', room_price);
        formData.append('room_images', room_images);


        const body = formData;
        // const token = getCookie('token');
        let token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjYzMTU5MjE4LCJpYXQiOjE2NjMxNDg0MTgsImp0aSI6IjEzZTE5OTM5ZDZiZDQ2MjQ4MzQ5ZmFhMWE5MWU1ZmY3IiwidXNlcl9pZCI6M30.L1ohRPXrKCnuGa7HyZYM0yfs-orG14bSydmP_3wNX8k'

        try {
            const res = await axios.post('http://localhost:8000/portal/room/', body, {
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
                    <label for="email" class="block mb-10 text-3xl font-medium  text-gray-100 dark:text-gray-300">Add Hotel Room</label>

                    <div class="relative z-0 mb-12 w-full group">
                        <input type="number" name="floating_phone" id="floating_price" onChange={onHotelChange} value={hotel} class="block py-2.5 px-0 w-full text-sm text-gray-100 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="" />
                        <label for="floating_number" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Hotel No</label>
                    </div>

                    <div class="relative z-0 mb-8 w-full group">

                        <label for="underline_select" class="sr-only">Underline select</label>
                        {/* <select id="underline_select" onChange={onRoom_typeChange} value={room_type} class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                        <option selected="" >Choose a Room Type</option>
                        <option value='1'>Single</option>
                        <option value="2">Double</option>
                        <option value="3">Triple</option>
                        <option value="quad">Quad</option>
                        <option value="queen">Queen</option>
                        <option value="king">King</option>
                        <option value="twin">Twin</option>
                        <option value="hollywoodTR">Hollywoord Twin Room</option>
                        <option value="d-double">Double-Double</option>
                        <option value="suite">Suite / Executive Suite</option>  
                        <option value="presidentSuite">Presidential Suite</option>
                        <option value="connectingRooms">Connecting rooms</option>

                    </select> */}

                        < select
                            onChange={onRoom_typeChange}
                            class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer" >
                            {
                                Add.map((address, key) => <option key={key} value={key}>{address}
                                </option>)
                            }
                        </select >
                    </div>

                    <div class="relative z-0 mb-8 w-full group">
                        <input type="text" name="floating_number" onChange={onRoomChange} value={room} id="floating_number" class="block py-2.5 px-0 w-full text-sm text-gray-100 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="" />
                        <label for="floating_number" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Room Number</label>
                    </div>
                    <div class="relative z-0 mb-8 w-full group">
                        <input type="number" name="floating_beds" id="floating_number" onChange={onBedsChange} value={beds} class="block py-2.5 px-0 w-full text-sm text-gray-100 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="" />
                        <label for="floating_beds" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Beds</label>
                    </div>

                    <div class="grid md:grid-cols-2 md:gap-6">
                        <div class="relative z-0 mb-12 w-full group">
                            <input type="number" name="floating_phone" id="floating_price" onChange={onRoom_priceChange} value={room_price} class="block py-2.5 px-0 w-full text-sm text-gray-100 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="" />
                            <label for="floating_number" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Price</label>
                        </div>
                        <div class="relative z-0 mb-8 w-full group">
                            <input type="boolean" name="floating_is_available" id="floating_is_available" onChange={onIs_availableChange} value={is_available} class="block py-2.5 px-0 w-full text-sm text-gray-100 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="" />
                            <label for="floating_is_available" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Available</label>
                        </div>
                    </div>

                    <div class="relative z-0 mb-6 w-full group">
                        <input type="text" onChange={onRoom_descriptionChange} value={room_description} name="floating_description" id="floating_description" class="block py-2.5 px-0 w-full text-sm text-gray-100 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="" />
                        <label for="floating_description" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Description</label>
                    </div>

                    <div class="grid md:grid-cols-2 md:gap-6">
                        <div class=" flex relative z-0 mb-8 w-full group">
                            <label class="block mt-2 text-sm w-36 font-medium text-gray-100 dark:text-gray-300" for="user_avatar">Upload file</label>
                            <input onChange={onRoom_imagesChange} class="block w-full text-sm text-gray-100 bg-gray-50  rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="multiple_files" type="file" multiple />
                        </div>

                    </div>
                    <button type="submit" class="text-white mt-20 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                </form>
            </>}
        </div>
    )
}
