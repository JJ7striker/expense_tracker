"use client"

import React, { useContext, useEffect, useState } from 'react'
import { createContext } from 'react'
import { User, onAuthStateChanged, signOut, signInWithPopup } from 'firebase/auth';
import { auth } from '@/lib/firebase/firebase';
import { useRouter } from 'next/navigation';
import { provider } from '@/lib/firebase/firebase';

const AuthContext = createContext(null);

const AuthContextProvider = ({ children }: {children: React.ReactNode}) => {
    const [user, setUser] = useState(null);
    const router = useRouter();

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser(null)
            }
        })
        return () => unsubscribed()
    }, [])

    const signUserOut = async () => {
        try {
            await signOut(auth);
        } catch(err) {
            console.log("Error logging out", err)
        }
        router.push("/")
    }

    const googleAuth = async () => {
        try {
            const userInfo = await signInWithPopup(auth, provider);
            if (userInfo.user) {
                router.push("/dashboard");
            } else {
                router.push("/");
            }
        } catch(err) {
            console.log("Error logging out", err)
        }
    }

  return (
    <AuthContext.Provider value={{user, signUserOut, googleAuth}}>{children}</AuthContext.Provider>
  )
}

export default AuthContextProvider

export const Auth = () => {
    return useContext(AuthContext);
}
