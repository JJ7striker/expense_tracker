import React from 'react'
import SideBar from '@/components/SideBar'

export const AppLayout = ({ children }: {children: React.ReactNode}) => {
  return (
    <div className='w-full min-h-screen'>
      <SideBar />
        <main className='w-full min-h-full md:pl-64'>
            {children}
        </main>
    </div>
  )
}

export default AppLayout
