"use client"

import React from 'react'
import { Button } from './ui/button'
import { Auth } from '@/context/AuthContext'

const LogOutBtn = () => {
    const { signUserOut } = Auth();
  return (
     <Button onClick={signUserOut}>Logout</Button>
  )
}

export default LogOutBtn