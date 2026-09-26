"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import { Auth } from '@/context/AuthContext'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const SideBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const pathName = usePathname();

    const { user } = Auth();

    const handleCloseClick = () => {
      setIsOpen(false);
    }

  return (
    <div className='w-full h-14 shadow-sm shadow-gray-400 px-2 flex items-center justify-between md:w-64 md:min-h-screen md:flex-col md:fixed md:top-0 md:left-0 z-50'>
            <Image src="/favicon.ico" alt='Logo' width={60} height={70} className='md:hidden' />

            <Menu onClick={() => setIsOpen(true)} className='text-blue-600 md:hidden' />

            <div className='flex flex-col items-center md:hidden'>
                <h4 className='md:hidden text-xs px-3 py-1 rounded-full bg-blue-300'>{user?.displayName[0]}</h4>
                <p className='text-xs font-medium text-gray-500'>{user?.email}</p>
            </div>


            <div className={`absolute top-0 left-0 w-full px-7 py-15 space-y-8 md:space-y-8 min-h-screen flex flex-col items-center bg-white transition-all duration-200 ease-in-out md:opacity-100 md:visible md:translate-y-0 md:relative md:w-full md:px-0 ${isOpen ? "opacity-100 visible translate-y-0" : "-translate-y-full visible opacity-0"}`}>
                <Image className='hidden md:inline-block md:absolute md:top-2 md:left-10' alt='Logo' src="/favicon.ico" width={60} height={50} />
                <X onClick={handleCloseClick} className='absolute left-5 top-3 md:hidden' />
                <Link href="/dashboard" className={`text-lg font-bold text-blue-950  ${pathName === "/dashboard" ? "text-white w-full py-2 bg-blue-600 rounded-sm text-center " : ""}`} onClick={handleCloseClick}>Dashboard</Link>
                <Link href="/transactions" className={`text-lg font-bold text-blue-950  ${pathName === "/transactions" ? "text-white w-full py-2 bg-blue-600 rounded-sm text-center " : ""}`} onClick={handleCloseClick}>Transactions</Link>
                <Link href="/reports" className={`text-lg font-bold text-blue-950  ${pathName === "/reports" ? "text-white w-full py-2 bg-blue-600 rounded-sm text-center " : ""}`} onClick={handleCloseClick}>Reports</Link>
                <Link href="/settings" className={`text-lg font-bold text-blue-950  ${pathName === "/settings" ? "text-white w-full py-2 bg-blue-600 rounded-sm text-center " : ""}`} onClick={handleCloseClick}>Settings</Link>
               
            </div>
    </div>
  )
}

export default SideBar