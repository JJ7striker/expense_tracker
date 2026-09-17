"use client"
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react'
import { Button } from './ui/button';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathName = usePathname();
  const router = useRouter();

  const handleCloseClick = () => {
    setIsOpen(false);
  } 

  return (
    <header className='w-full h-14 shadow-sm shadow-gray-400 flex items-center justify-between px-3'>
      <div className='w-auto flex items-center gap-2'>
        <Image src="/favicon.ico" alt='Logo' width={80} height={60} className='md:w-25 md:h-25' />
      </div>

      <Menu onClick={() => setIsOpen(true)} className='md:hidden'  />
      <nav className={`fixed top-0 left-0 px-33 py-7 rounded-sm w-auto min-h-screen z-50 bg-white shadow-sm shadow-gray-400 flex flex-col gap-5 space-y-7 items-center transition-all ease-in-out duration-150 medium ${isOpen ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-full invisible"}`}>
        <X onClick={handleCloseClick} className='md:hidden absolute top-3 left-4 ' />
          <Link href="/" onClick={handleCloseClick} className={`${pathName === "/" ? "text-blue-600" : ""}`}>Home</Link>
          <Link href='/pricing' onClick={handleCloseClick} className={`${pathName === "/pricing" ? "text-blue-600" : ""}`}>Pricing</Link>
          <Link href='/about' onClick={handleCloseClick} className={`${pathName === "/about" ? "text-blue-600" : ""}`}>About</Link>
          <Link href="/contact" onClick={handleCloseClick} className={`${pathName === "/contact" ? "text-blue-600" : ""}`}>Contact</Link>
      </nav>

      <div className='w-auto flex items-center gap-4'>
        <Button className="bg-blue-600 hover:bg-white hover:text-black" onClick={() => router.push("/signin")}>Sign In</Button>
        <Button className="bg-blue-600 hover:bg-white hover:text-black" onClick={() => router.push("/signup")}>Sign Up</Button>
      </div>
    </header>
  )
}

export default Navbar