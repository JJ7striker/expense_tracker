import React from 'react'
import Navbar from '@/components/Navbar'

const LandingLayout = ({ children }: {children: React.ReactNode}) => {
  return (
    <div>
      <Navbar />
        <main className='w-full min-h-screen'>
            {children}
        </main>
    </div>
  )
}

export default LandingLayout