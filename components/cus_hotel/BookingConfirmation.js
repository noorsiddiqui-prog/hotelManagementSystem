import Footer from './Footer';
import HeaderItem from './HeaderItem';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useState } from 'react'
// import Carousel_slide from '../../components/cus_hotel/carousel';
import { Flowbite } from 'flowbite-react';
import NextJsCarousel from './carousel';




import React from 'react'


export default function BookingConfirmation() {
    const [selectedDate, setSelectedDate] = useState(null)
    const [open, setOpen] = useState(true);
    const [values, setValues] = useState([0])
    const [radio, setRadio] = useState("five");
    // const [pjl, setPjl] = useState([])
    // const [checked, setChecked] = useState(false);

    // const getPjl = (e) => {
    //     const{value, checked} = e.target
    //     console.log(`${value} is ${checked} `)

    //     if(checked){
    //         setPjl([...pjl, value])
    //     } 
    //     else {
    //         setPjl(pjl.filter((e) => e !== value))
    //     }

    // }

    // function toggle(value){
    //     return !value;
    //   }
    
//     const [group, setGroup] = useState(['Books']);
//   const toggleGroupValue = (value) => {
//     if (group.includes(value)) group.splice(group.indexOf(value), 1);
//     else group.push(value);
//     setGroup([...group]);
//   };
// const handleClick = () => setChecked(!checked)


    return (
        <>
            <div>
                <HeaderItem />
            </div>

            {/* <Menu buttons> */}

            <div>

                <nav class="bg-[#334155] px-2 sm:px-4 py-2.5 dark:bg-gray-900 w-full z-20  left-0 border-b border-gray-200 dark:border-gray-600">
                    <div class="container flex flex-wrap justify-between items-center mx-auto">
                        <div class="flex items-center">

                        </div>
                        <div class="flex md:order-2">
                            <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Book</button>
                            <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                                <span class="sr-only">Open main menu</span>
                                <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                            </button>
                        </div>


                        <div class="hidden justify-between items-center w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                            <ul class="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border  border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-[#334155] dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                                <li>
                                    <select name="dropdown" className="w-full px-3 py-2 leading-tight text-gray-700 border shadow appearance-none rounded-2xl focus:outline-none focus:shadow-outline" id="city" >
                                        <option defaultValue="karachi" >Karachi</option>
                                        <option value="hyderabad">Hyderabad</option>
                                        <option value="lahore">Lahore</option>
                                    </select>
                                </li>
                                <li>
                                    <DatePicker className='px-3 py-2 leading-tight text-gray-700 border shadow appearance-none rounded-2xl focus:outline-none focus:shadow-outline' selected={selectedDate} onChange={date => setSelectedDate(date)}
                                        dateFormat='dd/MM/yyyy' minDate={new Date()}
                                        placeholderText="Check-In"
                                    />
                                </li>
                                <li>
                                    <DatePicker className='px-3 py-2 leading-tight text-gray-700 border shadow appearance-none rounded-2xl focus:outline-none focus:shadow-outline' selected={selectedDate} onChange={date => setSelectedDate(date)}
                                        dateFormat='dd/MM/yyyy' minDate={new Date()}
                                        placeholderText="Check-Out"
                                    />
                                </li>
                                <li>
                                    <select name="dropdown" className="shadow appearance-none border rounded-2xl  py-2 px-3 w-[16] text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="Room" >
                                        <option defaultValue="rooms" >Rooms</option>
                                        <option value="adults">Adult</option>
                                        <option value="kids">Kids</option>
                                        <option value="infants">Infants</option>
                                    </select>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>

            <div>

                {/* < filter bar>*/}

                <div class="flex flex-col md:flex-row h-screen w-screen -ml-8 ">
                    <div class="basis-[100%] md:basis-[25%]  h-[100vh] flex justify-center items-center">
                        <div className='bg-white h-[70%] w-60 ml-1 rounded-3xl abolute  flex flex-wrap '>


                            <form class="flex items-start mt-20 ml-5">
                                <label for="simple-search" class="sr-only">Search</label>
                                <div class="relative w-40">
                                    <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                        <svg aria-hidden="true" class="w-6 h-6 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                                    </div>
                                    <input type="text" id="simple-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required="" />
                                </div>
                                <button type="submit" class="p-1.5 ml-1 mt-1 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                    <span class="sr-only">Search</span>
                                </button>
                            </form>


                            <div className='w-full pl-10 item-center '>

                                <label class="block mb-2  text-xl font-bold pl-10 text-gray-900 dark:text-gray-300">Ratings</label>


                                <div class="flex items-center mr-4">
                                    <input checked={radio === "five"} id="red-checkbox" type="radio" value="five" onChange={(e) => setRadio(e.target.value)}  class="w-4 h-4 text-red-600 bg-gray-100 rounded border-gray-300 focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />

                                    <div class="flex items-center ml-2 mb-3">
                                        <svg aria-hidden="true" class="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                        <svg aria-hidden="true" class="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                        <svg aria-hidden="true" class="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                        <svg aria-hidden="true" class="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                        <svg aria-hidden="true" class="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                    </div>
                                </div>
                                <div class="flex items-center mr-4 mb-3">
                                    <input checked={radio === "four"} id="green-checkbox" type="radio" value="four" onChange={(e) => setRadio(e.target.value)} class="w-4 h-4 text-green-600 bg-gray-100 rounded border-gray-300 focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <div class="flex items-center ml-2">
                                        <svg aria-hidden="true" class="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                        <svg aria-hidden="true" class="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                        <svg aria-hidden="true" class="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                        <svg aria-hidden="true" class="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                    </div>
                                </div>
                                <div class="flex items-center mr-4 mb-3">
                                    <input checked={radio === "three"} id="purple-checkbox" type="radio" value="three" onChange={(e) => setRadio(e.target.value)} class="w-4 h-4 text-purple-600 bg-gray-100 rounded border-gray-300 focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <div class="flex items-center ml-2">
                                        <svg aria-hidden="true" class="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                        <svg aria-hidden="true" class="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                        <svg aria-hidden="true" class="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                    </div>
                                </div>
                                <div class="flex items-center mr-4 mb-3">
                                    <input checked={radio === "two"} id="teal-checkbox" type="radio" value="two" onChange={(e) => setRadio(e.target.value)} class="w-4 h-4 text-teal-600 bg-gray-100 rounded border-gray-300 focus:ring-teal-500 dark:focus:ring-teal-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <div class="flex items-center ml-2">
                                        <svg aria-hidden="true" class="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                        <svg aria-hidden="true" class="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                    </div>
                                </div>
                            </div>

                            <div className='w-56 pl-2'>
                                <label for="steps-range" class="block mb-2 text-xl font-bold pl-20 text-gray-900 dark:text-gray-300">Range </label>
                                {/* <input id="steps-range" type="range" min="0" max="5" value="2.5" step="0.5" class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" /> */}
                                <input id="steps-range" type="range" min="0" max="75" value={values} step="5" onChange={(e) => setValues(e.target.value)}  class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" />

                            </div>
                        </div>
                    </div>


                    {/* <hotels list bar>  */}

                    <div class="basis-[100%] md:basis-[80%]  h-[100vh] flex justify-center items-center pb-20 ml-10">

                        <div className='bg-white h-[100%] w-[108%]  rounded-3xl abolute  flex flex-wrap mt-20 -ml-20 scroll-smooth md:scroll-auto overflow-auto touch-auto'>
                            <div>
                                <div className="flex">
                                    <div className={` ${open ? "w-98" : "w-0 "
                                        } bg-white h-screen   pt-5 relative duration-300 flex scroll-smooth md:scroll-auto overflow-auto touch-auto`}>

                                        {/* inside collapsible */}

                                        <div className={`text-white origin-left mr-10 pr-5 font-medium text-xl duration-200 ${!open && "scale-0"
                                            }`}>

                                            <a href="#" class="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-3xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                                                <img class="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aG90ZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" />
                                                <div class="flex flex-col justify-between p-4 leading-normal">

                                                    <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Pearl Continental Hotel Karachi</h5>
                                                    <h6 class="mb-2 text-sm font-bold tracking-tight text-gray-400 dark:text-white">Karachi, Pakistan</h6>

                                                    <div class="flex items-center mr-4">
                                                        <div class="flex items-center ml-2 mb-3">
                                                            <svg aria-hidden="true" class="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                                            <svg aria-hidden="true" class="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                                            <svg aria-hidden="true" class="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                                            <svg aria-hidden="true" class="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                                            <svg aria-hidden="true" class="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                                        </div>
                                                    </div>
                                                    <p class="mb-3 text-xs text-gray-700 dark:text-gray-400">Pearl-Continental Karachi is a part of the largest chain of hotels in Pakistan, 5-star accommodation with free Wi-Fi, Contemporary lifestyle destination perfectly suited for both business and leisure travelers.</p>

                                                    <div class="text-center">

                                                        <button className="h-auto p-1 bg-blue-700 rounded-lg border-red hover:bg-blue-800 focus:ring-4 focus:ring-blue-300"> Book me</button>
                                                    </div>
                                                </div>
                                            </a>

                                            <div className=''><NextJsCarousel /></div>

                                            <div class="divide-y divide-dashed"></div>

                                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white pl-36 ">Room Types</h5>





                                            <div>

                                                <a href="#" class="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-3xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                                                    <img class="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="https://images.unsplash.com/photo-1590073242678-70ee3fc28e8e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxzZWFyY2h8OHx8aG90ZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" />
                                                    <div class="flex flex-col justify-between p-4 leading-normal">

                                                        <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Delux Twin</h5>
                                                        <p class="mb-3 text-xs text-gray-700 dark:text-gray-400">Pearl-Continental Karachi is a part of the largest chain of hotels in Pakistan, 5-star accommodation with free Wi-Fi, Contemporary lifestyle destination perfectly suited for both business and leisure travelers.</p>

                                                        <div class="text-center">

                                                            <button className="h-auto p-1 bg-blue-700 rounded-lg border-red hover:bg-blue-800 focus:ring-4 focus:ring-blue-300"> Book me</button>
                                                        </div>

                                                    </div>
                                                </a>
                                                {/* =====================<Room type-------------> */}

                                                <div className='flex mt-5 text-sm font-medium text-gray-600 mb-15'>
                                                    <div className='flex-row pr-6 text-sm font-medium text-gray-600 pl-7'>
                                                        <span className='font-bold'>Refundable: <p className='font-bold'>Free Cancellation</p></span>
                                                        {/* <span>Refundable: <p className='font-bold'>Free Cancellation</p></span>
                                                            <span>Refundable: <p className='font-bold'>Free Cancellation</p></span> */}
                                                    </div>
                                                    <div className='flex-row pr-6 text-sm font-medium text-gray-600 '>
                                                        <p className='text-sm font-bold'>PKR 78661</p>
                                                        <p className='text-sm font-medium'>1 Room - 3 Night</p>

                                                    </div>
                                                    <div className='flex-row pr-6'>
                                                        <p className='pl-3 text-sm font-bold'>Select Room</p>
                                                        <select name="dropdown" className=" font-medium shadow appearance-none border test-sm rounded-2xl  py-2 px-3 w-[8] text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="Room" >
                                                            <option defaultValue="rooms" >Rooms</option>
                                                            <option value="1">1 (PKR23456)</option>
                                                            <option value="2">2 (PKR23456)</option>
                                                            <option value="3">3 (PKR23456)</option>
                                                            <option value="4">4 (PKR23456)</option>
                                                            <option value="5">5 (PKR23456)</option>
                                                            <option value="6">6 (PKR23456)</option>
                                                            <option value="7">7 (PKR23456)</option>

                                                        </select>

                                                    </div>
                                                </div>





                                            </div>



                                            {/* <============part 2 of canvas room types================== */}



                                            <div className='mt-10'>

                                                <a href="#" class="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-3xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                                                    <img class="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGhvdGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                                                    <div class="flex flex-col justify-between p-4 leading-normal">

                                                        <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Pearl King</h5>
                                                        <p class="mb-3 text-xs text-gray-700 dark:text-gray-400">Pearl-Continental Karachi is a part of the largest chain of hotels in Pakistan, 5-star accommodation with free Wi-Fi, Contemporary lifestyle destination perfectly suited for both business and leisure travelers.</p>

                                                        <div class="text-center">

                                                            <button className="h-auto p-1 bg-blue-700 rounded-lg border-red hover:bg-blue-800 focus:ring-4 focus:ring-blue-300"> Book me</button>
                                                        </div>

                                                    </div>
                                                </a>
                                                {/* =====================<Room type-------------> */}

                                                <div className='flex mt-5 text-sm font-medium text-gray-600 mb-15'>
                                                    <div className='flex-row pr-6 text-sm font-medium text-gray-600 pl-7'>
                                                        <span className='font-bold'>Refundable: <p className='font-bold'>Free Cancellation</p></span>
                                                        {/* <span>Refundable: <p className='font-bold'>Free Cancellation</p></span>
                                                            <span>Refundable: <p className='font-bold'>Free Cancellation</p></span> */}
                                                    </div>
                                                    <div className='flex-row pr-6 text-sm font-medium text-gray-600 '>
                                                        <p className='text-sm font-bold'>PKR 78661</p>
                                                        <p className='text-sm font-medium'>1 Room - 3 Night</p>

                                                    </div>
                                                    <div className='flex-row pr-6'>
                                                        <p className='pl-3 text-sm font-bold'>Select Room</p>
                                                        <select name="dropdown" className=" font-medium shadow appearance-none border test-sm rounded-2xl  py-2 px-3 w-[8] text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="Room" >
                                                            <option defaultValue="rooms" >Rooms</option>
                                                            <option value="1">1 (PKR23456)</option>
                                                            <option value="2">2 (PKR23456)</option>
                                                            <option value="3">3 (PKR23456)</option>
                                                            <option value="4">4 (PKR23456)</option>
                                                            <option value="5">5 (PKR23456)</option>
                                                            <option value="6">6 (PKR23456)</option>
                                                            <option value="7">7 (PKR23456)</option>

                                                        </select>

                                                    </div>
                                                </div>





                                            </div>









                                        </div>
                                    </div>
                                </div>
                            </div>





                            {/* <hotel list ----- not collapsible> */}

                            <div className='mt-5'>

                                <a href="#" class="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-3xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                                    <img class="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aG90ZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" />
                                    <div class="flex flex-col justify-between p-4 leading-normal">

                                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Pearl Continental Hotel Karachi</h5>

                                        <div className='flex'>
                                            <h6 class="mb-2 text-sm mt-1 font-bold tracking-tight text-gray-400 dark:text-white">Karachi, Pakistan</h6>



                                            <div class="flex items-center mr-4">
                                                <div class="flex items-center ml-2 mb-3">
                                                    <svg aria-hidden="true" class="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                                    <svg aria-hidden="true" class="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                                    <svg aria-hidden="true" class="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                                    <svg aria-hidden="true" class="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                                    <svg aria-hidden="true" class="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                                </div>
                                            </div>
                                        </div>

                                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Pearl-Continental Karachi is a part of the largest chain of hotels in Pakistan, 5-star accommodation with free Wi-Fi, Contemporary lifestyle destination perfectly suited for both business and leisure travelers.</p>


                                        <div class="text-center">

                                            <button className={` cursor-pointer -right-5 top-9 w-24 p-2 h-auto border-red  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg
                                            border-2   ${!open && "rotate-360"}`}
                                                onClick={() => setOpen(!open)}>Click Me</button>


                                        </div>
                                    </div>
                                </a>

                            </div>

                        </div>
                    </div>


                    {/* offcanvas */}


                </div>
            </div>



        </>
    )
}
