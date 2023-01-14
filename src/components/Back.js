import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { BsArrowLeftCircle } from 'react-icons/bs'


const Back = ({title, subtitle}) => {
  const navigate = useNavigate();

  return (
    <div className='flex flex-row  items-center gap-5'>
    <div onClick={ () =>{
      navigate(-1);
    }} className='cursor-pointer'>
      <BsArrowLeftCircle
        color='#4F4F4F'
        size={35}
      />
    </div>
    <div className='flex gap-3 justify-center items-end'>
    <p className="font-bold text-xl md:text-2xl text-white">{title}</p>
    <p className="font-thin ml-3 text-gray-500">{subtitle}</p>
    </div>

    </div>
  )
}

export default Back