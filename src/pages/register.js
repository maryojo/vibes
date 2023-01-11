import React from 'react'
import Button from '../components/Button'
import logo from '../assets/images/logo.png'

const Register = () => {
  return (
    <div className='bg-bgImg h-screen w-screen bg-cover bg-center flex justify-center md:justify-end px-10 md:pl-0 md:pr-28 items-center'>
    <div className='bg-[#110F11] w-[30rem] h-[80vh] rounded-3xl p-8'>
    <div  className='flex flex-row w-full justify-between items-center'>
    <div>
        <img src={logo} alt="vibes logo" className='w-28 md:w-32'/>
      </div>
      <p className='font-semibold underline cursor-pointer hover:text-[#992865]'>Login</p>
    </div>

    <div className='mt-5'>
      <p className='text-lg font-semibold text-[#C27EA3]'>Register a new account</p>
      <form className='flex flex-col gap-4 pt-4 text-black font-medium'>
        <input type='text' placeholder='Your full name' className='rounded-2xl bg-gray-200 p-3'/>
        <input type='email' placeholder='Your email' className='rounded-2xl bg-gray-200 p-3'/>
        <input type='password' placeholder='Your password' className='rounded-2xl bg-gray-200 p-3'/>
        <Button text="register" style="mt-5"></Button>

      </form>
    </div>
     
    </div>
      
    </div>
  )
}

export default Register