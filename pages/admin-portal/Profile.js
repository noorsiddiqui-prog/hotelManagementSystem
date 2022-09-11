import ProfileComp from "../../components/admin_hotel/ProfileComp"
import Sidebar from "../../components/admin_hotel/Sidebar"
import React from 'react'
import { useState, useEffect } from "react"
import { getSession, signIn, SignIn } from "next-auth/react"


export default function Profile() {
  const [ loading, setLoading] = useState(true)
  useEffect(() => {
    const securePage = async() => {
    const session = await getSession()
    if (!session){
      signIn()

    }else {
      setLoading(false)
    }
    }
    securePage()
  }, [])

  if (loading){
      <h2>loading ... !</h2>
  }
  return (
    
    <div className="flex">
      <Sidebar />
       <ProfileComp/>
       
       {/* <h1>Hello</h1> */}
    </div>
  )
}
