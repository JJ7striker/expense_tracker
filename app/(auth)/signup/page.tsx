"use client"

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { auth } from '@/lib/firebase/firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { useRouter } from 'next/navigation'
import { Auth } from '@/context/AuthContext'

const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    const { googleAuth } = Auth();

    const signUserUp = async (e) => {
        e.preventDefault()
        try {
            await createUserWithEmailAndPassword(auth, email, password);
        }catch(err) {
            console.log("Error authenticating user ", err)
        }
    }


  return (
    <div className='flex items-center justify-center'>
        <div className='w-10/12 max-w-lg px-6 py-3 shadow-sm mt-9 shadow-gray-500'>
            <h2 className='text-2xl text-center'>Sign Up</h2>
            <Button className="w-full md:w-3/5 text-sm md:text-lg mx-auto block mt-5 hover:bg-white hover:text-black" onClick={googleAuth}>Sign In With Google</Button>

            <form className='w-full flex flex-col items-center justify-center py-8 md:px-10 gap-5' onSubmit={signUserUp}>
                <div className='flex flex-col items-start gap-2 w-full'>
                    <label htmlFor="email">Email:</label>
                    <input type="email" className='w-full h-8 shadow-sm shadow-gray-600 px-4 py-2 outline-0 border-0' placeholder='Enter your email...' onChange={(e) => setEmail(e.target.value)} value={email} />
                </div>

                <div className='flex flex-col items-start gap-2 w-full'>
                    <label htmlFor="password">Password:</label>
                    <input type="password" className='w-full h-8 shadow-sm shadow-gray-600 px-4 py-2 outline-0 border-0' placeholder='Enter your password...' onChange={(e) => setPassword(e.target.value)} value={password} />
                </div>

                <Button className="text-xl block mx-auto w-4/5 bg-blue-600 hover:bg-white hover:text-black" type='submit'>Sign Up</Button>
                 <Link href="/signin" className='text-blue-500'>Dont have an account? Sign Up</Link>
            </form>
        </div>
    </div>
  )
}

export default SignUp