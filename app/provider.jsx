"use client"
import { useUser } from '@clerk/nextjs';
import axios from 'axios';
import React from 'react'

function Provider({ children}) {

  const {user}=useUser();
  const CreateNewUser=()=>{
    const result=await axios.post('/api/user',{
      name:'',
      email:''
    })

  }
  return (
    <div>{children}</div>
  )
}

export default Provider

