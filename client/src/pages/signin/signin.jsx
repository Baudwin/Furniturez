import React from 'react'

export const Signin = () => {
  return (
    <div className='flex'>
        <div className='flex-1'>
        <img src="/images/couch.png" alt="" />
        </div>

        <div className='flex-1'>
        <h1>Sign In</h1>
        <p>Don't have an account yet? <span className='text-green-600'>Sign Up</span></p>

            <form action="">
            <input className=' outline-none border-b' placeholder='Your username or email address' type="text" name="" id="" />
            <div className='flex border-b'>
                <input className=' outline-none' placeholder='Password' type="text" name="" id="" />
                <span>e</span>
            </div>
            
            <div className='flex justify-between'>
                <div className='flex'>
                    <input type="checkbox" name="" id="" />
                    <span className='text-sm'>Remember me</span>
                </div>
                <p className='font-bold text-sm'>Forgot password?</p>
            </div>

            <button className='bg-black rounded text-white'>Sign In</button>
            </form>

        </div>

    </div>
  )
}
