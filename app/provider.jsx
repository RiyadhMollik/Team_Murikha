'use client'
import { useUser } from '@clerk/nextjs'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { UserDetailsContext } from '../context/UserDetailsContext'
function Provider({children}) {
    const {user} = useUser();
    const [userDetails, setUserDetails] = useState();
    useEffect(() => {
        if(user){
            createUser();
        }
    },[user])
    const createUser = async () => {
        const result = await axios.post("/api/user", {name: user?.fullName, email: user?.primaryEmailAddress?.emailAddress})
        console.log(result.data);
        setUserDetails(result.data);
        
    }
  return (
    <UserDetailsContext.Provider value={{userDetails, setUserDetails}}>{children}</UserDetailsContext.Provider>
  )
}

export default Provider