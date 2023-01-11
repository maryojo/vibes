import React from 'react'
import Navbar from './Navbar'

const DefaultLayout = ({children, visibility}) => {
  return (
    <div className="flex ">
      <Navbar />
      <div className='p-16 pl-20 w-full'>
      {children}
      </div>
    </div>
  )
}

export default DefaultLayout