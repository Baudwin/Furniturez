import React from 'react'
import { FiEye, FiMail, FiMessageSquare } from 'react-icons/fi'
import { Link } from 'react-router-dom'

export const Signin = () => {
  return (
    <div className=' flex gap-3 sm:flex-col lg:items-center xl:items-center md:items-center'>
        <div className='flex-1'>
        <img className=' sm:h-[34rem] object-cover sm:w-full' src="/images/signin-img.png" alt="" />
        </div>

   
        <div className='flex-1 lg:px-10 xl:px-10 sm:px-5 md:px-10 sm:py-7 md:py-7 space-y-7'>
        <h1 className='text-3xl font-semibold'>Sign In</h1>
        <p className='text-gray-600'>Don't have an account yet? <Link to={'/signup'} className='text-green-500 font-medium'>Sign Up</Link></p>

            <form className=' space-y-7' action="">

             <div className='flex border-b items-center justify-between py-1'>
                <input className=' w-full outline-none' placeholder='Your username or email address' type="text" name="email" id="email" />
               <FiMail/>
            </div>

            <div className='flex border-b items-center justify-between py-1'>
                <input className=' w-full outline-none' placeholder='Password' type="password" name="password" id="password" />
               <FiEye/>
            </div>
            
            <div className='flex justify-between items-center'>
                <div className='flex gap-1.5 items-center'>
                    <input className='' type="checkbox" name="" id="" />
                    <span className='text-sm text-gray-600'>Remember me</span>
                </div>
                <p className='font-semibold text-sm'>Forgot password?</p>
            </div>

            <button className='bg-black w-full p-1.5 rounded text-white'>Sign In</button>
            </form>

        </div>

    </div>
  )
}
