import React from 'react'
import Navbar from './Navbar'

const DefaultLayout = ({children, visibility}) => {
  return (
    <div className="flex">
      <Navbar/>
      <div className='p-7 md:p-16 md:pl-20 w-full pt-20'>
      {children}
      </div>
    </div>
  )
}

export default DefaultLayout