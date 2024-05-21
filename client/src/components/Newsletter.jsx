import React from 'react'
import { FiMail } from 'react-icons/fi'

export const Newsletter = () => {
  return (
    <div className='flex justify-between sm:px-10 md:py-10 sm:py-10 items-center bg-gray-100'> 
      <img className='h-80 w-96 sm:hidden md:hidden' src="/images/img-2.png" alt="" />
      
      <div className='space-y-6 flex flex-col m-auto w-1/2  sm:w-full'>
        <div className='flex space-y-4 flex-col items-center'>
          <h1 className=' font-semibold text-2xl'>Join Our Newsletter</h1>
        <p className='text-sm text-center'>Sign up for deals, new products and promotions</p>
        </div>
        <div className='flex items-center gap-2 border-b-2 p-2'>
          <FiMail/>
          <input placeholder='Email address' className='w-full bg-gray-100 outline-none' type="text" name="" id="" />
          <button className='text-gray-500'>Signup</button>
        </div>
      </div>

      {/* <div>
      <div className='flex flex-col items-center gap-2'>
          <h1 className=' font-semibold text-2xl'>Join Our Newsletter</h1>
        <p>Sign up for deals, new products and promotions</p>
        </div>
      </div> */}

      <img className='h-80 sm:hidden md:hidden w-96 object-cover' src="/images/signin-img.png" alt="" />
       
    </div>
  )
}
