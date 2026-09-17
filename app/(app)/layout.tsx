import React from 'react'

export const AppLayout = ({ children }: {children: React.ReactNode}) => {
  return (
    <div className='w-full'>
        <main className='w-full min-h-screen'>
            {children}
        </main>
    </div>
  )
}

export default AppLayout
