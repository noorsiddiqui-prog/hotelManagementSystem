import ProfileComp from "../../components/admin_hotel/ProfileComp"
import Sidebar from "../../components/admin_hotel/Sidebar"
import React from 'react'

export default function Profile() {
  return (
    <div className="flex">
      <Sidebar />
       <ProfileComp/>
       
       {/* <h1>Hello</h1> */}
    </div>
  )
}
