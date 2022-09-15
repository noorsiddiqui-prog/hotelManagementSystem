import ProfileComp from "../../components/admin_hotel/ProfileComp"
import Sidebar from "../../components/admin_hotel/Sidebar"
<<<<<<< HEAD
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
=======
import React, { useState } from 'react'
import {useEffect} from 'react'
import { getSession } from "next-auth/react"

export default function Profile() {

  const [ user, setUser ] = useState(null)


  useEffect(() => {
    // console.log('loaded');
    (async () => {
      const session = await getSession()
      // console.log(session);
      setUser(session.user)
    }) ();
  }, [])


>>>>>>> 0300a23 (updated)
  return (
    
    <div className="flex">
      <h1>{JSON.stringify(user)}</h1>
      <Sidebar />
       <ProfileComp/>
       
       {/* <h1>Hello</h1> */}
    </div>
  )
}
