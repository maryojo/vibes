import React from 'react'
import Navbar from './Navbar'
import MusicControl from './MusicControl'

const DefaultLayout = ({children, visibility}) => {
  return (
    <div className="flex ">
      <Navbar />
      <div className='p-16 pl-20 w-full'>
      {children}
      </div>
      {/* <MusicControl style={` ${visibility} fixed bottom-3 left-[50.5%]`} /> */}
    </div>
  )
}

export default DefaultLayout