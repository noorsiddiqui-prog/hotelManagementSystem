import React, { useState } from 'react'
import Image from 'next/image'
import HeaderItem from "./HeaderItem"
import { HomeIcon, SearchIcon, BadgeCheckIcon, CollectionIcon, LightningBoltIcon, UserIcon } from '@heroicons/react/solid'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';



export default function Header() {

  const [selectedDate, setSelectedDate] = useState(null)
  return (
    <>
      <header >
        {/* Header backgroundImage */}

        <div className="bg-fixed bg-cover bg-no-repeat realtive 2xl:min-w-full" style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80')",
          height: '750px', width:'100%N'
        }}
        >
          {/* Header navbar icons */}

          <HeaderItem title='Home' Icon={HomeIcon} />


          {/* search menu */}

          <div className="bg-[#475569] container flex flex-col bg-contain h-[38rem] w-80 ml-20  shadow-xl shadow-[#475569] z-50 rounded-lg" >
            <h1 className="text-center font-bold  font-mono text-2xl mt-10 p-4 text-[#fde68a]">Search and Book Hotels</h1>

            <div className="w-full max-w-xs">
              <form className="bg-transparent rounded px-8 pt-11 pb-8 mb-4">
                <div className="mb-6">
                  <label className="block text-white text-sm font-bold mb-2" htmlFor="username">
                    City
                  </label>
                  <select name="dropdown" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="city" >
                    <option defaultValue="karachi" >Karachi</option>
                    <option value="hyderabad">Hyderabad</option>
                    <option value="lahore">Lahore</option>
                  </select>
                </div>


                <div className="mb-6">
                  <div className='Header mb-6'>
                    <label className="block text-white text-sm font-bold mb-2" htmlFor="username">
                      Check-In
                    </label>
                    <DatePicker className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' selected={selectedDate} onChange={date => setSelectedDate(date)}
                      dateFormat='dd/MM/yyyy' minDate={new Date()}
                      // maxDate={new Date().setDate(30)}
                      // maxDate={new Date().add(3, "days")}
                      placeholderText="Check-In"
                    />
                  </div>

                  <div className='mb-6'>
                    <label className="block text-white text-sm font-bold mb-2" htmlFor="username">
                      Check-Out
                    </label>
                    <DatePicker className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' selected={selectedDate} onChange={date => setSelectedDate(date)}
                      dateFormat='dd/MM/yyyy' minDate={new Date()}
                      placeholderText="Check-Out"
                    />
                  </div>

                </div>

                <div className="mb-6">
                  <label className="block text-white text-sm font-bold mb-2" htmlFor="username">
                    Select Rooms
                  </label>
                  <select name="dropdown" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="Room" >
                    <option defaultValue="rooms" >Rooms</option>
                    <option value="adults">Adult</option>
                    <option value="kids">Kids</option>
                    <option value="infants">Infants</option>
                  </select>
                </div>

                <div className="grid justify-items-center">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded focus:outline-none focus:shadow-outline " type="button">
                    Book
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </header>

      <div className='container pt-20'>

        <div className='container font-sans font-medium pl-24 pr-8'>
          <h1 className='tracking-wide pb-6 text-2xl font-bold'>Advantages of Hotels Booking Online</h1>
          <div className='leading-relaxed text-justify'>It offers an extensive range of Hotels and resorts available to fit for any occasion and budget. The procedure for booking online hotels from Bookme is as simple as having a piece of cake. always advantageous and beneficial. However, you may be contemplating whether it is authentic or not. Bookme provides reliability to its customers by ensuring quality service of booking hotels online. Bookme secures the data of its users that is provided during the booking.
            You will get the following perks while booking your hotels online:</div>
          <ul className="list-disc pl-16 pt-4">
            <li>Complete details of all the hotels including the facilities you will get.</li>
            <li>Discounted rates on almost all the hotels which are on-board with us.</li>
            <li>There are a variety of hotels to choose from. In this way you can observe <br/> the pros and cons of each hotel and ultimately choose the best which suits your needs.</li>
            <li>Authentic and reliable hotel reviews are mentioned on our website.</li>
          </ul>
        </div>
        <div className='flex lg:flex-wrap pt-20 pb-20'>
          <div className='container font-sans font-medium pl-24 pr-8'>
            <h1 className='tracking-wide pb-6 text-2xl font-bold'>Book Hotels in Karachi</h1>
            <div className='leading-relaxed text-justify'>Karachi is the capital of Sindh and situated on the Arabian Sea. Karachi is home to Pakistan's two biggest seaports, the Port of Karachi and Port Bin Qasim. It has the most active and busy airport in Pakistan. To accommodate visitors and travellers, it has a range of luxurious hotels. You can choose from the following hotels to book online:</div>
            <ul className="list-disc pl-16 pt-4">
            <li>Pearl Continental Hotel</li>
            <li>Hotel Crown Inn Karachi</li>
            <li>Hotel Excelsior</li>
            <li>Seaview Guest House</li>
          </ul>
          </div>
          <div className=' container font-sans font-medium pl-24 pr-8'>
            <h1 className='tracking-wide pb-6 text-2xl font-bold'>Book Hotels in Skardu</h1>
            <div className='leading-relaxed text-justify'>Skardu is a place situated in Pakistan at the conversion of the Indus and Shigar Rivers. It has a wonderful position on the waterfront, and its stunning mountains make numerous sceneries for tourists. It has amazing hotels for accommodations of visitors. Find out best hotels as follows to book online:</div>
            <ul className="list-disc pl-16 pt-4">
            <li>Dewan e Khaas Hotel</li>
            <li>Himalaya Hotel Skardu</li>
            <li>Markhor Resort Yougo</li>
            <li>Graceland</li>
          </ul>
          </div>

        </div>
      </div>
    </>
  )
};




