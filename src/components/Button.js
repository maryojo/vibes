import React from 'react'

const Button = ({text, style}) => {
  return (
    <div className={`cursor-pointer rounded-full uppercase text-center p-2 w-full bg-[#992865] font-bold text-white ${style}`}>
     {text}
    </div>
  )
}

export default Button