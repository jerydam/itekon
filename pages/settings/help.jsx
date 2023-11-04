import Navbar from '@/components/nav'
import Sidebar from '@/components/sidebar'
import React from 'react'

const help = () => {
  return (
    <div className='flex'>
      <Sidebar/>
      <div className='w-full'>
      <Navbar/>
    </div>
    </div>
  )
}

export default help